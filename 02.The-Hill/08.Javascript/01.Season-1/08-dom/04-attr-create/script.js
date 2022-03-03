// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    let block = document.getElementById('source');
    
    let img = document.createElement("img");
    document.getElementById('target').appendChild(img);
    
    img.src = block.getAttribute('data-image');

    block.parentNode.removeChild(block);

    
})();
