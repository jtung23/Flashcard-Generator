var Basic = require('./BasicCard.js');
var Cloze = require('./ClozeCard.js');
var inquirer = require('inquirer');
var BasicCard = new Basic();
var ClozeCard = new Cloze();

// Array of questions
var frontArr = ['Who was the First President of the USA?',
	'Who is the current President of the USA?']
var backArr = ['George Washington', 'Donald Trump'];

// picks random front and back
var random = Math.floor(Math.random() * frontArr.length);
var randFront = frontArr[random];
var randBack = backArr[random];

//inquire contructor function
var Inquire = function(front) {
	console.log('inquire function')
	this.prompt = function() {
		inquirer.prompt([
		    {
		        type:'list',
		        name:'card',
		        message: "What type of flashcard would you like to use?",
		        choices: ["Basic Card", "Cloze Card"] 
		    }
		]).then(function(result){
			if (result.card === "Basic Card") {
				BasicCard.front(randFront, randBack);
			}
			if (result.card === "Cloze Card") {
				ClozeCard.cloze();
			}
		});
	};

	this.basicFront = function(front, back) {
		inquirer.prompt([
			{
				type:'input',
				name: question,
				message: front
			}
		]).then(function(result, back) {
			console.log(result);
			if (result === back) {
				console.log("Correct! the Answer is " + result);
			} else {
				console.log("Wrong! The correct answer is: " + back)
			}
		})
	};
};



module.exports = Inquire;