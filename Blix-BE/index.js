const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const { addData, createStream } = require('./controllers/dataControllers')

const app = express()
const corsConfig = {
    origin: 'http://localhost:3000',
    credentials: true 
}

app.use(cors(corsConfig))
app.use(bodyParser.json())

const server = http.createServer(app)

app.post('/addData', (req,res) => {
    try{
        addData(req.body)
        res.status(200).send()
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }
   
})

app.get('/getData', (req,res) => {
    createStream((err, messages) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(messages);
      });
})

server.listen(3001, () => {
    console.log('Running')
})