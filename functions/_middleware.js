// Serves the radio pages at the root of radio.audiobookmanager.com (the station's CORS allows only that
// origin) and keeps the pages off the main site's host. Everything else passes straight through.
const RADIO_HOST = 'radio.audiobookmanager.com';
const MAIN_HOSTS = ['audiobookmanager.com', 'www.audiobookmanager.com'];
// What radio.audiobookmanager.com serves, at the root for English and under each language's prefix.
const PAGES = ['/', '/credits/'];
// The site's languages, as in src/locales.json (a test keeps the two the same).
export const LOCALES = ['en-gb', 'uk', 'en-ca', 'en-au', 'fr', 'de', 'es', 'it', 'pt-br', 'ja', 'nl', 'pl', 'zh-cn', 'zh-tw', 'ko', 'sv', 'cs', 'da', 'nb', 'fi'];

/** "/de/credits/" as { pre: '/de', rest: '/credits/' }; a path with no language prefix keeps it all in rest. */
function split(pathname) {
  const m = /^\/([a-z]{2}(?:-[a-z]{2})?)(\/.*)?$/.exec(pathname);
  return m && LOCALES.includes(m[1]) ? { pre: `/${m[1]}`, rest: m[2] ?? '' } : { pre: '', rest: pathname };
}

/** Decides what to do with a request: pass it on (null), redirect it, or fetch a different built file. */
export function route(url) {
  const { hostname, pathname, search } = url;
  if (hostname === RADIO_HOST) {
    const { pre, rest } = split(pathname);
    if ((pre && rest === '') || rest === '/credits') return { redirect: `https://${RADIO_HOST}${pre}${rest}/${search}` };
    if (PAGES.includes(rest)) return { asset: `/radio${pre}${rest}` };
  }
  // The built address of a page sends visitors to its address on the radio host.
  if ((hostname === RADIO_HOST || MAIN_HOSTS.includes(hostname)) && /^\/radio(?:\/|$)/.test(pathname)) {
    const { pre, rest } = split(pathname.replace(/^\/radio/, '') || '/');
    if (PAGES.includes(rest)) return { redirect: `https://${RADIO_HOST}${pre}${rest}${search}` };
  }
  return null;
}

export async function onRequest({ request, next, env }) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return next();
  const url = new URL(request.url);
  const hit = route(url);
  if (!hit) return next();
  if (hit.redirect) return Response.redirect(hit.redirect, 302);
  return env.ASSETS.fetch(new Request(new URL(hit.asset, url), request));
}
