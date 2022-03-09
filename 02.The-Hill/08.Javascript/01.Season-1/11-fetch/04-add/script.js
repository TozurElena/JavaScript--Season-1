// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    
    let name = document.getElementById('hero-name');
    let alterEgo = document.getElementById('hero-alter-ego');
    let power = document.getElementById('hero-powers');
    class hero {
        constructor(id, name, alterEgo, power) {
            this.id = id;
            this.name = name;
            this.alterEgo = alterEgo;
            this.power = power;
        }
    }          
    
    document.getElementById("run").addEventListener("click", async () => {
        
        if (name.value === '' || alterEgo.value === '' || power.value === '') alert('remplir fields')
            else {
                const response = await fetch("http://localhost:3000/heroes")
                const heroes = await response.json()

                const powerArr = power.value.split(', ')

                const newHero = new hero(
                    this.id = heroes.length + 1,
                    this.name = name.value,
                    this.alterEgo = alterEgo.value,
                    this.power = powerArr,
                )
            heroes.push(newHero);
            console.log(heroes);                
            }         
    });

})();

