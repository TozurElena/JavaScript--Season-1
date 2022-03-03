// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    let passFirst = document.getElementById('pass-one');
    let passSecond = document.getElementById('pass-two');
    let input = document.querySelectorAll ('input');
   
    document.getElementById('run').addEventListener('click', () => {
        
        if (passFirst.value !== passSecond.value) {
            for(let elem of input) {
                elem.style.borderColor = "red";
            }
        }
    })

})();
