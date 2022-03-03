// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    let passFirst = document.getElementById('pass-one');
    let passSecond = document.getElementById('pass-two');
    let input = document.querySelectorAll ('input');
   
    document.getElementById('run').addEventListener('click', () => {
         if (passFirst.value !== passSecond.value) {
            for(let elem of input) {
                elem.classList.add("error");
            }
        }
    })

})();
