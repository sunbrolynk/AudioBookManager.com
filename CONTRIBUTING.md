# Contributing

## Translation corrections

Languages are published once every page and UI string has been translated.
Complete AI translations qualify; human review is not required for publication.
Incomplete languages remain in private preparation.

After publication, language-specific correction PRs collect community feedback.
Follow the current PR link for your language from Discord. See
[the translation workflow](translations/README.md) for details.

You can contribute without cloning or forking the repository:

- Comment on the language PR with the page, original text, and correction.
- Use the PR's Files changed tab to suggest replacements for lines in its diff.
  For unchanged files, use comments or attachments.
- Attach corrected files, or a ZIP containing only the files you changed,
  to a PR comment. Keep the original filenames and folder structure.

Attachments do not automatically change the repository. A maintainer reviews
and applies accepted corrections to the language branch.

Preserve placeholders such as `{mail}`, links, frontmatter keys, code examples,
and formatting syntax unless your correction specifically concerns them.
Do not include credentials, personal configuration, or unrelated files.

For larger contributions, you may fork the repository and open a PR targeting
the relevant language branch. Include only changes for that language.

After a language PR is merged, further corrections need a new PR.
Discord links will be updated for subsequent review rounds.

## Website changes

Use a branch and submit a pull request. Explain the problem, the change,
and how you verified it.

Read the README for local setup and pre-push hook installation.
Run the build and link checker before requesting review.

## Dependency updates

Review each dependency-update PR separately. Check:

- The upstream release notes and source changes.
- New or changed transitive dependencies and lockfile integrity entries.
- Installation scripts, downloaded executables, and unexpected network,
  environment-variable, credential, or filesystem access.
- Changes to workflow permissions, actions, or container images.

Review unfamiliar code before executing it. Test suspicious changes only in
an isolated environment without personal credentials or sensitive mounts.

Keep exact dependency versions, lockfile integrity hashes, full commit pins
for GitHub Actions, and digest pins for container images.

Record review findings and validation results in the PR. Passing tests,
vulnerability audits, and secret scans do not prove a dependency is harmless.
Updates require a manual merge.

## Repository settings

Checks only protect `main` when GitHub enforces them. Branch protection and
rulesets need a public repository or GitHub Pro, so set these as soon as the
repository goes public:

- A ruleset on `main`: require a pull request, require the `Site validation`
  check to pass and the branch to be up to date, block force pushes and
  deletion, and require linear history.
- The same ruleset on `translation/**`, without the linear history rule, since
  `main` is merged into those branches.
- Actions: allow only GitHub-owned actions and actions pinned to a full commit
  SHA, keep the default workflow token read-only, and require approval before
  running workflows from first-time outside contributors.
- Security: turn on secret scanning with push protection, private
  vulnerability reporting, and Dependabot alerts.
