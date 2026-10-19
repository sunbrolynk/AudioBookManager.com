#!/usr/bin/env python3
"""Announce a published locale's correction PR in the translation forum."""

import json
import os
import re
import sys
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlsplit
from urllib.request import (
    HTTPRedirectHandler,
    Request,
    build_opener,
)


class NoRedirects(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


opener = build_opener(NoRedirects())


def request_json(url, *, token=None, data=None):
    headers = {
        "Accept": "application/json",
        "User-Agent": "ABM-Translation-Reviews",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
        headers["X-GitHub-Api-Version"] = "2022-11-28"
    body = None
    if data is not None:
        headers["Content-Type"] = "application/json"
        body = json.dumps(data).encode("utf-8")
    request = Request(url, data=body, headers=headers)
    try:
        with opener.open(request, timeout=30) as response:
            return json.load(response)
    except HTTPError as error:
        raise RuntimeError(f"API request failed with HTTP {error.code}") from None
    except (URLError, TimeoutError):
        raise RuntimeError("API request failed or timed out") from None


# English names for the Discord post. The branch name is the only thing taken from the PR, and only
# a code listed here is posted, so nothing the PR contains is ever read or run.
LANGUAGES = {
    "cs": "Czech",
    "da": "Danish",
    "de": "German",
    "en-au": "English (Australia)",
    "en-ca": "English (Canada)",
    "en-gb": "English (UK)",
    "es": "Spanish",
    "fi": "Finnish",
    "fr": "French",
    "it": "Italian",
    "ja": "Japanese",
    "ko": "Korean",
    "nb": "Norwegian Bokmål",
    "nl": "Dutch",
    "pl": "Polish",
    "pt-br": "Portuguese (Brazil)",
    "sv": "Swedish",
    "uk": "Ukrainian",
    "zh-cn": "Chinese (Simplified)",
    "zh-tw": "Chinese (Traditional, Taiwan)",
}


def language_for(branch):
    """The (code, English name) a review branch is for, or None for any other branch."""
    match = re.fullmatch(r"translation/([a-z]{2}(?:-[a-z]{2})?)", branch)
    if not match or match.group(1) not in LANGUAGES:
        return None
    return match.group(1), LANGUAGES[match.group(1)]


def main():
    event = json.loads(
        Path(os.environ["GITHUB_EVENT_PATH"]).read_text(encoding="utf-8")
    )
    pr = event["pull_request"]
    repo = os.environ["GITHUB_REPOSITORY"]
    branch = pr["head"]["ref"]

    if (
        event.get("action") != "opened"
        or pr["state"] != "open"
        or pr["base"]["ref"] != "main"
        or pr["head"]["repo"]["full_name"] != repo
    ):
        print("Not an eligible correction PR; nothing posted.")
        return

    language = language_for(branch)
    if not language:
        print("Not a language review branch; nothing posted.")
        return

    code, label = language
    display_code = "UA" if code == "uk" else code.upper()
    number = int(pr["number"])
    pr_url = f"https://github.com/{repo}/pull/{number}"
    marker = f"<!-- abm-translation-discord:pr-{number} -->"
    comments_url = f"https://api.github.com/repos/{repo}/issues/{number}/comments"
    token = os.environ["GH_TOKEN"]

    page = 1
    while True:
        comments = request_json(
            f"{comments_url}?per_page=100&page={page}", token=token
        )
        for comment in comments:
            if (
                comment.get("user", {}).get("login") == "github-actions[bot]"
                and marker in (comment.get("body") or "")
            ):
                print("Announcement already recorded; nothing posted.")
                return
        if len(comments) < 100:
            break
        page += 1

    webhook = os.environ.get("DISCORD_TRANSLATION_WEBHOOK_URL", "").strip()
    parsed = urlsplit(webhook)
    if (
        parsed.scheme != "https"
        or parsed.netloc != "discord.com"
        or parsed.query
        or parsed.fragment
        or not re.fullmatch(r"/api/webhooks/\d+/[A-Za-z0-9._-]+", parsed.path)
    ):
        raise RuntimeError("Webhook secret must contain the original Discord webhook URL")

    forum_id = os.environ["DISCORD_FORUM_CHANNEL_ID"]
    tags = os.environ["DISCORD_REVIEW_TAG_IDS"].split(",")
    if not forum_id.isdigit() or not all(tag.isdigit() for tag in tags):
        raise RuntimeError("Forum and tag IDs must be numeric")

    metadata = request_json(webhook)
    if str(metadata.get("channel_id")) != forum_id:
        raise RuntimeError("Webhook belongs to a different channel")
    guild_id = str(metadata.get("guild_id", ""))
    if not guild_id.isdigit():
        raise RuntimeError("Webhook response has no valid server ID")

    payload = {
        "thread_name": f"{label} ({display_code}): translation review #{number}"[:100],
        "applied_tags": tags,
        "allowed_mentions": {"parse": []},
        "content": (
            f"**{label} ({display_code}): community translation review**\n\n"
            "Corrections from native speakers are welcome.\n\n"
            f"**PR:** {pr_url}\n\n"
            "Comment on the PR, or on the language's translation review issue, "
            "with the page link, the current wording and your fix, or attach the "
            "corrected file. To edit it yourself, press the pencil on the file in "
            "GitHub and open a pull request into `main`. How it all works: "
            f"https://github.com/{repo}/blob/main/TRANSLATING.md\n\n"
            "Release notes stay in English. Keep credentials and anything from "
            "your own setup out of what you post."
        ),
    }

    try:
        message = request_json(webhook + "?wait=true", data=payload)
    except RuntimeError:
        raise RuntimeError(
            "Discord request failed. Delivery may be uncertain: inspect the forum "
            "before rerunning to avoid a duplicate."
        ) from None

    thread_id = str(message.get("channel_id", ""))
    if not thread_id.isdigit() or thread_id == forum_id:
        raise RuntimeError(
            "Discord responded, but no valid thread ID was returned. "
            "Inspect the forum before rerunning."
        )

    forum_url = f"https://discord.com/channels/{guild_id}/{thread_id}"
    try:
        request_json(
            comments_url,
            token=token,
            data={"body": f"{marker}\nDiscord community discussion: {forum_url}"},
        )
    except RuntimeError:
        print(f"Discord post created: {forum_url}", file=sys.stderr)
        raise RuntimeError(
            "Could not record the post on GitHub. Do not rerun until the "
            "existing post has been reconciled."
        ) from None

    print(f"Created Discord review post: {forum_url}")


if __name__ == "__main__":
    try:
        main()
    except (RuntimeError, KeyError, ValueError, OSError) as error:
        # Never print request URLs, response bodies, or credentials.
        message = str(error) if isinstance(error, RuntimeError) else type(error).__name__
        print(f"Translation announcement failed: {message}", file=sys.stderr)
        sys.exit(1)
