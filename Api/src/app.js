require("dotenv").config();

const bodyparser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const routes = require('./routes/mainRoutes.js')

const server = express()

server.use(cors({ credentials: true, origin: `${process.env.FRONTEND_URL}` }))
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }));
server.use(bodyparser.urlencoded({extended: true}))
server.use(bodyparser.json())

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

module.exports = server