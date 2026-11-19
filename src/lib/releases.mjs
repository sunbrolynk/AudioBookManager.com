import { getCollection } from 'astro:content';

// Newest first, comparing each part of the version as a number.
export const releasesNewestFirst = async () =>
  (await getCollection('releases')).sort((a, b) => b.data.version.localeCompare(a.data.version, undefined, { numeric: true }));

/** The Updates page's anchor for a version, such as v0-26-1. @param {string} version */
export const releaseAnchor = (version) => `v${version.replaceAll('.', '-')}`;
