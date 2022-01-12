export default {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  // umd: { name: 'bundle', sourcemap: true },
  runtimeHelpers: true,
  preCommit: {
    eslint: true,
    prettier: true,
  },
};
