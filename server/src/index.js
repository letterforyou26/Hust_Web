const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const route = require('./routes')
const db = require('./config/db')
const port = 8081

db.connect();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
route(app);

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

app.listen(port, () => console.log(`Example app listening at :${port}`))