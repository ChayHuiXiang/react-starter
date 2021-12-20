import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CardContext from "../../store/cart-context";
import React, { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const ctx = useContext(CardContext);
  const { items } = ctx;
  const itemCount = items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
