var poem_text = "";
var poem_element;
var custom_line;

var random_verb = [
	"I have eaten",
	"I have absorbed",
	"I have categorized",
	"I have fallen on",
	"I have drained",
	"I have killed",
	"I have loved",
];

var random_noun = [
	"the plums",
	"the avocados",
	"the people",
	"the computers",
	"the bees",
	"the kittens",
	"the vapors",
	"the shirts",
	"the daquiries",
	"the bottles",
];

var random_adj = [
	"They were exquisite",
	"They were deathly",
	"They were patronizing",
	"They were unlovable",
	"They were tolerable",
	"They were unhealthy",
	"They were gnarly",
	"They were terrible",
	"They were unnerving",
];

var random_prop = [
	"I blame Obama",
	"I blame Washington",
	"I blame Michael Jackson",
	"I blame Coolio",
	"I blame Union Square",
	"I blame the Singularity",
	"I blame the German Tourists",
	"I blame a preponderance of brogrammers",
	"I then vacated the premises",
	"I blame Mayor Ed Lee",
];

function setup() {
  // put setup code here
  poem_element = document.getElementById("Poem");
  custom_line = document.getElementById("customText");
  // var result = createCanvas(600,75);
  // result.parent('result');
}

function draw() {
  // put drawing code here
  drawScreen();
}

$(document).ready(function(){
  $("#verb_but").click(function(){
    var new_verb_num = Math.floor(Math.random()*random_verb.length);
	var new_verb = random_verb[new_verb_num];
	poem_text = poem_text + new_verb + "<br />";
  });

  $("#noun_but").click(function(){
  	var new_noun_num = Math.floor(Math.random()*random_noun.length);
	var new_noun = random_noun[new_noun_num];
	poem_text = poem_text + new_noun + "<br />";
	});

  $("#adj_but").click(function(){
  	var new_adj_num = Math.floor(Math.random()*random_adj.length);
	var new_adj = random_adj[new_adj_num];
	poem_text = poem_text + new_adj + "<br />";
	});

  $("#prop_but").click(function(){
  	var new_prop_num = Math.floor(Math.random()*random_prop.length);
	var new_prop = random_prop[new_prop_num];
	poem_text = poem_text + new_prop + "<br />";
	});

  $("#start_new").click(function(){
  	poem_text = "";
  });
});

function drawScreen() {
	poem_element.innerHTML = poem_text;
}

function addCustom() {
	var user_text = custom_line.value;
	custom_line.value = "";
	poem_text = poem_text + user_text + "<br />";
}
