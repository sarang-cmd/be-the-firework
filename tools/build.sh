#!/usr/bin/env bash
# Rebuild the minified deploy artifact from the readable source.
#
#   ./tools/build.sh      -> deploy/site/index.html
#
# index.html already carries the pinned CDN import map (three@0.169.0 for both "three" and
# "three/addons/"), so the only work here is minifying the inline module.
set -euo pipefail
cd "$(dirname "$0")/.."

command -v node >/dev/null || { echo "node not found"; exit 1; }
[ -d /tmp/fwbuild ] || (mkdir -p /tmp/fwbuild && cd /tmp/fwbuild && npm init -y >/dev/null && npm i esbuild@0.24.0 --no-audit --no-fund >/dev/null)

python3 - <<'PY'
import re, os, subprocess
src = open('index.html').read()
assert 'cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js' in src, \
    'import map is not pinned to the CDN — swap it in first'

m = re.search(r'(<script type="module">)(.*?)(</script>)', src, re.S)
open('/tmp/fwbuild/mod.mjs', 'w').write(m.group(2))
subprocess.run(['node', '/tmp/fwbuild/node_modules/esbuild/bin/esbuild', '/tmp/fwbuild/mod.mjs',
                '--minify', '--format=esm', '--target=es2020',
                '--outfile=/tmp/fwbuild/mod.min.mjs'], check=True)
mod = open('/tmp/fwbuild/mod.min.mjs').read()

os.makedirs('deploy/site', exist_ok=True)
out = 'deploy/site/index.html'
open(out, 'w').write(src[:m.start(2)] + mod + src[m.end(2):])
print(out, os.path.getsize(out), 'bytes')
PY
