console.log('If you see this, it is working')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `${req.body.email} was registered! Congrats!`
  })
})

app.listen(process.env.PORT || 8081)
