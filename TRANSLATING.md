# Translating audiobookmanager.com

The site is translated one whole language at a time. A language only appears in
the language menu once every page, landing string, sidebar label and footer
label is translated. `scripts/check-locales.mjs` fails the build otherwise.
Complete machine translations count; corrections from native speakers come
after.

Release notes stay in English in every language.

## How a language goes live

1. **Publish.** The complete translation reaches `main` and goes live. Its entry
   in `src/locales.json` carries `"reviewed": false` and `"issue"`, the number of
   its review issue. While `reviewed` is false, every page in that language shows
   a small "awaiting community review" line that links to the issue.
2. **Review PR.** Each language then gets a `translation/<code>` branch with one
   change, `"reviewed": true` for that language, and a draft PR into `main`
   titled "<Language>: community translation review". The PR stays open while
   people check the language. Fixes are pushed to the branch, so they show up in
   the PR as they come in.
3. **Discord post.** Opening the review PR runs
   `.github/workflows/translation-review-discord.yml`. If the language's issue
   already links a Discord thread, it posts the new PR in that thread; otherwise
   it starts a thread in the translation-review forum. Either way it comments
   the thread link back on the PR.
4. **Issue.** The language's "<Language>: translation review" issue, labelled
   `translation`, stays open for good. It links the current review PR and the
   Discord thread, so it's the link to share.
5. **Reviewed.** Once a native speaker confirms the language, I merge its review
   PR with a merge commit. That brings in the fixes and flips `reviewed` to
   true, which takes the line off its pages. A later review round gets a fresh
   `translation/<code>` branch and PR.

### What the Discord workflow can and can't do

- It runs on `pull_request_target`, but it checks out the trusted base commit,
  never the PR's code, and only for branches in this repository named
  `translation/<code>` (not `translation/publish-*`).
- The webhook URL lives only in the `DISCORD_TRANSLATION_WEBHOOK_URL` Actions
  secret. It has never been in the repository's history. The script refuses
  any URL that isn't a `discord.com/api/webhooks/` address, checks the webhook
  belongs to the forum channel, and never prints it.
- The workflow token has no permissions by default. The one job gets
  `contents: read`, `issues: read` to find the language's thread, and
  `pull-requests: write` to comment the thread link on the PR.
- It only reuses a thread named in an issue opened by the repository owner,
  and only one on this Discord server. The issue number comes from the trusted
  base commit, never from the PR.
- A fork's PR never triggers it, so outside contributors can't post to Discord
  through it.

## Fixing a translation

Every live language has an open review PR, "<Language>: community translation
review". The language's issue and Discord thread link to it, and so does the
line at the top of each page. You don't need to clone anything.

### Comment on the review PR

Leave a comment with:

- the page link or file path,
- the current wording,
- your suggested wording.

You can also attach the corrected file, or a ZIP of only the files you changed
with their folder structure kept, and I'll put it on the branch. Suggestions
with GitHub's **Suggest changes** button work on any line the PR already
changes, and most translated text isn't in the diff, so a plain comment is
usually the way.

### Edit the file and open your own PR

1. Find the file on GitHub. Pages are under `src/content/docs/<code>/`. Landing
   text is in `src/landing-strings.json`, and menu and footer text is in
   `src/ui-strings.json`, both under your language's code.
2. Press the pencil icon. GitHub makes a fork for you.
3. Make your changes and choose **Propose changes**.
4. Set the base branch to `translation/<code>` instead of `main`, then open the
   pull request. Once I merge it, your fix is part of the review PR.

The site checks (build, languages, links, overflow, security) run on your PR.
Change only your language. Keep placeholders such as `{mail}` and `{name}`,
links, frontmatter keys, code, and Markdown or HTML formatting as they are.
Translated strings may only use `<b>`, `<em>`, `<code>` and `<br />`. Never paste
credentials or anything from your own setup.

### Comment on the issue

If you'd rather not touch the PR, comment on the language's issue the same way.

### Email

If GitHub isn't your thing, send corrections to
[translate@audiobookmanager.com](mailto:translate@audiobookmanager.com).

## Discord Translator role

Anyone with a translation PR merged here gets the **Translator** role on the
[ABM Discord](https://discord.gg/qeJRrM6AZ). Once one of yours is merged, open
the server name menu → **Linked Roles** → **Translator** and link your GitHub
account. It counts your merged PRs that carry the `translation` label or change a
language's pages, gives you the role at one or more, and lets go of the GitHub
sign-in as soon as it has counted. A PR merged into a `translation/<code>`
review branch counts too.

Corrections sent by comment or email get applied by me, so they don't show up
under your account. Say so on the review PR and I'll sort the role out.

## Adding a new language

Ask on Discord or by email first, so two people don't translate the same
language. A new language needs:

- `src/content/docs/<code>/`: every page.
- `src/pages/<code>/index.astro`: the landing route.
- `src/landing-strings.json` and `src/ui-strings.json`: an entry for `<code>`.
  Non-English languages also need a `translatorNote` containing `{mail}`.
- `src/sidebar-labels.json`: labels under the language's BCP-47 tag.
- `src/locales.json`: the registration, last, once everything else is done,
  with `"reviewed": false` and `"issue"` set to its review issue's number.
- `src/locale-names.json`: its name in each published language.
- `scripts/announce-translation-review.py`: its English name in `LANGUAGES`, or
  its review PR won't be posted to Discord.

`npm run build` tells you what's missing.

## Branch rules

`main` only takes pull requests, and each one needs the `Site validation` check
to pass. The `translation/<code>` branches aren't protected, so anyone can open
a PR into them and accepted fixes can be pushed straight to them. A review PR
is merged into `main` with a merge commit, not squashed, so it shows as merged.

## Keeping a review branch current

Merge `main` into `translation/<code>` when it falls behind. Keep the other
languages' entries when a shared JSON file conflicts. Don't rebase a branch that
already has a PR open, since other people may have commented on its commits.
