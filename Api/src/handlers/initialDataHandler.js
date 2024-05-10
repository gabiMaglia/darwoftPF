const { getInitialData } = require("../controllers/initialDataController");

const initialDataHandler = async (req, res, next) => {
  try {
    const response = await getInitialData();
    if (response)
      return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next();
  }
};

module.exports = { initialDataHandler };
