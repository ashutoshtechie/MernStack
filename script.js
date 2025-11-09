let day="monday"
console.log("day",day)
let month="january"
console.log("month",month)
let year=2024
console.log("year",year)
 

function dayIfElse(num){
    if(num===1){
        return "monday";
    }else if(num===2){
        return "tuesday";
    }else if(num===3){
        return "wednesday";
    }   else if(num===4){
        return "thursday";
    }else if(num===5){
        return "friday";
    }else if(num===6){
        return "saturday";
    }else if(num===7){
        return "sunday";
    }   else{
        return "invalid input";
    };

}
function daySwitch(num){
    switch(num){
        case 1: return "monday";
        case 2: return "tuesday";
        case 3: return "wednesday";     
        case 4: return "thursday";     
        case 5: return "friday";     
        case 6: return "saturday";      
        case 7: return "sunday";     
        default: return "invalid input";     
    }   
}

function gradeIfElse(score){
    if(score>=90 && score<=100){
        return "A";     
    }else if(score>=80 && score<90){
        return "B";     
    }
    else if(score>=70 && score<80){
        return "C";     
    }
}

function trafficLightIfElse(color){
    if(color==="red"){
        return "stop";                              
    }else if(color==="yellow"){
        return "get ready";     
    }
    else if(color==="green"){
        return "go";     
    }   else{
        return "invalid color";
    }
}

function monthIfElse(num){
    if(num===1){
        return "january";           
    }else if(num===2){
        return "february";     
    }   else if(num===3){
        return "march";     
    }   else if(num===4){           
        return "april";     
    }else if(num===5){
        return "may";     
    }   else if(num===6){
        return "june";
    }   else if(num===7){
        return "july";
    }   else if(num===8){
        return "august";
    }   else if(num===9){
        return "september";
    }   else if(num===10){
        return "october";
    }   else if(num===11){
        return "november";
    }   else if(num===12){
        return "december";
    }   else{
        return "invalid input";
    };
}  


console.log("monthIfElse 1:",monthIfElse(1))
console.log("monthIfElse 5:",monthIfElse(5))
console.log("monthIfElse 13:",monthIfElse(13))
console.log("trafficLightIfElse red:",trafficLightIfElse("red"))
console.log("trafficLightIfElse yellow:",trafficLightIfElse("yellow"))
console.log("trafficLightIfElse green:",trafficLightIfElse("green"))
console.log("trafficLightIfElse blue:",trafficLightIfElse("blue"))
console.log("gradeIfElse 95:",gradeIfElse(95))
console.log("gradeIfElse 85:",gradeIfElse(85))
console.log("gradeIfElse 75:",gradeIfElse(75))
console.log("dayIfElse 1:",dayIfElse(1))
console.log("dayIfElse 5:",dayIfElse(5))
console.log("dayIfElse 8:",dayIfElse(8))
console.log("daySwitch 1:",daySwitch(1))
console.log("daySwitch 5:",daySwitch(5))
console.log("daySwitch 8:",daySwitch(8))

function add(a,b){
console.log(a+b)
return a+b
    
}       
function subtract(a,b){
    console.log(a-b)
    return a-b          
}
function multiply(a,b){
    console.log(a*b)
    return a*b          
}   
function divide(a,b){
    console.log(a/b)
    return a/b          
}       
subtract(10,4)
multiply(3,6)
divide(20,5)
add(5,7)


// Object example
let car={
    brand:"Toyota",
    model:"Camry",
}
console.log("car make:",car.make)
console.log("car model:",car.model)

car.year=2020
console.log("car year:",car.year)   
console.log("full car object:",car)
// Object keys and values
console.log("object keys:",Object.keys(car).sort())
console.log("object keys:",Object.values(car).sort())

// Array example Aarray of objects
let cars=[
    {brand:"Honda",model:"Civic",year:2018},
    {brand:"Ford",model:"Mustang",year:2020},   ]       
console.log("first car brand:",cars[0].brand)
console.log("second car year:",cars[1].year)
console.log(Object.values(cars))
console.log(Object.keys(cars))
console.log(Object.entries(cars))


