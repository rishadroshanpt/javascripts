fetch('https://dummyjson.com/recipes').then(response=>response.json()).then(data=>{
    data.recipes.forEach(element => {
        const row=document.querySelector(".row")
        const col=document.createElement("div")
        col.classList.add('col-lg-3')
        col.innerHTML=`
            <div class="card mt-3" style="width:100%;height:650px">
                <img class="card-img-top" src="${element.image}" style="width:100%">
                <div class="card-body">
                <h4 class="card-title">${element.name}</h4>
                <h5 class="card-title">${element.cuisine}</h5>
                <h6>Ingredients :</h6>
                <p class="card-text">${element.ingredients}</p>
                </div>
            </div>
        `
        row.appendChild(col)
    });
})