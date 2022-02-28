
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let x1 = document.getElementById('op-one');
    let x2 = document.getElementById('op-two');
    

    const performOperation = operation => {
        // perform the operation
        let result;
        switch(operation) {
            case "addition": result = +x1.value + +x2.value;  break;
            case "substraction": result = +x1.value - +x2.value; break;
            case "multiplication":result = +x1.value * +x2.value; break;
            case "division": result = +x1.value / +x2.value; break;
        }
        alert(result);
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
