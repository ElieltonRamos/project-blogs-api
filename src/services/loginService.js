const { User } = require('../models');
const { generateToken } = require('../utils/tokenAuth');

const login = async (email, password) => {
  const user = await User.findOne({
    where: { email },
    attributes: ['password', 'email', 'display_name', 'id'],
  });

  if (!user || user.password !== password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const { display_name: name, id } = user.dataValues;

  const token = generateToken({ name, id });
  return { status: 'OK', data: { token } };
};

module.exports = login;
