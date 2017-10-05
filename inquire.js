var inquirer = require('inquirer');



//inquire contructor function
var Inquire = function(front) {
	console.log('inquire function')

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