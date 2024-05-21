import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logOutUser,
  persistanceCheck,
} from "../../services/authServices/authServices";
import {
  addToWishlist,
  deleteUser,
  removeFromWishlist,
  updateUser,
} from "../../services/userService";
import { Navigate } from "react-router-dom";
// TODO SIGN IN ASYNC
export const logInAsync = createAsyncThunk(
  "auth/logInAsync",
  async (credentials) => {
    const { response } = await loginUser(credentials);
    if (!response) return { error: true };
    return response;
  }
);
export const checkPersistanceAsync = createAsyncThunk(
  "auth/checkPersistanceAsync",
  async () => {
    const { data } = await persistanceCheck();
    if (!data) return { error: true };

    return data.response;
  }
);
export const logOutAsync = createAsyncThunk("auth/logOutAsync", async () => {
  const { response } = await logOutUser();
  if (!response) return { error: true };

  return response;
});
export const updateUserAsync = createAsyncThunk(
  "auth/updateUserAsync",
  async ({ id, userData }) => {
    const response = await updateUser(id, userData);
    if (!response) return { error: true };
    return response;
  }
);
export const deleteUserAsync = createAsyncThunk(
  "auth/deleteUserAsync",
  async () => {
    const response = await deleteUser();
    if (!response) return { error: true };

    return true;
  }
);

export const addToWishListAsync = createAsyncThunk(
  "auth/addToWishListAsync",
  async (productId) => {
    const response = await addToWishlist(productId);
    if (!response) return { error: true };

    return response;
  }
);
export const removeFromWishlistAsync = createAsyncThunk(
  "auth/removeFromWishlistAsync",
  async (productId) => {
    const response = await removeFromWishlist(productId);
    if (!response) return { error: true };

    return productId;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLogged: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logInAsync.fulfilled, (state, { payload }) => {
      if (payload.error) null;
      state.user = payload.user;
      state.isLogged = true;
      localStorage.setItem("token", payload.accesToken);
    });
    builder.addCase(checkPersistanceAsync.fulfilled, (state, { payload }) => {
      if (payload.error || !payload) {
        localStorage.removeItem("token");
        state.user = null;
        state.isLogged = false;
        Navigate("/");
      }
      state.user = payload;
      state.isLogged = true;
    });
    builder.addCase(logOutAsync.fulfilled, (state) => {
      state.isLogged = false;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
    });
    builder.addCase(updateUserAsync.fulfilled, (state, { payload }) => {
      if (!payload.error) {
        state.user = { ...state.user, ...payload.message };
      }
    });
    builder.addCase(deleteUserAsync.fulfilled, (state, { payload }) => {
      if (!payload.error) {
        state.user = null;
        state.isLogged = null;
      }
    });
    builder.addCase(addToWishListAsync.fulfilled, (state, { payload }) => {
      if (!payload.error) {
        state.user.wishlist = payload.message.wishlist;
      }
    });
    builder.addCase(removeFromWishlistAsync.fulfilled, (state, { payload }) => {
      if (!payload.error) {
        state.user.wishlist = state.user.wishlist.filter((e) => e !== payload);
      }
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
