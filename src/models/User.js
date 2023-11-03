const usersSchema = (sequelize, DataTypes) => {
  const usersTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  return usersTable;
};

module.exports = usersSchema;