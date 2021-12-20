import { uiActions } from "./ui-slice";
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
        uiActions.setNotification({
          status: "pending",
          title: "Fetching",
          message: "Fetching cart data!",
        })
      );

    const fetchData = async () => {
      const response = await fetch(
        "https://carebot-b6f2e-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      const responseData = await response.json();
      return responseData;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Fetched cart data successfully!",
        })
      );
      dispatch(cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
      }));
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://carebot-b6f2e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
