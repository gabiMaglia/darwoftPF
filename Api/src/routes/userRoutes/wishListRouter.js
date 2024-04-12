const { Router } = require('express')
const {addProductToWishList, deleteAllProductsFromWishlist, deleteProductFromWishlist} = require('../../handlers/users/wishlistHandler')


const wishListRouter = Router()

wishListRouter.get('/', addProductToWishList)
wishListRouter.delete('/', deleteAllProductsFromWishlist)
wishListRouter.delete('/:id', deleteProductFromWishlist)

module.exports = wishListRouter