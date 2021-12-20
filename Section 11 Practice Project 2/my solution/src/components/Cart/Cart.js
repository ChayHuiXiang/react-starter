import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CardContext from '../../store/cart-context';
import React, {useContext} from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const ctx = useContext(CardContext);
  const itemsArray = ctx.items;

  const cartItemAddHandler = (item) => {
    console.log("onAdd");
    ctx.addItem({
      ...item,
      amount: 1,
    });
  }

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {itemsArray.map((item) => {
        return <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)}/>;
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        {ctx.items.length > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
