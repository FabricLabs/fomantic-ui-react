/**
 * usage: npm run init <component-name>
 */
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const _ = require('lodash');
const config = require('./config');

const cwdPath = process.cwd();

const questions = [
  {
    type: 'input',
    name: 'componentInput',
    message: '组件名称：',
  },
];

function createFile(path, data = '', desc) {
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.log(err, 'error');
    } else {
      console.log(`> ${desc}\n${path} file has been created successfully！`, 'success');
    }
  });
}

function getPascalCase(name) {
  return _.startCase(_.camelCase(name)).replace(/ /g, '');
}

function outputFileWithTemplate(item, component, desc, _d) {
  const tplPath = path.resolve(__dirname, `./tpl/${item.template}`);
  let data = fs.readFileSync(tplPath).toString();
  const compiled = _.template(data);
  data = compiled({
    component,
    PascalCaseComponent: getPascalCase(component),
  });
  const f = path.resolve(_d, item.file);
  createFile(f, data, desc);
}

function addComponent(toBeCreatedFiles, component) {
  Object.keys(toBeCreatedFiles).forEach((dir) => {
    const d = path.resolve(cwdPath, dir);
    fs.mkdir(d, { recursive: true }, (err) => {
      if (err) {
        console.log(err, 'error');
        return;
      }
      console.log(`${d} directory has been created successfully！`);
      // Then, we create files for components.
      const contents = toBeCreatedFiles[dir];
      contents.files.forEach((item) => {
        if (typeof item === 'object') {
          if (item.template) {
            outputFileWithTemplate(item, component, contents.desc, d);
          }
        } else {
          const f = path.resolve(d, item);
          createFile(f, '', contents.desc);
        }
      });
    });
  });
}

function getImportStr(upper, component) {
  return `export ${upper} from './${component}';`;
}

function insertComponentToIndex(component, indexPath) {
  const upper = getPascalCase(component);
  // last import line pattern
  const importPath = getImportStr('*', component);
  const desc = '> insert component into index.ts';
  let data = fs.readFileSync(indexPath).toString();

  if (data.match(new RegExp(importPath.replace('*', '\\*')))) {
    console.log(`there is already ${component} in /src/index.ts`, 'notice');
    return;
  }

  fs.appendFile(indexPath, `\n${importPath}\n`, (err) => {
    if (err) {
      console.log(err, 'error');
    } else {
      console.log(`${desc}\n${component} has been inserted into /src/index.ts`, 'success');
    }
  });
}

function generate(component) {
  const indexPath = path.resolve(cwdPath, 'src/index.ts');
  const toBeCreatedFiles = config.getToBeCreatedFiles(component, getPascalCase(component));
  addComponent(toBeCreatedFiles, component);
  insertComponentToIndex(component, indexPath);
}

function init() {
  const [component] = process.argv.slice(2);
  if (component === undefined) {
    inquirer.prompt(questions).then((answers) => {
      generate(answers.componentInput);
    });
  } else {
    generate(component);
  }
}

init();