var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

function CalDateLeft() {
  const currentDate = new Date();
  const newYearDate = new Date(2022, 01, 01);
  var diff = newYearDate - currentDate;
  days.innerHTML = Math.floor(diff / (1000 * 3600 * 24));
  hours.innerHTML = Math.floor((diff / (1000 * 3600)) % 24);
  minutes.innerHTML = Math.floor((diff / (1000 * 60)) % 60);
  seconds.innerHTML = Math.floor((diff / 1000) % 60);
  console.log(diff);
}

CalDateLeft();
setInterval(CalDateLeft, 1000);
