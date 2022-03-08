// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    
    document.getElementById('run').addEventListener('click', () => {
		window.lib.getPosts().then((promice) => {
           
            promice.forEach((el) => {
                window.lib.getComments(el.id).then((promiceC) => {
                   promiceC.forEach((e) => {
                    // console.log(e);
                    console.log(e.content);
                   })
                });
            })  
        });
        		
		
	});

})();
