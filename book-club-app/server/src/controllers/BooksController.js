const {Book} = require('../models')

module.exports = {

  async getBooks (req, res) {
    try {
      const books = await Book.findAll({
        limit: 15
      })
      res.send(books)
  } catch (err) {
      res.status(500).send({
        error: 'Error has occured, could not find books. Not your fault'
      })
    }
  },





  async post (req, res) {
    try {
      console.log("Reese says Hello?????????", Book.create.toString());
      const book = await Book.create(req.body)
      res.send(book)
    } catch (err) {
      res.status(500).send({
        error: 'Error has occured IT IS THIS ONE REESE!! Not your fault',
        message: err
      })
    }
  }
}
