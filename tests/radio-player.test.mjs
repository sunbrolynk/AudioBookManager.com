import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createPlayer, createWatcher } from '../src/lib/radio-player.mjs';

// A clock and timers that only move when the test says so.
function clock() {
  let t = 0, id = 0;
  const jobs = new Map();
  return {
    now: () => t,
    setTimeout: (fn, ms) => { jobs.set(++id, { fn, at: t + ms }); return id; },
    clearTimeout: (i) => jobs.delete(i),
    setInterval(fn, ms) { const i = ++id; const run = () => { fn(); jobs.set(i, { fn: run, at: t + ms }); }; jobs.set(i, { fn: run, at: t + ms }); return i; },
    clearInterval: (i) => jobs.delete(i),
    get pending() { return jobs.size; },
    async advance(ms) {
      const end = t + ms;
      for (;;) {
        const next = [...jobs.entries()].filter(([, j]) => j.at <= end).sort((a, b) => a[1].at - b[1].at)[0];
        if (!next) break;
        t = next[1].at; jobs.delete(next[0]); await next[1].fn();
      }
      t = end;
    },
  };
}

class FakeAudio extends EventTarget {
  src = ''; paused = true; ended = false; readyState = 0; currentTime = 0; muted = false; volume = 1; error = null; plays = []; playResult = () => Promise.resolve();
  play() { this.paused = false; this.plays.push(this.src); return this.playResult(this.src); }
  pause() { if (!this.paused) { this.paused = true; this.dispatchEvent(new Event('pause')); } }
  removeAttribute() { this.src = ''; }
  load() {}
  emit(type) { this.dispatchEvent(new Event(type)); }
  // A stream closing on its own: the browser pauses, then reports the end.
  end() { this.ended = true; this.paused = true; this.dispatchEvent(new Event('pause')); this.dispatchEvent(new Event('ended')); }
}

function setup(opts = {}) {
  const t = clock();
  const audio = new FakeAudio();
  const states = [];
  const player = createPlayer({ audio, sources: { aac: 'aac', mp3: 'mp3' }, canAac: true, timers: t, now: t.now, onChange: (s) => states.push(s.state), ...opts });
  return { t, audio, states, player };
}
const playing = (audio) => audio.emit('playing');

test('play connects to AAC and shows live once audio is playing', () => {
  const { audio, player } = setup();
  player.start();
  assert.deepEqual(audio.plays, ['aac']);
  assert.equal(player.snapshot.live, false);
  playing(audio);
  assert.equal(player.snapshot.live, true);
});

test('stop drops the connection and play rejoins live', () => {
  const { audio, player } = setup();
  player.start(); playing(audio);
  player.stop();
  assert.equal(audio.src, '');
  assert.equal(player.snapshot.state, 'stopped');
  assert.equal(player.wanted, false);
  player.start();
  assert.equal(audio.src, 'aac');
});

test('mute keeps the connection and unmuting needs no reconnect', () => {
  const { audio, player } = setup();
  player.start(); playing(audio);
  player.setMuted(true);
  assert.equal(audio.muted, true);
  assert.equal(audio.src, 'aac');
  assert.equal(audio.plays.length, 1);
  player.setMuted(false);
  assert.equal(audio.muted, false);
  assert.equal(audio.plays.length, 1);
});

test('the lock screen pause is a pause event: it stops, it does not reconnect', async () => {
  const { t, audio, player } = setup();
  player.start(); playing(audio);
  audio.pause();
  assert.equal(player.snapshot.state, 'stopped');
  assert.equal(player.wanted, false);
  await t.advance(60000);
  assert.equal(audio.plays.length, 1);
});

test('our own releases are not mistaken for an outside pause', async () => {
  const { t, audio, player } = setup();
  player.start(); playing(audio);
  audio.emit('error');
  assert.equal(player.snapshot.state, 'reconnecting');
  assert.equal(player.wanted, true);
  await t.advance(2000);
  assert.equal(audio.plays.length, 2);
});

test('reconnect waits 2, 5, 10, 30, 30 seconds on one deadline, however the tab throttles other timers', async () => {
  const { t, audio, player } = setup();
  player.start();
  const waits = [];
  for (let i = 0; i < 5; i++) {
    audio.emit('error');
    waits.push((player.snapshot.deadline - t.now()) / 1000);
    assert.equal(t.pending >= 1, true);
    await t.advance(waits.at(-1) * 1000);
  }
  assert.deepEqual(waits, [2, 5, 10, 30, 30]);
  assert.equal(audio.plays.length, 6);
});

test('a hidden tab that only runs a timer once a minute still reconnects at the deadline', async () => {
  const { t, audio, player } = setup();
  player.start(); playing(audio);
  audio.emit('ended');
  await t.advance(1999);
  assert.equal(audio.plays.length, 1);
  await t.advance(1);
  assert.equal(audio.plays.length, 2);
});

