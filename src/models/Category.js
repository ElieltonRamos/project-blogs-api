const categoriesSchema = (sequelize, DataTypes) => {
  const categoriesTable = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  });

  return categoriesTable;
};

module.exports = categoriesSchema;