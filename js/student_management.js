let data=[{roll:1,name:'appu',age:12,class:4,mark:56,place:'tvm'},{roll:2,name:'ammu',age:12,class:7,mark:56,place:'ekm'}]

function display(){
    let table=document.querySelector("tbody")
    table.innerHTML=''
    data.forEach(i => {
        let tr=document.createElement("tr")
        let id_td=document.createElement("td")
        id_td.innerHTML=i.roll
        tr.appendChild(id_td)
        let name_td=document.createElement("td")
        name_td.innerHTML=i.name
        tr.appendChild(name_td)
        let age_td=document.createElement("td")
        age_td.innerHTML=i.age
        tr.appendChild(age_td)
        let class_td=document.createElement("td")
        class_td.innerHTML=i.class
        tr.appendChild(class_td)
        let mark_td=document.createElement("td")
        mark_td.innerHTML=i.mark
        tr.appendChild(mark_td)
        let place_td=document.createElement("td")
        place_td.innerHTML=i.place
        tr.appendChild(place_td)

        let edit_td=document.createElement("td")
        let edit_btn=document.createElement("button")
        edit_btn.classList.add("edit_btn")
        edit_btn.textContent="edit"
        edit_btn.onclick=function(){
            edit_form(i.roll)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)

        let delete_td=document.createElement("td")
        let delete_btn=document.createElement("button")
        delete_btn.classList.add("delete_btn")
        delete_btn.textContent="delete"
        delete_btn.onclick=function(){
            delete_std(i.roll)
        }
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
    const clss=parseInt(document.getElementById("class").value)
    const mark=parseInt(document.getElementById("mark").value)
    const place=document.getElementById("place").value
    data.push({roll:id,name:name,age:age,class:clss,mark:mark,place:place})

    document.getElementById("no").value=''
    document.getElementById("name").value=''
    document.getElementById("age").value=''
    document.getElementById("class").value=''
    document.getElementById("mark").value=''
    document.getElementById("place").value=''
    display()

})

let edit_id=''
function edit_form(id){
    document.getElementById("edit_form").style.display='block'
    document.getElementById("add_form").style.display='none'

    edit_data=data.find(std=>std.roll==id)
    document.getElementById("eno").value=edit_data.roll
    document.getElementById("ename").value=edit_data.name
    document.getElementById("eage").value=edit_data.age
    document.getElementById("eclass").value=edit_data.class
    document.getElementById("emark").value=edit_data.mark
    document.getElementById("eplace").value=edit_data.place
    edit_id=edit_data.roll
}

document.getElementById("edit_form").addEventListener('submit',function(event){
    event.preventDefault()
    const eid=parseInt(document.getElementById("eno").value)
    const ename=document.getElementById("ename").value
    const eage=parseInt(document.getElementById("eage").value)
    const eclass=parseInt(document.getElementById("eclass").value)
    const emark=parseInt(document.getElementById("emark").value)
    const eplace=document.getElementById("eplace").value
    
    data=data.map(std=>{
        if(std.roll==edit_id){
            return{...std,roll:eid,name:ename,age:eage,class:eclass,mark:emark,place:eplace}
        }return std
    })
    document.getElementById("edit_form").style.display='none'
    document.getElementById("add_form").style.display='block'
    display()
})

function delete_std(id) {
    data=data.filter(std=>std.roll!=id)   
    display()
    
}

const searchInput = document.getElementById("search");
searchInput.addEventListener("input",function(event) {
    const query = event.target.value.toLowerCase();  // Get the search query and convert to lowercase
    data= data.filter(item => item.name.toLowerCase().includes(query));  // Filter items based on the query
    display()
})


display()