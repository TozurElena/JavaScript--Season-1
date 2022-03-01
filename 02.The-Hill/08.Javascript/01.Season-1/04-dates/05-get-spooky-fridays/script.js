
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    let year = document.getElementById('year');
    let btn = document.getElementById('run');
    let result = [];
    const  months =["January", "February", "March", "April", "May", "June", "July", 
                    "August", "September", "October", "November", "December"];
    
    let answer = '';
    btn.addEventListener('click', () => {
        result = [];
        for (let month = 0; month < 12; month++) {
            let d = new Date(year.value,month,13);
            if(d.getDay() == 5){
            result.push(month);
            }
        }
        answer = '';
        for (let elem of result) {
        answer = answer + ' ' + months[elem];
        }
    
        alert(answer); 
        
    })
     
                             


})();
