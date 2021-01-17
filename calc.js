const display = document.getElementById('display');

let numStr="";
let pastNum=undefined;
let newNum;
let operator;
let multiOp;

function clkNumber(num){
    if(numStr.length < 16){
    console.log(num);
    numStr = numStr+ num;
    display.textContent = numStr;
    //console.log("numStr length = "+numStr.length);
    }
    else {
        alert("Your number is too Large!");
    }
}

function clkClear(){

    display.textContent = "0";
    numStr = "";
    operator = "";
    pastNum=undefined;
}

function clkDivide(){
    console.log('pastNum Before = ' +pastNum);
    pastNum = parseInt(numStr);
    console.log('pastNum after = ' +pastNum);
    if(pastNum==undefined || pastNum == 0){
        alert("Cannot Divide by 0")
        return;
    }
    operator = "div";
    display.textContent = "0";
    numStr = "";
    console.log("pastNum = "+pastNum);

}

function clkMulti(){
    if(multiOp==true){
        pastNum = parseInt(display.textContent);
        console.log('pastNum multip op = ' + pastNum);
    }
    else{
        pastNum = parseInt(numStr);
    }
    multiOp=true;
    
    operator = "multi";
    console.log(operator);
    display.textContent = "0";
    numStr="";
    return;
}

function clkMinus(){
    if(multiOp==true){
        pastNum = parseInt(display.textContent);
        console.log('pastNum multip op = ' + pastNum);
    }
    else{
        pastNum = parseInt(numStr);
    }
    multiOp=true;

    operator = "minus";
    console.log(operator);
    display.textContent = "0";
    numStr = "";
    
    return;
}

function clkPlus(){
//if(operator != ""){
    if(multiOp==true){
        pastNum = parseInt(display.textContent);
        console.log('pastNum multip op = ' + pastNum);
    }
    else{
        pastNum = parseInt(numStr);
    }
    
    operator = "plus";
    console.log(operator);
    display.textContent = "0";
    numStr = "";
    multiOp=true;
    return;
/*}
else{
    console.log('inside else');
    console.log('pastNum =' +pastNum);
    pastNum = parseInt(pastNum)+parseInt(numStr);
    console.log('pastnum after =' + pastNum);
    operator = "";
    display.textContent = pastNum;
    numStr="";
    multiOp = true;
    return
}*/
}

function clkEquals(){
    if(operator==""){
        return;
    }
    else if(operator=="plus"){
        pastNum = parseInt(pastNum)+parseInt(numStr);
        display.textContent = pastNum;
        operator = "";
        numStr = undefined;
        multiOp = true;
    }
    else if(operator=="minus"){
        pastNum = parseInt(pastNum)-parseInt(numStr);
        display.textContent = pastNum;
        operator = "";
        numStr = undefined;
        multiOp = true;
    }
    else if(operator=="div"){
        pastNum = parseInt(pastNum)/parseInt(numStr);
        display.textContent = pastNum;
        operator = "";
        numStr = undefined;
        multiOp = true;
    }
    else if(operator=="multi"){
        pastNum = parseInt(pastNum)*parseInt(numStr);
        display.textContent = pastNum;
        operator = "";
        numStr = undefined;
        multiOp = true;
    }
    
    
}

const btn0 = document.getElementById('0');
btn0.addEventListener("click", function() {clkNumber(0)});

const btn1 = document.getElementById('1');
btn1.addEventListener("click", function() {clkNumber(1)});

const btn2 = document.getElementById('2');
btn2.addEventListener("click", function() {clkNumber(2)});

const btn3 = document.getElementById('3');
btn3.addEventListener("click", function() {clkNumber(3)});

const btn4 = document.getElementById('4');
btn4.addEventListener("click", function() {clkNumber(4)});

const btn5 = document.getElementById('5');
btn5.addEventListener("click", function() {clkNumber(5)});

const btn6 = document.getElementById('6');
btn6.addEventListener("click", function() {clkNumber(6)});

const btn7 = document.getElementById('7');
btn7.addEventListener("click", function() {clkNumber(7)});

const btn8 = document.getElementById('8');
btn8.addEventListener("click", function() {clkNumber(8)});

const btn9 = document.getElementById('9');
btn9.addEventListener("click", function() {clkNumber(9)});

const btnClear = document.getElementById('clear');
btnClear.addEventListener("click", function() {clkClear()});

const btnPlus = document.getElementById('plus');
btnPlus.addEventListener("click", function(){clkPlus()});

const btnMinus = document.getElementById('minus');
btnMinus.addEventListener("click", function(){clkMinus()});

const btnDivide = document.getElementById('divide');
btnDivide.addEventListener("click", function(){clkDivide()});

const btnMulti = document.getElementById('multiply');
btnMulti.addEventListener("click", function(){clkMulti()});

const btnEquals = document.getElementById('equals');
btnEquals.addEventListener("click", function(){clkEquals()});