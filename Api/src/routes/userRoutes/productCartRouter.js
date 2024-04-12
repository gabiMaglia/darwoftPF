const { Router } = require ('express')

const {
    addProductToCart,
    deleteAllProductsFromCart,
    deleteProductFromCart,
  } = require('../../handlers/users/productCartHandler')

const productCartRouter = Router()

productCartRouter.get('/', addProductToCart)
productCartRouter.delete('/', deleteAllProductsFromCart)
productCartRouter.delete('/:id', deleteProductFromCart)


module.exports = productCartRouter