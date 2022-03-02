// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    
    document.getElementById('run').addEventListener('click', () => {
		let arr = [];

		for (let i = 0; i < keys.length; i++) {
			tempArr = [keys[i], values[i]];
			arr.push(tempArr);
		}

		console.log(Object.fromEntries(arr));
	});
})();
