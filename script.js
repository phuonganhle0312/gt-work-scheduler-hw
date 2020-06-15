$(document).ready(function () { // current time from moment
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    // made date heading the current time
    let $dateHeading = $('#currentDay');
    $dateHeading.text(currentTime);
    // testing variable
    const test = false;
    // test in non standard hours
    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');
    // setting time for non standard hours
    if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
    }
    // plan block variable
    let $planBlock = $('#planContainer');
    $planBlock.empty();
    // fixed 9-5 work day hours with an index for array for offset from hour
    for (let hour = 9; hour <= 17; hour++) {
        let index = hour - 9;

    //building plan blocks
    let $planRow= $('<div>');
    $planRow.addClass('row');
    $planRow.attr('hourIndex', hour);
    //time heading
    //divs
    let $timeDiv= $('<div>');
    $timeDiv.addClass("time-div");
    const $timeBox = $('<span>');
    $timeBox.addClass("time-block");
    


    $planBlock.append($planRow);
    }
    // getting todos from localStorage. JSON parse string into object
    let savedPlans = JSON.parse(localStorage.getItem("savedPlans"));
    if (test) {
        console.log(savedPlans);
    }
    // local storage plans update plan array
    if (savedPlans !== null) {
        planArray = savedPlans;
    } else {
        planArray = new Array(9);
    }


});
