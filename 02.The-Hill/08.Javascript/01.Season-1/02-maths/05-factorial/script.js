
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value
    let number = document.getElementById('number');

    document.getElementById("run").addEventListener("click", () => {

        let fact = 1;
        for (let i = 1; i <= +number.value; i++) {
            fact *= i;
        }
        number.value = fact;

    });

})();
