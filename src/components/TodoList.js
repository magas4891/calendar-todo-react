import React from "react";
import TodoListItems from "./TodoLostItems";
import { useTodo } from "../context/TodoListContext";

export default function TodoList() {
    const { todoList } = useTodo();

    const items = todoList.map((el, index) => {
        return(
            <li key={index} className="list-group-item">
                <TodoListItems data={ el } />
            </li>
        );
    })

    return (
        <ul className="list-group todo-list">
            { items }
        </ul>
    );
}
