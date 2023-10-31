const categoriesSchema = (sequelize, DataTypes) => {
  const categoriesTable = sequelize.define('categories', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });

  return categoriesTable;
};

module.exports = categoriesSchema;