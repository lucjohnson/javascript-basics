// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/
"use strict";

var person = {
	fName: 'Luc',
	lName: 'Johnson',
	email: 'lucj@uw.edu',
	getFullName: function() { return this.fName + ' ' + this.lName; }
};

//Bad style, never use alerts
//alert(person.getFullName());
console.log('running the getFullName function on person object');
console.log(person.getFullName());

console.log('looping through all properties of the person object');
//show all properties of the person object
for (var prop in person) {
	console.log(person[prop]); // => value of current property
}

//create a new img element
var elem = document.createElement('img');
elem.src = 'img/dog.jpg';
elem.alt = 'picture of my awesome, amazing dog';

//add this element to the top of the body
document.body.insertBefore(elem, document.body.firstChild);

//create a new img element
var kitty = document.createElement('img');
kitty.src = 'img/cat.jpg';
elem.alt = 'picture of a cool cat';

//adds this to the body of the page
document.body.appendChild(kitty);

function onPuppyClick() {
	//alert('you clicked my puppy');
	document.getElementById('bark').play();
} //onPuppyClick()

//selecting the puppy-pic element
var pup = document.getElementById('puppy-pic');

if (pup.addEventListener) {
	pup.addEventListener('click', onPuppyClick)
}
else if (pup.attachEvent) {
	pup.attachEvent('click', onPuppyClick)
}

document.addEventListener('DOMContentLoaded', function(){

 //add event listeners for elements

 //manipulate the DOM
 	alert("The DOM is ready!");
 	onPuppyClick();

});