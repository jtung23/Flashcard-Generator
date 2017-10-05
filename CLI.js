var inquire = require('./inquire.js');
var inq = new inquire();
var inquirer = require('inquirer');
var Basic = require('./BasicCard.js');
var Cloze = require('./ClozeCard.js');

var BasicCard = new Basic();
var ClozeCard = new Cloze();

var prompt = function() {
		inquirer.prompt([
		    {
		        type:'list',
		        name:'card',
		        message: "What type of flashcard would you like to use?",
		        choices: ["Basic Card", "Cloze Card"] 
		    }
		]).then(function(result){
			if (result.card === "Basic Card") {
				BasicCard.front();
			}
			if (result.card === "Cloze Card") {
				ClozeCard.cloze();
			}
		});
	};

prompt();


//logic:
// plug in random front and back index 

