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

  usersTable.associate = ({ BlogPost }) => {
    usersTable.hasMany(BlogPost, {
      foreignKey: 'userId',
      as: 'blogPosts',
    });
  };

  return usersTable;
};

module.exports = usersSchema;