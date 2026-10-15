# Crowd point size

Crowd dots are `clamp(size*pix*300/d, 1, 9)` — an upper bound of 9 px is the readable ceiling before faces turn into blobs.

## Where it lives

`index.html` — `crowd vertex shader`
