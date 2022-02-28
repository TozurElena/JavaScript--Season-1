
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let x1 = document.getElementById('op-one');
    let x2 = document.getElementById('op-two');
    

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert( +x1.value + +x2.value);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert( +x1.value - +x2.value);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert( +x1.value * +x2.value);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert( +x1.value / +x2.value);
    });
})();
