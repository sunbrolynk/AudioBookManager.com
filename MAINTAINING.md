# Maintaining audiobookmanager.com

Everything needed to rebuild the site and its services from nothing, plus the
routine jobs. The settings that live in dashboards rather than in this
repository are written out here, so losing an account setting never means
guessing.

## 1. Tools

- Node.js 24.14.1 and npm 11. That's the version CI pins in
  `.github/workflows/site-checks.yml`. Move both together.
- Bash and a running Docker daemon. The secret scan runs a digest-pinned
  Gitleaks container, and without Docker it fails closed.
- Playwright's Chromium, for the overflow check: `npx playwright install chromium`.

## 2. Clone, install, hooks

```sh
git clone https://github.com/sunbrolynk/audiobookmanager.com.git
cd audiobookmanager.com
npm ci --ignore-scripts
npx playwright install chromium
bash scripts/install-hooks.sh
```

`.npmrc` sets `ignore-scripts=true` and `save-exact=true`, so no dependency's
install script ever runs and new versions are saved exactly.

Git doesn't install hooks by itself, so run `install-hooks.sh` in every new
clone. It refuses to overwrite a different existing hook or a custom
`core.hooksPath`. After a hook script changes, delete the old hook from
`.git/hooks/` and run it again.

- **pre-commit** scans the staged changes for secrets and checks that every
  live language is complete, against exactly what's being committed.
- **pre-push** needs a clean tree and the pushed commit checked out, then runs
  the full-history secret scan, `npm ci --ignore-scripts`,
  `npm audit --audit-level=moderate`, `npm test`, `npm run typecheck`, `npm run build`, the link
  check and the overflow check. Any failure stops the push.

The hooks are a convenience, not a security boundary. They can be skipped and
don't run for edits made on GitHub, which is why the `Site validation` check
runs the same steps on every PR.

## 3. Cloudflare Pages

The site is a Cloudflare Pages project connected to this GitHub repository.

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | None |
| Build command | `npm run build && node scripts/check-links.mjs` |
| Build output directory | `dist` |
| Root directory | (blank) |
| Environment variable | `NODE_VERSION` = `24.14.1` (Production and Preview) |
| Preview deployments | On, for every branch, so each PR gets a preview URL |

Pages installs dependencies itself from `package-lock.json`, and `.npmrc`
keeps install scripts off there too. The build only builds and checks links,
because the tests need Docker for the secret scan and Pages has none. The
`Site validation` check on GitHub runs everything before anything reaches
`main`.

`npm run build` writes `dist/_headers`, and Pages applies it as is: the
Content-Security-Policy (hash-only scripts and styles), HSTS,
`X-Frame-Options`, COOP, CORP and the rest. `/api-reference/*` gets its own
policy, since ReDoc needs runtime styles and a `blob:` worker. Cloudflare
rejects a header line over 2,000 characters, and `scripts/csp.mjs` fails the
build before that happens.

### Custom domain

Pages project → **Custom domains** → add `audiobookmanager.com`. The domain is
registered with Cloudflare and uses Cloudflare DNS, so Pages adds the record
itself. If you add `www.audiobookmanager.com` too, send it to the apex with a
redirect rule rather than serving the site twice.

### Access (only while the site is private)

Before launch the site sits behind Cloudflare Access: Zero Trust → **Access →
Applications** → a self-hosted application covering `audiobookmanager.com`, with
an allow policy for my own account.

To go public, delete that application, or remove the production hostname from
it. Keep the Pages project's access policy for preview deployments on, so
branch previews stay private.

## 4. Email

The four addresses on the site (`support@`, `translate@`, `admin@` and
`privacy@audiobookmanager.com`) are receive-and-reply aliases:

- **Receiving:** Cloudflare **Email Routing** on the domain, with one custom
  address per alias forwarding to my inbox. Cloudflare adds the MX and SPF
  records when Email Routing is enabled. Don't add a catch-all that drops mail.
- **Replying as the alias:** SMTP2GO as the outgoing server. Its DKIM and
  return-path CNAMEs go in Cloudflare DNS as **DNS only** (grey cloud), and the
  domain keeps a single SPF record that allows both services:
  `v=spf1 include:_spf.mx.cloudflare.net include:spf.smtp2go.com ~all`. The
  mail client's "send mail as" uses `mail.smtp2go.com` on port 587 with TLS.
