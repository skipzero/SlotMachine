'use strict';

(function() {

	let path = '/img/'
	, reels = [
		['coffeeMaker','teaPot','espressoMachine']
		, ['coffeeFilter','teaStrainer','espressoTamper']
		, ['coffeeGrounds','looseTea','groundEspressoBeans']
	];

	function init () {
		reels.map(function(reel, i) {
			console.log('Init...', reels[i][i])
		});
		// timer();
	}

	function timer() { 
		let aniSpeed = document.getElementById('ring-1').style.animationDuration;
  	// aniSpeed = parseFloat(aniSpeed);
console.log('PRE', aniSpeed[0])
    let duration = aniSpeed + .1;
    setTimeout(function() {
      aniSpeed = duration +'s';
      document.getElementById('ring-1').style.animationDuration = aniSpeed;
console.log('speed', aniSpeed)
      timer
    }, duration * 1000)
	}

	init();
})();
