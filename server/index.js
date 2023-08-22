const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const route = require('./route/route')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', route)

async function start(){
    try {
        await mongoose.connect('mongodb+srv://islom:islom2006@cluster0.wzx2yj3.mongodb.net/?retryWrites=true&w=majority')
        app.listen(3500, () => console.log('Server Started on PORT: 3500'))
    } catch (error) {
        console.log(error)
    }
}
start()