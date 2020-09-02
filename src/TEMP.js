
// function that defines Monday

function monday() {
    const today = new Date();
    const numDayOfWeek = today.getDay() - 1;
    today.setDate(today.getDate() - numDayOfWeek);
    return today.toString();
}

// function creates array with days of the week

function days() {
    const week = [];
    for (let i=0; i<=6; i++) {
        const mondayy = new Date(monday());
        week.push({[i]: new Date(mondayy.setDate(mondayy.getDate() + i))})
    }
}

// function that calculates count of weeks in the month

function getWeeksInMonth(month, year){
    const weeks=[],
        firstDate=new Date(year, month, 1),
        lastDate=new Date(year, month+1, 0),
        numDays= lastDate.getDate();

    let start=1;
    let end=7-firstDate.getDay();
    while(start<=numDays){
        weeks.push({start:start,end:end});
        start = end + 1;
        end = end + 7;
        if(end>numDays)
            end=numDays;
    }
    return weeks;
}

// list of months

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

// list of weekdays

const weekDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

// variables

const today = new Date();
const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();
const numDayOfWeek = today.getDay() - 1;
const dayOfWeek = weekDays[today.getDay()];