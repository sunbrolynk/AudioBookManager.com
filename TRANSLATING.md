# Translating audiobookmanager.com

The site is translated one whole language at a time. A language only appears in
the language menu once every page, landing string, sidebar label and footer
label is translated. `scripts/check-locales.mjs` fails the build otherwise.
Complete machine translations count; corrections from native speakers come
after.

Release notes stay in English in every language.

## How a language goes live

1. **Publish PR.** The complete translation goes on a `translation/publish-<code>`
   branch (for example `translation/publish-de`) and a PR into `main`. It merges
   once the required `Site validation` check passes (build, languages, links,
   security). Deploying `main` puts
   the language live.
2. **Review PR.** Straight after, a `translation/<code>` branch (for example
   `translation/de`) gets a draft PR into `main` titled
   "<Language>: community translation corrections". It starts with a review
   record at `translations/<code>.md`, since GitHub needs a change to open a PR.
   This PR is where corrections collect.
3. **Discord post.** Opening the review PR runs
   `.github/workflows/translation-review-discord.yml`. It posts a thread in the
   translation-review forum on Discord, tagged for review, with a link to the PR,
   then comments the thread link back on the PR.
4. **Issue.** The language also gets a GitHub issue labelled `translation`,
   linked from the Discord thread. Review PRs are merged and replaced in
   batches; the issue stays put, so it's the link to share.
5. **Batches.** I apply accepted corrections to the review branch and merge it
   when a batch is ready. The live translation stays up the whole time. The next
   round gets a new review PR, which posts a new Discord thread by itself.

### What the Discord workflow can and can't do

- It runs on `pull_request_target`, but it checks out the trusted base commit,
  never the PR's code, and only for branches in this repository named
  `translation/<code>` (not `translation/publish-*`).
- The webhook URL lives only in the `DISCORD_TRANSLATION_WEBHOOK_URL` Actions
  secret. It has never been in the repository's history. The script refuses
  any URL that isn't a `discord.com/api/webhooks/` address, checks the webhook
  belongs to the forum channel, and never prints it.
- The workflow token has no permissions by default. The one job gets
  `contents: read` and `pull-requests: write`, which it needs to comment the
  thread link on the PR.
- A fork's PR never triggers it, so outside contributors can't post to Discord
  through it.

## Fixing a translation

You don't need to clone anything. Pick whichever suits you.

### Comment on the review PR

Open the review PR for your language (the Discord thread and the issue link to
it) and leave a comment with:

- the page link or file path,
- the current wording,
- your suggested wording.

Suggestions with GitHub's "Suggest changes" button only work on lines the PR
already changes. Most translated text isn't in the diff yet, so a plain comment
is usually the way. You can also attach the corrected file, or a ZIP of only the
files you changed with their folder structure kept.

### Edit the file and open your own PR

1. Find the file on GitHub. Pages are under `src/content/docs/<code>/`. Landing
   text is in `src/landing-strings.json`, and menu and footer text is in
   `src/ui-strings.json`, both under your language's code.
2. Press the pencil icon. GitHub makes a fork for you.
3. Make your changes and choose **Propose changes**.
4. On the next screen, set the base branch to `translation/<code>` instead of
   `main`, then open the pull request.

The site checks (build, languages, links, security) run on your PR. Change only
your language. Keep placeholders such as `{mail}` and `{name}`, links,
frontmatter keys, code, and Markdown or HTML formatting as they are. Never paste
credentials or anything from your own setup.

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
under your account. Say so in the review thread and I'll sort the role out.

## Adding a new language

Ask on Discord or by email first, so two people don't translate the same
language. A new language needs:

- `src/content/docs/<code>/`: every page.
- `src/pages/<code>/index.astro`: the landing route.
- `src/landing-strings.json` and `src/ui-strings.json`: an entry for `<code>`.
  Non-English languages also need a `translatorNote` containing `{mail}`.
- `src/sidebar-labels.json`: labels under the language's BCP-47 tag.
- `src/locales.json`: the registration, last, once everything else is done.
- `src/locale-names.json`: its name in each published language.
- `scripts/announce-translation-review.py`: its English name in `LANGUAGES`, or
  its review PR won't be posted to Discord.

`npm run build` tells you what's missing.

## Branch rules

`main` only takes pull requests, and each one needs the `Site validation` check
to pass. The `translation/<code>` branches aren't protected, so anyone can open
a PR into them and accepted corrections can be pushed straight to them. A batch
still reaches `main` only through its review PR, which is squash-merged once
`Site validation` passes.

## Keeping a review branch current

Merge `main` into `translation/<code>` when it falls behind. Keep the other
languages' entries when a shared JSON file conflicts. Don't rebase a review
branch, since other people's PRs target it.
