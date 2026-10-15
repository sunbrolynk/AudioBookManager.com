# audiobookmanager.com

Website, documentation, and community translations for [AudioBook Manager](https://github.com/sunbrolynk/AudioBook-Manager).

- Website: https://audiobookmanager.com
- Community: https://discord.gg/9TS4gzYCQZ
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

Build and check internal links:

```sh
npm run build
node scripts/check-links.mjs
```

Preview the generated site:

```sh
npm run preview
```

The build validates configured locales, generates the static site, and fills
the Content-Security-Policy hashes in `dist/_headers`. Deploy the complete
`dist/` output.

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

The new repository currently contains the English foundation.
Language-specific review branches and pull requests are being prepared.

The planned contribution process lets community members propose corrections
through PR comments, suggested edits, or corrected-file attachments.
Maintainers review and apply contributions before merging.

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

Dependency updates must go through pull requests. Dependabot and required
security checks are being configured; they are not yet established by this
README. Updates require review before merging.

## License

GNU General Public License v3.0. See [LICENSE](LICENSE).
