console.log('If you see this, it is working')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// {force:true} if you want to clear the database
sequelize.sync()
  .then(() => {
    // app.listen(process.env.PORT || 8081)
    app.listen(config.port)
    console.log(`Starts on port ${config.port}`)
  })
