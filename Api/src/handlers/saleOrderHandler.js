const { getAllOrders, postNewOrder, getOrderById, updateOrder } = require("../controllers/saleOrderController")

const getAllOrdersHandler = async(req, res, next) => {
    try {
        const response = getAllOrders()
    } catch (error) {
        next()
    }
}
const postNewOrderHandler = async(req, res, next) => {
    try {
        const {orderData} = req.body
        const response =  postNewOrder(orderData)
    } catch (error) {
        next()
    }
}
const getOrderByIdHandler = async(req, res, next) => {
    try {
        const {id} = req.params
        const response =  getOrderById(id)
    } catch (error) {
        next()
    }
}
const updateOrderHandler = async(req, res, next) => {
    try {
        const {id} = req.params
        const {orderData} = req.body
       const response =  updateOrder(id, orderData)
    } catch (error) {
        next()
    }
}


module.exports = {
    getAllOrdersHandler,
    postNewOrderHandler,
    getOrderByIdHandler,
    updateOrderHandler
}