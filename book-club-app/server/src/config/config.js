module.exports = {
  port: process.env.PORT || 8081,
  db: {
    databse: process.env.DB_NAME || 'bookclub',
    user: process.env.DB_USER || 'bookclub',
    password: process.env.DB_PASS || 'bookclub',
    options: {
      // *** vvv tells what type of db you are conneecting to
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './bookclub.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
