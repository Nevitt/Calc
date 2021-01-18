const display = document.getElementById('display');

let numStr = '';
let pastNum = undefined;
let op = '';

display.textContent = "0";

function clkNumber(num){
        if(numStr.length < 16){
            if(pastNum!=undefined && op==''){
                //clear all and restart program;
                numStr = '';
                pastNum = undefined;
                numStr = numStr+ num;
                display.textContent = numStr;
            }
            else{
                //continue adding to numStr and displaying it;
                numStr = numStr+ num;
                display.textContent = numStr;
            }
        }
        else {
            alert("Your number is too Large!");
        }

}

function clkEquals(){
    if(pastNum!=undefined&&numStr!=''&&op!=''){
        display.textContent = pastNum = operate(op,pastNum,numStr);
        op = '';
        numStr='';
        return;
    }
    else{
        return;
    }
}

function clkClear(){
    numStr = "";
    display.textContent = '0';
    pastNum = undefined;
    op='';
    return;
}

function clkPlus(){
    if(op!=""&&pastNum!=undefined&&numStr!=''){
        display.textContent = pastNum = operate(op,pastNum,numStr);
        op='plus';
        return;
    }
    else if (op==''&&pastNum==undefined&&numStr!=''){
        op='plus';
        pastNum= numStr;
        numStr = '';
        return;
    }
    else if (op==''&&pastNum!=undefined&&numStr==''){
        op='plus';
        return;
    }
return;
}

function clkMinus(){
    if(op!=""&&pastNum!=undefined&&numStr!=''){
        display.textContent = pastNum = operate(op,pastNum,numStr);
        op='minus';
        return;
    }
    else if (op==''&&pastNum==undefined&&numStr!=''){
        op='minus';
        pastNum= numStr;
        numStr = '';
        return;
    }
    else if (op==''&&pastNum!=undefined&&numStr==''){
        op='minus';
        return;
    }
return;
}

function clkMulti(){
    if(op!=""&&pastNum!=undefined&&numStr!=''){
        display.textContent = pastNum = operate(op,pastNum,numStr);
        op='multi';
        return;
    }
    else if (op==''&&pastNum==undefined&&numStr!=''){
        op='multi';
        pastNum= numStr;
        numStr = '';
        return;
    }
    else if (op==''&&pastNum!=undefined&&numStr==''){
        op='multi';
        return;
    }
return;
}

function clkDivide(){
    if(op!=""&&pastNum!=undefined&&numStr!=''){
        display.textContent = pastNum = operate(op,pastNum,numStr);
        op='divide';
        return;
    }
    else if (op==''&&pastNum==undefined&&numStr!=''){
        op='divide';
        pastNum= numStr;
        numStr = '';
        return;
    }
    else if (op==''&&pastNum!=undefined&&numStr==''){
        op='divide';
        return;
    }
return;
}

function operate(opp, num1, num2){
    if(opp=="plus"){
        num1 = parseFloat(num1) + parseFloat(num2);
        pastNum = num1;
        display.textContent = num1;
        numStr = "";
        return(num1);    
    }
    else if(opp=="minus"){
        num1 = parseFloat(num1) - parseFloat(num2);
        pastNum = num1;
        display.textContent = num1;
        numStr = "";
        return(num1);    
    }
    else if(opp=="multi"){
        num1 = parseFloat(num1) * parseFloat(num2);
        pastNum = num1;
        display.textContent = num1;
        numStr = "";
        return(num1);    
    }
    else if(opp=="divide"){
        if(num2 != 0){
            num1 = parseFloat(num1) / parseFloat(num2);
            pastNum = num1;
            display.textContent = num1;
            numStr = "";
            return(num1); 
        }
        else if (num2 == 0){
            alert('Error Div0',clkClear());
            clkClear();
        }   
    }
    else{
        return;
    }
}

window.onkeydown = function(key){
    if(key.keyCode == 96){
        clkNumber(0);
    }
    else if(key.keyCode == 97){
        clkNumber(1);
    }
    else if(key.keyCode == 98){
        clkNumber(2);
    }
    else if(key.keyCode == 99){
        clkNumber(3);
    }
    else if(key.keyCode == 100){
        clkNumber(4);
    }
    else if(key.keyCode == 101){
        clkNumber(5);
    }
    else if(key.keyCode == 102){
        clkNumber(6);
    }
    else if(key.keyCode == 103){
        clkNumber(7);
    }
    else if(key.keyCode == 104){
        clkNumber(8);
    }
    else if(key.keyCode == 105){
        clkNumber(9);
    }
    else if(key.keyCode == 107){
        clkPlus();
    }
    else if(key.keyCode == 109){
        clkMinus();
    }
    else if(key.keyCode == 106){
        clkMulti();
    }
    else if(key.keyCode == 111){
        clkDivide();
    }
    else if(key.keyCode == 13){
        clkEquals();
    }
    else if(key.keyCode == 27){
        clkClear();
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