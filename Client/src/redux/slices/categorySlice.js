import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const catSlice = createSlice({
    name: 'cat',
    initialState:{
        groups: null,
        categories: null
    },
    reducers: {},
    extraReducers: (builder) => {

    }
})
// export const {" "} = catSlice.actions;
export default catSlice.reducer;