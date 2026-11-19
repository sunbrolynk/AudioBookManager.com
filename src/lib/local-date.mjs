/**
 * A release's day as YYYY-MM-DD where the reader is, or in the given time zone.
 * A bare YYYY-MM-DD is already a calendar day and comes back as it is.
 * @param {string} stamp
 * @param {string} [timeZone]
 */
export function localDay(stamp, timeZone) {
  if (!stamp.includes('T')) return stamp;
  const parts = new Intl.DateTimeFormat('en', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date(stamp));
  const part = (/** @type {string} */ type) => parts.find((p) => p.type === type)?.value;
  return `${part('year')}-${part('month')}-${part('day')}`;
}
