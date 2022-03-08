// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


(() => {
    
    document.getElementById('run').addEventListener('click', () => {
		async function getPosts() {
            let response = await window.lib.getPosts();
            response.forEach((el) => {
            console.log(el);
            })
         }
         
        getPosts();		
	
	});

})();
