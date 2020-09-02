import React from "react";
import TodoList from "./TodoList";

export default function Day({ day }) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const month = months[day.date.getMonth()];
    const dayOfMont = day.date.getDate().toString().padStart(2, "0");

    return(
        <div>
            <h3>{ day.day }</h3>
            <p>{`${month} ${dayOfMont}`}</p>
            <TodoList />
        </div>
    )
}