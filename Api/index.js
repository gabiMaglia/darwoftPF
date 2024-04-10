const server = require('./src/app')
const PORT = 3001


server.listen(PORT, () => {
    console.log( `Server listening at ${PORT}, running on ${process.env.NODE_ENV.toUpperCase()}_DB enviroment` )
   
}) 