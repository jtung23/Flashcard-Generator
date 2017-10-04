var inquire = require('./inquire.js');
var inq = new inquire();

var BasicCard = function(front, back) {
	console.log('basiccard runs');
	this.front = function(front, back) {
		console.log('basiccard front runs')
		inq.basicFront(front, back);
		console.log(front)
	}
	// this.back = function(back) {
	// 	console.log('basic card back runs')
	// 	console.log(back)
	// }
}


module.exports = BasicCard;

//logic:
//prompts basic card or cloze card