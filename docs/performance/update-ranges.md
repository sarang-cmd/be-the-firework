# Partial buffer uploads

Only the dirty instance range is re-uploaded each frame via `addUpdateRange`, so a burst costs one small transfer, not a full buffer.

## Where it lives

`index.html` — `flushDirty()`
