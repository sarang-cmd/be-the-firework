# Frustum bypass

Embers, smoke and crowd all declare a `1e5` bounding sphere and skip frustum culling — cheaper than the test would be.

## Where it lives

`index.html` — `geometry setup`

## Related

- [Precomputed choreography](precompute.md)

## Status

Documented against build v1.0.0; numbers read out of the live source.
