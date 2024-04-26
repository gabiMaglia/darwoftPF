const { Router } = require ('express')
const { isAutenticated, isAuthorized } = require("../../middleware/tokenAuthMiddlewares");
const {getAllProductsHandler, getProductByIdHandler, postNewProductHandler, toggleProducStateHandler, updateProductHandler, deleteProductHandler } = require('../../handlers/products/productHandler')

const porductRouter = Router()

porductRouter.route('/')
  .get(getAllProductsHandler)
  .post(isAutenticated, isAuthorized, postNewProductHandler)
  porductRouter.route('/:id')
  .get(getProductByIdHandler)
  .patch(isAutenticated, updateProductHandler )
  .delete(isAutenticated, isAuthorized, deleteProductHandler)

  
  porductRouter.patch("/toogle_state/:id", isAutenticated, isAuthorized, toggleProducStateHandler)


module.exports = porductRouter