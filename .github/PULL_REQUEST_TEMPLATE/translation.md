## New language

- Language:
- Code:
- Review issue: #

A complete translation of every page. Release notes stay in English. It goes live with `"reviewed": false`, and its community review PR comes after it merges.

## Checklist

- [ ] `src/content/docs/<code>/`: every page
- [ ] `src/pages/<code>/index.astro`: the landing route
- [ ] `src/landing-strings.json` and `src/ui-strings.json`: an entry for `<code>`, with a `translatorNote` containing `{mail}`
- [ ] `src/sidebar-labels.json`: labels under the language's BCP-47 tag
- [ ] `src/locale-names.json`: its name in each published language
- [ ] `scripts/announce-translation-review.py`: its English name in `LANGUAGES`
- [ ] `src/locales.json`: registered last, with `"reviewed": false` and `"issue"` set to the review issue
- [ ] Placeholders such as `{mail}` and `{name}`, links, frontmatter keys, code and formatting kept as they are
- [ ] Translated strings use only `<b>`, `<em>`, `<code>` and `<br />`
- [ ] `npm run build` passes

## How it was translated

<!-- Machine translation, a native speaker, or both. -->
