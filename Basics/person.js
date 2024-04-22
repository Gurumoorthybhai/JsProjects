class Person {
    name = '';
    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hey, this is ${this.name}`);
    }
}


class Professor extends Person{
    teaches = '';

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`I'm ${this.name}, I teach ${this.teaches}.`);
        
    }
    grade() {
        const grade = Math.floor(Math.random() * (5-1)+1);
        console.log(grade);
        
    }
}


class Student extends Person{
#year = 1;   // private declaration

constructor(name, year) {
    super(name);
    this.#year = year;
}

#fees() {
    const fees1 = '10k';
    console.log(`My fees amount is ${fees1}`);
    
}
introduceSelf() {
    console.log(`I'm ${this.name}, I'm studying in ${this.#year} year, did i'm eligable to study archery ${this.canIstudyarchery()}`);
    
}

feesStructure() {
this.#fees();
}
canIstudyarchery() {
    return this.#year > 1;
}
}

// const obj = new Person('Guru');
// const obj = new Professor('Guru', 'Psychology');
// obj.introduceSelf();
// obj.grade();

const obj = new Student('Ram', 2);
// obj.#year;// syntax error it's a private data property, it is accessible inside class methods
// obj.introduceSelf();
// obj.canIstudyarchery();

const obj1 = new Student('shiva', 1);
// obj1.#fees(); Property '#fees' is not accessible outside class 'Student' because it has a private identifier

// obj1.feesStructure();
// obj1.introduceSelf();
// obj1.canIstudyarchery();




// obj.greet();

// class Animal {
//     speak() {
//         console.log("Woo");
        
//     }
// // };

// const obj1 = new Animal();
// obj1.speak();