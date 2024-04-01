const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const { addData } = require('./controllers/dataControllers')

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

server.listen(3001, () => {
    console.log('Running')
})