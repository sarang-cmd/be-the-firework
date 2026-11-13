// Capture README screenshots from a running build.
//
//   npm i puppeteer@23
//   node tools/capture-screenshots.mjs https://be-the-firework.vercel.app/ screenshots
//
// Frames are driven by the live simulation state (window.__dbg) rather than by wall-clock sleeps,
// because a software rasteriser runs the timeline well behind real time. Photo mode is used to freeze
// the simulation so the capture is reproducible; the HUD is hidden for clean frames.
import puppeteer from 'puppeteer';
import { mkdirSync } from 'node:fs';

const URL = process.argv[2] || 'http://localhost:8080/index.html';
const OUT = process.argv[3] || 'screenshots';
mkdirSync(OUT, { recursive: true });

const sleep = ms => new Promise(r => setTimeout(r, ms));
const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--enable-unsafe-swiftshader',
         '--use-gl=angle', '--use-angle=swiftshader'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 1 });
page.on('pageerror', e => console.log('pageerror:', e.message));
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 });
await sleep(1500);

const clean = () => page.evaluate(() => {
  window.__set({ photo: true });
  for (const id of ['hud', 'hint', 'bars']) {
    const el = document.getElementById(id); if (el) el.style.display = 'none';
  }
});
const dirty = () => page.evaluate(() => {
  window.__set({ photo: false });
  for (const id of ['hud', 'hint', 'bars']) {
    const el = document.getElementById(id); if (el) el.style.display = '';
  }
});
async function waitFor(pred, ms = 45000) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    const d = await page.evaluate(() => window.__dbg());
    if (pred(d)) return d;
    await sleep(80);
  }
  return page.evaluate(() => window.__dbg());
}
const shot = async name => {
  await sleep(250);
  await page.screenshot({ path: `${OUT}/${name}.jpg`, type: 'jpeg', quality: 90 });
  console.log('shot', name, JSON.stringify(await page.evaluate(() => window.__dbg())));
};

await waitFor(d => d.phase === 'tube' && d.t > 0.62);
await clean(); await shot('01-tube');

// ignition is deterministic only when frozen: set the launch clock explicitly
for (const t of [0.14, 0.24, 0.34, 0.44]) {
  await page.evaluate(tt => window.__set({ photo: true, phase: 'launch', t: tt,
    domFlash: Math.max(0, 0.55 - tt * 2.2), camMode: 'ride' }), t);
  await sleep(600);
  await page.screenshot({ path: `${OUT}/ignition-${String(t).replace('.', '')}.jpg`, type: 'jpeg', quality: 90 });
}

await page.evaluate(() => window.__preset('tube'));
await waitFor(d => d.phase === 'launch' && d.t > 1.3); await clean(); await shot('03-climb');
await dirty(); await waitFor(d => d.phase === 'launch' && d.t > 3.32); await clean(); await shot('04-apex');

for (const [name, preset, pred] of [
  ['05-bloom', 'bloom', d => d.phase === 'burst' && d.fbT > 1.0],
  ['06-crossette', 'crossette', d => d.phase === 'burst' && d.fbT > 1.7],
  ['07-halo', 'ring', d => d.phase === 'burst' && d.fbT > 1.2],
  ['08-willow', 'willow', d => d.phase === 'burst' && d.fbT > 1.6],
  ['09-crowd', 'crowd', d => d.phase === 'burst' && d.fbT > 0.35],
]) {
  await dirty(); await page.evaluate(p => window.__preset(p), preset);
  await waitFor(pred); await clean(); await shot(name);
}

await dirty(); await page.evaluate(() => window.__burst('finale', 1.5));
await waitFor(d => d.fbT > 2.0); await clean(); await shot('10-finale');
await dirty(); await page.evaluate(() => window.__preset('bloom'));
await waitFor(d => d.phase === 'burst' && d.fbT > 0.75); await clean(); await shot('11-hero');

await browser.close();
