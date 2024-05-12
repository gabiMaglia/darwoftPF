import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteBrand, getAllBrands, postBrand } from "../../services/productServices/brandServices";
// GET
export const getAllBrandsAsync = createAsyncThunk(
  "brand/getAllBrandsAsync",
  async () => {
    const response = await getAllBrands();
    if (response.error) return { error: true };
    const brands = response.message.map((e) => e);
    return brands;
  }
);
// POST
export const postBrandAsync = createAsyncThunk(
  "brand/postBrandAsync",
  async (brandData) => {
    const response = await postBrand(brandData);
    if (response.error) return { error: true };
    return response;
  }
);
// UPDATE
// DELETE
export const deleteBrandsAsync = createAsyncThunk(
  "brand/deleteBrandsAsync",
  async (id) => {
    const response = await deleteBrand(id);
    if (response.error) return { error: true };
    console.log(id)
    return id;
  }
);

const brandSlice = createSlice({
  name: "brand",
  initialState: {
    brands: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder.addCase(getAllBrandsAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.brands = payload;
    });
    // POST
    builder.addCase(postBrandAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.brands.push(payload)
    });
    // DELETE
    builder.addCase(deleteBrandsAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.brands = state.brands.filter(e => e._id != payload );
    });
  },
});
// export const {" "} = brandSlice.actions;
export default brandSlice.reducer;
