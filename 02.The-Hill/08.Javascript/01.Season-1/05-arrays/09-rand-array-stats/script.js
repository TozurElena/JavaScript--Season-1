// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    let btn = document.getElementById('run');
    let arr = [];
    let s = 0;
        
    btn.addEventListener('click', () => {
            for (let index = 0; index < 10; index++) {
                arr[index] = Math.floor(Math.random()*100)+1;
                document.getElementById(`n-${index + 1}`).innerHTML = arr[index];
                s += arr[index];
            }
        document.getElementById('min').innerHTML = Math.min(...arr);
        document.getElementById('max').innerHTML = Math.max(...arr);
        document.getElementById('sum').innerHTML = s;
        document.getElementById('average').innerHTML = s/10;
           
          
        
     })

})();
