
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let res= '';
        for (let i = 1; i <= 21; i++) {
            res = res + '  ' + Math.pow(i,2);
        }
        alert(res);

    });

})();
