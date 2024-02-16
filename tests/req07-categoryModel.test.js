const { resolve } = require('path');

const {
  checkModelFile,
  checkModelName,
  checkPropertyExists
} = require('./assets/helper');

describe("7 - Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas", () => {
  const modelPath = resolve(__dirname, '..', 'src', 'models', 'Category.js');

  checkModelFile(modelPath);

  checkModelName(modelPath)('Category');

  checkPropertyExists(modelPath)(["id", "name"]);
});