- **DMARC:** a `_dmarc` TXT record, starting at `p=none`.

Check each alias by sending from another account and replying, and look for
SPF, DKIM and DMARC all passing in the headers.

## 5. Discord

- **Translation review posts.** `.github/workflows/translation-review-discord.yml`
  posts a thread in the translation-review forum whenever a
  `translation/<code>` review PR opens. Make the webhook in Discord (forum
  channel → **Integrations → Webhooks → New Webhook**) and store its URL as the
  repository Actions secret **`DISCORD_TRANSLATION_WEBHOOK_URL`**. Never commit
  it. The forum channel ID and the review tag IDs are in the workflow file. If
  the forum or its tags are remade, update them there.
- **Repository events.** A repository webhook (Settings → Webhooks) sends this
  repository's GitHub events to a Discord channel.
- **Translator role.** The `abm-discord-roles` Cloudflare Worker gives the role
  through Discord Linked Roles. It counts merged translation PRs on this
  repository using the translator's own GitHub sign-in, which has no scopes, so
  it can only see this repository while it's public.

## 6. GitHub repository settings

**Rules.** A ruleset named **protect main**, targeting `main`:

- require a pull request before merging,
- require the `Site validation` status check,
- block force pushes,
- block deletion.

The `translation/<code>` branches stay outside the ruleset, as
[CONTRIBUTING.md](CONTRIBUTING.md#repository-settings) explains. GitHub only
enforces rulesets on public repositories (or with Pro).

**General.** Squash merging on, and automatically delete head branches on.

**Actions.**

- Allow GitHub-owned actions and actions pinned to a full commit SHA only.
- Require SHA pinning.
- Keep the default workflow token read-only.
- Require approval for workflows from first-time outside contributors.

**Security.** Turn on secret scanning with push protection, private
vulnerability reporting, Dependabot alerts and Dependabot security updates.

**Labels.** `translation`, used on the per-language issues and the review PRs.

## 7. Routine jobs

### Screenshots

`scripts/capture-screens.mjs [base URL]` refreshes `src/assets/screens/` from a
running ABM. It borrows Playwright from ABM's frontend (`ABM_FRONTEND`, default
`~/audiobook-manager/frontend`). Point it at an instance running an invented
demo library, never a real one: no real paths, hostnames, download clients,
indexers, books or covers. The docs screenshots in `src/assets/docs/` come from
the same demo library. Look at every image before committing it. When ABM's README
screenshots change, refresh these in the same pass.

### Release notes

`node scripts/build-releases.mjs <ABM CHANGELOG.md> <tag...> [--repo <ABM checkout>]`
writes `public/releases.json` and one file per release in
`src/content/releases/` for the Updates page.

### API reference

- `bash scripts/update-openapi.sh [ref]` regenerates
  `public/api-reference/openapi.json` from an ABM checkout (`ABM_REPO`, default
  `~/audiobook-manager`). Add `--check` to fail when the committed copy is
  stale.
- `bash scripts/fetch-redoc.sh` fetches the pinned ReDoc bundle from the npm
  registry. It checks the tarball integrity and the bundle checksum, and swaps
  Redocly's CDN logo for a blank pixel so the page contacts nothing but this
  site.
- `scripts/check-api-reference.mjs` runs before every build. It fails on any
  other bundle, or on a spec that names servers or carries a home path, LAN
  address or email address.

### Dependency updates

Dependabot opens one PR per package, weekly, for npm and GitHub Actions.
`package.json` and `package-lock.json` always change together. Each update gets
its own branch and PR, with the full checks and the supply-chain review in
[CONTRIBUTING.md](CONTRIBUTING.md#dependency-updates) before it merges. Passing
checks don't prove a package is harmless.

An override pins `postcss-selector-parser` to `7.1.6` under `postcss-nested`
for GHSA-rj75-hqrm-r3gf. Drop it once the upstream chain ships the patched
parser.

### Languages

[TRANSLATING.md](TRANSLATING.md) has the whole flow: the publish PR, the review
PR and its Discord thread, the issue, and adding a language.
`scripts/check-locales.mjs` keeps a language out of `src/locales.json` until
every page and string exists.
