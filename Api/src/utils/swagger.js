const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// METADATA INFO API

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "fake eCommerce API", version: "1.0.0" },
  },
  apis: ["./src/routes/mainRouter.js", "./src/routes/userRoutes/userRouter.js"],
  
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/docs.json", (req, res) => {
    res.setHeader("Content-type", "aplication-json");
    res.send(swaggerSpec);
  });

  console.log(`
        Version 1 Is available at http: //localhost:${port}/api/docs
    `);
};

module.exports = { swaggerDocs };
