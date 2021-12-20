import Todo from "../models/Todo";
import React, { useState } from "react";

const TodosContext = React.createContext<{
    toDosArray: Todo[];
    onAdd: (id: string) => void;
    onRemove: (text: string) => void;
}>({
    toDosArray: [],
    onRemove: (id: string) => {},
    onAdd: (text: string) => {},
});

export const TodosContextProvider: React.FC = (props) => {
    const [toDosArray, setToDosArray] = useState<Todo[]>([]);
    const removeTodoHandler = (id: string) => {
        setToDosArray((prevState) => prevState.filter((todo) => todo.id !== id));
    };

    const addTodoHandler = (text: string) => {
        setToDosArray((prevState) => [...prevState, new Todo(text)]);
    }
    return <TodosContext.Provider value={{
        toDosArray,
        onRemove: removeTodoHandler,
        onAdd: addTodoHandler
    }}>
        {props.children}
    </TodosContext.Provider>;
};

export default TodosContext;