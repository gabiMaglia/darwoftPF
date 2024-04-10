require("dotenv").config();

const express = require('express')
const routes = require('./routes/mainRoutes.js')

const morgan = require('morgan')
const cors = require('cors')


const server = express()

server.use(cors({ credentials: true, origin: `${process.env.FRONTEND_URL}` }))
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }));

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

module.exports = server