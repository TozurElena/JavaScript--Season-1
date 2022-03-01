
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    const date = new Date();

	let hour = date.getHours().toString();
    let minut = date.getMinutes().toString();
            
	if (hour + minut <= 1730)  {
        document.getElementById('target').innerHTML = 'Hello';
	    } else {
		    document.getElementById('target').innerHTML = 'Good evening';
	}

})();
