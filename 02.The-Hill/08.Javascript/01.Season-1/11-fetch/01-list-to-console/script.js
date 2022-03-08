// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    
    
    document.getElementById("run").addEventListener("click", () => {
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => console.log(data))
    });

})();

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/