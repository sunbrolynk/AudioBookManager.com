// Serves the radio pages at the root of radio.audiobookmanager.com (the station's CORS allows only that
// origin) and keeps the pages off the main site's host. Everything else passes straight through.
const RADIO_HOST = 'radio.audiobookmanager.com';
const MAIN_HOSTS = ['audiobookmanager.com', 'www.audiobookmanager.com'];
// What radio.audiobookmanager.com serves, and the built page behind each.
const PAGES = { '/': '/radio/', '/credits/': '/radio/credits/' };

/** Decides what to do with a request: pass it on (null), redirect it, or fetch a different built file. */
export function route(url) {
  const { hostname, pathname, search } = url;
  if (hostname === RADIO_HOST) {
    if (pathname === '/credits') return { redirect: `https://${RADIO_HOST}/credits/${search}` };
    if (PAGES[pathname]) return { asset: PAGES[pathname] };
  }
  // The built address of a page sends visitors to its address on the radio host.
  if ((hostname === RADIO_HOST || MAIN_HOSTS.includes(hostname)) && /^\/radio(?:\/|$)/.test(pathname)) {
    const clean = pathname.replace(/^\/radio\/?/, '/');
    if (PAGES[clean]) return { redirect: `https://${RADIO_HOST}${clean}${search}` };
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
