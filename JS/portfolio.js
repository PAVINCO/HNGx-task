"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // Function to update the current day of the week
    function updateDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
        document.getElementById("dayOfWeek").textContent = dayOfWeek;
    }

    // Function to update the current UTC time in milliseconds
    function updateUTCTime() {
        const currentTime = new Date().getTime();
        document.getElementById("utcTime").textContent = currentTime;
    }

    // Call the functions to update data attributes
    updateDayOfWeek();
    updateUTCTime();
});

