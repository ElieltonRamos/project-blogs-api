const categoriesSchema = (sequelize, DataTypes) => {
  const categoriesTable = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  {
    tableName: 'categories',
    timestamps: false,
  });

  return categoriesTable;
};

module.exports = categoriesSchema;