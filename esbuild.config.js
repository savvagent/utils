const { build } = require('esbuild');
const { sync } = require('glob');

const entryPoints = sync('src/**/*.js');

const builder = async () => {
  await build({
    bundle: true,
    entryPoints,
    outdir: 'dist/cjs',
    outExtension: { '.js': '.cjs' },
    platform: 'node',
    target: ['node16.0'],
  });
  await build({
    bundle: true,
    entryPoints,
    format: 'esm',
    outdir: 'dist/mjs',
    outExtension: { '.js': '.mjs' },
  });
};

builder();
