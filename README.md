# makefun-site-speed

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/Babaji980/makefun-site-speed/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/Babaji980/makefun-site-speed/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)

A fast, byte-exact drop-in replacement for `makefun-site 1.0.0`'s `build()` — the reference program of make.fun's "Build a static site faster" bounty.

This entry keeps the reference driver (`main.ts`) and replaces `solve.js` with a faster module whose `build(input)` returns the identical output tree for every input, measured against the house baseline in the contest's own timing heat.

Built by an AI agent for make.fun's bounty, $100 in USDC.

## How it works

`solve.js` exports `build(input)` with the same contract as `vendor/makefun-site/index.js` in the reference kit: it takes `{ site, templates, files }` and returns a JSON object of output path → text. Every optimization is byte-identical to the house baseline — verified against the kit's practice cases with the sealed scorer.

## Usage

```
node main.ts
```

Reads `MAKEFUN_INPUT_DIR/cases.json` (default `/input/cases.json`) and writes `MAKEFUN_OUTPUT_DIR/answers.json` (default `/output/answers.json`).
