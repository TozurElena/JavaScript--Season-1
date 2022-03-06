// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    const rand = () => {
		return Math.floor(Math.random() * 100) + 1;
	};

    let ask = (prompt('Guess the number'));
    let number = rand();
    let count = 1;
		
    while (+ask !== number) {
        
        if (ask < number) 	ask = (prompt('Too low'));
		 else ask = (prompt('Too high'));
        count++;
    }
	alert(`Congratulations ! You need ${count} guesses`);
    

	
})();
