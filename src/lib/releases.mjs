import { getCollection } from 'astro:content';

// Newest first, comparing each part of the version as a number.
export const releasesNewestFirst = async () =>
  (await getCollection('releases')).sort((a, b) => b.data.version.localeCompare(a.data.version, undefined, { numeric: true }));

/** The Updates page's anchor for a version, such as v0.26.1, the form links already out there use. @param {string} version */
export const releaseAnchor = (version) => `v${version}`;

/** The dashed anchor, such as v0-26-1, kept as a second target so links made while the page used it still land. @param {string} version */
export const releaseAnchorDashed = (version) => `v${version.replaceAll('.', '-')}`;
