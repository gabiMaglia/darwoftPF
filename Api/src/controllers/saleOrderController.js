const { SaleOrder } = require("../db/conn")

const getAllOrders = async() => {
 const orders = SaleOrder.find()
 return orders
}
const postNewOrder = async(orderData) => {
    const {
        status,
        products,
        total,
        shippingAdress,
        paymentMethod,
        purchaseDate,
        shippingDate,
        trackingCode
    } = orderData
}
const getOrderById = async(id) => {
   const order = await SaleOrder.findById(id)
   return order 
}
const updateOrder = async(id, orderData) => {
   
}

module.exports = {
    getAllOrders,
    postNewOrder,
    getOrderById,
    updateOrder
}