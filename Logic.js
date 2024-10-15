const num9 = document.querySelector('.btn-9');
const num8 = document.querySelector('.btn-8');
const num7 = document.querySelector('.btn-7');
const num6 = document.querySelector('.btn-6');
const num5 = document.querySelector('.btn-5');
const num4 = document.querySelector('.btn-4');
const num3 = document.querySelector('.btn-3');
const num2 = document.querySelector('.btn-2');
const num1 = document.querySelector('.btn-1');
const num0 = document.querySelector('.btn-0');

const del = document.querySelector('.btn-back');
const clr = document.querySelector('.btn-ac');

const addition = document.querySelector('.btn-add');
const multiplication = document.querySelector('.btn-mul');
const subtraction = document.querySelector('.btn-sub');
const modulo = document.querySelector('.btn-mod');
const division = document.querySelector('.btn-divide');
const fraction = document.querySelector('.btn-dec');

let str = "";
const res = document.querySelector('.screen');
res.innerHTML = "0";

const hist = document.querySelector('.log');


//display number of 9 when clicked
num9.addEventListener('click', function(event){
    str = str.concat("9");
    res.innerHTML = str;
});
//display number of 8 when clicked
num8.addEventListener('click', function(event){
    str = str.concat("8");
    res.innerHTML = str;
});
//display number of 7 when clicked
num7.addEventListener('click', function(event){
    str = str.concat("7");
    res.innerHTML = str;
});
//display number of 6 when clicked
num6.addEventListener('click', function(event){
    str = str.concat("6");
    res.innerHTML = str;
});
//display number of 5 when clicked
num5.addEventListener('click', function(event){
    str = str.concat("5");
    res.innerHTML = str;
});
//display number of 4 when clicked
num4.addEventListener('click', function(event){
    str = str.concat("4");
    res.innerHTML = str;
});
//display number of 3 when clicked
num3.addEventListener('click', function(event){
    str = str.concat("3");
    res.innerHTML = str;
});
//display number of 2 when clicked
num2.addEventListener('click', function(event){
    str = str.concat("2");
    res.innerHTML = str;
});
//display number of 1 when clicked
num1.addEventListener('click', function(event){
    str = str.concat("1");
    res.innerHTML = str;
});
//display number of 0 when clicked
num0.addEventListener('click', function(event){
    str = str.concat("0");
    res.innerHTML = str;
});

del.addEventListener('click', function(event){
    //display 0 if empty
    if(str == ""){
        res.innerHTML = "0";
    }

    str = str.slice(0,-1);
    res.innerHTML = str;
    //after removing last char check again if str is empty
    if(str == ""){
        res.innerHTML = "0";
    }
});

clr.addEventListener('click', function(event){
    //clear all
    str = "";
    res.innerHTML = "0";
});

addition.addEventListener('click', function(event) {
    //checks last char if it may result in ambiguity
    const lastChar = str.charAt(str.length - 1); 

    if(lastChar === "*" || 
        lastChar === "/" || 
        lastChar === "%" || 
        lastChar === "-" || 
        lastChar === "." || 
        lastChar === "+"){

        alert("Invalid Input");
        return; 

    }else{
        //if nothing is printed
        if(str === ""){
            res.innerHTML = "0";
        }else{
            str = str.concat("+");
            res.innerHTML = str;
        }

    }

});

subtraction.addEventListener('click', function(event){
    //checks last char if it may result in ambiguity
    const lastChar = str.charAt(str.length - 1); 

    if(lastChar === "*" || 
        lastChar === "/" || 
        lastChar === "%" || 
        lastChar === "-" || 
        lastChar === "+" || 
        lastChar === "."){

        alert("Invalid Input");
        return; 

    }else{

        str = str.concat("-");
        res.innerHTML = str;

    }

});

multiplication.addEventListener('click', function(event){
    //checks last char if it may result in ambiguity
    const lastChar = str.charAt(str.length - 1); 

    if(lastChar === "+" || 
        lastChar === "/" || 
        lastChar === "%" || 
        lastChar === "-" || 
        lastChar === "*" || 
        lastChar === "."){

        alert("Invalid Input");
        return; 

    }else{
        //if nothing is printed
        if(str === ""){
            res.innerHTML = "0";
        }else{
            str = str.concat("*");
            res.innerHTML = str;
        }

    }

});

division.addEventListener('click', function(event){
    //checks last char if it may result in ambiguity
    const lastChar = str.charAt(str.length - 1); 

    if(lastChar === "*" || 
        lastChar === "+" || 
        lastChar === "%" || 
        lastChar === "/" || 
        lastChar === "-" || 
        lastChar === "."){

        alert("Invalid Input");
        return; 

    }else{
        //if nothing is printed
        if(str === ""){
            res.innerHTML = "0";
        }else{
            str = str.concat("/");
            res.innerHTML = str;
        }

    }

});

