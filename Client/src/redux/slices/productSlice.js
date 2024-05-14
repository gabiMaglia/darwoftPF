import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getProductById,
  postProduct,
  deleteProduct,
  updateProduct,
} from "../../services/productServices/productServices";
// GET
export const getProductsAsync = createAsyncThunk(
  "prod/getProducts",
  async () => {
    const response = await getAllProducts();
    if (response.error) return { error: true };

    return response.message;
  }
);
export const getProductsByIdAsync = createAsyncThunk(
  "prod/getProductsByIdAsync",
  async (id) => {
    const response = await getProductById(id);
    if (response.error) return { error: true };
    return response.message;
  }
);
// POST
export const postProductAsync = createAsyncThunk(
  "prod/postProductAsync",
  async (productData) => {
    const response = await postProduct(productData);
    if (response.error) return { error: true };
    const category = response.message;
    return category;
  }
);
// POST
export const updateProductAsync = createAsyncThunk(
  "prod/updateProductAsync",
  async ({ id, value }) => {
    const response = await updateProduct(id, value);
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
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    productsToShow: null,
    productDetail: null,
  },
  reducers: {
    clearProductDetail: (state) => {
      state.productDetail = null;
    },
    filterByCategory: (state, { payload }) => {
      state.productsToShow = state.products.filter(
        (product) => product.category.catName === payload
      );
      console.log(state.productsToShow);
    },
    filterByBrand: (state, { payload }) => {
      state.productsToShow = state.products.filter(
        (product) => product.brand.brandName === payload
      );
      console.log(state.productsToShow);
    },
    filterByGroup: (state, { payload }) => {
      state.productsToShow = state.products.filter(
        (product) => product.category.group === payload
      );
    },

    clearFilters: (state) => {
      state.productsToShow = state.products;
    },

    sortByName: (state, { payload }) => {
      state.productsToShow = [...state.productsToShow].sort((a, b) => {
        if (payload === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    },

    sortByPrice: (state, { payload }) => {
      console.log(payload)
      state.productsToShow = [...state.productsToShow].sort((a, b) => {
        if (payload === "mayor") {
          return a.price < b.price;
        } else {
          return a.price > b.price;
        }
      });
    },
  },

  extraReducers: (builder) => {
    // GET
    builder.addCase(getProductsAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.products = payload;
      state.productsToShow = payload;
    });
    builder.addCase(getProductsByIdAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.productDetail = payload;
    });
    // POST
    builder.addCase(postProductAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.products = [...state.products, payload];
    });
    // UPDATE
    builder.addCase(updateProductAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      const index = state.products.findIndex(
        (product) => product._id === payload._id
      );
      if (index !== -1) {
        state.products[index] = payload;
      }
    });
    // DELETE
    builder.addCase(deleteProductsAsync.fulfilled, (state, { payload }) => {
      if (payload.error) return;
      state.products = state.products.filter((e) => e._id != payload);
    });
  },
});
export const {
  clearProductDetail,
  filterByCategory,
  filterByBrand,
  filterByGroup,
  sortByName,
  sortByPrice,
  clearFilters,
} = productSlice.actions;
export default productSlice.reducer;
