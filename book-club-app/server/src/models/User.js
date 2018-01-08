const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const SALT_FACTOR = 8

function hashPassword (user,options) {

  if (!user.changed('password')){
    return;
  }

  console.log("PW: ", user.password)
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => {console.log("SALTY: ", salt); return bcrypt.hashAsync(user.password,salt, null)})
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

  module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique:true
      },
      password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })



  User.prototype.comparePassword = function (password) {
    console.log("PWTWO: ", password);
    console.log("EXTRA SALT ", bcrypt.genSaltSync(SALT_FACTOR));
    console.log("SUPER SECRET: ", bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_FACTOR)));
    // console.log("ALSO SECRET: ", this.password);
    // console.log(bcrypt.hashAsync.toString());
    return bcrypt.compareAsync(bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_FACTOR), null), this.password)
  }

  return User
}
