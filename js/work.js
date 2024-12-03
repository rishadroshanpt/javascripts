function wrk1(){
    sal=parseInt(document.getElementById("sal").value)
    ser=parseInt(document.getElementById("ser").value)
    if(ser>5){
        bonus=(sal/100)*5
    }
    else{
        bonus='No bonus.'
    }
    bonus=document.getElementById("bon").innerHTML=bonus
}
function wrk2(){
    num=parseInt(document.getElementById("num").value)
    num%=10
    if(num%3==0){
        res=document.getElementById("res").innerHTML="Last digit is divisible by 3."
    }
    else{
        res=document.getElementById("res").innerHTML="Last digit is not divisible by 3."
    }
}
function wrk3(){
    unt=parseInt(document.getElementById("unit").value)
    if(unt<=100){
        res='No charge'
    }
    else if(unt<=200){
        u=unt-100
        res=u*5
    }
    else{
        u=unt-200
        res=(u*10)+500
    }
    res=document.getElementById("chrg").innerHTML=res
}
function wrk4(){
    city=document.getElementById("city").value
    if(city=='Delhi'){
        mon='Red Fort'
    }
    else if(city=='Agra'){
        mon='Taj Mahal'
    }
    else if(city=='Jaipur'){
        mon='Jal Mahal'
    }
    else{
        mon='Invalid city'
    }
    mon=document.getElementById("mon").innerHTML=mon
}
function wrk5(){
    num=parseInt(document.getElementById("dnum").value)
    console.log(num);
    
    if(num==1){
        day='Sunday'
    }
    else if(num==2){
        day='Monday'
    }
    else if(num==3){
        day='Tuesday'
    }
    else if(num==4){
        day='Wednesday'
    }
    else if(num==5){
        day='Thursday'
    }
    else if(num==6){
        day='Friday'
    }
    else if(num==7){
        day='Saturday'
    }
    else{
        day='Invalid num'
    }
    day=document.getElementById("day").innerHTML=day
}
function wrk6(){
    price=parseInt(document.getElementById("price").value)
    if(price>100000){
        tax=(price/100)*15
    }
    else if(price<=100000 && price>50000){
        tax=(price/100)*10
    }
    else{
        tax=(price/100)*5
    }
    tax=document.getElementById("tax").innerHTML=tax
}