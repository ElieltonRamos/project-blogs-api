const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'secretJWT';

const generateToken = (payload) => jwt.sign(payload, secretKey);

module.exports = generateToken;