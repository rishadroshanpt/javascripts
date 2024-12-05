//---------normal function----------------

// function demo(a,b){
//     return(a+b)
// }
// console.log(demo(2,3));


//----------nameless function-----------

// let demo=function(a,b){
//     console.log(a+b);
// }
// demo(3,4)


//--------------arrow function-----------


// let demo=(a,b)=>(a+b)
// console.log(demo(5,6));


let l=[1,2,3,4,5,6]
// l.forEach(element => console.log(element));

// let data=l.map(a=>a*10)
// console.log(data);

let data=l.filter(a=>a%2==0)
console.log(data);

