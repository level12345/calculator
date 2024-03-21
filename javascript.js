function addition(a, b) {
    return 1.0*(a + b);
}
function subtract(a, b) {
    return 1.0*(a-b);
}
function multiply(a, b) {
    return 1.0*a*b;
}
function divide(a, b) {
    if(b===0){
        console.log("Error: Division by zero");
        return null;
    }
    return ((a*1.0)/b);
}



function operate(operator, a, b) {
    if (operator === '+')
    {
        let add_returned = addition(a,b);
        running_total += add_returned;
        
        console.log(add_returned);
        console.log(running_total);
    }
    else if (operator === '-')
    {
        let subtract_returned = subtract(a,b);
        running_total -= subtract_returned;
        
        console.log(subtract_returned);
        console.log(running_total);
    }
    else if (operator === '*')
    {
        let multiply_returned = multiply(a,b)
        running_total *= multiply_returned;
        
        console.log(multiply_returned);
        console.log(running_total);
    }
    else if (operator === '/')
    {
        let divide_returned = divide(a,b);
        running_total /= divide_returned;
        
        console.log(divide_returned);
        console.log(running_total);
    }

}

const adder = document.querySelector("#add");
adder.addEventListener('click', () => {
    operator = '+';
    //createNumber();
    first_second();
})
const subtracter = document.querySelector("#subtract");
subtracter.addEventListener('click', () => {
    operator = '-';
    //createNumber();
    first_second();
})
const multiplier = document.querySelector("#multiply");
multiplier.addEventListener('click', () => {
    operator = '*';
    //createNumber();
    first_second();

})
const divider = document.querySelector("#divide");
divider.addEventListener('click', () => {
    operator = '/';
    //createNumber();
    first_second();
})


let numbers = [];
function addValueToArray(valClicked) {
    //console.log(numbers);
    return numbers.push(valClicked);
}

function createNumber(){
    let concatenatedString = numbers.join('');
    let concatenatedInt = parseInt(concatenatedString, 10);
    numbers = [];
    return concatenatedInt;
}


const operatorToUSE = document.querySelector("#calculate");
operatorToUSE.addEventListener('click', () => {
    console.log(operator);
    //console.log(userInput1)
    //console.log(userInput2)
    number2 = createNumber();
    operate(operator,number1,number2);
})

function first_second(){
    if (number1 === 0)
    {
        number1 = createNumber();
        //console.log(number1)
    }
    else if( number2 === 0)
    {
        number2 = createNumber();
        //console.log(number2)
    }
    else if(running_total != 0)
    {
        number2 = createNumber();
        number1 = running_total;
        //console.log(number1)
        //console.log(number2)
    }
}


let numberToJoin;
let valClicked ;
let operator = null;
let calculate = 0;
let userInput1 = 0;
let userInput2 = 0;

let number1=0;
let number2=0;
running_total=0;





function main(){

    



}



const one = document.querySelector("#one");
one.addEventListener('click', () => {
    valClicked = "1";
    addValueToArray(valClicked);
})
const two = document.querySelector("#two");
two.addEventListener('click', () => {
    valClicked = "2";
    addValueToArray(valClicked);
})
const three = document.querySelector("#three");
three.addEventListener('click', () => {
    valClicked = "3";
    addValueToArray(valClicked);
})
const four = document.querySelector("#four");
four.addEventListener('click', () => {
    valClicked = "4";
    addValueToArray(valClicked);
})
const five = document.querySelector("#five");
five.addEventListener('click', () => {
    valClicked = "5";
    addValueToArray(valClicked);
})
const six = document.querySelector("#six");
six.addEventListener('click', () => {
    valClicked = "6";
    addValueToArray(valClicked);
})
const seven = document.querySelector("#seven");
seven.addEventListener('click', () => {
    valClicked = "7";
    addValueToArray(valClicked);
})
const eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
    valClicked = "8";
    addValueToArray(valClicked);
})

const nine = document.querySelector("#nine");
nine.addEventListener('click', () => {
    valClicked = "9";
    addValueToArray(valClicked);
})
const zero = document.querySelector("#zero");
zero.addEventListener('click', () => {
    valClicked = "0";
    addValueToArray(valClicked);
})