#!/usr/bin/env node
// Validate local page, file, and anchor links after the production build.
import { fileURLToPath } from 'node:url';
import { checkLinks } from './lib-check-links.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const problems = checkLinks(dist);

console.log(
  problems.length
    ? problems.join('\n')
    : 'check-links: every checked internal page, file, and anchor resolves'
);
process.exitCode = problems.length ? 1 : 0;
