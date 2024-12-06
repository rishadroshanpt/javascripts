let data=[{id:1,name:'manu',age:22,place:'ekm'},{id:2,name:'arun',age:22,place:'tvm'},{id:3,name:'basi',age:21,place:'mlp'},{id:4,name:'sonu',age:23,place:'kzkd'}]

function display(){
    let table=document.querySelector("tbody")
    table.innerHTML=''
    data.forEach(i => {
        let tr=document.createElement("tr")
        let id_td=document.createElement("td")
        id_td.innerHTML=i.id
        tr.appendChild(id_td)
        let name_td=document.createElement("td")
        name_td.innerHTML=i.name
        tr.appendChild(name_td)
        let age_td=document.createElement("td")
        age_td.innerHTML=i.age
        tr.appendChild(age_td)
        let place_td=document.createElement("td")
        place_td.innerHTML=i.place
        tr.appendChild(place_td)

        let edit_td=document.createElement("td")
        let edit_btn=document.createElement("button")
        edit_btn.textContent="edit"
        edit_btn.onclick=function(){
            edit_form(i.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)

        let delete_td=document.createElement("td")
        let delete_btn=document.createElement("button")
        delete_btn.textContent="delete"
        delete_td.appendChild(delete_btn)
        tr.appendChild(delete_td)

        table.appendChild(tr)
    });
}

document.getElementById("add_form").addEventListener('submit',function(event){    
    event.preventDefault()
    const id=parseInt(document.getElementById("no").value)
    const name=document.getElementById("name").value
    const age=parseInt(document.getElementById("age").value)
    const place=document.getElementById("place").value
    data.push({id:id,name:name,age:age,place:place})

    document.getElementById("no").value=''
    document.getElementById("name").value=''
    document.getElementById("age").value=''
    document.getElementById("place").value=''
    display()

})

let edit=id=''
function edit_form(id){
    document.getElementById("edit_form").style.display='block'
    document.getElementById("add_form").style.display='none'

    edit_data=data.find(user=>user.id==id)
    document.getElementById("eno").value=edit_data.id
    document.getElementById("ename").value=edit_data.name
    document.getElementById("eage").value=edit_data.age
    document.getElementById("eplace").value=edit_data.place
    edit_id=edit_data.id
}

document.getElementById("edit_form").addEventListener('submit',function(event){
    event.preventDefault()
    const eid=parseInt(document.getElementById("eno").value)
    const ename=document.getElementById("ename").value
    const eage=parseInt(document.getElementById("eage").value)
    const eplace=document.getElementById("eplace").value

    data=data.map(user=>{
        if(user.id==edit_id){
            return{...user,id:eid,name:ename,age:eage,place:eplace}
        }return user
    })
    document.getElementById("edit_form").style.display='none'
    document.getElementById("add_form").style.display='block'
    display()
})

display()