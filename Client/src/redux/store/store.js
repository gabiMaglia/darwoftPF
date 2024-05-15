import {configureStore} from '@reduxjs/toolkit'
import themeReducer  from '../slices/themeSlice'
import authReducer from '../slices/authSlice'
import categorySlice from '../slices/categorySlice'
import brandSlice from '../slices/brandSlice'
import productSlice from '../slices/productSlice'
import cartSlice from '../slices/cartSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
        categories: categorySlice,
        brands: brandSlice,
        products: productSlice,
        cartSlice: cartSlice
    }
})
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()