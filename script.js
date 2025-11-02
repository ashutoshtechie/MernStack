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