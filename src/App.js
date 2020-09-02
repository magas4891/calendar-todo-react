import React from 'react';
import './App.css';
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import {DateContext} from "./context/DateContext";

function App() {
    return (
        <DateContext>
            <div className={"container"}>
                <Header />
                <Calendar />
            </div>
        </DateContext>
    );
}

export default App;
