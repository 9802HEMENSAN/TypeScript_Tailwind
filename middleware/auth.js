const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded) {
      req.body.userId = decoded.userId;
      next();
    } else {
      res.status(400).send({ msg: "Please Login!!", ok: false });
    }
  } else {
    res.status(400).send({ msg: "Please Login!!", ok: false });
  }
};

module.exports = { isAuth };
