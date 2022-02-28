
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    let btn = document.getElementById('run');

    btn.addEventListener('click', () => {
        let colorRandom = Math.floor(Math.random()*799998)+1;
        document.body.style.background = '#' + colorRandom;
    })


})();
