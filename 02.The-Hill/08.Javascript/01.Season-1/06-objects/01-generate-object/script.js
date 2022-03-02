// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    let elena = {
        lastname: 'Kozyreva',
        firstname: 'Elena',
        age: 46,
        city: 'Gosselies',
        country: 'Belgique',
    };

    document.getElementById('run').addEventListener('click', ()=> console.log(elena));
})();
