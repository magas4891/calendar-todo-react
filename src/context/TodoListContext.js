import React, {useContext, useState} from "react";

const TodoContext = React.createContext();

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoListContext = ({ children }) => {
    const [ todoList, setTodoList ] = useState([
        {
            id: 0,
            title: 'to-do',
            done: false
        },
        {
            id: 1,
            title: 'to-do',
            done: true
        }
    ])


    return(
        <TodoContext.Provider value={{todoList}}>
            { children }
        </TodoContext.Provider>
    )
}