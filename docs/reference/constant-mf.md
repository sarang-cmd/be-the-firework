# `mf`

A constant in the index.html.

## Source

```js
    (S.phase === 'tube' ? 1.4 + 0.9*Math.abs(Math.sin(realT*11.0)*Math.sin(realT*4.3)) : 0.0);
  const mf = mouthFlash.material.uniforms.uIntensity;
  mf.value = Math.max(0, mf.value - dt*3.2);
```

First seen at line 1919; used 1 time(s).

## References

Lines 1919.

## Status

Extracted from `index.html` at v1.0.0.
