// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    let text = document.getElementById('target').innerHTML;
    let btn = document.getElementById('increment');
    

    btn.addEventListener('click', () => {
        text++;
        document.getElementById('target').innerHTML = text;
        localStorage.setItem('counter', text);
        
    })
    
    document.getElementById('target').innerHTML = localStorage.getItem('counter');
    
})();
