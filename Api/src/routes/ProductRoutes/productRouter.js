const { Router } = require ('express')
const {getAllProductsHandler, getProductByIdHandler, postNewProductHandler, updateProductHandler, desactivateProductHandler, activateProductHandler, deleteProductHandler } = require('../../handlers/products/productHandler')
const porductRouter = Router()

porductRouter.get("/", getAllProductsHandler)
porductRouter.get("/:id", getProductByIdHandler)

porductRouter.post("/", postNewProductHandler)
porductRouter.patch("/", updateProductHandler)
porductRouter.get("/desactivate/:id", desactivateProductHandler)
porductRouter.get("/activate/:id", activateProductHandler)

porductRouter.delete('/:id', deleteProductHandler)

module.exports = porductRouter