const server = require("./src/app");
const { conn } = require("./src/db/conn");
const PORT = process.env.PORT;

const {swaggerDocs} = require('./src/utils/swagger')

conn()
  .then(() => {
    server.listen(PORT, () => {
      console.log(
        `Server listening at ${PORT}, running on ${process.env.NODE_ENV.toUpperCase()} enviroment`
      );
      swaggerDocs(server, PORT)
    });
  })
  .catch((error) => {
    console.log(error);
  });
