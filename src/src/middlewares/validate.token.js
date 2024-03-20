const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {

    const authorization = req.header("Authorization");
    if (!authorization)  return res.status(403).send({ auth: false, message: 'No token provided.' });
    if (!authorization.startsWith("Bearer "))
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    const token = authorization.split(" ").at(1) || "";
  
    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }
  
    jwt.verify(token, secret = process.env.SECRET_JWT, (err, decoded) => {
      if (err) {
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      }
  
      req.userId = decoded.id;
      next();
    });
  }
module.exports = verifyToken