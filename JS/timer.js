let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let seconds = Math.floor((time % (100 * 60)) / 1000);
let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
let hrs = Math.floor((time % (10000 * 60 * 60 * 60)) / (1000 * 60 * 60));
let timex = 0;

////////////////////////////////////////////// It Display time at quiz page //////////////////////////////////////////////

var showTime = setInterval(function () {
  if (seconds < 59) {
    seconds++;
  } else {
    minutes++;
    seconds = 0;
  }
  let formatted_sec = seconds < 10 ? `0${seconds}` : seconds;
  let formatted_min = minutes < 10 ? `0${minutes}` : minutes;
  let formatted_hrs = hrs < 10 ? `0${hrs}` : hrs;
  document.querySelector(".time").innerHTML = `${formatted_hrs}:${formatted_min}:${formatted_sec}`;
}, 1000)