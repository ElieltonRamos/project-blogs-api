const statusHTTP = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};
// status: 'BAD_REQUEST'
const mapHTTPStatus = (status) => statusHTTP[status] || 500;

module.exports = mapHTTPStatus;