// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    let arr = (document.getElementsByClassName('target'));

    for (i = 0; i < arr.length; i++) {
        arr[i].innerHTML = 'owned';
    }
    

})();
