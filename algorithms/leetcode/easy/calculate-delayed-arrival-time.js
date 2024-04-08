/*
You are given a positive integer arrivalTime denoting the arrival time of a train in hours, 
and another positive integer delayedTime denoting the amount of delay in hours.

Return the time when the train will arrive at the station.

Note that the time in this problem is in 24-hours format.
*/

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  // better: return (arrivalTime + delayedTime) % 24
  let time = arrivalTime;

  for (let i = 0; i < delayedTime; i++) {
    time += 1;
    if (time === 24) {
      time = 0;
      continue;
    }
  }

  return time;
};
