const express = require('express')
const router = express.Router()

const URL = require('../../models/URL')
const generateShortURL = require('../../utils/generate_shortURL')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const originalURL = req.body.originalURL
  const shortURL = generateShortURL()
  
  // 防止使用者沒有輸入內容，就按下送出鈕
  if (!originalURL) return res.redirect('/')

  URL.findOne({ originalURL })
    .lean()
    .then(data => data ? data : URL.create({ originalURL, shortURL }))
    .then(data => res.render('index', { shortURL: data.shortURL }))
    .catch(error => console.log(error))
})

router.get('/:shortURL', (req, res) => {
  const shortURL = req.params
  
  URL.findOne(shortURL)
    .then(data => res.redirect(data.originalURL))
    .catch(error => console.log(error))
})

module.exports = router