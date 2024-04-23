const { Router } = require("express");
const {
  getAllBrandsHandler,
  createNewBrandHandler,
  updateBrandHandler,
  deleteBrandHandler,
  getBrandByIdHandler
} = require("../../handlers/products/brandHandler");
const brandRouter = Router();

brandRouter.get("/", getAllBrandsHandler);
brandRouter.get("/:id", getBrandByIdHandler);
brandRouter.post("/", createNewBrandHandler);
brandRouter.patch("/:id", updateBrandHandler);
brandRouter.delete("/:id", deleteBrandHandler);

module.exports = brandRouter;
