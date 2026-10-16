# Translation workflow

This directory holds review records and workflow instructions.
Live website translations are stored in `src/`.

## Publication requirement

A language is ready to publish when every documentation page, landing-page
string, navigation label, and footer label has been translated.

Complete AI translations qualify for publication. Human translation review
is encouraged but is not required before going live.

English fallback text does not count as a completed translation, except for
intentional unchanged content such as product names and code examples.

Incomplete languages remain in private preparation. Do not enable them on
the website or create their public language-review branches and PRs.

## Live translation files

For a language code such as `de`:

- `src/content/docs/de/`: documentation.
- `src/pages/de/index.astro`: landing-page route.
- `src/landing-strings.json`: entry keyed by `de`.
- `src/ui-strings.json`: entry keyed by `de`.
- `src/locales.json`: locale registration.
- `src/sidebar-labels.json`: labels keyed by the locale's BCP-47 language tag.

Preserve placeholders, code examples, links, and document structure.

## Initial publication

Once the complete translation is prepared:

1. Create a language publication branch from current main.
2. Add the complete translation and locale registration.
3. Validate completeness, build output, links, and security checks.
4. Open and merge its publication PR after technical review.
5. Deploy main to make the language live.

Passing structural checks does not prove translation accuracy. Human
corrections can follow publication.

## Ongoing community corrections

After initial publication, create a separate `translation/<code>` correction
branch and draft PR targeting main. Link that PR from Discord.

Start the PR with a useful review record at `translations/<code>.md` if there
are no text corrections yet. GitHub requires a difference to open a PR.

Community members may:
- Comment with the page, original wording, and proposed correction.
- Attach corrected files or a ZIP containing only changed files.
- Suggest edits to lines already included in the PR diff.
- Submit a separate PR targeting the correction branch.

An unchanged translated file is not included in the correction PR's diff.
Use comments or attachments for corrections to those files.

Maintainers review and apply accepted corrections to the branch. Merge
ready batches to publish improvements; the existing translation stays live.

After merging, create a new correction branch and PR when there is a new
change or review record, and update the Discord link.

## Keeping branches current

Merge main into correction branches when needed. Preserve other languages'
entries when resolving shared JSON conflicts. Do not rebase shared branches.

## Migration additions

Before publishing the existing translations, translate:
- Four new community strings in the landing page.
- Two changed donation-button labels.
- Nineteen new footer labels.
- The new API Reference placeholder page.
