const { User } = require('../models');
const generateToken = require('./generateToken');

const createUser = async (user) => {
  const { displayName, email, password, image } = user;

  if (displayName.length < 8) {
    return {
      status: 'BAD_REQUEST',
      data: { message: '"displayName" length must be at least 8 characters long' },
    };
  }

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(email)) {
    return {
      status: 'BAD_REQUEST',
      data: { message: '"email" must be a valid email' },
    };
  }

  if (password.length < 6) {
    return {
      status: 'BAD_REQUEST',
      data: { message: '"password" length must be at least 6 characters long' },
    };
  }

  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) {
    return {
      status: 'CONFLICT',
      data: { message: 'User already registered' },
    };
  }

  const responseDB = await User.create({ display_name: displayName, email, password, image });
  const newUser = { name: displayName, id: responseDB.null }
  const token = generateToken(newUser);
  return {
    status: 'OK',
    data: { token },
  };
};

module.exports = {
  createUser,
};