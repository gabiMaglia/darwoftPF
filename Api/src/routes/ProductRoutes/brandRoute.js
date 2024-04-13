const {Router} = require('express')
const {getAllBrands, getBrandById, createNewBrand, updateBrand, deleteBrand} = require('../../handlers/products/brandsHandler')
const brandRouter = Router()

brandRouter.get('/', getAllBrands)
brandRouter.get('/:id', getBrandById)

brandRouter.post('/', createNewBrand)
brandRouter.patch('/:id', updateBrand)
brandRouter.delete('/:id', deleteBrand)

module.exports = brandRouter