const express = require('express')
const app = express()
const cors = require('cors')

const port = 5000;
app.use(cors())
const catagories = require('./data/data.json')
app.get('/', (req, res)=>{
  res.send('app i running')
})

app.get('/catagories', (req, res)=>{
  res.send(catagories)
})

app.listen(5000, ()=>{
  console.log('app is running on server 5000')
})