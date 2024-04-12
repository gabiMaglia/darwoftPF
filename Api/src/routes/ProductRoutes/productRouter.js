const { Router } = require ('express')
const {getAllProducts, getProductById, postNewProduct, updateProduct, deleteProduct } = require('../../handlers/products/productHandler')
const porductRouter = Router()

porductRouter.get("/", getAllProducts)
porductRouter.get("/:id", getProductById)

porductRouter.post("/", postNewProduct)
porductRouter.patch("/", updateProduct)
porductRouter.delete("/", deleteProduct)

module.exports = porductRouter