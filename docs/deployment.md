# Deployment

**Live:** https://be-the-firework.vercel.app
**Project:** `be-the-firework` (`prj_4HZGFIpIsdiayDIBvIHr8c7Hby18`), team `sarang-dev`.

## Vercel, from uploaded files

`index.html` is a static file with a pinned import map, so the deployment is a static upload — but the
Vercel API rejects a files-based deployment unless `projectSettings` carries a framework value, and its
framework enum has no null / "Other" value that survives validation. The shape that works is a plain
static host dressed as a no-op build:

```json
{"framework": "vite", "installCommand": "true", "buildCommand": "true", "outputDirectory": "public"}
```

`installCommand` and `buildCommand` are `true` — a shell no-op — so nothing is compiled and Vercel
serves `public/` as the deployment output. Files are therefore uploaded under `public/`, and the site is
served from the domain root.

Note that per-deployment URLs (`be-the-firework-<hash>-sarang-dev.vercel.app`) sit behind Vercel
Authentication on teams by default. The production alias `be-the-firework.vercel.app` is public and is
the URL to share.

## GitHub Pages

`.github/workflows/pages.yml` publishes the repository root to Pages on every push to `main`, which
gives a second, dependency-free mirror of the same file.

## Rebuilding the minified artifact

```bash
./tools/build.sh          # → deploy/site/index.html (CDN import map + minified module, ~56 KB)
```

The source in this repository stays readable at ~78 KB; minification only matters for the bytes that go
over the wire.
