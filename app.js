//Create the variables to select date and hour spans
let currentDateSpan = document.querySelector("#date-value");
let currentHourSpan = document.querySelector("#hour-value");


//Functions to get the time and date + put them in the spans + setInterval to update the values each second
let currentDate = (date = new Date()) => {
    let days = date.getDate();
    let months = date.getMonth() + 1;
    let years = date.getFullYear();
    currentDateSpan.innerHTML = `${days}-${months}-${years}`;
}
setInterval(currentDate, 1000);

let currentTime = (date = new Date()) => {
    let hours = date.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = date.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    currentHourSpan.innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(currentTime, 1000);

//Note: setInterval(currentTime(), 1000) is wrong, remove () since setInterval runs it already.