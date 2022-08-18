

// moment().format("MMM Do YY");
//Display date object as title of page
//Loop append buttons i = 24 times
//On click event listener for scheduling
//Store scheduling in memory
//If else statement to determine button colors changing as time passes
//If time < time window then button is grey
//If time == time window then button is red
//Else button is green

$("#currentDay").text(moment().format("MMM Do YY"))

//Use moment to put current hour in a variable
var currentTime = parseInt(moment().format("HH"));
console.log(currentTime);


$(".time-block").determineTimeBlockClass
// Query all of the elements with the class of timeblock - in query include children in query for comparison
// For every element in the queried list compare id/dataset to time variable from moment.
var blockTimeElements = $(".time-block");
console.log(blockTimeElements);

[...blockTimeElements].forEach(element => {
    var blockTime = parseInt(element.dataset.time)
    console.log(determineTimeBlockClass(currentTime, blockTime))
    element.classList.add(determineTimeBlockClass(currentTime, blockTime));
});

function determineTimeBlockClass(currentTime, blockTime) {
    if (currentTime < blockTime) return 'future'
    if (currentTime > blockTime) return 'past'
    if (currentTime === blockTime) return 'present'
}



$(".saveBtn").on("click", function () {
    console.log($(this))
    const textInput = $(this).siblings(".col-10").val();
    console.log(textInput);

})


$("p").siblings(".selected").css("background", "yellow");