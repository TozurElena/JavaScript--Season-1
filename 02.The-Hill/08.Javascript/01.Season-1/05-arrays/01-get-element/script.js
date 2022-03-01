// 05-arrays/01-get-element/script.js - 5.1: item in array

(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    let btn = document.getElementById('run');

    btn.addEventListener('click', () => console.log(fruits[3]));

})();
