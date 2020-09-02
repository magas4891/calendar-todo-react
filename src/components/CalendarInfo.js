import React from "react";
import {useWeek} from "../context/DateContext";

export default function CalendarInfo({ today }) {

    const { changeToday } = useWeek();

    return(
        <div className="border">
            Header
            <button className="btn btn-primary" onClick={() => changeToday('prev')}>Prev</button>
            <button className="btn btn-primary" onClick={() => changeToday('next')}>Next</button>
        </div>
    )
}