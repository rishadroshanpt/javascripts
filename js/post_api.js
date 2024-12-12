fetch('https://dummyjson.com/posts').then(response=>response.json()).then(data=>{
    data.posts.forEach(element => {
        const row=document.querySelector(".row")
        const col=document.createElement("div")
        col.classList.add('col-lg-4')
        col.innerHTML=`
            <div class="card mt-3" style="width:100%;height:450px">
                    <div class="card-body">
                    <h2 class="card-title">${element.title}</h2>
                    <p class="card-text">${element.body}</p>
                    <p class="card-footer"><i class="fa-regular fa-thumbs-up"></i>${element.reactions['likes']} <i class="fa-regular fa-thumbs-down"></i> ${element.reactions['dislikes']}</p>
                    <p class="card-footer"><i class="fa-solid fa-eye"></i> ${element.views}<i class="fa-solid fa-hashtag"></i>${element.tags}</p>

                    </div>
            </div>
        `
        row.appendChild(col)
    });

})