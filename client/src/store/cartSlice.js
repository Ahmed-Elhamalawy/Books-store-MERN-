import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { title, author, price, description, quantity, productId } =
        action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({
          title,
          author,
          price,
          description,
          quantity,
          productId,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // removeFromCart(state, action) {
    //   state.items = state.items.filter(
    //     (item) => item.productId !== action.payload.productId
    //   );
    //   localStorage.setItem("cart", JSON.stringify(state.items));
    // },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
