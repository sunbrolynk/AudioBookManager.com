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
