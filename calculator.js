let screen = document.getElementById("screen");
let operand1 = '';
let operand2 = '';
let operator = '';

function append(character){

    if(operator !== ''){
        if(character === '.' && operand2.includes('.')) 
            return;
        operand2 += character;
    }

    else
        if(character === '.' && operand1.includes('.')) 
            return;
        operand1 +=character;

    screen.innerHTML += character;
}

function appendOperator(operator_input){

    if(operator !== ''){
        calc();
    }

    screen.innerHTML += operator_input;
    operator = operator_input;
}

function clearScreen(){
    screen.innerHTML = '';
    operand1 = '';
    operand2 = '';
    operator = '';

}

function del(){
    screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
}

function calc(){
    try{
        screen.innerHTML = eval(screen.innerHTML);}
    catch(error){
        screen.innerHTML = "Error";
    }

    operand1 = screen.innerHTML;
    operand2 = '';
    operator = '';
}