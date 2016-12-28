var user = {
	name:'user',
	roundWon:0,
	currentEmoji:"underfined",
};

var pc = {
	name:'pc',
	roundWon:0,
	currentEmoji:"underfined",
};

//define our emojis
var emojis = ['😄','🗿','🌈','⛔','👽','🈲'];
var joker = '🌈';

// define state
var currentRound = 0;

var startNextRound = function(){
// pc and user to be assigner a random emoji each
// round +1
	currentRound = currentRound + 1;

	/ set player emojis
	pc.currentEmoji = getRandomEmoji();
	user.currentEmoji = getRandomEmoji();

	console.log('emojis',pc.currentEmoji,'vs',user.currentEmoji)
};

var getRandomEmoji = function () {
	var randomNumber = Math.round(Math.random() * (emojis.length-1));	
	//random number 随机四舍五入（ random 随机数字 < 1 = 凑数字 1-5 出来）

	var randomEmoji = emojis[randomNumber];

	return randomEmoji;


}

console.log('emojisArray',user,pc)
