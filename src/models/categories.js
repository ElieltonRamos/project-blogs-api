const categoriesSchema = (sequelize, DataTypes) => {
  const categoriesTable = sequelize.define('categories', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  });

  return categoriesTable;
};

module.exports = categoriesSchema;