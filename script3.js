// DOM manipulation

// heading=document.querySelector("title");
// console.log("Title of the document is:", heading.textContent);

const heading=document.getElementById("title");
console.log("Title of the document is:", heading.textContent);

// const heading = document.querySelector("title");
// console.log(heading.textContent);

// heading.style.color="blue";
const button=document.getElementById("clicking");



// button.addEventListener("click" ,()=> {
//     // heading.textContent="Button Clicked!";
//     // heading.style.color="red";
//     const background=document.body;
//     background.style.backgroundColor="lightgrey";

// });

    



// const background=document.body;
// background.style.backgroundColor="lightgrey";



// let clicked=false;
// button.addEventListener("click" ,()=> {
//    if(!clicked){
//     heading.textContent="Button Clicked!";
//     heading.style.color="green";
//     clicked=true;
//    }else{
//     heading.textContent="Hello JavaScript!";
//     heading.style.color="red";
//     clicked=false;
//    }
    
// });

// button.addEventListener("click" , changeColor );


function changeColor() {
        document.body.style.backgroundColor="lightblue";
}

// spread operator

fruits= ["apple", "banana", "mango"];
vegetables= ["carrot", "broccoli", "spinach"];
food= [...fruits, ...vegetables];
console.log("Food items are:", food);