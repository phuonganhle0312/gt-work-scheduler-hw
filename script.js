$(document).ready(function() {
// current time from moment
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
//made date heading the current time
let $dateHeading = $('#currentDay');
$dateHeading.text(currentTime);
// testing variable
const test= false;

let nowHour24 = moment().format('H');
let nowHour12 = moment().format('h');

if (test){
    nowHour24= 13;
    nowHour12= 1;
}



});