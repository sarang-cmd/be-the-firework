# Strobe blink shape

Luminosity is remapped to `mix(0.02, 2.3, smoothstep(...))`, so the off state is genuinely dark and the on state is a silver spike.

## Where it lives

`index.html` — `ember vertex shader`

## Related

- [Strobe phase lock](strobe-phase.md)
- [Strobe colour](strobe-colour.md)

## Status

Documented against build v1.0.0; numbers read out of the live source.
