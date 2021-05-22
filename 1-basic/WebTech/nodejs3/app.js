const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('hello')
})
app.post('/', (req, res) => {
  res.send('POST - Hello!')
})
app.get('/products', (req, res) => {
  res.send('PRODUCTS')
})
app.get('/peoples', (req, res) => {
  res.send('PEOPLES')
})
app.listen("8080", () => {
  console.log("Server started at port 8000")
})
