# Frustum bypass

Embers, smoke and crowd all declare a `1e5` bounding sphere and skip frustum culling — cheaper than the test would be.

## Where it lives

`index.html` — `geometry setup`
