
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // let btnRed = document.getElementById('red');
    // let btnGreen = document.getElementById('green');
    // let btnYellow = document.getElementById('yellow');
    // let btnBlue = document.getElementById('blue');
      
    // btnRed.addEventListener('click', () => document.body.style.background = 'red');

    let button = document.querySelectorAll('button');
    
	button.forEach((btn) => {
		btn.addEventListener('click', () => document.body.style.background = btn.id);
	});
    



})();
