const BASE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

// 隨機產生 5 位英數字
function shortURL () {
  let result = ''
  
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * BASE_CHAR.length)
    const chooseCHAR = BASE_CHAR[randomIndex]

    result += chooseCHAR
  }
  return result
}

module.exports = shortURL