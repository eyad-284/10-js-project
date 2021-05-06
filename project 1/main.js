

const secEl = document.getElementById("sec"); 
const minEl = document.getElementById("min");
const hoursEl = document.getElementById("hours");
const dayEl = document.getElementById("days");
const wantedYear = "1 jan 2022";


function coundown(newYear){
	const newYearDate = new Date(newYear);
	const currentDate = new Date();
    const sec = Math.floor(((newYearDate - currentDate) / 1000)) % 60 ;
    const min = Math.floor((Math.floor(((newYearDate - currentDate) / 1000)) / 60)) % 60;
    const hours = Math.floor(((Math.floor(((newYearDate - currentDate) / 1000)) / 60) / 60)) % 24;
    const day = Math.floor(Math.floor(((Math.floor(((newYearDate - currentDate) / 1000)) / 60) / 60)) /24) ;
	
  secEl.innerHTML = sec;
  minEl.innerHTML = min;
  hoursEl.innerHTML = hours;
  dayEl.innerHTML = day;

};


setInterval(function(){coundown(wantedYear)},1000);

