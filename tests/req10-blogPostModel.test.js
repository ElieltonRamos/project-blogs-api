const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists, 
  checkSimpleAssociation
} = require('./assets/helper');

describe("10 - Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas", () => {
  const modelPath = resolve(__dirname, '..', 'src', 'models', 'BlogPost.js');
  const foreignModelPath = resolve(__dirname, '..', 'src', 'models', 'User.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('BlogPost');

  checkPropertyExists(modelPath)(["id","title","content","user_id","published","updated"]);

  checkSimpleAssociation(modelPath)('belongsTo')('User');

  checkSimpleAssociation(foreignModelPath)('hasMany')('BlogPost');
});
