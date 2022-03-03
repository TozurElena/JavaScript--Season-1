// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    let imgD = document.querySelector('img');
    
    imgD.addEventListener('mouseover', () => {
        imgD.src = imgD.getAttribute('data-hover');
    })

    
})();
