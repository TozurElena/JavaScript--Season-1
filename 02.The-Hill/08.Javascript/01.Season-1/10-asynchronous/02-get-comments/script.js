// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    
    document.getElementById('run').addEventListener('click', () => {
		window.lib.getPosts((err, arr) => {
			arr.forEach((el) => {
                window.lib.getComments(el.id, (err, commentsArr) => {
                    console.log(el.id);
                    commentsArr.forEach((c) => {
                        console.log(c.content);
                    });
                } );         
				
			});
		});
	});

})();
