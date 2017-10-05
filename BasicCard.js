var inquirer = require('inquirer');

// Array of questions
var frontArr = ['Who was the First President of the USA?',
	'Who is the current President of the USA?']
var backArr = ['George Washington', 'Donald Trump'];

// picks random front and back
var random = Math.floor(Math.random() * frontArr.length);
var randFront = frontArr[random];
var randBack = backArr[random];

var BasicCard = function() {
	this.front = function() {
		inquirer
			.prompt([
				{
					type: 'input',
					name: 'question',
					message: randFront
				}
			])
			.then(function(result) {
				if (result.question === randBack) {
					console.log("Correct! the Answer is " + randBack);
				} else {
					console.log("Wrong! The correct answer is: " + randBack)
				}
			})
	}
}


module.exports = BasicCard;
	