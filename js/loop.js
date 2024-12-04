//----------for loop----------------

// for(i=0;i<=10;i++){
//     console.log(i);   
// }


//----------while loop---------------

// i=0
// while(i<=10){
//     console.log(i);
//     i++
// }


//----------do while loop-------------

// i=0
// do{
//     console.log(i);
//     i++
// }
// while(i<=15)

function odd(){
    s=parseInt(document.getElementById("i").value)
    l=parseInt(document.getElementById("l").value)
    for(i=s;i<=l;i++){
        if(i%2==1){
            console.log(i);
        }
    }
}

function even(){
    s=parseInt(document.getElementById("i").value)
    l=parseInt(document.getElementById("l").value)
    for(i=s;i<=l;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}

function mul(){
    num=parseInt(document.getElementById("num").value)
    for(i=1;i<=10;i++){
        console.log(i, 'X' ,num, '=' ,(i*num));
        
    }
}

// function rev(){
//     str=document.getElementById("str").value
//     l=str.length-1; 
//     newStr=''   
//     for(i=l;i>=0;i--){
//         newStr+=str[i]
//     }    
//     console.log(newStr);
// }

function rev(){
    str=document.getElementById("str").value 
    newStr=''
    for(i of str){
        newStr=i+newStr
    }   
    console.log(newStr);
}



// let l=[1,3,2,4]
// for(i of l){
//     console.log(i);
    
// }