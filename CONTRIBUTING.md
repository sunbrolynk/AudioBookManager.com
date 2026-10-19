# Contributing

## Translations

Everything about translating the site, from how a language goes live to how to
send a fix, is in [TRANSLATING.md](TRANSLATING.md).

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
`.npmrc` refuses any version published less than 14 days ago, and Dependabot
waits out the same cooldown.

Record review findings and validation results in the PR. Passing tests,
vulnerability audits, and secret scans do not prove a dependency is harmless.
Updates require a manual merge.

## Repository settings

`main` has the **protect main** ruleset. Changes reach `main` only through a
pull request, and the `Site validation` check (the `Site checks` workflow) has
to pass first. GitHub only enforces rulesets on a public repository or GitHub
Pro, so it starts working when the repository goes public.

- Every PR into `main` runs `Site validation`, including Dependabot's and the
  translation review PRs, so the required check is never missing.
- The `translation/<code>` branches are deliberately left out of the ruleset.
  Translators' fork PRs target them, and corrections get pushed to them
  directly. Their PRs still run the same checks, and nothing on them reaches
  `main` except through a review PR, which runs them again.
- Merge PRs into `main` with **Squash and merge**. Review branches have `main`
  merged into them, and a squash keeps those merge commits off `main`.

Still to set once the repository is public:

- Actions: allow only GitHub-owned actions and actions pinned to a full commit
  SHA, keep the default workflow token read-only, and require approval before
  running workflows from first-time outside contributors.
- Security: turn on secret scanning with push protection, private
  vulnerability reporting, and Dependabot alerts.
