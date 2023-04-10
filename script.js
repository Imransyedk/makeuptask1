

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        var div=document.createElement("div");
        div.style.textAlign="center";
        div.innerHTML=` brand: ${data1[i].brand} name :${data1[i].name}`;
        document.body.append(div);
        }
}
var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");

row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <img src="${data1[i].image_link}" class="card-img-top" alt="image_link">
        <div class="card-body text-primary">
        <h5 class="card-title">${data1[i].name}</h5>
        <p class="card-text"> name:${data1[i].brand}</p>
        <p class="card-text"> price:${data1[i].price}</p>
        <p class="card-text"> description:${data1[i].description}</p>
        
          
        </div>
      </div>
      </div>`
        }
        document.body.append(container);
}