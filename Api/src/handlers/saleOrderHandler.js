const {
  getAllOrders,
  postNewOrder,
  getOrderById,
  updateOrder,
} = require("../controllers/saleOrderController");

const getAllOrdersHandler = async (req, res, next) => {
  try {
    const response = getAllOrders();
    if (response)
      return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next();
  }
};
const postNewOrderHandler = async (req, res, next) => {
  try {
    const { orderData } = req.body;
    const response = postNewOrder(orderData);
    if (response)
      return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next();
  }
};
const getOrderByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = getOrderById(id);
    if (response)
      return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next();
  }
};
const updateOrderHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { orderData } = req.body;
    const response = updateOrder(id, orderData);
    if (response)
      return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next();
  }
};

module.exports = {
  getAllOrdersHandler,
  postNewOrderHandler,
  getOrderByIdHandler,
  updateOrderHandler,
};
