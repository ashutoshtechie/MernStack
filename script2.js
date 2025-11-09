let studentname = {
  name: "Aisha",
  age: 22,
  city: "New York"
};
console.log("student object from script2.js:", studentname);

// Dom manipulation
// oops concepts
// inheritance
// polymorphism
// encapsulation
// abstraction

// inheritance example

// Reuse code with class and inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }       
    speak() {
        console.log(this.name + ' makes a noise.');
    } 
    walk() {
        console.log(this.name + ' walks in jungle.');
    }          
}
class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }   
}
let dog = new Dog('Rex');
dog.speak(); // Rex barks.
let animal = new Animal('Generic Animal');
animal.walk(); // Generic Animal makes a noise.
animal.speak(); // Generic Animal walks in jungle.
dog.walk(); // Rex walks in jungle.

// multilevel inheritance

class Puppy extends Dog {
    speak() {
        console.log(this.name + ' whines.');
    }
}
let puppy = new Puppy('Buddy');
puppy.speak(); // Buddy whines.
puppy.walk(); // Buddy walks in jungle.

// hierarchical inheritance

class Cat extends Animal {
    speak() {
        console.log(this.name + ' meows.');
    }
}
let cat = new Cat('Whiskers');
cat.speak(); // Whiskers meows.
cat.walk(); // Whiskers walks in jungle.



// hybrid inheritance

class Bird extends Animal {
    speak() {
        console.log(this.name + ' chirps.');
    }
}
let bird = new Bird('Tweety');
bird.speak(); // Tweety chirps.
bird.walk(); // Tweety walks in jungle.

class Parrot extends Bird {
    speak() {
        console.log(this.name + ' talks.');
    }
}

let parrot = new Parrot('Polly');
parrot.speak(); // Polly talks.
parrot.walk(); // Polly walks in jungle.

// polymorphism example

class vehicle{
    move(){
        console.log("vehicle is moving")
    }

}
class bike extends vehicle{
    move(){
        console.log("bike is moving")
    }
}

let obj =[new vehicle(), new bike()];

// obj.forEach(a=>a.move());

// for(let i=0;i<obj.length;i++){
//     obj[i].move();
// }

for(let i of obj){
    i.move();
}

// Output:
// vehicle is moving
// bike is moving


// abstraction example

class cofeeMachine{
    start(){
        console.log("coffee machine starts");
    }

    brew(){
        console.log("coffee is brewing");
    }

    serve(){
        console.log("coffee is served");
    }

    makeCofee(){
        this.start();
        this.brew();
        this.serve();
    }
}

let machine=new cofeeMachine();
machine.makeCofee();



// Asynchronous JavaScript
// console.log("Start");
// setTimeout(()=>{
//     console.log("Inside timeout after 2 seconds");
// },2000);
// console.log("End");


// console.log("Start");
// console.log("doing some task...")
// setTimeout(()=>{
//     console.log("Task completed after 2 seconds");
//     console.log("End");
// },2000);

// Promises

function dotask(){
    return new Promise((resolve)=>{

        setTimeout(() => {
            console.log("Task completed after 2 seconds");
            resolve();
        }, 2000);

    });
    
}

dotask().then(()=>{
    console.log("Promise resolved");
})

// async await
async function performTask(){
    console.log("Start");
    await dotask();
    console.log("End");
}

performTask();

// DOM Manipulation

