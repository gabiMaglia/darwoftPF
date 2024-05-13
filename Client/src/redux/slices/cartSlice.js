import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (cartItems, cartTotalItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
  localStorage.setItem("cartTotal", JSON.stringify(cartTotalItems));
};

export const cartSlice = createSlice({
  name: "productCart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
    cartTotalItems: JSON.parse(localStorage.getItem("cartTotal")) || 0,
  },
  reducers: {
    addItem: (state, { payload }) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === payload._id
      );
      if (!existingItem) {
        state.cartItems = [...state.cartItems, {...payload, quantity:1}];
        state.cartTotalItems += 1 
       
      }
      updateLocalStorage(state.cartItems, state.cartTotalItems);
    },
    incrementAmount: (state, { payload }) => {
      const existingItem = state.cartItems.find(
        (item) => item._id == payload._id
      );
      if (existingItem && existingItem.quantity < existingItem.stock) {
        existingItem.quantity += 1;
      }
      state.cartTotalItems = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      updateLocalStorage(state.cartItems, state.cartTotalItems);
    },
    restAmount: (state, { payload }) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === payload._id
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== payload._id
        );
      }
      state.cartTotalItems = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      updateLocalStorage(state.cartItems, state.cartTotalItems);
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== payload._id
      );
      state.cartTotalItems = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      updateLocalStorage(state.cartItems, state.cartTotalItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotalItems = 0;
      updateLocalStorage(state.cartItems, state.cartTotalItems);
    },
  },
});

export const { addItem, incrementAmount, restAmount, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
