
//Fetching data from fakestoreapi.com abd converting the data into json.
fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((completeData)=>{
 

    //Declaring an empty string that will be populated with the new HTML used for an item card.
    let cardsHTML="";


    //Since the data is an array of objects, using the map function to iterate over the objects and their elements.
    completeData.map((values)=>{


        //Using "+=" so at each iteration of the array of objects, the values will take the values of the elements in the object that is being iterated and generate a whole new item card for each object and not rewrite the same card.
        cardsHTML+=`<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt="img" class="images">
        <p class="description">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">$${values.price}</p>
      </div>`
    });

    
    //Replacing the inner HTML.
    document.getElementById("cards").innerHTML=cardsHTML;

}).catch((err)=>{
    console.log(err);
})