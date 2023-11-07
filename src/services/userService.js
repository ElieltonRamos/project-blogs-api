const { User } = require('../models');
const { generateToken } = require('../utils/tokenAuth');

const validateName = (name) => {
  if (name.length < 8) {
    return {
      status: 'BAD_REQUEST',
      data: { message: '"displayName" length must be at least 8 characters long' },
    };
  }
  return false;
};

const validateEmail = async (email) => {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(email)) {
    return {
      status: 'BAD_REQUEST',
      data: { message: '"email" must be a valid email' },
    };
  }
  const emailExists = await User.findOne({
    where: { email },
    attributes: ['email'],
  });

  if (emailExists) {
    return {
      status: 'CONFLICT',
      data: { message: 'User already registered' },
    };
  }
  return false;
};

const validatePassword = (password) => {
  if (password.length < 6) {
    return {
      status: 'BAD_REQUEST',
      data: { message: '"password" length must be at least 6 characters long' },
    };
  }
  return false;
};

const createUser = async (user) => {
  const { displayName, email, password, image } = user;

  const nameError = validateName(displayName);
  if (nameError) return nameError;

  const emailError = await validateEmail(email);
  if (emailError) return emailError;

  const passwordError = validatePassword(password);
  if (passwordError) return passwordError;

  const responseDB = await User.create({ displayName, email, password, image });
  const newUser = { name: displayName, id: responseDB.null };
  const token = generateToken(newUser);

  return {
    status: 'CREATED',
    data: { token },
  };
};

const findAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return {
    status: 'OK',
    data: users,
  };
};

const findUserId = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  
  if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  
  return { status: 'OK', data: user.dataValues };
};

const destroyUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };

  await User.destroy({ where: { id } });
  return { status: 'NO_CONTENT', data: '' };
};

module.exports = {
  createUser,
  findAllUsers,
  findUserId,
  destroyUser,
};