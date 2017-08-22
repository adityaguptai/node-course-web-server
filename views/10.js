var mode="hard";
var max=6;
var nosqr=6;
var colors=genColors();
var selectedclr=getRandomNumzf();
var squares = document.querySelectorAll(".square");
var newclrbt= document.querySelector("#newclrbt");
//To generate random colors
function genColors(){
	var arr = [
	"rgb("+getRandomNum()+", "+getRandomNum()+"," +getRandomNum()+")",
	"rgb("+getRandomNum()+", "+getRandomNum()+"," +getRandomNum()+")",
	"rgb("+getRandomNum()+", "+getRandomNum()+"," +getRandomNum()+")",
	"rgb("+getRandomNum()+", "+getRandomNum()+"," +getRandomNum()+")",
	"rgb("+getRandomNum()+", "+getRandomNum()+"," +getRandomNum()+")",
	"rgb("+getRandomNum()+", "+getRandomNum()+"," +getRandomNum()+")"
	];
	return arr;
}

function ondifficultychange(){

	//If mode changes no of squares should be changed
	document.querySelector("#message").textContent="";
	document.querySelector(".header").style.backgroundColor='steelblue';
	colors=genColors();
	//If mode changes change the colour of the modes in the bar
	if(mode==="hard")
	{
		nosqr=6;
		max=6;
		selectedclr=getRandomNumzf();
		document.querySelector("#easy").classList.remove("togglediff");
		document.querySelector("#hard").classList.add("togglediff");
	}
	else
	{
		nosqr=3;
		max=3;
		selectedclr=getRandomNumzf();
		document.querySelector("#easy").classList.add("togglediff");
		document.querySelector("#hard").classList.remove("togglediff");
		//For Making other 3 squares dissappear
		for(var i=3;i<6;i++)
		{
			squares[i].style.backgroundColor='#232323';
		}
	}
	document.querySelector("#rgbh").textContent=colors[selectedclr];
	console.log(selectedclr);
	for(var i=0;i<nosqr;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
}
//on clk 
function sqrvalid(x){
	// alert(colors[x]);
	if(x==selectedclr)
	{
		//If correct color
		document.querySelector("#message").textContent="Absolutely Correct!!!";
		for(var i=0;i<nosqr;i++)
		{
			squares[i].style.backgroundColor=colors[x];
		}
		document.querySelector(".header").style.backgroundColor=colors[x];
		newclrbt.textContent="PLAY AGAIN?";
	}
	else{
		//If wrong color
		document.querySelector("#message").textContent="Try again!!!";
		squares[x].style.backgroundColor='#232323';

	}
}

function reset(){
	document.querySelector("#message").textContent="";
	document.querySelector(".header").style.backgroundColor='steelblue';
	colors=genColors();
	selectedclr=getRandomNumzf();
	document.querySelector("#rgbh").textContent=colors[selectedclr];
	newclrbt.textContent="NEW COLOR";
	for(var i=0;i<nosqr;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}

	console.log(selectedclr);
}

//For Gemneratin Random Nos
function getRandomNum(){
	return Math.floor(Math.random() * 255);
}
function getRandomNumzf(){
	return Math.floor(Math.random() * max);
}

//default items on start up
document.querySelector("#rgbh").textContent=colors[selectedclr];
ondifficultychange();
//Mode Change
document.querySelector("#hard").addEventListener("click",function(){
	mode="hard";
	ondifficultychange();
});
document.querySelector("#easy").addEventListener("click",function(){
	mode="easy";
	ondifficultychange();
});

//For click on square block and change
squares.forEach(function(square,i){
	square.addEventListener("click",function(){	
		sqrvalid(i);
	});
});
//New Color Reset 
document.querySelector("#newclrbt").addEventListener("click",reset);
