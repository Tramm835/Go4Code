function displayNumbers(){
var startNumber = document.getElementById("start").value
startNumber = Number(startNumber);
var endNumber = document.getElementById("end").value
endNumber = Number(endNumber);
var stepNumber = document.getElementById("step").value
stepNumber = Number(stepNumber);
var numberList = new Array();
if (stepNumber < 0) {
	display.war
}
    for (var i=startNumber; i <= endNumber; i+=stepNumber){
        if (i % 2 == 0){
          numberList.push(i);
        }
    }
	var output = "Here are the even numbers between " + startNumber + " and " + endNumber + " by " + stepNumber + "'s:\n" + numberList;
	document.getElementById("numbersText").innerText = output;
}