# `climbBoost`

A constant in the index.html.

## Source

```js
  stars.material.uniforms.uTime.value = realT;
  const climbBoost = (S.phase === 'launch') ? 1 + 1.4*clamp(S.t/T_LAUNCH,0,1) : 1;
  stars.material.uniforms.uBoost.value = lerp(stars.material.uniforms.uBoost.value, climbBoost, Math.min(1,dt*2));
```

First seen at line 1898; used 1 time(s).

## References

Lines 1898.

## Status

Extracted from `index.html` at v1.0.0.
