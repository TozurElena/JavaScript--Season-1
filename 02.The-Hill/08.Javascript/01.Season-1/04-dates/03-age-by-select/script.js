
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {
    const date = new Date();
    let btn = document.getElementById('run');
    let day = document.getElementById('dob-day');
    let month = document.getElementById('dob-month');
    let year = document.getElementById('dob-year');

    let dayP = date.getDate();
    let monthP = date.getMonth() + 1;
    let yearP = date.getFullYear();
  
    
    btn.addEventListener('click', () => {
        let age = yearP - year.value - 1;
        if (monthP > month.value) age++;
            else if (monthP == month.value && dayP >= day.value) age++;
        alert(`votre age ${age}`);

    })


})();
