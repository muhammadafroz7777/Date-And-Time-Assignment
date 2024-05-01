var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var Day = document.getElementById("day")
var Month = document.getElementById("month")
var Year = document.getElementById("year")



setInterval(function(){
   
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    var MonthNames = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];

    hours.innerText = currentDate.getHours();
    minutes.innerText = currentDate.getMinutes();
    seconds.innerText = currentDate.getSeconds();
    Day.innerText = dayNames[currentDate.getDay()];
    Month.innerText = MonthNames[currentDate.getMonth()];
    Year.innerText = currentDate.getFullYear();
}, 1000); 

