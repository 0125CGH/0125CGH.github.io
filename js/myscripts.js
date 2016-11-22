var React = require('react');
var ReactDOM = require('react-dom');

function whoIsIt(){
	var person = prompt("Please enter your name here");
	if (person == "Christian" || person =="christian"){
		alert("Hello Christian!");
	}
	else if (person == "Ashley" || person == "ashely"){
		alert("You are not Christian!")
	}
	else if (person == "Amy" || person == "amy"){
		alert("You are not Christian!")
	}
	else if (person == "Lindha" || person =="lindha" || person == "Linda" || person == "linda"){
		alert("You are not Christian!")
	}
	else {
		alert("You are not Christian!" );
	}
}



function makeUl(){
	var liArray = [
	<li>item 1</li>,
	<li>item 2<li>, 
	<li>item 3</li>
	];
	<ul>{liArray}</ul>;

}

ReactDOM.render(
  <ul>{peopleLIs}</ul>,
  document.getElementById('app')
);

