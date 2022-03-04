// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    let textAll = document.getElementById('target');
    let letters = textAll.innerText;
    
    letters = letters.split('');
    textAll.innerText = '';

    const randomSyze = () =>  Math.floor(Math.random() * 5) + 1;

    letters.forEach((l, a) => {
        let span = document.createElement('span');
        span.innerText = l;
        for (let i = 0; i < letters.length; i++) {
            span.style.fontSize = randomSyze() + "rem";
        }
        textAll.appendChild(span);

    });   
                


})();

// https://www.sliderrevolution.com/resources/css-text-animation/
