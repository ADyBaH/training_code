/* 
    For seconds = 62, your function should return 
    "1 minute and 2 seconds"
    For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
*/

function formatDuration (seconds) {
  if (seconds == 0) {return 'now'}
  let answer = '';
  let newDate = new Date(seconds*1000);
  
  let sec = newDate.getSeconds();
  let secText = (sec > 1) ? sec + ' seconds': sec + ' second';

  let min = newDate.getMinutes();
  let minText = (min > 1) ? min + ' minutes': min + ' minute';

  let hour = newDate.getHours() - 3;
  let hourText = (hour > 1) ? hour + ' hours': hour + ' hour';

  let day = Math.floor(seconds / 86400) % 365;
  let dayText = (day > 1) ? day + ' days': day + ' day';
  let year = newDate.getFullYear() - (new Date(0)).getFullYear();
  let yearText = (year > 1) ? year + ' years': year + ' year';

  let box = [yearText, dayText, hourText, minText, secText];
  let boxEnd = []
  for (let item of box) {
    if (item[0] != 0) {
      boxEnd.push(item)
    }
  }
  if (boxEnd.length == 1) {return boxEnd[0]};
  if (boxEnd.length == 2) {return `${boxEnd[0]} and ${boxEnd[1]}`};
  if (boxEnd.length > 2) {
    for (let item of boxEnd.slice(0, boxEnd.length -2)) {
      answer += `, ${item}`
    }
    answer += `, ${boxEnd.slice(boxEnd.length-2, boxEnd.length-1)} and ${boxEnd.slice(boxEnd.length-1)}`
    return answer.slice(2)
  }
}


// console.log(formatDuration(1))//, "1 second");
// console.log(formatDuration(62))//, "1 minute and 2 seconds");
// console.log(formatDuration(120))//, "2 minutes");
// console.log(formatDuration(3600))//, "1 hour");
// console.log(formatDuration(3662))//, "1 hour, 1 minute and 2 seconds")
// console.log(formatDuration(15731080))//, '182 days, 1 hour, 44 minutes and 40 seconds'
// console.log(formatDuration(132030240))

//Better solution1:
function formatDuration (seconds) {
  if(!seconds)return "now";
  var strout = "";
  var s = seconds%60;
  seconds = (seconds-s)/60;
  var m = seconds%60;
  seconds = (seconds-m)/60;
  var h = seconds%24;
  seconds = (seconds-h)/24;
  var d = seconds%365;
  seconds = (seconds-d)/365;
  var y = seconds;
  
  var english=[];
  if(y)english.push(y+" year"+(y>1?'s':''));
  if(d)english.push(d+" day"+(d>1?'s':''));
  if(h)english.push(h+" hour"+(h>1?'s':''));
  if(m)english.push(m+" minute"+(m>1?'s':''));
  if(s)english.push(s+" second"+(s>1?'s':''));
  
  return english.join(", ").replace(/,([^,]*)$/," and$1");
  
}
//Better solution 2:
const formatDuration = s => s == 0 ? 'now' :
     [Math.floor(s/60/60/24/365),
      Math.floor(s/60/60/24)%365,
      Math.floor(s/60/60)%24,  
      Math.floor(s/60)%60 ,
      s%60]
     .map((e,i)=> e + ' ' + ['year', 'day', 'hour', 'minute', 'second'][i] + (+e>1?'s': ''))
     .filter(e=> !/^0/.test(e))
     .join(', ')
     .replace(/,\s(?=[\d\s\w]*$)/, ' and ');
