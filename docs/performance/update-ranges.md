# Partial buffer uploads

Only the dirty instance range is re-uploaded each frame via `addUpdateRange`, so a burst costs one small transfer, not a full buffer.

## Where it lives

`index.html` — `flushDirty()`

## Related

- [Lifetime pooling](pooling.md)
- [Quality tiers](quality-tiers.md)

## Status

Documented against build v1.0.0; numbers read out of the live source.
