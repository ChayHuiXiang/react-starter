import CartContext from "./cart-context";
import React, { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log("Add item triggered");
  let updatedTotalAmount;
  let updatedItems;
  switch (action.type) {
    case "ADD_ITEM":
      updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const existingItemIndex = state.items.findIndex((item) => {
        return item.id === action.item.id;
      });
      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex].amount += 1;
      } else {
        updatedItems = [...state.items, action.item];
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE_ITEM":
      const removedItemIndex = state.items.findIndex((item) => {
        return (item.id = action.id);
      });
      updatedTotalAmount =
        state.totalAmount - state.items[removedItemIndex].price;
      if (state.items[removedItemIndex].amount === 1) {
        updatedItems = state.items.filter((item) => {
          return item.id !== action.id;
        });
      } else {
        updatedItems = [...state.items];
        updatedItems[removedItemIndex].amount -= 1;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addCartItem = (item) => {
    dispatchCartAction({ item: item, type: "ADD_ITEM" });
  };

  const removeCartItem = (id) => {
    dispatchCartAction({ id: id, type: "REMOVE_ITEM" });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addCartItem,
        removeItem: removeCartItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
