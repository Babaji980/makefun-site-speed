// makefun-site drop-in, fast: the driver reads every case from /input/cases.json, answers each with solve.js's
// build() and writes /output/answers.json. Outside a container MAKEFUN_INPUT_DIR and MAKEFUN_OUTPUT_DIR stand in.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { setFlagsFromString } from 'node:v8';

setFlagsFromString('--no-incremental-marking');

const { run } = await import(new URL('./solve.js', import.meta.url).href);

const INPUT_DIR = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(readFileSync(join(INPUT_DIR, 'cases.json'), 'utf8'));
const answers = [];
for (const c of cases) answers.push(run(c.input));
writeFileSync(join(OUTPUT_DIR, 'answers.json'), JSON.stringify(answers));
