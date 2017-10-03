var Basic = require('./BasicCard.js');
var Cloze = require('./ClozeCard.js');

//constructer variables

var cardType = process.argv[2];
var BasicCard = new Basic();
var ClozeCard = new Cloze();
if (cardType === "basic") {

}