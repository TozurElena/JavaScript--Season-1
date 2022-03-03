// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let btn = document.getElementById('next');
    let img = document.querySelector('img');
    let i = 0;

    btn.addEventListener('click', () => {
                
        img.src = gallery[i];
        i++;
        if (i >= gallery.length) i = 0;

    })

})();
