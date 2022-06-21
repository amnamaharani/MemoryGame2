/*
	1. Declare variables
*/
var seconds;
var currentLevel;
var matchedPair = 0;
var clickedCards = [];
var cardbox = document.getElementById('cardbox');
var result = document.getElementById('result');
var levelImg = document.getElementById('levelImage');

/*
	Declare arrays with cards for each and every levels
*/
var level1Cards = ["01","02","01","02"];
var level2Cards = ["01","02","03","04","01","02","03","04"];
var level3Cards = ["01","02","03","04","05","06","01","02","03","04","05","06"];
var level4Cards = ["01","02","03","04","05","06","07","08","01","02","03","04","05","06","07","08"];
var level5Cards = ["01","02","03","04","05","06","07","08","09","10","01","02","03","04","05","06","07","08","09","10"];
var level6Cards = ["01","02","03","04","05","06","07","08","09","10","11","12","01","02","03","04","05","06","07","08","09","10","11","12"];
var level7Cards = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","01","02","03","04","05","06","07","08","09","10","11","12","13","14"];
var level8Cards = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"];
var level9Cards = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18"];
var level10Cards = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"];

/* 
	2. Make the flipping work
	(On click back side of card, it will call this function)
*/
function showCard(cid)
{
	// Check the total clicked card length is not 2
	if(clickedCards.length != 2){
		// Display the clicked card
		document.getElementById(cid).style.display = "block";
		// Get the card image name
		var card = document.getElementById(cid).src.split("/").pop().split(".")[0];
		// Disable the Mouse click event
		document.getElementById("card"+cid).style.pointerEvents = "none";
		// Add this card in clicked card array
		clickedCards.push(cid);
		// Check if clicked card length is 2
		if(clickedCards.length == 2){
			// Check both clicked card image are same or not
			if(document.getElementById(clickedCards[0]).getAttribute("src") == document.getElementById(clickedCards[1]).getAttribute("src")){
				// If both card image are same, then increase the matchedPair to 1
				matchedPair++;
				// Update the score
				document.getElementById("currentScore").innerHTML = matchedPair;
				// Check the game is over or now
				checkGameOver(currentLevel,matchedPair);
				// Reset the clicked card to empty
				setTimeout(function(){
					clickedCards = [];					
				},500);
			} else {
				setTimeout(function(){
					// Hide both the clicked cards
					document.getElementById(clickedCards[0]).style.display = "none";
					document.getElementById(clickedCards[1]).style.display = "none";
					// Enable mouse click on both cards
					document.getElementById("card"+clickedCards[0]).style.pointerEvents = "auto";
					document.getElementById("card"+clickedCards[1]).style.pointerEvents = "auto";
					// Empty the clicked cards array
					clickedCards = [];
				},1000);
			}
		}
	}
}

