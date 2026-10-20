// The ABM Radio player: audio, reconnecting, now-playing, credits and the phone extras.
// Everything that comes from the API or credits.json is written with textContent or a validated https URL, never as HTML.
import { STREAM_HOST, ago, clock, creditIndex, findCredit, httpsUrl } from '../lib/radio.mjs';
import { createPlayer, createWatcher, type Snapshot } from '../lib/radio-player.mjs';

const API = `${STREAM_HOST}/api/nowplaying/lofi`;
const STREAMS = { aac: `${STREAM_HOST}/listen/lofi/radio.aac`, mp3: `${STREAM_HOST}/listen/lofi/radio.mp3` };
const POLL_SECONDS = 15;
const STATION = 'ABM Lofi';

type Feed = 'ok' | 'down' | 'off';
type Json = Record<string, any>;

const all = (key: string) => document.querySelectorAll<HTMLElement>(`[data-b="${key}"]`);
const put = (key: string, value: string) => all(key).forEach((e) => { e.textContent = value; });
const str = (v: unknown) => (typeof v === 'string' ? v : '');
const body = document.body;

// ---------- audio ----------
const audio = new Audio();
audio.preload = 'none';
const player = createPlayer({
  audio,
  sources: STREAMS,
  canAac: Boolean(audio.canPlayType('audio/aac') || audio.canPlayType('audio/mp4; codecs="mp4a.40.2"')),
  timers: window,
  now: () => Date.now(),
  onChange: show,
});

const LIVE: Record<Snapshot['state'], string> = { idle: 'Live', playing: 'Live', stopped: 'Stopped', reconnecting: 'Reconnecting' };
let countdown = 0;

function show(s: Snapshot) {
  body.dataset.state = s.state;
  put('live', LIVE[s.state]);
  const on = s.state === 'playing' || s.state === 'reconnecting';
  all('play').forEach((b) => { b.setAttribute('aria-label', on ? 'Stop' : 'Play'); b.dataset.on = on ? '1' : '0'; });
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = on ? 'playing' : 'none';
  window.clearInterval(countdown);
  if (s.state === 'reconnecting') {
    // The timer that reconnects is a single deadline; this only keeps the words current, so a throttled tab loses nothing.
    const words = () => {
      const left = Math.max(0, Math.ceil((s.deadline - Date.now()) / 1000));
      put('status', `Reconnecting… next try in ${left} s`);
      put('retry', `Reconnecting… next try in ${left} s.`);
    };
    words();
    countdown = window.setInterval(words, 1000);
  } else {
    put('status', { idle: 'Press play to tune in', stopped: 'Stopped. Play jumps back to live.', playing: s.live ? 'On air' : 'Tuning in…' }[s.state]);
  }
  watcher.playing();
}

all('play').forEach((b) => b.addEventListener('click', () => player.toggle()));

const volume = document.querySelector<HTMLInputElement>('[data-b="volume"]');
volume?.addEventListener('input', () => player.setVolume(Number(volume.value)));
if (volume) player.setVolume(Number(volume.value));
const mute = document.querySelector<HTMLButtonElement>('[data-b="mute"]');
mute?.addEventListener('click', () => {
  const muted = mute.getAttribute('aria-pressed') !== 'true';
  player.setMuted(muted);
  mute.setAttribute('aria-pressed', String(muted));
});

// A live stream can't be paused, so the lock screen and headphones' pause means stop.
if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => player.start());
  for (const action of ['pause', 'stop'] as const) navigator.mediaSession.setActionHandler(action, () => player.stop());
}

// ---------- credits ----------
const credits: Promise<ReturnType<typeof creditIndex>> = fetch('/radio/credits.json')
  .then((r) => (r.ok ? r.json() : []))
  .catch(() => [])
  .then((list) => creditIndex(Array.isArray(list) ? list : []));

// ---------- now playing ----------
let timing = { elapsed: 0, duration: 0, at: performance.now() };
let shown = '';
let historyKey = '';
let lastPoll = 0;
let polling = false;

function setFeed(feed: Feed) {
  body.dataset.feed = feed;
}

function loadImage(url: string): Promise<string> {
  const safe = httpsUrl(url);
  if (!safe) return Promise.resolve('');
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(safe);
    img.onerror = () => resolve('');
    img.src = safe;
    // A slow image mustn't hold up the next poll.
    setTimeout(() => resolve(''), 5000);
  });
}

// A cover shows the CSS cabin scene until real art loads, and again if it fails.
function cover(el: HTMLElement, url: string) {
  el.replaceChildren();
  if (!url) return;
  const img = new Image();
  img.alt = '';
  img.src = url;
  el.append(img);
}

function setSong(song: Json, credit: Json | undefined, art: string) {
  put('title', str(song.title) || STATION);
  put('artist', str(song.artist));
  put('album', str(song.album));
  const source = httpsUrl(credit?.source_url);
  const line = all('creditline');
  line.forEach((e) => { e.hidden = !credit; });
  put('credit', credit ? str(credit.attribution) : '');
  all('source').forEach((a) => {
    a.hidden = !source;
    if (source) a.setAttribute('href', source);
  });
  all('cover').forEach((el) => cover(el, art));
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: str(song.title) || STATION,
      artist: str(song.artist),
      album: str(song.album) || STATION,
      artwork: art ? [{ src: art }] : [],
    });
  }
}

