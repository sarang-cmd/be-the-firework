# `smoothstep`

A constant in the index.html.

## Source

```js
const lerp  = (a,b,t)=> a+(b-a)*t;
const smoothstep = (a,b,x)=>{ const t=clamp((x-a)/(b-a),0,1); return t*t*(3-2*t); };
const TAU = Math.PI*2;
```

First seen at line 153; used 1 time(s).

## References

Lines 153.

## Status

Extracted from `index.html` at v1.0.0.