modulo.addEventListener('click', function(event){
    //checks last char if it may result in ambiguity
    const lastChar = str.charAt(str.length - 1); 

    if(lastChar === "*" || 
        lastChar === "/" || 
        lastChar === "+" || 
        lastChar === "%" || 
        lastChar === "-" || 
        lastChar === "."){

        alert("Invalid Input");
        return; 

    }else{
        //if nothing is printed
        if(str === ""){
            res.innerHTML = "0";
        }else{
            str = str.concat("%");
            res.innerHTML = str;
        }

    }

});

fraction.addEventListener('click', function(event){
    //checks last char if it may result in ambiguity
    const lastChar = str.charAt(str.length - 1); 

    if(lastChar === "*" || 
        lastChar === "/" || 
        lastChar === "." || 
        lastChar === "%" || 
        lastChar === "-" || 
        lastChar === "+"){

        alert("Invalid Input");
        return; 

    }else{
        //if nothing is printed
        if(str === ""){
            res.innerHTML = "0.";
        }else{
            str = str.concat(".");
            res.innerHTML = str;
        }

    }

});

const factorial = document.querySelector('.btn-fact');
const root = document.querySelector('.btn-sroot');
const sqr = document.querySelector('.btn-sq');
const cub = document.querySelector('.btn-cube');
const exponential = document.querySelector('.btn-expo');

factorial.addEventListener('click', function(event){

    if(str === ""){
        res.innerHTML = "0";
        alert("Invalid Input");
        return; 
    }

    function factorial_fun(x){

        if (x === 0 || x === 1){
            return 1;
        } 
            
        let result = 1;

        for(let i = 2; i <= x; i++){
            result *= i;
        }

        return result;

    }

    const temp = str;
    const para = document.createElement('li');

    str = factorial_fun(str);
    para.textContent = `${temp}!  = ${str}`;
    hist.appendChild(para);
    res.innerHTML = str;

});

root.addEventListener('click', function(event){
    //if nothing is printed
    if(str === ""){
        res.innerHTML = "0";
        alert("Invalid Input");
        return; 
    }

    const temp = str;
    const para = document.createElement('li');

    str = Math.sqrt(str);
    para.textContent = `√${temp}  = ${str}`;
    hist.appendChild(para);
    res.innerHTML = str;

});

sqr.addEventListener('click', function(event){
    //checks last char if it may result in ambiguity
    const lastChar = str.charAt(str.length - 1); 

    if(lastChar === "*" || 
        lastChar === "/" || 
        lastChar === "." || 
        lastChar === "%" || 
        lastChar === "-" || 
        lastChar === "+"){

        alert("Invalid Input");
        return; 

    }else{
        //if nothing is printed        
        if(str === ""){
            res.innerHTML = "0";
            alert("Invalid Input");
            return; 
        }
    
        str = str.concat("**2");
        res.innerHTML = str;        

    }


});

cub.addEventListener('click', function(event){
    //checks last char if it may result in ambiguity
    const lastChar = str.charAt(str.length - 1); 

    if(lastChar === "*" || 
        lastChar === "/" || 
        lastChar === "." || 
        lastChar === "%" || 
        lastChar === "-" || 
        lastChar === "+"){

        alert("Invalid Input");
        return; 

    }else{
        //if nothing is printed        
        if(str === ""){
            res.innerHTML = "0";
            alert("Invalid Input");
            return; 
        }
        
    }


    str = str.concat("**3");
    res.innerHTML = str;

});

exponential.addEventListener('click', function(event){
    //checks last char if it may result in ambiguity
    const lastChar = str.charAt(str.length - 1); 

    if(lastChar === "*" || 
        lastChar === "/" || 
        lastChar === "." || 
        lastChar === "%" || 
        lastChar === "-" || 
        lastChar === "+"){

        alert("Invalid Input");
        return; 

    }else{
        //if nothing is printed        
        if(str === ""){
            res.innerHTML = "0";
            alert("Invalid Input");
            return; 
        }
    
        str = str.concat("**");
        res.innerHTML = str;
        
    }


});

const show = document.querySelector('.btn-eql');

show.addEventListener('click', function(event){
    //checks last char if it may result in ambiguity    
    const lastChar = str.charAt(str.length - 1); 

    if(lastChar === "*" || 
        lastChar === "/" || 
        lastChar === "." || 
        lastChar === "%" || 
        lastChar === "-" || 
        lastChar === "+"){

        alert("Invalid Input");
        return; 

    }else{
        //in built eval() function is used for operations.
        let temp2 = str;

        const temp = str;
        const para = document.createElement('li');

        str = "";

        str = str.concat(eval(temp2));
        para.textContent = `${temp}  = ${str}`;
        hist.appendChild(para);
        res.innerHTML = temp;

    }

});

const erase_hist = document.querySelector('.btn-datadel');

erase_hist.addEventListener('click', function(event){
    //clears histroy
    hist.innerHTML = "";

});
