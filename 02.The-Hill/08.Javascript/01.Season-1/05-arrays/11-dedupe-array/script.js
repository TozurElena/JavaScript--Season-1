// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    let btn = document.getElementById('run');
                    
    btn.addEventListener('click', () => {

        for(let i = 0; i < fruits.length - 1; i++) {
            for(let j = i + 1; j < fruits.length; j++) {
                if (fruits[i] == fruits[j]) fruits.splice(j,1);
            }
        }
        console.log(fruits);
        
    })

})();
