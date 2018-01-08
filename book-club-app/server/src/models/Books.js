
  module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      genre: DataTypes.STRING,
      publisher: DataTypes.STRING,
      releaseDate: DataTypes.STRING,
      bookImage: DataTypes.STRING,
      audioBook: DataTypes.STRING,
      summary: DataTypes.TEXT,
      description: DataTypes.TEXT
  })

  return Book
}
