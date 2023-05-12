/*
Kata
Given the angle (in degrees) of the hour-hand, 
return the time in 12 hour HH:MM format. 
Round down to the nearest minute.

Examples
12:00 = 0 degrees

03:00 = 90 degrees

06:00 = 180 degrees

09:00 = 270 degrees

12:00 = 360 degrees
*/

// my solution:
var whatTimeIsIt = function (angle) {
  if (angle === 0) return "12:00";
  let hours = Math.floor(angle / 0.5 / 60);
  if (hours === 0) hours = 12;
  const minuts = Math.floor((angle / 0.5) % 60);
  return `${hours < 10 ? "0" + String(hours) : hours}:${
    minuts < 10 ? "0" + String(minuts) : minuts
  }`;
};

// Better solution:
var whatTimeIsIt = function (angle) {
  let hour = Math.floor(angle / 30),
    minutes = Math.floor((angle % 30) * 2);
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (hour <= 0) {
    hour = 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return hour + ":" + minutes;
};

// or:
var whatTimeIsIt = (deg) =>
  [deg / 30 | 0 || 12, deg % 30 * 2 | 0]
    .map(x => ('0' + x).slice(-2)).join(':');