/* 
	3. Select the level function 
	 and create timer for each levels
*/
function selectLevel(l)
{
	// Set the card count 0
	c = 0;
	// Set the current level
	currentLevel = l;
	// Set the matched pair to 0
	matchedPair = 0;
	// Hide h1 paragraph
	document.getElementById("h1").style.display = "none";
	// Hide the level screen
	document.getElementById("alllevels").style.display = "none";
	// Hide h3 paragraph
	document.getElementById("h3").style.display = "none";
	// Hide rules
	document.getElementById("rules").style.display = "none";
	// Show the header area
	document.getElementById("headerarea").style.display = "block";
	// Show the card boxes
	document.getElementById("cardbox").style.display = "block";

	// Check if level 1
	if(l == 1){
		// Set the TIMER limit 5 seconds
		seconds = 10;
		// Start the timer
		startTimer(seconds);
		// Set all the random cards for level 1
		while(level1Cards.length)
		{
			// Generate one random card
			var randomCard = level1Cards.splice(level1Cards.length * Math.random() | 0, 1)[0];
			// Set the random generated card
			cardbox.innerHTML += "<div class='cards' id='card"+c+"' onclick='showCard("+c+")'><img id='"+c+"' src='images/"+randomCard+".png' width='130' height='215' style='display: none;' /></div>";
			c++;
		}
	}
	// ..level 2
	else if(l == 2)
	{
		seconds = 20;
		startTimer(seconds);
		while(level2Cards.length)
		{
			var randomCard = level2Cards.splice(level2Cards.length * Math.random() | 0, 1)[0];
			cardbox.innerHTML += "<div class='cards' id='card"+c+"' onclick='showCard("+c+")'><img id='"+c+"' src='images/"+randomCard+".png' width='130' height='215' style='display: none;' /></div>";
			c++;
		}
	}
	// ..level 3
	else if(l == 3)
	{
		seconds = 40;
		startTimer(seconds);
		while(level3Cards.length)
		{
			var randomCard = level3Cards.splice(level3Cards.length * Math.random() | 0, 1)[0];
			cardbox.innerHTML += "<div class='cards' id='card"+c+"' onclick='showCard("+c+")'><img id='"+c+"' src='images/"+randomCard+".png' width='130' height='215' style='display: none;' /></div>";
			c++;
		}
	}
	// ..level 4
	else if(l == 4)
	{
		seconds = 60;
		startTimer(seconds);
		while(level4Cards.length)
		{
			var randomCard = level4Cards.splice(level4Cards.length * Math.random() | 0, 1)[0];
			cardbox.innerHTML += "<div class='cards' id='card"+c+"' onclick='showCard("+c+")'><img id='"+c+"' src='images/"+randomCard+".png' width='130' height='215' style='display: none;' /></div>";
			c++;
		}
	}
	// ..level 5
	else if(l == 5)
	{
		seconds = 80;
		startTimer(seconds);
		while(level5Cards.length)
		{
			var randomCard = level5Cards.splice(level5Cards.length * Math.random() | 0, 1)[0];
			cardbox.innerHTML += "<div class='cards' id='card"+c+"' onclick='showCard("+c+")'><img id='"+c+"' src='images/"+randomCard+".png' width='130' height='215' style='display: none;' /></div>";
			c++;
		}
	}
	// ..level 6
	else if(l == 6)
	{
		seconds = 100;
		startTimer(seconds);
		while(level6Cards.length)
		{
			var randomCard = level6Cards.splice(level6Cards.length * Math.random() | 0, 1)[0];
			cardbox.innerHTML += "<div class='cards' id='card"+c+"' onclick='showCard("+c+")'><img id='"+c+"' src='images/"+randomCard+".png' width='130' height='215' style='display: none;' /></div>";
			c++;
		}
	}
	// ..level 7
	else if(l == 7)
	{
		seconds = 120;
		startTimer(seconds);
		while(level7Cards.length)
		{
			var randomCard = level7Cards.splice(level7Cards.length * Math.random() | 0, 1)[0];
			cardbox.innerHTML += "<div class='cards' id='card"+c+"' onclick='showCard("+c+")'><img id='"+c+"' src='images/"+randomCard+".png' width='130' height='215' style='display: none;' /></div>";
			c++;
		}
	}
	// ..level 8
	else if(l == 8)
	{
		seconds = 200;
		startTimer(seconds);
		while(level8Cards.length)
		{
			var randomCard = level8Cards.splice(level8Cards.length * Math.random() | 0, 1)[0];
			cardbox.innerHTML += "<div class='cards' id='card"+c+"' onclick='showCard("+c+")'><img id='"+c+"' src='images/"+randomCard+".png' width='130' height='215' style='display: none;' /></div>";
			c++;
		}
	}
	// ..level 9
	else if(l == 9)
	{
		seconds = 220;
		startTimer(seconds);
		while(level9Cards.length)
		{
			var randomCard = level9Cards.splice(level9Cards.length * Math.random() | 0, 1)[0];
			cardbox.innerHTML += "<div class='cards' id='card"+c+"' onclick='showCard("+c+")'><img id='"+c+"' src='images/"+randomCard+".png' width='130' height='215' style='display: none;' /></div>";
			c++;
		}
	}
	// ..level 10
	else if(l == 10)
	{
		seconds = 240;
		startTimer(seconds);
		while(level10Cards.length)
		{
			var randomCard = level10Cards.splice(level10Cards.length * Math.random() | 0, 1)[0];
			cardbox.innerHTML += "<div class='cards' id='card"+c+"' onclick='showCard("+c+")'><img id='"+c+"' src='images/"+randomCard+".png' width='130' height='215' style='display: none;' /></div>";
			c++;
		}
	}
}

/* 
	4. Make the timer 
*/
function startTimer(secs)
{
	timer.innerHTML = "Your time left: " + secs;
	
	if(secs == 0) {
		// Clears the TIMER count down
		clearTimeout(countDown);
		// After 1 second delay, display the result pop up
		setTimeout(function(){ displayResult(); }, 1000);
		// Set the TIMER default to 00:00
		timer.innerHTML = "00:00";
		return;
	}

	secs--;
	// countdown the timer each seconds
	countDown = setTimeout(function(){ startTimer(secs); }, 1000);
}

