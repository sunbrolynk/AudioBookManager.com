import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  // One file per release, written by scripts/build-releases.mjs alongside public/releases.json.
  releases: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/releases' }),
    schema: z.object({ version: z.string(), date: z.string().nullable(), url: z.string().url() }),
  }),
};
