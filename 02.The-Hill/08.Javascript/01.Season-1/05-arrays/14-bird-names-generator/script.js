// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    let btn = document.getElementById('run');

    const getRandom = (arr) => {
        return Math.floor(Math.random() * arr.length);
    }
                    
    btn.addEventListener('click', () => {
        let adjectivesArray = Array.from(adjectives);
        let indexBirds = getRandom(birds);
        let indexAdj = getRandom(adjectivesArray);

        let nameBird = birds[indexBirds].name;
        let nameAdjective = adjectivesArray[indexAdj];

        if (birds[indexBirds].fem) nameAdjective += 'e';

        document.getElementById('target').innerHTML = nameBird + ' ' + nameAdjective;

        
    })

	

})();
