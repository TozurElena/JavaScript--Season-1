// 08-dom/02-select-two/script.js - 8.2: select by css selector


(() => {

    let arr = (document.getElementsByClassName('material'));
    let text = (arr[0].firstChild.nextSibling);
    text.innerHTML = 'owned';

})();
