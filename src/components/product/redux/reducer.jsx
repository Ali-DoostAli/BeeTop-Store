import {
  ADD_TO_CART,
  PLUS_TO_QUANTITY,
  REMOVE_FROM_CART,
  MINUS_TO_QUANTITY,
} from "./actions";

export function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
        const products = state.filter((item) => item.id !== action.payload.id);
        return [...products, product];
      }
      action.payload.quantity = 1;
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);

    case PLUS_TO_QUANTITY:
      const productPlus = state.find((item) => item.id === action.payload.id);
      if (productPlus) {
        productPlus.quantity += 1;
        const products = state.filter((item) => item.id !== action.payload.id);
        return [...products, productPlus];
      }

    case MINUS_TO_QUANTITY:
      const productMinus = state.find((item) => item.id === action.payload.id);

      if (productMinus) {
        if (productMinus.quantity <= 0) return state;

        productMinus.quantity -= 1;

        const products = state.filter((item) => item.id !== action.payload.id);
        return [...products, productMinus];
      }

    default:
      return state;
  }
}
