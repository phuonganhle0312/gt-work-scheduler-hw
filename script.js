$(document).ready(function() {
// current time from moment
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
//made date heading the current time
let $dateHeading = $('#currentDay');
$dateHeading.text(currentTime);
// testing variable
const test= false;
//test in non standard hours
let nowHour24 = moment().format('H');
let nowHour12 = moment().format('h');
//setting time for non standard hours
if (test){
    nowHour24= 13;
    nowHour12= 1;
}
//getting todos from localStorage. JSON parse string into object
let savedPlans = JSON.parse(localStorage.getItem("savedPlans"));
if (test) {console.log(savedPlans);}
//local storage plans update plan array
if (savedPlans !== null){
    planArray = savedPlans;
}else {
    planArray=new Array(9);
}

});