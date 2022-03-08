// Game logic ----------------------------

var canvas = document.getElementById("golCanvas");
canvas.width = $(document).width();
canvas.height = $(document).height();
var WIDTH = canvas.width;
var HEIGHT = canvas.height;
var ctx = canvas.getContext("2d");
var LEN = 10;
var x = Math.floor(WIDTH/LEN);
var y = HEIGHT/LEN;
var myGol;
var golTmp;

// default colors
let backgroundColor = 'black' // background color of canvas
let primaryColor = 'white' // color of cells alive for more than one cycle
let secondaryColor = "#A686AB" // color of newly alive cells

function initTmp(){
	for(var xVal = 0; xVal<=x+2;xVal++){
	golTmp[xVal] = new Array();
		for(var yVal = 0; yVal<=y+2; yVal++){
			golTmp[xVal][yVal] = 0;
		}
	}	
}	

function initMatrix(){
	// reset matrix
	myGol = new Array();
	golTmp = new Array();

	for(var xVal = 0; xVal<=x+2;xVal++){
		myGol[xVal] = new Array();
		golTmp[xVal] = new Array();
		for(var yVal = 0; yVal<=y+2; yVal++){
			golTmp[xVal][yVal] = 0;
			var randVal = Math.floor((Math.random()*2));
			myGol[xVal][yVal] = randVal;
			if (randVal == 1){
				draw(xVal+1,yVal+1)
			}
		}
	}

	
}

function draw(x,y){
	ctx.fillRect(LEN*(x-1),LEN*(y-1),LEN,LEN);
}

function nextStep(_backgroundColor, _primaryColor, _secondaryColor){
	// reset tempArray
	initTmp();
	// reset canvas
	ctx.fillStyle = _backgroundColor;
	ctx.fillRect(0,0,WIDTH,HEIGHT);

	for(var xVal = 1; xVal<=x+1;xVal++){
		for(var yVal = 1; yVal<=y+1; yVal++){
			
			var neighbourSum = myGol[xVal-1][yVal] + myGol[xVal-1][yVal-1] + myGol[xVal-1][yVal+1] + myGol[xVal][yVal-1] + myGol[xVal][yVal+1] + myGol[xVal+1][yVal] + myGol[xVal+1][yVal+1] + myGol[xVal+1][yVal-1];
			if(myGol[xVal][yVal] == 1){
				if(neighbourSum == 2 || neighbourSum == 3){
					
					golTmp[xVal][yVal] = 1;
					ctx.fillStyle = _primaryColor;
					draw(xVal,yVal);
				}
			} else {
				if(neighbourSum == 3) {
					golTmp[xVal][yVal] = 1;
					ctx.fillStyle = _secondaryColor;
					draw(xVal,yVal);
				}
			}
		}
	}
	
	myGol = golTmp.slice();
	
}

let gameStatus = false;

function gameReset() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	initMatrix();
	// kind of a weird way to prevent stacking game loops
	let gameRound = setInterval(() => nextStep(backgroundColor, primaryColor, secondaryColor), 75);
	if (!gameStatus) {
		gameStatus = true;
	} else {
		clearInterval(gameRound);
	}
	gameRound;
	
}

gameReset(); // start game on page load

// Page logic ----------------------------

$('#prompt').click(() => {
	$('.overlay').css('visibility', 'visible');
	$('.menu').css('visibility', 'hidden');
})

$('#themes').click(() => {
	$('.themes').css('visibility', 'visible');
	$('.menu').css('visibility', 'hidden');
})

$('.x').click(() => {
	$('.overlay').css('visibility', 'hidden');
	$('.themes').css('visibility', 'hidden');
	$('.menu').css('visibility', 'visible');
	$('.prompt').css('visibility', 'inherit');
})

$('#refresh').click(() => gameReset());

let selectedBiome = 'space';
let biomeArray = ['space', 'ocean', 'desert', 'forest', 'mountain', 'tundra'];
let biomeColors = {
	'space' : ['black', 'white', "#A686AB"],
	'ocean' : ["#1466A8", "#29C9E6", "#CEF9FF"],
	'desert' : ["#FFF6BF", "#FFC814", "#D4FF60"],
	'forest' : ["#18675D", "#02A325", "#51C742"],
	'mountain' : ["#9E9E9E", "#A16800", "#D19F32"],
	'tundra' : ['white', "#99B5DA", "#BDD7EA"]
}

// will be used to display selected biomes later while using lowercase class names
function capitalizeWord(string) {
	let newString = string.charAt(0).toUpperCase() + string.slice(1);
	return newString;
}

for (i=0; i<biomeArray.length; i++) {
	let biome = biomeArray[i];
	$(`.${biome}`).click(() => {
		backgroundColor = biomeColors[biome][0];
		primaryColor = biomeColors[biome][1];
		secondaryColor = biomeColors[biome][2];

		gameReset();

		$('.themes').css('visibility', 'hidden');
		$('.menu').css('visibility', 'visible');
		
		let oldBiome = capitalizeWord(selectedBiome);
		let newBiome = capitalizeWord(biome);
		$(`.${selectedBiome}`).html(`&nbsp;&nbsp;${oldBiome}`);
		$(`.${biome}`).html(`&nbsp;&nbsp;${newBiome}  ✓`);
		selectedBiome = biome;
	})
}


