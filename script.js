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

// set player emojis
	pc.currentEmoji = getRandomEmoji();
	user.currentEmoji = getRandomEmoji();

	console.log('emojis',pc.currentEmoji,'vs',user.currentEmoji)
};

var getRandomEmoji = function () {
	var randomNumber = Math.round(Math.random() * (emojis.length-1));	
	//random number 随机四舍五入（ random 随机数字 < 1 = 凑数字 1-5 出来）

	var randomEmoji = emojis[randomNumber];
	return randomEmoji;
};

var snap = function (pcCalledsnap) {
	// compare between 2 emojis
	// if i's a joker then snap is ture!
	// if snap is ture then the user/pc gets +1 to roundsWon
	// if user gets it wrong then pc gets +1 to roundsWon
	// notify of what just happened - console/UI/html

var snap = pc.currentEmoji == user.currentEmoji;

if (pc.currentEmoji == joker || user.currentEmoji == joker) {
		snap = ture;
	};

	// 逻辑或 (并集):"||",逻辑与（交集）："&&"，逻辑非(差集)："!"
console.group('Snap Called by:' + (pcCalledsnap ? 'PC':'User'));

// pc called
	if (pcCalledsnap){
		if(snap){
		pc.roundsWon ++;
		console.log('pc won the round')
	} else{
		user.roundsWon ++;
		console.log('pc lost the round')
	};

// user called
} else{
	if(snap){
		user.roundsWon ++;
		console.log('user won the round')
	} else{
		pc.roundsWon ++;
		console.log('user lost the round')
	};
};

	console.log('snap',snap)
};
