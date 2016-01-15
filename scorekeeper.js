var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var reset = document.querySelector('#reset');
var maxSel = document.querySelector('#maxSc');
var maxScore = Number(document.querySelector('#maxSc').value);

maxSel.disabled = false;

p1.score = 0;
p2.score= 0;
p1.html = document.querySelector('#A');
p2.html = document.querySelector('#B');

p1.addEventListener("click", function(){
	if (!maxReached()){
		verhoog(p1);
	};
});

p2.addEventListener("click", function(){
	if (!maxReached()){
		verhoog(p2);
	};
});

maxSel.addEventListener("input", function(){
	maxScore = Number(maxSel.value);
});

reset.addEventListener("click", function(){
	resetAll(p1);
	resetAll(p2);
});

function resetAll(speler){
	speler.score = 0;
	speler.html.classList.remove("win")
	speler.html.textContent = 0;
	maxSel.disabled = false;
}

function verhoog(speler){
// verhoog de speler score
	speler.score ++;
// werk de DOM  bij
	speler.html.textContent = speler.score;

// check of maxScore is bereikt 
	if (speler.score === maxScore){
// maak bijbehorende score text groen
		speler.html.classList.add("win");
	};
	maxSel.disabled = true;
};

function maxReached(){
	return p1.score === maxScore || p2.score === maxScore;
}