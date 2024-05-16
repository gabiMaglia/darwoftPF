import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllCategoryGroups,
  getAllCategories,
  postCategory,
  postCategoryGroup,
  deleteCategory,
  deleteCategoryGroup,
  updateCategory,
  updateCategoryGroup,
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
// POST
export const postCategoryAsync = createAsyncThunk(
  "cat/postCategoryAsync",
  async (categoryData) => {
    const response = await postCategory(categoryData);
    if (response.error) return { error: true };
    const category = response.message;
    return category;
  }
);
export const postCategoryGroupAsync = createAsyncThunk(
  "cat/postCategoryGroupAsync",
  async (groupData) => {
    const response = await postCategoryGroup(groupData);
    if (response.error) return { error: true };
    const group = response.message;
    return group;
  }
);
// UPDATE
export const updateCategoryAsync = createAsyncThunk(
  "cat/updateCategoryAsync",
  async ({ id, value }) => {
    const response = await updateCategory(id, value);
    if (response.error) return { error: true };
    const category = response.message;
    return category;
  }
);
export const updateCategoryGroupAsync = createAsyncThunk(
  "cat/updateCategoryGroupAsync",
  async ({ id, value }) => {
    const response = await updateCategoryGroup(id, value);
    if (response.error) return { error: true };
    const group = response.message;
    return group;
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
    // POST
    builder.addCase(postCategoryAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.categories = [...state.categories, payload];
    });
    builder.addCase(postCategoryGroupAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.groups = [...state.groups, payload];
    });
    // UPDATE
    builder.addCase(updateCategoryAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      const index = state.categories.findIndex((category) => category._id === payload._id);
      if (index !== -1) {
        state.categories[index] = payload;
      }
    });
    builder.addCase(
      updateCategoryGroupAsync.fulfilled,
      (state, { payload }) => {
        if (payload.error) return;
        const index = state.groups.findIndex(
          (group) => group._id === payload._id
        );
        if (index !== -1) {
          state.groups[index] = payload; 
        }
      }
    );
    // DELETE
    builder.addCase(deleteGroupAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.groups = state.groups.filter((e) => e._id != payload);
    });
    builder.addCase(deleteCategorieAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.categories = state.categories.filter((e) => e._id != payload);
    });
  },
});
// export const {" "} = catSlice.actions;
export default catSlice.reducer;
