import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getProductById, postProduct, deleteProduct   } from "../../services/productServices/productServices";
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
    name: 'products',
    initialState:{
        products: null
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getProductsAsync.fulfilled, (state, { payload }) => {
            if (payload.error) return;
            state.groups = payload;
          });
        builder.addCase(deleteProductsAsync.fulfilled, (state, { payload }) => {
          if (payload.error) return;
          state.products = state.products.filter(e => e._id != payload );
          });
    }
})
// export const {" "} = brandSlice.actions;
export default productBrand.reducer;