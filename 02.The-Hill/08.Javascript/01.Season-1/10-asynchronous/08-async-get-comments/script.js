// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    
    document.getElementById('run').addEventListener('click', () => {
		async function getPost() {
            let response = await window.lib.getPosts();
            response.forEach((el) => { 
                window.lib.getComments(el.id).then((promiceC) => {
                   promiceC.forEach((e) => console.log(e.content))
                   
                });
              
                
            })
         }
         
        getPost();	
        
	
	});

})();


 