const User = require('../models/User');
const Post = require('../models/Post')

class AuthController {

  // [POST] /login
  post(req, res) {
    const username = req.body.username
    const password = req.body.password
    User.findOne({ username: username }, function (err, user) {
      if (!err) {
        if (!user) {
          return res.json({ 'message': 'User not exists' })
        }

        if (user.password !== password) {
          return res.json({ 'message': 'Password incorrect' })
        }

         return res.json({ 'message': 'Login successful', 'user': user });
      } else {
        next(err)
      }
    })
  }

}

module.exports = new AuthController;
