var inquire = require('inquirer');

var clozeArr = ['George Washington', 'Donald Trump'];

var partialArr = ['The First President of the USA is ________',
	'The current President of the USA is _________'];
var fullArr = ['The First President of the USA is George Washington',
	'The current President of the USA is Donald Trump'];
// picks random front and back
var random = Math.floor(Math.random() * frontArr.length);
var randCloze = clozeArr[random];
var randPartial = partialArr[random];
var randFull = fullArr[random];


var ClozeCard = function(text, cloze) {
	this.cloze = function (cloze) {

		console.log(cloze);
	}

	console.log('clozecard runs')
}







module.exports = ClozeCard;