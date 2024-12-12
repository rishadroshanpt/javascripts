fetch('https://dummyjson.com/recipes').then(response=>response.json()).then(data=>{
    data.recipes.forEach(element => {
        const row=document.querySelector(".row")
        const col=document.createElement("div")
        col.classList.add('col-lg-3')
        col.innerHTML=`
            <div class="card mt-3" style="width:100%;height:550px">
                <img class="card-img-top" src="${element.image}" style="width:100%">
                <div class="card-body">
                <h4 class="card-title">${element.name}</h4>
                <h5 class="card-title">${element.cuisine}</h5>
                <p class="card-text">${element.mealType}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" data-id="${element.id}">
                    View Deatils
                </button>
                </div>
            </div>
        `
        row.appendChild(col)
    });

    document.querySelectorAll(".btn").forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            const pro_id=e.target.getAttribute('data-id')
            const product=data.recipes.find((pro)=>pro.id==pro_id)
            document.getElementById("model-img").src=product.image
            document.getElementById("title").innerHTML=product.name
            
            document.getElementById("cuisine").innerHTML=product.cuisine
            document.getElementById("dis").innerHTML=`
            <h5>Ingredients</h5> <br>${product.ingredients} <br> <br> <h5>Instructions</h5><br>${product.instructions}
            `

        })
    })
})