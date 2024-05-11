import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logOutUser,
  persistanceCheck,
} from "../../services/authServices/authServices";
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
    console.log('object')
    const { data } = await persistanceCheck();
    console.log('object')
    if (!data) return { error: true };
    return data.response;
  }
);
export const logOutAsync = createAsyncThunk(
  "auth/logOutAsync",
  async () => {
    const { response } = await logOutUser();
    if (!response) return { error: true };

    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logInAsync.fulfilled, (state, { payload }) => {
      if (payload.error) null;
      state.user = payload.user;
      localStorage.setItem("token", payload.accesToken);
    });
    builder.addCase(checkPersistanceAsync.fulfilled, (state, { payload }) => {
      if (payload.error) {

        localStorage.removeItem("token");
      }
      state.user = payload;
    });
    builder.addCase(logOutAsync.fulfilled, (state) => {
      state.user = null;
      localStorage.removeItem("token");
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
