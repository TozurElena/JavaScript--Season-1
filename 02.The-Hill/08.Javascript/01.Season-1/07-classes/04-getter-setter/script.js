// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get nameG() {
            return `${this.firstname} ${this.lastname}`;
        }
        set nameS(fullname) {
            let arr = fullname.split(' ');
            this.firstname = arr[0];
            this.lastname = arr[1];
            
        }

    }

    document.getElementById('run').addEventListener('click', () => {
        let person1 = new Person('Elena', 'Kozyreva');
        console.log(person1.nameG);
        console.log('  ');
        person1.nameS = 'Nika Richar';
        console.log(person1);

    })
})();
