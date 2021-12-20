import classes from './TodoItem.module.css';

const TodoItem: React.FC<{text: string; id: string; onRemove: (text:string)=>void}> = (props) => {
    const toDoClickHandler = () => {
        props.onRemove(props.id);
    };
    return <li className={classes.item} onClick={toDoClickHandler}>{props.text}</li>;
};

export default TodoItem;