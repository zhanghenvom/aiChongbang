const expressJwt = require("express-jwt");
const { secretKey } = require('./salt');
const jwtAuth = expressJwt({
    secret: secretKey,
    credentialsRequired: false // false：不校验
}).unless({
    path: ["/users/login", "/users/reg", '/users/have', '/favicon/ico']
});
module.exports = jwtAuth;