import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const brandSlice = createSlice({
    name: 'brand',
    initialState:{
        brands: null
    },
    reducers: {},
    extraReducers: (builder) => {

    }
})
// export const {" "} = brandSlice.actions;
export default brandSlice.reducer;