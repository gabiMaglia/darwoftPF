require("dotenv").config();

const bodyparser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const routes = require('./routes/mainRoutes.js');
const ErrorHandler = require("./middleware/ErrorHandler.js");

const server = express()

server.use(cors({ credentials: true, origin: `${process.env.FRONTEND_URL}` }))
server.use(morgan('dev'))
server.use(express.json())


server.use("/", routes);

// Error catching endware.
server.use(ErrorHandler)

module.exports = server