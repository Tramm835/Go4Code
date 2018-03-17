//var t = prompt("What do you like?");

//Object
var mainObject = {
	description: "ball",
	width: "10px",
	type: "soccer"
};
var ball = mainObject;

function Person(name, type) {
	this.name = name;
	this.type = type;
	
}

var john = new Person("John", "Smart");
alert("Created " + john.name + " who is : " + john.type)

