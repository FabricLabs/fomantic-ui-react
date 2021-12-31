function getToBeCreatedFiles(component, pascalCaseName, group) {
  return {
    [`src/${component}`]: {
      // set up source code
      desc: 'component source code',
      files: [
        {
          file: 'index.ts',
          template: 'index.ts.tpl',
        },
        {
          file: 'type.ts',
          template: 'type.ts.tpl',
        },
        {
          file: `${pascalCaseName}.tsx`,
          template: 'component.tsx.tpl',
        },
      ],
    },
    [`docs/components/${group}s`]: {
      // set up component document
      desc: 'component document',
      files: [
        {
          file: `${component}.md`,
          template: 'component.md.tpl',
        },
      ],
    },
    [`src/${component}/style`]: {
      // set up style dir
      desc: 'style dir in every compoent for tree-shaking',
      files: [
        {
          file: `css.js`,
          template: 'style.css.js.tpl',
        },
        {
          file: `index.js`,
          template: 'style.index.js.tpl',
        },
      ],
    },
  };
}

module.exports = {
  getToBeCreatedFiles,
};
