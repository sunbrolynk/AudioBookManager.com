// Pure helpers for the ABM Radio page and its credits page.

export const STREAM_HOST = 'https://stream.audiobookmanager.com';
export const RECONNECT_SECONDS = [2, 5, 10, 30];

/** Seconds to wait before reconnect attempt number `attempt` (0 is the first retry). */
/** @param {number} attempt */
export const backoff = (attempt) => RECONNECT_SECONDS[Math.min(attempt, RECONNECT_SECONDS.length - 1)];

/** @param {unknown} s */
const norm = (s) => String(s ?? '').trim().toLowerCase();
/** @param {unknown} artist @param {unknown} title */
const key = (artist, title) => `${norm(artist)}\u0000${norm(title)}`;

/**
 * @typedef {{ id: string, title: string, artist: string, album: string, license: string, license_url: string, source_url: string, attribution: string }} Credit
 */

/**
 * Indexes credits by artist and title (case-insensitive, trimmed).
 * @param {Credit[]} credits
 */
export function creditIndex(credits) {
  /** @type {Map<string, Credit>} */
  const index = new Map();
  for (const c of credits) if (!index.has(key(c.artist, c.title))) index.set(key(c.artist, c.title), c);
  return index;
}

/**
 * The credits entry for a now-playing song, or undefined when there is none.
 * @param {Map<string, Credit>} index @param {{ artist?: unknown, title?: unknown } | undefined} song
 */
export const findCredit = (index, song) => index.get(key(song?.artist, song?.title));

/**
 * A URL only when it is https, so nothing from outside the page can become a script or data link.
 * @param {unknown} value
 */
export function httpsUrl(value) {
  try {
    const url = new URL(String(value));
    return url.protocol === 'https:' ? url.href : '';
  } catch {
    return '';
  }
}

/**
 * "CC-BY-SA-4.0" as "CC BY-SA 4.0".
 * @param {string} id
 */
export const licenceLabel = (id) => String(id).replace(/-(?=\d)/, ' ').replace(/^CC-/, 'CC ');

/**
 * 102 as "1:42".
 * @param {unknown} seconds
 */
export function clock(seconds) {
  const s = Math.max(0, Math.floor(Number(seconds) || 0));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

/**
 * "4 min. ago" for a unix time in seconds, in the page's language.
 * @param {number} playedAt @param {number} [now] @param {string} [lang]
 */
export function ago(playedAt, now = Date.now() / 1000, lang = 'en') {
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto', style: 'short' });
  const min = Math.round((now - playedAt) / 60);
  if (min < 1) return rtf.format(0, 'second');
  if (min < 60) return rtf.format(-min, 'minute');
  return rtf.format(-Math.round(min / 60), 'hour');
}

/**
 * A translated string with each {name} filled from vars; an unknown name stays as written.
 * @param {string} text @param {Record<string, string | number>} vars
 */
export const fill = (text, vars) => text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));

/**
 * Credits grouped by artist A to Z, each artist's tracks by album then title.
 * @param {Credit[]} credits
 */
export function groupByArtist(credits) {
  /** @type {Map<string, Credit[]>} */
  const by = new Map();
  for (const c of credits) by.set(c.artist, [...(by.get(c.artist) ?? []), c]);
  /** @param {string} a @param {string} b */
  const cmp = (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' });
  return [...by.entries()]
    .sort(([a], [b]) => cmp(a, b))
    .map(([artist, tracks]) => ({ artist, tracks: tracks.sort((a, b) => cmp(a.album, b.album) || cmp(a.title, b.title)) }));
}
