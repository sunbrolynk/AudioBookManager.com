# audiobookmanager.com

Website, documentation, and community translations for [AudioBook Manager](https://github.com/sunbrolynk/AudioBook-Manager).

- Website: https://audiobookmanager.com
- Community: https://discord.gg/qeJRrM6AZ
- Application issues: https://github.com/sunbrolynk/AudioBook-Manager/issues

## Local development

Use Node.js 24 and npm 11.

Install the dependencies recorded in the lockfile:

```sh
npm ci --ignore-scripts
```

Start the development server:

```sh
npm run dev
```

Run the tests, build, and check internal links:

```sh
npm test
npm run build
node scripts/check-links.mjs
```

Preview the generated site:

```sh
npm run preview
```

The build validates configured locales, generates the static site, and fills
the Content-Security-Policy hashes in `dist/_headers`, then fails if any page
or stylesheet loads something that policy blocks. Deploy the complete
`dist/` output.

Cloudflare Pages only needs to build: `npm run build && node scripts/check-links.mjs`,
with output directory `dist`. The tests run in the `Site validation` check and the
local hooks, which have Docker for the secret scan. Pages has no Docker, so its
secret-scan test skips there with that reason rather than failing.

## Project structure

- `src/content/docs/`: English documentation and translated documentation.
- `src/content/releases/`: generated release notes.
- `src/components/`: landing page, shared components, and Starlight overrides.
- `src/styles/`: shared design tokens and page styles.
- `src/locales.json`: enabled translations.
- `src/landing-strings.json`: landing-page text.
- `src/ui-strings.json`: navigation and footer text.
- `src/sidebar-labels.json`: translated sidebar group labels.
- `public/`: static assets, release data, and security-header template.
- `scripts/`: validation, release generation, and screenshot tools.

## Translations

A language goes live only once every page and string is translated. Each one
then has a review PR, a GitHub issue and a Discord thread where corrections
collect. See [TRANSLATING.md](TRANSLATING.md) for the whole flow and how to send
a fix.

## API reference

The API Reference page is currently a placeholder. A reviewed OpenAPI
specification generated from AudioBook Manager's source and a locally bundled
Redoc renderer are planned.

## Dependency maintenance

Commit both `package.json` and `package-lock.json`. The lockfile records
resolved dependency versions and package integrity hashes.

A scoped override pins `postcss-selector-parser` to `7.1.6` beneath
`postcss-nested` to address GHSA-rj75-hqrm-r3gf. The override produced identical
site output to the original dependency during migration validation.
Reassess it when the upstream dependency chain adopts a patched parser.

Dependency updates must go through separate pull requests. Dependabot is
configured for weekly npm and GitHub Actions updates once this configuration
reaches the default branch.

Local pre-push checks and GitHub Actions validate secrets, known dependency
vulnerabilities, the production build, and internal links. Dependency changes
also require manual security review as described in [CONTRIBUTING.md](CONTRIBUTING.md).

Branch-rule enforcement must be verified in GitHub settings; a passing check
alone does not prevent merging. See the repository settings in
[CONTRIBUTING.md](CONTRIBUTING.md#repository-settings).

## License

GNU General Public License v3.0. See [LICENSE](LICENSE).

## Checks before committing and pushing

Requirements: Node.js 24, npm 11, Bash, and a running Docker daemon.

After reviewing the hook scripts, install the local hooks:

```sh
bash scripts/install-hooks.sh
```

Repeat this installation for each new clone. Hooks are not automatically
installed by Git. The installer refuses to overwrite a different existing
hook or change a custom hooks-directory configuration, so after a hook script
changes, delete the old hook from `.git/hooks/` and run the installer again.

Before a commit, the pre-commit hook scans the staged changes for secrets and
checks that every configured language is complete.

Before a normal push, the pre-push hook requires a clean working tree and checks
that the outgoing commit matches the checked-out commit. It then runs:

- Full Git-history secret scanning with a digest-pinned Gitleaks container.
  The scan fails if Gitleaks can't read the repository, including from a worktree.
- Dependency installation from the lockfile with installation scripts disabled.
- An npm vulnerability audit, failing on moderate or higher findings.
- The regression tests.
- The production build, including locale validation, security headers, and a
  check that every built page and stylesheet only loads what the
  Content-Security-Policy allows.
- Internal page-link and anchor validation.
- Every built page, in every language, loaded in Chromium at 320, 360, 375, 390,
  414, 768, 1024, 1280, 1440 and 1920px wide. It fails if the page scrolls
  sideways, if anything sticks out past the viewport outside a box that scrolls
  or clips it, or if the header's links run under the language menu. Run
  `npx playwright install chromium` once per machine first.

The push stops if a check fails. GitHub Actions repeats these checks for PRs.
Local hooks are a convenience gate, not a security boundary: they can be
bypassed and do not run for changes made through GitHub's website.

A clean audit or secret scan does not establish that a dependency is free
of malicious behavior. Dependency updates also require review of package
changes, installation scripts, new dependencies, and unexpected file or
network access before executing their code. Build commands execute dependency
code even when installation scripts were disabled.
