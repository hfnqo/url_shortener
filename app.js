const express = require('express')
const { engine } = require('express-handlebars')
const routes = require('./routes')

require('./config/mongoose')
const app = express()

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})