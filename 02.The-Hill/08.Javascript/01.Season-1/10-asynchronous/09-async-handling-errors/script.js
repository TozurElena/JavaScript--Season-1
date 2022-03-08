// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    
    document.getElementById("run").addEventListener("click", () => {
        async function Persons() {
           let response = await window.lib.getPersons();
            response.forEach((el) => console.log(el));
        }

        Persons()  
        .catch((err) => console.error(err));
    })
       
  

})();
