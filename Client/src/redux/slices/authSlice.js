import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../services/authServices/authServices";

export const logInAsync = createAsyncThunk(
  "auth/logInAsync",
  async (credentials) => {
      const  response  = await loginUser(credentials);
      console.log(response)
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInAsync.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
