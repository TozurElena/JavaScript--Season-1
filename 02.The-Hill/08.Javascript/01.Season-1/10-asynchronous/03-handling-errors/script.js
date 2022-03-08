// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    
    document.getElementById('run').addEventListener('click', () => {
		window.lib.getPersons((err,arrP) => {
            if (err) return console.error(err);
            arrP.forEach((el) => console.log(el));
        })
        		
		
	});

})();