/*
	5. RESET Button
	back to level page and chose new level and new game will begin
*/
newGame = document.getElementById("new");
// Click event for Reset Button
newGame.addEventListener("click", newClick);

// Reload the game page again
function newClick() {
	window.location.reload();
}


/* 
	7. Make the display for results
	Display result at the end of the game 
*/
function displayResult()
{
	// Clear the TIMER countdown
	clearTimeout(countDown);
	// Display the background black layer
	opacityDiv.style.display = "block";
	// Display the result pop up
	result.style.display = "block";
	// Display the pop up from TOP
	result.style.top = "10%";

	// Check if current Level is 1
	if(currentLevel == 1)
	{
		// Set the LEVEL 01 image on Result pop up window
		levelImg.innerHTML = "<img src='images/level_"+currentLevel+".jpg' width='150' />";
		// Check if matched pair is 2
		if(matchedPair == 2)
			winMessage(); // Display Congratulations Message
		else
			loseMessage(); // Display Try Again Message
	}
	else if(currentLevel == 2)
	{
		levelImg.innerHTML = "<img src='images/level_"+currentLevel+".jpg' width='150' />";
		if(matchedPair == 4)
			winMessage();
		else
			loseMessage();
	}
	else if(currentLevel == 3)
	{
		levelImg.innerHTML = "<img src='images/level_"+currentLevel+".jpg' width='150' />";
		if(matchedPair == 6)
			winMessage();
		else
			loseMessage();
	}
	else if(currentLevel == 4)
	{
		levelImg.innerHTML = "<img src='images/level_"+currentLevel+".jpg' width='150' />";
		if(matchedPair == 8)
			winMessage();
		else
			loseMessage();
	}
	else if(currentLevel == 5)
	{
		levelImg.innerHTML = "<img src='images/level_"+currentLevel+".jpg' width='150' />";
		if(matchedPair == 10)
			winMessage();
		else
			loseMessage();
	}
	else if(currentLevel == 6)
	{
		levelImg.innerHTML = "<img src='images/level_"+currentLevel+".jpg' width='150' />";
		if(matchedPair == 12)
			winMessage();
		else
			loseMessage();
	}
	else if(currentLevel == 7)
	{
		levelImg.innerHTML = "<img src='images/level_"+currentLevel+".jpg' width='150' />";
		if(matchedPair == 14)
			winMessage();
		else
			loseMessage();
	}
	else if(currentLevel == 8)
	{
		levelImg.innerHTML = "<img src='images/level_"+currentLevel+".jpg' width='150' />";
		if(matchedPair == 16)
			winMessage();
		else
			loseMessage();
	}
	else if(currentLevel == 9)
	{
		levelImg.innerHTML = "<img src='images/level_"+currentLevel+".jpg' width='150' />";
		if(matchedPair == 18)
			winMessage();
		else
			loseMessage();
	}
	else if(currentLevel == 10)
	{
		levelImg.innerHTML = "<img src='images/level_"+currentLevel+".jpg' width='150' />";
		if(matchedPair == 20)
			winMessage();
		else
			loseMessage();
	}
}

// Check game over
function checkGameOver(l,p)
{
	// Check which level is played and how many pairs are matched
	if(l == 1 && p == 2)
		displayResult();
	else if(l == 2 && p == 4)
		displayResult();
	else if(l == 3 && p == 6)
		displayResult();
	else if(l == 4 && p == 8)
		displayResult();
	else if(l == 5 && p == 10)
		displayResult();
	else if(l == 6 && p == 12)
		displayResult();
	else if(l == 7 && p == 14)
		displayResult();
	else if(l == 8 && p == 16)
		displayResult();
	else if(l == 9 && p == 18)
		displayResult();
	else if(l == 10 && p == 20)
		displayResult();
}

// Display WIN message
function winMessage()
{
	h1Res.innerHTML = "Congratulations! You won!";
	pRes.innerHTML = "You've scored " + matchedPair + " points.";
}
function loseMessage()
{
	h1Res.innerHTML = "Try again!";
	pRes.innerHTML = "You've scored " + matchedPair + " points.";
	okBtn.innerHTML = "OK";
}

// Click on Okay button on display message screen and hide the message pop up
var okayButton = document.getElementById("okayBtn");
okayButton.addEventListener("click", okayClick);

function okayClick() {
	// Hide the result popup
	result.style.display = "none";
	// Hide the background black layer
	opacityDiv.style.display = "none";
}
