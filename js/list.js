// data=[{name:'Appu',age:15},{name:'Ammu',age:14},{name:'Subu',age:17},{name:'Davi',age:15},{name:'John',age:12},{name:'Anees',age:13},{name:'Emil',age:15}]
// let table=document.querySelector("tbody")
// for(i of data){
//     let tr=document.createElement("tr")
//     let td=document.createElement("td")
//     let td1=document.createElement("td")
//     td.innerHTML=i.name
//     tr.appendChild(td)
//     td1.innerHTML=i.age
//     tr.appendChild(td1)
//     table.appendChild(tr)
// }


data=[{name:'Appu',age:15},{name:'Ammu',age:14},{name:'Subu',age:17},{name:'Davi',age:15},{name:'John',age:12},{name:'Anees',age:13},{name:'Emil',age:15}]
let table=document.querySelector("tbody")
for(i of data){
    let tr=document.createElement("tr")
    tr.innerHTML=`
    <td>${i.name}</td>
    <td>${i.age}</td>
    `
    table.appendChild(tr)
}