// // 1️⃣ Create an arrow function called greet that prints "Hello Students!"
// // 2️⃣ Create an arrow function called square that returns square of a number
// // 3️⃣ Create an arrow function add that takes 2 numbers and returns their sum

// // Example Output:
// console.log(greet());       // Hello Students!
// console.log(square(5));     // 25
// console.log(add(10, 20));   // 30
// let fruits = ["Apple", "Mango", "Banana"];

// // 1️⃣ Use forEach with arrow function to print all fruits
// // 2️⃣ Use map() with arrow function to make all fruit names uppercase

// // Example Output:
// Apple
// Mango
// Banana

// ["APPLE", "MANGO", "BANANA"]
// let student = {
//   name: "Aisha",
//   age: 18,
//   grade: "A"
// };

// // 1️⃣ Print all properties
// // 2️⃣ Add a new property "city" = "Pune"
// // 3️⃣ Print "Aisha is 18 years old and lives in Pune"
// let car = {
//   brand: "Tata",
//   model: "Nexon",
//   start: function() {
//     console.log("Car is starting...");
//   }
// };

// // 1️⃣ Call the start() function
// // 2️⃣ Add a new function stop() that prints "Car stopped."
// // Create an object "calculator" with arrow functions as properties:
// let calculator = {
//   add: (a, b) => a + b,
//   sub: (a, b) => a - b,
//   mul: (a, b) => a * b
// };

// // Print results for all operations using console.log
// // Example Output:
// // 5 + 3 = 8
// // 5 - 3 = 2
// // 5 * 3 = 15

// Arrow functions
const square=(x)=>{return x*x}
console.log("square of 5:",square(5))   

let add1=(a,b)=>a+b
console.log("add 3 and 4:",add1(3,4))

let fruits = ["Apple", "Mango", "Banana"];

fruits.forEach((fruit) => {
  console.log("fruit:", fruit);
});

fruits.map((fruit) => {upperFruit = fruit.toUpperCase();
  console.log("upperFruit:", upperFruit);
});

let student = {
  name: "Aisha",
  age: 18,
  grade: "A"
};

student.city = "pune";

console.log("student object:", student);
console.log("aisha is "+ student.age + " years old and lives in " + student.city);


let car2 = {
  brand: "Tata",
  model: "Nexon",
  start: function() {
    console.log("Car is starting...");
  },
  stop: function() {
    console.log("Car is stop...");
  }
};
car2.start();
car2.stop();

let calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b
};

console.log("calculator add 2 and 3:", calculator.add(2, 3));
console.log("calculator sub 5 and 2:", calculator.sub(5, 2));
console.log("calculator mul 4 and 3:", calculator.mul(4, 3));

// this keyword in arrow function
let Students={
    name:"John",
    age:20,
    greet:function(){
        console.log("Hello, my name is "+this.name+" and I am "+this.age+" years old.");    
    },
}
Students.greet();    // works fine

function carinfo()
{
console.log("Car brand is "+this.brand);        
}
let car3={
    brand:"Hyundai",
    show:carinfo
}   
let car4={
    brand:"audi",
    show:carinfo
}      
carinfo.call(car3);  // works fine
car3.show();         // works fine
car4.show();         // works fine

// class example
class Person{
    constructor(name,age){  
        this.name=name;
        this.age=age;        
    }       
    introduce(){
        console.log("Hello, my name is "+this.name+" and I am "+this.age+" years old.");    
    }   
}  
let person1=new Person("Alice",30);
person1.introduce(); 

let person2=new Person("Bob",25);
person2.introduce();


class Animal{
    constructor(species,sound){
        this.species=species;
        this.sound=sound;        
    }       
    makeSound(){
        console.log("The "+this.species+" goes '"+this.sound+"'");    
    }
}
let animal1=new Animal("Dog","Woof");
animal1.makeSound();        
let animal2=new Animal("Cat","Meow");
animal2.makeSound();