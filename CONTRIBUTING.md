# Contributing

## Translation corrections

Languages are published once every page and UI string has been translated.
Complete AI translations qualify; human review is not required for publication.
Incomplete languages remain in private preparation.
Release notes intentionally remain in English across all locales.

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
Run the regression tests, production build, and link checker before
requesting review:

```sh
npm test
npm run build
node scripts/check-links.mjs
```

Add regression tests for bug fixes and changes to validation or security
behavior. Cover both expected inputs and rejected inputs. Reuse shared
components and validation helpers rather than copying their implementation.

## Reviewing contributed content safely

MDX files are executable source: imports and expressions can run during the
build. Treat changes to `.mdx`, `.astro`, scripts, dependencies, and workflows
as code changes, even when the PR is described as a translation correction.

Review unfamiliar changes before building them locally. Use an isolated
environment without personal credentials or sensitive mounts when running
untrusted contributions. Disabling npm installation scripts does not prevent
code execution during tests or builds.

Translated landing-page formatting is restricted, and Markdown URL checks
reject unsupported schemes. These controls do not sandbox MDX or make
arbitrary repository changes safe to execute.

The CSP generator hashes inline content emitted by the build. Those hashes
allow that content in the browser; they do not establish that it is safe.
Review changes that introduce scripts or alter security headers.

Inspect submitted attachments before applying them. Never execute a script
provided as part of a translation submission.

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
