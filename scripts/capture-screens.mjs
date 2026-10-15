#!/usr/bin/env node
// Refreshes the app screenshots in src/assets/screens from a running ABM.
// Usage: node scripts/capture-screens.mjs [base URL, default http://127.0.0.1:5181]
// Point it at an instance on a neutralised database: the shots are public, so no real paths,
// hostnames, clients or indexers may show. Check every image before committing it.
// Playwright is not a dependency of this site; it is loaded from ABM's own frontend
// (set ABM_FRONTEND to that folder if it isn't ~/audiobook-manager/frontend).
import { createRequire } from 'node:module';
import { homedir } from 'node:os';
import { join } from 'node:path';

const base = (process.argv[2] ?? 'http://127.0.0.1:5181').replace(/\/$/, '');
const frontend = process.env.ABM_FRONTEND ?? join(homedir(), 'audiobook-manager', 'frontend');
const { chromium } = createRequire(join(frontend, 'package.json'))('playwright');
const out = new URL('../src/assets/screens/', import.meta.url).pathname;

// file -> [route, where the image is used]
const desktop = {
  'dashboard.jpg': ['/', 'Home: screenshots strip'],
  'library.jpg': ['/library', 'Home: hero window, "Every book, at a glance", screenshots strip'],
  'book.jpg': ['/library/book/939', 'Home: "The details are right", screenshots strip'],
  'series.jpg': ['/library/series/355', 'Home: screenshots strip'],
  'calendar.jpg': ['/calendar', 'Home: "Know what\'s coming", screenshots strip'],
  'missing.jpg': ['/wanted/missing', 'Home: "A list of what\'s missing", screenshots strip'],
  'profiles.jpg': ['/settings/quality-profiles', 'Home: "You decide what better means", screenshots strip'],
  'conversions.jpg': ['/library/conversions', 'Home: "Fix the format too", screenshots strip'],
};
const phone = {
  'book-m.jpg': ['/library/book/939', 'Home: phone over the hero window'],
};

const shoot = async (browser, shots, viewport) => {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 2, colorScheme: 'dark' });
  const page = await ctx.newPage();
  for (const [file, [route]] of Object.entries(shots)) {
    await page.goto(base + route, { waitUntil: 'networkidle' });
    // Wait for loading spinners to clear rather than capturing a half-drawn page.
    await page.waitForFunction(() => !document.querySelector('[role="progressbar"], .animate-spin'), null, { timeout: 30000 }).catch(() => {
      throw new Error(`${route} never finished loading`);
    });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: out + file, type: 'jpeg', quality: 82 });
    console.log(`${file}  ${route}`);
  }
  await ctx.close();
};

const browser = await chromium.launch();
try {
  await shoot(browser, desktop, { width: 1440, height: 900 });
  await shoot(browser, phone, { width: 390, height: 844 });
} finally {
  await browser.close();
}
