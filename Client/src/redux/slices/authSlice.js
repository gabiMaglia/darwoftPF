import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, logOutUser } from "../../services/authServices/authServices";

export const logInAsync = createAsyncThunk(
  "auth/logInAsync",
  async (credentials) => {
    const {response} = await loginUser(credentials);
    if(!response) return {error: true}
    return response;
    
  }
);
export const logOutAsync = createAsyncThunk(
  "auth/logOutAsync",
  async (token) => {
    const {response} = await logOutUser(token);
    if(!response) return {error: true}
    
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(logInAsync.fulfilled, (state, { payload }) => {
      if (payload.error) null;
      state.user = payload.user;
      localStorage.setItem('token', payload.accesToken)
      
    });
    builder.addCase(logOutAsync.fulfilled, (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
  
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
