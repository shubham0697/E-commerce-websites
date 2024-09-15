import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const addToCart = state.filter(
          (product) => action.payload.id === product.id
        );
        if (addToCart.lenth > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }

      case "INCREASE":
        const Increment = state.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
        return Increment;

      case "DECREASE":
        const Decrement = state.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
        return Decrement;

      case "REMOVE":
        const Delete = state.filter(
          (product) => product.id !== action.payload.id
        );
        return Delete;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
  );
};
