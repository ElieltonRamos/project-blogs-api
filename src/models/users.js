const usersSchema = (sequelize, DataTypes) => {
  const usersTable = sequelize.define('users', {
    id: DataTypes.INTEGER,
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  return usersTable;
};

module.exports = usersSchema;