test('the attempt count resets only after stable playing', async () => {
  const { t, audio, player } = setup();
  player.start();
  audio.emit('error'); await t.advance(2000);   // wait 2
  playing(audio);
  await t.advance(5000);                          // dies young
  audio.emit('error');
  assert.equal((player.snapshot.deadline - t.now()) / 1000, 5);
  await t.advance(5000);
  playing(audio);
  await t.advance(30000);                         // stable
  audio.emit('error');
  assert.equal((player.snapshot.deadline - t.now()) / 1000, 2);
});

test('a stream that never starts is given up on after the stall time', async () => {
  const { t, audio, player } = setup();
  player.start();
  await t.advance(14999);
  assert.equal(player.snapshot.state, 'playing');
  await t.advance(1);
  assert.equal(player.snapshot.state, 'reconnecting');
  assert.equal(audio.plays.length, 1);
});

test('buffering that never recovers trips the stall watchdog; recovery cancels it', async () => {
  const { t, audio, player } = setup();
  player.start(); playing(audio);
  audio.emit('waiting');
  await t.advance(10000);
  playing(audio);
  await t.advance(10000);
  assert.equal(player.snapshot.state, 'playing');
  audio.emit('waiting');
  await t.advance(15000);
  assert.equal(player.snapshot.state, 'reconnecting');
});

test('waiting while the element has data and its clock moving is not a stall', async () => {
  const { t, audio, player } = setup();
  player.start(); playing(audio);
  audio.emit('waiting');
  audio.readyState = 4;
  await t.advance(15000);
  assert.equal(player.snapshot.state, 'playing');
});

test('stalled during healthy playback does nothing', async () => {
  const { t, audio, player } = setup();
  player.start(); playing(audio);
  audio.readyState = 4;
  audio.emit('stalled');
  await t.advance(60000);
  assert.equal(player.snapshot.state, 'playing');
  assert.equal(audio.plays.length, 1);
});

test('a stream that ends cleanly reconnects: pause then ended is not a listener stop', async () => {
  const { t, audio, player } = setup();
  player.start(); playing(audio);
  audio.end();
  assert.equal(player.wanted, true);
  assert.equal(player.snapshot.state, 'reconnecting');
  audio.ended = false;
  await t.advance(2000);
  assert.equal(audio.plays.length, 2);
});

test('a play() refused for lack of a gesture stops instead of looping', async () => {
  const { t, audio, player } = setup();
  audio.playResult = () => Promise.reject(Object.assign(new Error('x'), { name: 'NotAllowedError' }));
  player.start();
  await Promise.resolve(); await Promise.resolve();
  assert.equal(player.snapshot.state, 'stopped');
  await t.advance(60000);
  assert.equal(audio.plays.length, 1);
});

test('any other play() failure reconnects, and an abort is ignored', async () => {
  const { audio, player } = setup();
  audio.playResult = () => Promise.reject(Object.assign(new Error('x'), { name: 'AbortError' }));
  player.start();
  await Promise.resolve(); await Promise.resolve();
  assert.equal(player.snapshot.state, 'playing');
  audio.playResult = () => Promise.reject(new Error('network'));
  player.start();
  await Promise.resolve(); await Promise.resolve();
  assert.equal(player.snapshot.state, 'reconnecting');
});

test('AAC falls back to MP3 on an unsupported source, or on a repeated failure, and the next fresh play tries AAC again', async () => {
  const a = setup();
  a.player.start();
  a.audio.error = { code: 4 };
  a.audio.emit('error');
  await a.t.advance(2000);
  assert.equal(a.audio.src, 'mp3');

  const b = setup();
  b.player.start();
  b.audio.emit('error'); await b.t.advance(2000);
  assert.equal(b.audio.src, 'aac');
  b.audio.emit('error'); await b.t.advance(5000);
  assert.equal(b.audio.src, 'mp3');
  b.player.stop(); b.player.start();
  assert.equal(b.audio.src, 'aac');
});

test('a browser without AAC starts on MP3', () => {
  const { audio, player } = setup({ canAac: false });
  player.start();
  assert.equal(audio.src, 'mp3');
});

test('polling continues in a hidden tab only while playing, and the clock runs only while visible', async () => {
  const t = clock();
  let hidden = false, playing = false, polls = 0, ticks = 0;
  const w = createWatcher({ poll: () => { polls++; }, tick: () => { ticks++; }, hidden: () => hidden, wanted: () => playing, timers: t });
  w.visibility();
  assert.equal(polls, 1);
  await t.advance(15000);
  assert.equal(polls, 2);
  assert.equal(ticks, 15);

  hidden = true; w.visibility();         // hidden and not playing: nothing runs
  await t.advance(60000);
  assert.equal(polls, 2);
  assert.equal(ticks, 15);

  playing = true; w.playing();           // hidden but playing: polls, no clock
  await t.advance(30000);
  assert.equal(polls, 4);
  assert.equal(ticks, 15);

  hidden = false; w.visibility();        // visible again: poll now, clock back
  assert.equal(polls, 5);
  await t.advance(2000);
  assert.equal(ticks, 17);
});
