import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllCategoryGroups,
  getAllCategories,
  postCategory,
  postCategoryGroup,
  deleteCategory,
  deleteCategoryGroup,
} from "../../services/productServices/categoryServices";
// GET
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
// DELETE
export const deleteGroupAsync = createAsyncThunk(
  "cat/deleteGroupsAsync",
  async (id) => {
    const response = await deleteCategoryGroup(id);
    if (response.error) return { error: true };
    return id;
  }
);
export const deleteCategorieAsync = createAsyncThunk(
  "cat/deleteCategoriesAsync",
  async (id) => {
    const response = await deleteCategory(id);
    if (response.error) return { error: true };
    return id;
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
    // GET
    builder.addCase(getGroupsAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.groups = payload;
    });
    builder.addCase(getCategoriesAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.categories = payload;
    });
    // DELETE
    builder.addCase(deleteGroupAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.groups = state.groups.filter(e => e._id != payload );
    });
    builder.addCase(deleteCategorieAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.categories = state.categories.filter(e => e._id != payload );
    });

  },
});
// export const {" "} = catSlice.actions;
export default catSlice.reducer;
