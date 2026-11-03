// Posts a merged dev -> main site PR to the Discord release webhook as embeds.
// Reads the PR from the event file ($GITHUB_EVENT_PATH). --dry-run prints the payloads instead.
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const COLOR = 0x8b45c6;
const LIMIT = 4000; // under Discord's 4096 embed description limit

export function clean(body) {
  return (body ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)|<img\b[^>]*>/gi, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Split on line boundaries; a line longer than the limit is cut hard.
export function chunk(text, limit = LIMIT) {
  const out = [];
  let cur = '';
  for (let line of text.split('\n')) {
    while (line.length > limit) {
      if (cur) out.push(cur), (cur = '');
      out.push(line.slice(0, limit));
      line = line.slice(limit);
    }
    const next = cur ? `${cur}\n${line}` : line;
    if (next.length > limit) out.push(cur), (cur = line);
    else cur = next;
  }
  if (cur.trim()) out.push(cur);
  return out.map((c) => c.trim()).filter(Boolean);
}

export function payloads(pr) {
  const parts = chunk(clean(pr.body));
  const embeds = (parts.length ? parts : ['']).map((description, i) => {
    const e = { color: COLOR, description };
    if (i === 0) Object.assign(e, { title: String(pr.title).slice(0, 256), url: pr.html_url });
    return e;
  });
  // A message holds at most 10 embeds and 6000 characters in total.
  const messages = [];
  let batch = [];
  let size = 0;
  for (const e of embeds) {
    const len = e.description.length + (e.title?.length ?? 0);
    if (batch.length && (batch.length >= 10 || size + len > 6000)) {
      messages.push({ embeds: batch });
      batch = [];
      size = 0;
    }
    batch.push(e);
    size += len;
  }
  messages.push({ embeds: batch });
  return messages;
}

async function post(url, payload) {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.status === 429 && attempt < 3) {
      const { retry_after = 5 } = await res.json().catch(() => ({}));
      await new Promise((r) => setTimeout(r, retry_after * 1000));
      continue;
    }
    if (!res.ok) throw new Error(`Discord returned HTTP ${res.status}`);
    return;
  }
}

async function main() {
  const { pull_request: pr } = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
  const messages = payloads(pr);
  if (process.argv.includes('--dry-run')) {
    console.log(JSON.stringify(messages, null, 2));
    return;
  }
  const url = process.env.DISCORD_RELEASE_WEBHOOK ?? '';
  if (!/^https:\/\/discord(app)?\.com\/api\/webhooks\//.test(url)) throw new Error('DISCORD_RELEASE_WEBHOOK is not a Discord webhook URL');
  for (const m of messages) await post(url, m);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
