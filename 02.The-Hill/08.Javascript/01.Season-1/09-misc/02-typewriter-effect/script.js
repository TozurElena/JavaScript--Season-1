// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

   
    let txt = document.getElementById('target').innerHTML; /* The text */
    
    const random = () =>  Math.floor(Math.random() * 150) + 30; /* The speed/duration of the effect in milliseconds */
    
    document.getElementById('target').innerHTML = '';

    let i = 0;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById('target').innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, random());
        }
    }

    typeWriter();

})();
