import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBrands } from "../../services/productServices/brandServices";

export const getAllBrandsAsync = createAsyncThunk(
    'brand/getAllBrandsAsync',
    
    async() => {
        const response = await getAllBrands() 
        if (response.error) return { error: true };
        const brands = response.message.map(e => e)
        return brands;
    }
)

const brandSlice = createSlice({
    name: 'brand',
    initialState:{
        brands: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBrandsAsync.fulfilled ,(state, {payload}) => {
            if (payload.error) null;
           state.brands = payload
        })
    }
})
// export const {" "} = brandSlice.actions;
export default brandSlice.reducer;