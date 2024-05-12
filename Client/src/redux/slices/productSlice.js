import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getProductById,
  postProduct,
  deleteProduct,
} from "../../services/productServices/productServices";
// GET
export const getProductsAsync = createAsyncThunk(
  "prod/getProducts",
  async () => {
    const response = await getAllProducts();
    if (response.error) return { error: true };
    const groups = response.message.map((e) => e);
    return groups;
  }
);
// POST
export const postProductAsync = createAsyncThunk(
  "cat/postProductAsync",
  async (productData) => {
    const response = await postProduct(productData);
    if (response.error) return { error: true };
    const category = response.message;
    return category;
  }
);
// DELETE
export const deleteProductsAsync = createAsyncThunk(
  "prod/deleteProducts",
  async (id) => {
    const response = await deleteProduct(id);
    if (response.error) return { error: true };
    const groups = response.message.map((e) => e);
    return groups;
  }
);
const productBrand = createSlice({
  name: "products",
  initialState: {
    products: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    // GET
    builder.addCase(getProductsAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.groups = payload;
    });
    // POST
    builder.addCase(postProductAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      console.log(payload)
      state.products = [...state.products, payload];
    });
    // DELETE
    builder.addCase(deleteProductsAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.products = state.products.filter((e) => e._id != payload);
    });
  },
});
// export const {" "} = brandSlice.actions;
export default productBrand.reducer;
