const { decodeToken } = require('../utils/tokenAuth');

const checkToken = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.split(' ')[1];

  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  if (!token) return res.status(401).json({ message: 'Expired or invalid token' });

  const user = decodeToken(token);

  if (user === 'jwt malformed') {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  req.user = user;
  next();
};

module.exports = checkToken;
