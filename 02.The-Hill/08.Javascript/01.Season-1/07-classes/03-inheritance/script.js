// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    
    class Dog extends Animal {
        static greeting = 'RRR';
        constructor(name) {
            super();
			(this.name = name);

        }
     }

     class Cat extends Animal {
        static greeting = 'Muy';
        constructor(name) {
			super();
			(this.name = name);
		}
     }
     
	document.getElementById('run').addEventListener('click', () => {
		const myDog = new Dog('Soliel');
		const myCat = new Cat('Noir');
		console.log(myDog.sayHello());
		console.log(myCat.sayHello());
	});

})();
