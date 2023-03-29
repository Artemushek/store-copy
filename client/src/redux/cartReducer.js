import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };

export const cartSlice = createSlice({ name: "cart", initialState, reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.products.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.products[itemIndex].quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => { 
      state.products = state.products.filter(item => item.id !== action.payload); 
    },
    resetCart: (state) => { state.products = [] },
    clearCart: (state) => { return initialState }
}});

export const { addToCart, removeItem, resetCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
