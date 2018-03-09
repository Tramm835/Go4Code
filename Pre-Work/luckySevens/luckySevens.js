function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["luckyNumbers"].elements.length; 
        loopCounter++) {
        if (document.forms["luckyNumbers"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["luckyNumbers"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function checkResults() {
    clearErrors();
    var startNum = document.forms["luckyNumbers"]["startNum"].value;
	var rollCount = 0;
	var highValue = 0;
	var totalRollsHighValue = 0;
    var win = 4;
	var lose = -1;
	var result = 0;
	var roll = 0;
    if (startNum <= 0 || isNaN(startNum)) {
        alert("Start Bet must be filled in with a positive number.");
        document.forms["luckyNumbers"]["startNum"]
           .parentElement.className = "form-group has-error";
        document.forms["luckyNumbers"]["startNum"].focus();
        return false;
    }
	
	startNum = Number(startNum);
	var initialBet = startNum;
	for (var i = 0; startNum > 1; i++) {
		roll = Math.ceil(Math.random() * (1 +12 - 2));
		if (roll === 7) {
			result = win;
			if ((initialBet-startNum) > highValue) {
				highValue += result;
				totalRollsHighValue++;
			}
		}
		else {
			result = lose;
		}
		rollCount++;
		startNum += result;
	}
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play Again";
   
   document.getElementById("startNumBet").innerText = "$" + initialBet;
   document.getElementById("rollCount").innerText = rollCount;
   document.getElementById("totalValue").innerText = "$" + highValue;
   document.getElementById("highValueRolls").innerText = totalRollsHighValue;
   return false;
}

