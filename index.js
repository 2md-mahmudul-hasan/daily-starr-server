const express = require('express')
const app = express()
const cors = require('cors')

const port = 5000;
app.use(cors())
const catagories = require('./data/data.json')
const news = require('./data/news.json')
console.log(news)
app.get('/', (req, res)=>{
  res.send('app i running')
})

app.get('/catagories', (req, res)=>{
  res.send(catagories)
})
app.get('/catagories/:id', (req, res)=>{
  const id = req.params.id;
  const catagoriesNews = news.filter(n=>n.category_id === id)
  res.send(catagoriesNews)
})

app.get('/news',(req, res)=>{
  res.send(news)
})
app.get('/news/:id',(req, res)=>{
  const id = req.params.id;
  const selectedNews = news.find(n=>n._id==id)
  res.send(selectedNews)
})

app.listen(5000, ()=>{
  console.log('app is running on  server 5000')
})