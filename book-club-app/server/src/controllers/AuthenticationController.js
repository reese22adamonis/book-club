const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUSer (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}


module.exports = {
  async register (req, res) {
    try {

      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson
      })

    } catch (err) {
      res.status(400).send({
        error: 'Account already taken'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where:{
        email: email
        }
      })
      if (!user) {
        res.status(403).send({
          error: 'Login info is incorrect'
        })
      }

      const isPasswordCorrect = await user.comparePassword(password)
      // if (!isPasswordCorrect) {
      //   return res.status(403).send({
      //     error: 'Login info is incorrect'
      //   })
      // }
      const userJson = user.toJSON()
      console.log("HELLLOOOOOOOOO");
      res.cookie('user', 'hello', {httpOnly: false})
      res.status(200).send({
        user: userJson
      })

    } catch (err) {
      res.status(500).send({
        error: 'Error has occured. Not your fault'
      })
    }
  }
}
