import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { releaseAnchor, releasesNewestFirst } from './lib/releases.mjs';

// The Updates page renders its versions from a component, so Starlight's table of contents never sees them.
export const onRequest = defineRouteMiddleware(async ({ locals }) => {
  const { toc, id } = locals.starlightRoute;
  if (!toc || id.replace(/^[^/]+\//, '') !== 'updates') return;
  for (const { data } of await releasesNewestFirst()) toc.items.push({ depth: 2, slug: releaseAnchor(data.version), text: data.version, children: [] });
});
