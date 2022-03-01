// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    let btn = document.getElementById('run');
                    
    btn.addEventListener('click', () => {

        console.log(people.size);
        if (people.has('Alexandre')) console.log('Alexandre is part');
            else console.log('Alexandre is no part');

        
    })
})();
