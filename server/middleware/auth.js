const userSchema = require("../model/user");


module.exports.auth= (req, res,next) => {
  if (!req.session.email) {
    res.clearCookie('token');
    
  }
  next()

}