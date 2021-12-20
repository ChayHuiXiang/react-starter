import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import TodosContext from "../store/todos-context";
import { useContext } from "react";

const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {ctx.toDosArray.map((item) => {
        return <TodoItem key={item.id} id={item.id} text={item.text} onRemove={ctx.onRemove}/>
      })}
    </ul>
  );
};

export default Todos;