function setHistory(items: Json[], index: Awaited<typeof credits>) {
  const key = items.map((i) => i.sh_id).join(',');
  const list = document.querySelector('[data-b="history"]');
  if (!list) return;
  if (key !== historyKey) {
    historyKey = key;
    list.replaceChildren();
    for (const item of items.slice(0, 5)) {
      const song: Json = item.song ?? {};
      const credit = findCredit(index, song);
      const li = document.createElement('li');
      const row = document.createElement('a');
      row.className = 'row';
      row.href = credit ? `credits/#${encodeURIComponent(credit.id)}` : 'credits/';
      const cv = document.createElement('span');
      cv.className = 'cv';
      const t = document.createElement('span');
      t.className = 't';
      t.textContent = str(song.title);
      const a = document.createElement('span');
      a.className = 'a';
      a.textContent = str(song.artist);
      const w = document.createElement('span');
      w.className = 'w';
      w.dataset.at = String(Number(item.played_at) || 0);
      row.append(cv, t, a, w);
      li.append(row);
      list.append(li);
      loadImage(str(song.art)).then((url) => cover(cv, url));
    }
  }
  list.querySelectorAll<HTMLElement>('.w').forEach((w) => { w.textContent = ago(Number(w.dataset.at)); });
}

async function render(data: Json) {
  const index = await credits;
  const online = data.is_online !== false;
  setFeed(online ? 'ok' : 'off');
  const now: Json = data.now_playing ?? {};
  const song: Json = online ? now.song ?? {} : { title: 'Off air' };
  const key = `${now.sh_id}|${online}`;
  if (key !== shown) {
    shown = key;
    const credit = online ? findCredit(index, song) : undefined;
    const art = await loadImage(str(song.art));
    setSong(song, credit, art);
  }
  timing = { elapsed: Number(now.elapsed) || 0, duration: Number(now.duration) || 0, at: performance.now() };
  const listeners = Number(data.listeners?.current) || 0;
  put('listeners', listeners > 0 ? ` · ${listeners} listening` : '');
  const next: Json | undefined = data.playing_next?.song;
  put('next', online && next ? `${str(next.title)}, ${str(next.artist)}` : 'Nothing queued yet');
  setHistory(Array.isArray(data.song_history) ? data.song_history : [], index);
  tick();
}

async function poll() {
  if (polling) return;
  polling = true;
  lastPoll = performance.now();
  const abort = new AbortController();
  const timeout = window.setTimeout(() => abort.abort(), 8000);
  let data: Json | undefined;
  try {
    const r = await fetch(API, { signal: abort.signal, credentials: 'omit' });
    if (!r.ok) throw new Error(String(r.status));
    data = await r.json();
  } catch {
    setFeed('down');
  } finally {
    window.clearTimeout(timeout);
  }
  // A page bug while drawing is not the feed being down.
  if (data) await render(data).catch((e) => console.error('radio render', e));
  polling = false;
}

function tick() {
  const seconds = Math.min(timing.duration, timing.elapsed + (performance.now() - timing.at) / 1000);
  put('elapsed', clock(seconds));
  put('duration', clock(timing.duration));
  all('progress').forEach((bar) => { bar.style.width = timing.duration ? `${(seconds / timing.duration) * 100}%` : '0%'; });
  // A finished track means a new one is probably on: look sooner than the next scheduled poll.
  if (timing.duration && seconds >= timing.duration && performance.now() - lastPoll > 4000) void poll();
}

const watcher = createWatcher({
  poll: () => { if (performance.now() - lastPoll > 2000) return poll(); },
  tick,
  hidden: () => document.hidden,
  wanted: () => player.wanted,
  timers: window,
  seconds: POLL_SECONDS,
});
document.addEventListener('visibilitychange', () => watcher.visibility());
watcher.visibility();

// ---------- page extras ----------
const phone = matchMedia('(max-width: 899px)');
const mini = document.querySelector('.mini');
const np = document.querySelector('.np');
if (mini && np) {
  const place = () => mini.classList.toggle('on', phone.matches && np.getBoundingClientRect().bottom <= 48);
  addEventListener('scroll', place, { passive: true });
  place();
}
// On a phone the sections are collapsible and Privacy starts closed.
if (phone.matches) document.querySelector('.g4')?.removeAttribute('open');

const toast = document.querySelector<HTMLElement>('.toast');
let toastTimer = 0;
document.querySelectorAll<HTMLElement>('.urls li').forEach((li) => li.addEventListener('click', async () => {
  let message = 'Stream link copied';
  try { await navigator.clipboard.writeText(li.dataset.url ?? ''); } catch { message = 'Could not copy, select the link instead'; }
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('on');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('on'), 1800);
}));
