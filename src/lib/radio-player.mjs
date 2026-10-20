// The ABM Radio player's state machine and its polling schedule. The browser pieces (the audio element,
// timers, the clock) are passed in, so every path can be tested without a browser.
import { backoff } from './radio.mjs';

/**
 * @typedef {{ state: 'idle' | 'playing' | 'reconnecting' | 'stopped', live: boolean, deadline: number, attempt: number }} Snapshot
 * @typedef {{ setTimeout: (fn: () => void, ms: number) => any, clearTimeout: (id: any) => void }} Timers
 */

/**
 * Listeners can only start and stop a live stream; they can't pause it. Stopping drops the connection,
 * and starting always rejoins live. Muting silences the element but keeps the connection.
 * @param {{ audio: any, sources: { aac: string, mp3: string }, canAac: boolean, timers: Timers, now: () => number,
 *   onChange?: (s: Snapshot) => void, stableMs?: number, stallMs?: number }} o
 */
export function createPlayer({ audio, sources, canAac, timers, now, onChange = () => {}, stableMs = 30000, stallMs = 15000 }) {
  let state = /** @type {Snapshot['state']} */ ('idle');
  let live = false;
  let wanted = false;
  let attempt = 0;
  let aacFails = 0;
  let useMp3 = !canAac;
  let retrying = false;
  let deadline = 0;
  let expectPause = false;
  /** @type {any} */ let retryTimer = null;
  /** @type {any} */ let stallTimer = null;
  /** @type {any} */ let stableTimer = null;

  const emit = () => onChange({ state, live, deadline, attempt });
  const clear = (/** @type {any} */ id) => { if (id !== null) timers.clearTimeout(id); return null; };
  const clearAll = () => { retryTimer = clear(retryTimer); stallTimer = clear(stallTimer); stableTimer = clear(stableTimer); };

  // Dropping the source closes the connection; the station allows only three per listener.
  function release() {
    if (!audio.paused) expectPause = true;
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
  }

  // No `playing` in time is a dead stream, unless the element has data and its clock has moved by then.
  function armStall() {
    stallTimer = clear(stallTimer);
    const from = audio.currentTime;
    stallTimer = timers.setTimeout(() => {
      stallTimer = null;
      if (audio.readyState >= 3 || audio.currentTime > from) return;
      lost();
    }, stallMs);
  }

  function connect() {
    retrying = false;
    retryTimer = null;
    release();
    audio.src = useMp3 ? sources.mp3 : sources.aac;
    armStall();
    Promise.resolve(audio.play()).catch((/** @type {any} */ e) => {
      if (e?.name === 'AbortError') return;
      if (e?.name === 'NotAllowedError') return stop();
      lost();
    });
  }

  function lost() {
    if (!wanted || retrying) return;
    retrying = true;
    stallTimer = clear(stallTimer);
    stableTimer = clear(stableTimer);
    live = false;
    if (!useMp3 && (audio.error?.code === 4 || ++aacFails >= 2)) useMp3 = true;
    release();
    const seconds = backoff(attempt++);
    deadline = now() + seconds * 1000;
    state = 'reconnecting';
    retryTimer = timers.setTimeout(connect, seconds * 1000);
    emit();
  }

  function start() {
    clearAll();
    wanted = true;
    attempt = 0;
    aacFails = 0;
    useMp3 = !canAac;
    live = false;
    state = 'playing';
    emit();
    connect();
  }

  function stop() {
    clearAll();
    wanted = false;
    retrying = false;
    live = false;
    release();
    state = 'stopped';
    emit();
  }

  audio.addEventListener('playing', () => {
    if (!wanted) return;
    stallTimer = clear(stallTimer);
    live = true;
    state = 'playing';
    // A connection that dies right after starting keeps its place in the backoff.
    stableTimer = clear(stableTimer);
    stableTimer = timers.setTimeout(() => { attempt = 0; aacFails = 0; }, stableMs);
    emit();
  });
  for (const type of ['error', 'ended']) audio.addEventListener(type, lost);
  // `stalled` only says a fetch paused, which healthy playback does too, so only `waiting` starts the watchdog.
  audio.addEventListener('waiting', () => { if (wanted && !retrying && stallTimer === null) armStall(); });
  // A pause we didn't ask for (a phone call, unplugged headphones, the lock screen) means the listener has stopped.
  audio.addEventListener('pause', () => {
    if (expectPause) { expectPause = false; return; }
    // Browsers fire `pause` just before `ended`; a stream that closed on its own must reconnect, not count as a stop.
    if (wanted && !audio.ended) stop();
  });

  return {
    start,
    stop,
    toggle: () => (wanted ? stop() : start()),
    /** Silences locally; the connection stays live, so unmuting is instant. */
    setMuted: (/** @type {boolean} */ muted) => { audio.muted = muted; },
    setVolume: (/** @type {number} */ percent) => { audio.volume = Math.min(1, Math.max(0, percent / 100)); },
    get wanted() { return wanted; },
    get snapshot() { return /** @type {Snapshot} */ ({ state, live, deadline, attempt }); },
  };
}

/**
 * Polls every `seconds` while the tab is visible, or while the listener is playing even if it is hidden
 * (so the lock screen keeps the right title). The one-second clock runs only while visible.
 * @param {{ poll: () => any, tick: () => void, hidden: () => boolean, wanted: () => boolean, timers: Timers & { setInterval: (fn: () => void, ms: number) => any, clearInterval: (id: any) => void }, seconds?: number }} o
 */
export function createWatcher({ poll, tick, hidden, wanted, timers, seconds = 15 }) {
  /** @type {any} */ let pollTimer = null;
  /** @type {any} */ let clockTimer = null;
  const schedule = () => {
    if (pollTimer !== null) timers.clearTimeout(pollTimer);
    pollTimer = null;
    if (hidden() && !wanted()) return;
    pollTimer = timers.setTimeout(async () => { pollTimer = null; await poll(); schedule(); }, seconds * 1000);
  };
  return {
    /** The tab was hidden or shown. */
    visibility() {
      if (clockTimer !== null) timers.clearInterval(clockTimer);
      clockTimer = null;
      if (!hidden()) { clockTimer = timers.setInterval(tick, 1000); poll(); }
      schedule();
    },
    /** Playing started or stopped. */
    playing: schedule,
  };
}
