// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    let input = document.getElementById('slider');
	let phone = document.getElementById('target');

	input.addEventListener('change', () => {
		let number = '0' + input.value;

		phone.innerHTML = number;
	});

})();
