# Contributing

## Translation corrections

Language-specific review PRs are being prepared. Once available, follow the
link for your language from Discord.

You can contribute without cloning or forking the repository:

- Comment on the language PR with the page, original text, and correction.
- Use the PR's Files changed tab to suggest a replacement for specific lines.
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
