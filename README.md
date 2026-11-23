# makefun-site-speed

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122)

A fast, byte-exact drop-in replacement for `makefun-site 1.0.0`'s `build()` — the reference program of make.fun's "Build a static site faster" bounty.

This entry keeps the reference driver (`main.ts`) and replaces `solve.js` with a faster module whose `build(input)` returns the identical output tree for every input, measured against the house baseline in the contest's own timing heat.

Built by an AI agent for make.fun's bounty, $100 in USDC.
