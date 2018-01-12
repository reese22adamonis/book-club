const {Book} = require('../models')

module.exports = {

  async index (req, res) {
    console.log("trying to get books");
    try {
      console.log("TESTESTEST");
      const books = await Book.findAll({
        limit: 15
      })
      console.log("UNICORNS: ", books);
      res.send(books)
  } catch (err) {
    console.log("ERROR: "), err;
      res.status(500).send({
        error: 'Error has occured, could not find books. Not your fault'
      })
    }
  },



    async show (req, res) {
      try {
        const book = await Book.findById(req.params.bookId)
        res.send(book)
    } catch (err) {
      console.log("ERROR: "), err;
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
