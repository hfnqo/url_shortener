const express = require('express')
const { engine } = require('express-handlebars')

require('./config/mongoose')
const app = express()
const port = 3000

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${ port }`)
})