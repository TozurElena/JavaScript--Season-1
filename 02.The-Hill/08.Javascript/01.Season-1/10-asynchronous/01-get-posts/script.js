// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
   

	document.getElementById('run').addEventListener('click', () => {
		window.lib.getPosts((err, arr) => {
			arr.forEach((el) => {
				console.log(el);
			});
		});
	});



})();
