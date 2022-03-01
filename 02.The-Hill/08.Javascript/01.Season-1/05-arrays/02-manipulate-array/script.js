// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    let btn = document.getElementById('run');
    
    btn.addEventListener('click', () => {
        fruits.shift();
        fruits.pop();
        fruits.splice(0, 0, "banana");
        fruits.push("kiwi");
        console.log(fruits);
    })

    
})();
