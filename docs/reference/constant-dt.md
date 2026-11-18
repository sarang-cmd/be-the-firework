# `dt`

A constant in the index.html.

## Source

```js
  const now = performance.now();
  let dt = (now - last)/1000; last = now;
  dt = Math.min(dt, 0.05);
```

First seen at line 1860; used 1 time(s).

## References

Lines 1860.

## Status

Extracted from `index.html` at v1.0.0.
