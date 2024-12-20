const User = require('../models/user');

module.exports = async function(req, res, next) {
  // You can now access the logged in user's document in every controller Fn
  req.user = req.session.user_id ? await User.findById(req.session.user_id) : null;
  // Add to locals object so that user can be accessed in templates
  res.locals.user = req.user;
  next();
};