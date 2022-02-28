
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    let button = document.getElementById('run');
    let color = document.getElementById('color');
    
	button.addEventListener('click', () => document.body.style.background = color.value );
	

})();
