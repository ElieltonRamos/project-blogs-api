const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists 
} = require('./assets/helper');

describe("2 - Crie o modelo `User` em `src/models/User.js` com as propriedades corretas", () => {
  const modelPath = resolve(__dirname, '..', 'src', 'models', 'User.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('User');

  checkPropertyExists(modelPath)(["id","display_name","email","password","image"]);
});
