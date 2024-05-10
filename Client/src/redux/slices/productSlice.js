import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getProductById, postProduct, deleteProduct   } from "../../services/productServices/productServices";

export const getProductsAsync = createAsyncThunk(
    "prod/getProducts",
  
    async () => {
      const response = await getAllProducts();
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
    }
})
// export const {" "} = brandSlice.actions;
export default productBrand.reducer;