const express = require('express')
const helmet = require('helmet')

const carsRouter = require('../cars/carRouter')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({api: "Success!"})
})

server.use('/cars', carsRouter)

module.exports = server