import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import React, {useRef, useContext, useState} from 'react';
import CartContext from '../../../store/cart-context';

const MealItemForm = props => {
    const ctx = useContext(CartContext);
    const inputRef = useRef();
    const [amountError, setAmountError] = useState(false);
    
    const addItemHandler = (event) => {
        event.preventDefault();
        const enteredAmount = parseInt(inputRef.current.value);
        if (inputRef.current.value.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5){
            setAmountError(true);
            return;
        } else {
            setAmountError(false);
        }
        const newItem = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: enteredAmount,
        };
        ctx.addItem(newItem);
    }
    
    return (
        <form className={classes.form} onSubmit={addItemHandler}>
            <Input label="Amount" ref={inputRef} input={{
                id: 'amount_' + props.id,
                type:"number",
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1',
            }}/>
            <button type="submit">+ Add</button>
            {amountError && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
}

export default MealItemForm;