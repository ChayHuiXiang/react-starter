import React, { useRef, useContext } from "react";
import classes from './NewTodo.module.css';
import TodosContext from "../store/todos-context";

const NewTodo:React.FC = () => {
    const ctx = useContext(TodosContext);
    const toDoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = toDoTextInputRef.current!.value;
        if (enteredText.trim().length === 0){
            return;
        }
        ctx.onAdd(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={toDoTextInputRef}/>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;