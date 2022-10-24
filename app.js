const clock = document.querySelector(".clock");
const count = document.querySelector(".count");

const showTime = () => {
  const date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let seconds = date.getSeconds();
  let am_pm;

  if (hours > 12) {
    am_pm = "PM";
    hours = hours - 12;
  } else {
    am_pm = "AM";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  setInterval(() => {
    showTime();
  }, 1000);

  count.innerHTML = `${hours}: ${mins}: ${seconds} ${am_pm}`;
};
showTime();

const date = document.querySelector(".date");

const showDate = () => {
  const D = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let year = D.getFullYear();
  let month = months[D.getMonth()];
  let day = D.getDate();
  let Day = days[D.getDay()];

  setInterval(() => {
    showDate();
  }, 86400000);

  date.innerHTML = `${year}, ${month}, ${day}: ${Day} `;
};
showDate();

const body = document.querySelector("body");
const button = document.querySelector(".btn");
const mood = document.querySelector(".dateLight");
const mooddy = document.querySelector(".countLight");
const clockBox = document.querySelector(".clockDark");

let btn = true;

button.addEventListener("click", function () {
  body.classList.toggle("dark");
  date.classList.toggle("dateLight");
  count.classList.toggle("countLight");
  clock.classList.toggle("clockDark");
  if (btn == true) {
    btn = false;
    button.style.backgroundColor = "#fff";
    button.style.color = "gold";
  } else {
    btn = true;
    button.style.backgroundColor = "goldenrod";
    button.style.color = "#fff";
  }
});
