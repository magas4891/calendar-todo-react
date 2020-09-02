import React, {useCallback, useContext, useEffect, useRef, useState} from "react";

const WeekContext = React.createContext();

export const useWeek = () => {
    return useContext(WeekContext);
}

export const DateContext = ({ children }) => {
    const [ today, setToday ] = useState(new Date());
    // const today = useRef(new Date());
    const weekDays = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
    ];

    // useEffect(() => {
    //     const monday = today.setDate(today.getDate() - (today.getDay() - 1))
    //     const newArr = weekDays.map((el, index) => {
    //         return {
    //             day: el,
    //             date: new Date(monday.setDate(monday.getDate() + index))
    //         }
    //     })
    // });

    function monday(today) {
        console.log("today", today);
        // const todayy = today.current;
        // console.log("todayy", todayy);
        const numDayOfWeek = today.getDay() - 1;
        today.setDate(today.getDate() - numDayOfWeek);
        // console.log("todayyyyyy", todayy);
        return today.toString();
    }

    const newArr = weekDays.map((el, index) => {
        const thisMonday = new Date(monday(today));
        return {
            day: el,
            date: new Date(thisMonday.setDate(thisMonday.getDate() + index))
        }
    })


    const changeToday = (way) => {
        if ( way === "prev" ) {
            setToday(prevState => {
                return new Date(prevState.setDate(prevState.getDate() - 7))
            })
        // } else if ( way === "next" ) {
        //     setToday(prevState => {
        //         return new Date(prevState.setDate(prevState.getDate() + 7))
        //     })
        }
    }

    return(
        <WeekContext.Provider value={{
            today,
            newArr,
            changeToday
        }} >
            { children }
        </WeekContext.Provider>
    );
}