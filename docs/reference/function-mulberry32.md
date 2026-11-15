# `mulberry32`

A function in the index.html.

## Source

```js

function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
let rnd = mulberry32(20261120);
```

First seen at line 156; used 1 time(s).
