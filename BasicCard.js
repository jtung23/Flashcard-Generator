var inquire = require('inquirer');
var BasicCard = function(front, back) {
	

	var this.front = function() {
		front;
	}
	var this.back = function() {
		back;
	}
}


module.exports = BasicCard;

//logic:
//prompts