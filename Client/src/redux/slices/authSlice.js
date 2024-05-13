import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logOutUser,
  persistanceCheck,
} from "../../services/authServices/authServices";
import { updateUser } from "../../services/userService";
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
export const logOutAsync = createAsyncThunk(
  "auth/logOutAsync",
  async () => {
    const { response } = await logOutUser();
    if (!response) return { error: true };

    return response;
  }
);
export const updateUserAsync = createAsyncThunk(
  "auth/updateUserAsync",
  async ({id, userData}) => {
    const  response = await updateUser(id, userData);
    if (!response) return { error: true };
    return response;
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLogged: null
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
        state.isLogged = false;
      }
      state.user = payload;
      state.isLogged = true;
    });
    builder.addCase(logOutAsync.fulfilled, (state) => {
      state.isLogged = false;
      state.user = null;
      localStorage.removeItem("token");
    });
    builder.addCase(updateUserAsync.fulfilled, (state, { payload }) => {
      if (!payload.error) {
        state.user = {...state.user, ...payload.message};
      }
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
