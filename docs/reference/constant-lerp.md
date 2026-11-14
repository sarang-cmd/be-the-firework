# `lerp`

A constant in the index.html.

## Source

```js
const clamp = (x,a,b)=> x<a?a:(x>b?b:x);
const lerp  = (a,b,t)=> a+(b-a)*t;
const smoothstep = (a,b,x)=>{ const t=clamp((x-a)/(b-a),0,1); return t*t*(3-2*t); };
```

First seen at line 152; used 1 time(s).

## References

Lines 152.

## Status

Extracted from `index.html` at v1.0.0.
