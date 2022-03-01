
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    const date = new Date();
    
    const  days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const  months =["January", "February", "March", "April", "May", "June", "July", 
                    "August", "September", "October", "November", "December"];

    document.getElementById('target').innerHTML = (`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${date.getHours()}h${date.getMinutes()}`);

})();
