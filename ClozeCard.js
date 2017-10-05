var inquirer = require('inquirer');

var clozeArr = ['George Washington', 'Donald Trump'];

var partialArr = ['The First President of the USA is ________',
	'The current President of the USA is _________'];
var fullArr = ['The First President of the USA is George Washington',
	'The current President of the USA is Donald Trump'];
// picks random front and back
var random = Math.floor(Math.random() * clozeArr.length);
var randCloze = clozeArr[random];
var randPartial = partialArr[random];
var randFull = fullArr[random];


var ClozeCard = function(text, cloze) {
	this.cloze = function (cloze) {
		console.log(cloze);
		inquirer
			.prompt([
				{
					type: 'input',
					name: 'cloze',
					message: randPartial
				}
			])
			.then(function(result) {
				if (result.cloze === randCloze) {
					console.log('Correct! The full statement is: ' + randFull)
				} else {
					console.log('Wrong! The correct statemnt is: ' + randFull)
				}
			})
	}

	console.log('clozecard runs')
}







module.exports = ClozeCard;