$(document).ready(function () { // current time from moment
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    // made date heading the current time
    let $dateHeading = $('#currentDay');
    $dateHeading.text(currentTime);
    // testing variable
    const test = false;
    // // test in non standard hours
    // let nowHour24 = moment().format('H');
    // let nowHour12 = moment().format('h');
    // setting time for non standard hours
    if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
    }
    let planArray =[];
    
    //saving to local storage
    $("#save-btn").on('click',function(event){
    event.preventDefault();
    let $inputValue = $textInput.value;
    planArray[index]= $inputValue;
    localStorage.setItem("savedPlans", JSON.stringify(planArray));
   
    displayText();
    function displayText() {
        let $savedPlan = JSON.parse(localStorage.getItem("savedPlans"));
        $textInput.value= $savedPlan
        }



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
        $textInput.attr('id', 'input-text');
        $textInput.attr('hourIndex', index);
        $textInput.attr('type', 'text');
        
        // retreive index from planArray
        $textInput.val(planArray[index]);
        //div to append yo row
        let $inputDiv = $('<div>');
        $inputDiv.attr('class', 'input-div');
        $planRow.append($inputDiv);
        $inputDiv.append($textInput);
        //SAVE
        let $saveBtn = $('<button>');
        $saveBtn.attr('id','save-btn');
        $saveBtn.attr('save', index);
        $saveBtn.text("Save")

        let $saveDiv= $('<div>');
        $saveDiv.attr('class', 'save-div')

        $saveDiv.append($saveBtn);
        $planRow.append($saveDiv);
        

    }

   

    // function colorUpdate (){
    //     $(".row").each(function(){
    //         let hourBlock= parseInt($(this).attr("id").split("")[0]);
    //     if (hourBlock < currentTime){
    //         $(this).addClass("past");
    //     } else if (hourBlock > currentTime){
    //         $(this).removeClass("past");
    //         $(this).addClass("present");

    //     }
    //     else {
    //         $(this).removeClass("past");
    //         $(this).removeClass("present");
    //         $(this).addClass("future");
    //     }
        
    
        
});
// colorUpdate();
