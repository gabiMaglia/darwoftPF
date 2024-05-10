import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllCategoryGroups,
  getAllCategories,
  postCategory,
  postCategoryGroup,
  deleteCategory,
  deleteCategoryGroup,
} from "../../services/productServices/categoryServices";

export const getGroupsAsync = createAsyncThunk(
  "cat/getGroupsAsync",

  async () => {
    const response = await getAllCategoryGroups();
    if (response.error) return { error: true };
    const groups = response.message.map((e) => e);
    return groups;
  }
);
export const getCategoriesAsync = createAsyncThunk(
  "cat/getCategoriessAsync",
  async () => {
    const response = await getAllCategories();
    if (response.error) return { error: true };
    const categories = response.message;
    return categories;
  }
);

const catSlice = createSlice({
  name: "categories",
  initialState: {
    groups: null,
    categories: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGroupsAsync.fulfilled, (state, { payload }) => {
      if (payload.error) null;
      state.groups = payload;
    });
    builder.addCase(getCategoriesAsync.fulfilled, (state, { payload }) => {
      if (payload.error) null;
      state.categories = payload;
    });
  },
});
// export const {" "} = catSlice.actions;
export default catSlice.reducer;
