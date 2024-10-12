let calc = "";
let exp = "";
let paran = 0;

const btn1 = document.querySelector(".number1"); 
const btn2 = document.querySelector(".number2"); 
const btn3 = document.querySelector(".number3"); 
const btn4 = document.querySelector(".number4"); 
const btn5 = document.querySelector(".number5"); 
const btn6 = document.querySelector(".number6"); 
const btn7 = document.querySelector(".number7"); 
const btn8 = document.querySelector(".number8"); 
const btn9 = document.querySelector(".number9"); 
const btn0 = document.querySelector(".number0"); 

const add = document.querySelector(".smop1"); 
const sub = document.querySelector(".smop2"); 
const mul = document.querySelector(".smop3"); 
const mod = document.querySelector(".cmop8"); 
const div = document.querySelector(".smop5"); 
const dot = document.querySelector(".smop4"); 

const paranlf = document.querySelector(".cmop1"); 
const paranrg = document.querySelector(".cmop2"); 
const fact = document.querySelector(".cmop3"); 
const sq = document.querySelector(".cmop5"); 
const cube = document.querySelector(".cmop6"); 
const expo = document.querySelector(".cmop7"); 

const clr = document.querySelector(".clr"); 
const back = document.querySelector(".cmop4"); 
const result = document.querySelector(".res"); 

const see = document.getElementById('view');

back.addEventListener("click", function(event) {
    if(back && see){
        calc = calc.slice(0,-1);
        if(calc.length == 0){
            calc = 0;
        }
        see.innerHTML = calc;        
    }
});
clr.addEventListener("click", function(event) {
    if(clr && see){
        calc = "";
        see.innerHTML = "0";        
    }
});

paranlf.addEventListener("click", function(event){
    calc = calc.concat("(");
    see.innerHTML = calc;
});

paranrg.addEventListener("click", function(event){
    calc = calc.concat(")");
    see.innerHTML = calc;
});

fact.addEventListener("click", function(event){
    function factorial(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
          result *= i;
        }
        return result;
    }
    let vi = factorial(parseInt(calc));
    calc = "";
    calc = calc.concat(vi);
    see.innerHTML = calc;
});

sq.addEventListener("click", function(event){
    let num = calc;
    calc = calc.concat("*");
    calc = calc.concat(num);
    see.innerHTML = calc;
});

cube.addEventListener("click", function(event){
    let num = calc;
    calc = calc.concat("*");
    calc = calc.concat(num);
    calc = calc.concat("*");
    calc = calc.concat(num);
    see.innerHTML = calc;
});

expo.addEventListener("click", function(event){
    let num = calc;
    calc = calc.concat("**");
    see.innerHTML = calc;
});

add.addEventListener("click", function(event){
    calc = calc.concat("+");
    see.innerHTML = calc;
});

sub.addEventListener("click", function(event){
    calc = calc.concat("-");
    see.innerHTML = calc;
});

mul.addEventListener("click", function(event){
    calc = calc.concat("*");
    see.innerHTML = calc;
});

div.addEventListener("click", function(event){
    calc = calc.concat("/");
    see.innerHTML = calc;
        exp = exp.concat("/");
});

mod.addEventListener("click", function(event){
    calc = calc.concat("%");
    see.innerHTML = calc;
});

dot.addEventListener("click", function(event){
    if(calc == "" || "0"){
        calc = calc.concat("0.");
    }
    if(calc.slice(-1) == "."){
        calc = calc.slice(0,-1);
    }
    calc = calc.concat(".");
    see.innerHTML = calc;
});

result.addEventListener("click", function(event){
    if(paran < 0){
        paran = 0;
    }
    while(paran != 0){
        calc.concat(")");
        paran--;
    }
    if(calc.slice(-1) == ("+" || "-" || "*" || "/" || "." || "%" || ")")){
        calc = calc.slice(0,-1);
    }
    calc = eval(calc);
    calc = calc.toString();
    see.innerHTML = calc;
});


btn1.addEventListener("click", function(event) {
    if(btn1 && see){
        calc = calc.concat("1");
        see.innerHTML = calc;
    }
});
btn2.addEventListener("click", function(event) {
    if(btn2 && see){
        calc = calc.concat("2");
        see.innerHTML = calc;
    }
});
btn3.addEventListener("click", function(event) {
    if(btn3 && see){
        calc = calc.concat("3");
        see.innerHTML = calc;
    }
});
btn4.addEventListener("click", function(event) {
    if(btn4 && see){
        calc = calc.concat("4");
        see.innerHTML = calc;
    }
});
btn5.addEventListener("click", function(event) {
    if(btn5 && see){
        calc = calc.concat("5");
        see.innerHTML = calc;
    }
});
btn6.addEventListener("click", function(event) {
    if(btn6 && see){
        calc = calc.concat("6");
        see.innerHTML = calc;
    }
});
btn7.addEventListener("click", function(event) {
    if(btn7 && see){
        calc = calc.concat("7");
        see.innerHTML = calc;
    }
});
btn8.addEventListener("click", function(event) {
    if(btn8 && see){
        calc = calc.concat("8");
        see.innerHTML = calc;
    }
});
btn9.addEventListener("click", function(event) {
    if(btn9 && see){
        calc = calc.concat("9");
        see.innerHTML = calc;
    }
});
btn0.addEventListener("click", function(event) {
    if(btn0 && see){
        calc = calc.concat("0");
        see.innerHTML = calc;
    }
});

