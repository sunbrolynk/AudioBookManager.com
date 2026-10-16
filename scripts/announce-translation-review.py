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

    match = re.fullmatch(r"translation/([a-z]{2,3}(?:-[a-z0-9]+)*)", branch)
    if not match or branch.startswith("translation/publish-"):
        print("Not a language correction branch; nothing posted.")
        return

    code = match.group(1)
    locales = json.loads(Path("src/locales.json").read_text(encoding="utf-8"))
    if code not in locales:
        raise RuntimeError("Locale is not published in the trusted base commit")

    label = locales[code]["label"]
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
        "thread_name": f"{label} ({code}) — translation review #{number}"[:100],
        "applied_tags": tags,
        "allowed_mentions": {"parse": []},
        "content": (
            f"**{label} ({code}) — community translation review**\n\n"
            "This locale's complete translation has been merged into the website's "
            "main branch. Community corrections are welcome.\n\n"
            f"**Review PR:** {pr_url}\n\n"
            "On the PR, include the page URL or file path, current wording, and "
            "your suggested replacement. You can also attach corrected files "
            "or a ZIP preserving filenames and folder structure.\n\n"
            "Inline suggestions work on lines included in the PR diff. "
            "For other text, use comments or attachments.\n\n"
            "Release notes intentionally remain in English. "
            "Please keep credentials and personal configuration out of submissions."
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
