const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists, 
  checkThroughAssociation
} = require('./assets/helper');

describe( "11 - Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas", () => {
  const modelPath = resolve(__dirname, '..', 'src', 'models', 'PostCategory.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('PostCategory');

  checkPropertyExists(modelPath)(["post_id","category_id"]);

  checkThroughAssociation(modelPath)
    (['Category', 'BlogPost'])('belongsToMany')(['BlogPost', 'Category']);
});
