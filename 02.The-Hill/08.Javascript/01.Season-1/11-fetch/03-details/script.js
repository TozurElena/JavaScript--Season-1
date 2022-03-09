// 11-fetch/03-details/script.js - 11.3: details


(() => {
    
    let heroesContainer = document.getElementById('target');
    let idHerose = document.getElementById('hero-id');
          
    
    document.getElementById("run").addEventListener("click", () => {
        // console.log(idHerose.value);
        heroesContainer.innerHTML = '';
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                data.forEach(el => {
                if (el.id == idHerose.value) {
                    const heroesList = document.createElement('li');
                    heroesList.classList.add('tpl-hero');
                    heroesList.innerHTML = `
                        <li class="hero">
                            <h4 class="title">
                                <strong class="name">${el.name}</strong>
                                <em class="alter-ego">${el.alterEgo}</em>
                            </h4>
                            <p class="powers"></p>
                        </li>
                    `
                    heroesContainer.append(heroesList);
                }
                    
                })
            })    
        
    });
    
})();
