# Drag-braked integration

Position is closed-form: `p0 + v0·(1-e^{-kt})/k + g·t′`, evaluated per vertex, so nothing is integrated on the CPU.

## Where it lives

`index.html` — `ember vertex shader`
