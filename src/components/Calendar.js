import React from "react";
import Day from "./Day";
import CalendarInfo from "./CalendarInfo";
import {useWeek} from "../context/DateContext";
import {TodoListContext} from "../context/TodoListContext";

export default function Calendar() {

    const { newArr } = useWeek();

    const theWeek = newArr.map(item => {
        return(
            <li key={item.day} className="col-md-3 list-group-item">
                <Day day={item} />
            </li>
        )
    })

    return(
        <TodoListContext>
            <div className="border border-primary">
                <CalendarInfo />
                <ul className="d-flex flex-wrap">
                    {theWeek}
                </ul>
            </div>
        </TodoListContext>
    );
}