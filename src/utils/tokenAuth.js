const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'secretJWT';

const generateToken = (payload) => jwt.sign(payload, secretKey);

const decodeToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  generateToken,
  decodeToken,
};