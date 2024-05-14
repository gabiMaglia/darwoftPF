require("dotenv").config();

const express = require('express')
// const morgan = require('morgan')
const cors = require('cors')

const routes = require('./routes/mainRoutes.js');
const errorHandler = require("./middleware/ErrorHandler.js");


const server = express()
server.use(cors({ credentials: true, origin: `${process.env.FRONTEND_URL}` }))
server.use(express.json())


server.use("/api", routes);

// Error catching endware.
server.use(errorHandler)

module.exports = server
