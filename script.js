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
    let planArray =[];

    //saving to local storage
    $(document).on('click','i',function(event){
    event.preventDefault();
    let $index = $(this).attr('save');
    let inputId = '#input-'+$index;
    let $value =$(inputId).val();
    planArray[$index]= $value;

    });


    // plan block variable
    let $planBlock = $('#planContainer');
    $planBlock.empty();
    // fixed 9-5 work day hours with an index for array for offset from hour
    for (let hour = 9; hour <= 17; hour++) {
        let index = hour - 9;
        // building plan blocks
        let $planRow = $('<div>');
        $planRow.attr('class', 'row');
        $planRow.attr('hourIndex', hour);

        // TIME
        // div to hold box
        let $timeDiv = $('<div>');
        $timeDiv.addClass("time-div");
        // time box contains time
        const $timeBox = $('<span>');
        $timeBox.addClass("time-block");
        // hours to display
        let displayTime = 0;
        let amPm = "";
        if (hour > 12) {
            displayTime = hour - 12;
            amPm = "pm";
        } else {
            displayTime = hour;
            amPm = "am"
        }
        // display time in timebox
        $timeBox.text(`${displayTime} ${amPm}`);
        // append time box to time div
        $planRow.append($timeDiv);
        $timeDiv.append($timeBox);
        // append row to container
        $planBlock.append($planRow);
        // INPUT
        let $textInput = $('<input>');
        $textInput.attr('id', `input-${index}`);
        $textInput.attr('hourIndex', index);
        $textInput.attr('type', 'text');
        
        // retreive index from planArray
        $textInput.val(planArray[index]);
        let $inputDiv = $('<div>');
        $inputDiv.attr('class', 'input-div');
        $planRow.append($inputDiv);
        $inputDiv.append($textInput);
        //SAVE
        let $saveBtn = $('<button>');
        $saveBtn.attr('id',`save-${index}`);
        $saveBtn.attr('save', index);
        $saveBtn.text("Save")

        let $saveDiv= $('<div>');
        $saveDiv.attr('class', 'save-div')

        $saveDiv.append($saveBtn);
        $planRow.append($saveDiv);
        
    



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
