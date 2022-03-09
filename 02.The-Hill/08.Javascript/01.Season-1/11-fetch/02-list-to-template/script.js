

(() => {

    let heroesContainer = document.getElementById('target');
    
    
    document.getElementById("run").addEventListener("click", () => {
        
        heroesContainer.innerHTML = '';
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.forEach(el => {
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
                })
            })    
        
    });

})();
