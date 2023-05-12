// Task return the angle between the two hands of a 12-hour analog clock in radians.
function handAngle (date) {
  let newdate = new Date ( Date.parse(date) );
  let a = Math.PI
  let m = newdate.getMinutes();
  let h = newdate.getUTCHours()
  if (h == 12 && m == 0 || h == 0 && m == 0) {return 0.0}
  let kekw = Math.abs((h + m / 60) * 30 - (m * 6))
  if (h == 6 && m == 0) {return a}
  if (kekw > 180) { return (360 - kekw) * a / 180}
  return kekw * a / 180
}

// 2022-09-16T00:00:57.493Z
console.log(handAngle('2022-09-16T12:00:03.373Z')) // , 3.141592653589793
console.log(handAngle('2022-09-16T00:00:57.493Z'))

//Better solution 1:
function handAngle (date) {
  var pi2 = Math.PI*2;
  var m = date.getMinutes()/60, h = (date.getHours()+m)/12;
  
  var angle = Math.abs(h-m)*pi2;
  return Math.min( angle, pi2-angle )

}
//Better solution 2:
function handAngle (date) {
  let m = (date.getMinutes()%60)/60;
  let h = (date.getHours()%12 + m)/12;  
  let i = Math.abs(h - m);
  i = i > 0.5 ? 1 - i : i;
  
  return 2 * Math.PI * i;
}