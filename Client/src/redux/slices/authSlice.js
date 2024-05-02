import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null
    },
    reducers: {
        logIn: (state, action) => {},
        logOut: (state) => {}
    }
})

export const {logIn, logOut} = authSlice.actions
export default authSlice.reducer