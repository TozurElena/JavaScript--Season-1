// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value
    let numbers = document.getElementById('numbers');
    
    document.getElementById("run").addEventListener("click", () => {
        let numbersArr = numbers.value.split(', ');

		numbers.value = numbersArr.sort((a, b) => a - b);
                    
    });
     

})();
