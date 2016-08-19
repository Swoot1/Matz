(function(){
	 
	window.quotes = [];

	var loadMatzQuotes = function(){
		window.quotes = [
			'I duschen kan ingen se dig gråta.',
			'Skynda, skynda',
			'Det är bara å kasta pengar på problemet',
			'Om man gör en deep copy av Peters medvetande. Tänk vad stor den filen blir.. 2 Megg.',
			'En riktig grävlingsfylla'
			];	
	};
	 
	var showMatzQuotes = function(){
		if(window.quotes.length === 0){
			loadMatzQuotes();
		}

		var matzQuotes = document.getElementById('matzQuotes');

		matzQuotes.innerHTML = window.quotes.pop();
	};

	myAudio = new Audio('grodorna.mp3'); 
	myAudio.addEventListener('ended', function() {
	    this.currentTime = 0;
	    this.play();
	}, false);
	myAudio.play();

	document.getElementById('button').addEventListener('click', showMatzQuotes);
})();
