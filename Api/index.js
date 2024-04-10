const server = require("./src/app");
const {conn} = require("./src/db/conn")
const PORT = 3001;


conn().then(()=> {
  server.listen(PORT, () => {
    console.log(
      `Server listening at ${PORT}, running on ${process.env.NODE_ENV.toUpperCase()} enviroment`
    );
  });
}).catch((error) => {
  console.log(error)
})


