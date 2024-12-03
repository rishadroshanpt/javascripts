// alert('Welcome')
// var a=10
// var a=20
// alert(a)
// const a='qwe'
// alert(a)
// console.log(a);


//----------------arithmetic operator------------------

// let a=10
// let b=20

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// a++
// console.log(a);
// b--
// console.log(b);


//-------------------assignment operator--------------

// let a=10

// console.log(a+=5);
// console.log(a-=5);
// console.log(a*=5);
// console.log(a/=5);
// console.log(a%=5);
// console.log(a**=5);


// ------------------comparison operator-----------------------

// console.log(5=='5');
// console.log(5==='5');
// console.log(5!='5');
// console.log(5!=='5');
// console.log(5<'6');
// console.log(5>'6');
// console.log(6>='6');
// console.log(6<='6');


// ------------------logical operator---------------------------


// console.log(5==5 && 5<5);
// console.log(5==5 || 5<5);
// console.log (!(5<5));


//------------------calculator----------------------------

function add(){
    let a1=parseInt(document.getElementById("a").value)
    let b1=parseInt(document.getElementById("b").value)
    result=document.getElementById("res").innerHTML=a1+b1    
}
function sub(){
    let a1=parseInt(document.getElementById("a").value)
    let b1=parseInt(document.getElementById("b").value)
    result=document.getElementById("res").innerHTML=a1-b1    
}
function div(){
    let a1=parseInt(document.getElementById("a").value)
    let b1=parseInt(document.getElementById("b").value)
    result=document.getElementById("res").innerHTML=a1/b1    
}
function mul(){
    let a1=parseInt(document.getElementById("a").value)
    let b1=parseInt(document.getElementById("b").value)
    result=document.getElementById("res").innerHTML=a1*b1    
}
function mod(){
    let a1=parseInt(document.getElementById("a").value)
    let b1=parseInt(document.getElementById("b").value)
    result=document.getElementById("res").innerHTML=a1%b1    
}
function exp(){
    let a1=parseInt(document.getElementById("a").value)
    let b1=parseInt(document.getElementById("b").value)
    result=document.getElementById("res").innerHTML=a1**b1    
}
function c(){
    result=document.getElementById("res").innerHTML=''   
}