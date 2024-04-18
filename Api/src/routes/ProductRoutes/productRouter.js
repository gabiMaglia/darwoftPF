const { Router } = require ('express')
const {getAllProductsHandler, getProductByIdHandler, postNewProductHandler, updateProductHandler, deleteProductHandler } = require('../../handlers/products/productHandler')
const porductRouter = Router()

porductRouter.get("/", getAllProductsHandler)
porductRouter.get("/:id", getProductByIdHandler)

porductRouter.post("/", postNewProductHandler)
porductRouter.patch("/", updateProductHandler)
porductRouter.delete("/", deleteProductHandler)

module.exports = porductRouter