import React from "react";

export default function TodoListItems({ data }) {
    return(
        <div className="group-list">
            <input className="group-list-item" type="checkbox" checked={ data.done }  />
            <h6 className="group-list-item">{ data.title }</h6>
        </div>
    )
}