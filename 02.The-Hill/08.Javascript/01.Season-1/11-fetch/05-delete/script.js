// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    
    let idHerose = document.getElementById('hero-id');
          
    
    document.getElementById("run").addEventListener("click", async () => {
        
        const response = await fetch("http://localhost:3000/heroes")
        const heroes = await response.json()
        
        const elementHeroes = idHerose.value - 1;
        heroes.splice(elementHeroes, 1)
        console.log(heroes)
    })    
        
    

})();
