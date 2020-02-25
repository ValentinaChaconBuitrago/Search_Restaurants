const renderRestaurantsTemplate = data => {
  console.log("got data", data);

  const target = document.getElementById("target");

  data.forEach(restaurant => {
    const div = document.createElement("div");
    div.textContent = `${restaurant.name} ${restaurant.area}`;
    target.append(div);
  });
};






const renderTitle = rest =>{
  console.log("Entro detalles restaurant",rest);
  const title = document.getElementById("title");
  title.textContent = `${rest.name}`;
};






const renderRestaurants = data => {
  console.log("got data", data);

  const target = document.getElementById("list");
  let counter = 0;
  let totalRow=0;
  let row = document.createElement("div");;

  for(const restaurant of data){

    if(counter%3===0){
      console.log("created new row");
      row = document.createElement("div");
      row.className = "row";
      target.appendChild(row);
      totalRow++;
      let name = "row"+totalRow;
      row.setAttribute("id",name);
    }
    counter++;
    console.log("updated value of counter", counter);

    //Outer div
    const div = document.createElement("div");
    div.className = "col-lg-4";

    //Inner div
    const inner = document.createElement("div");
    inner.className = "property-item";
    const title = document.createElement("h3");
    title.textContent = `${restaurant.name}`;
    const location = document.createElement("h5");
    location.textContent = `${restaurant.area}, ${restaurant.specialty}`;


    const divImage = document.createElement("div");
    divImage.className = "image-container";
    const image = document.createElement("img");
    image.src=`${restaurant.image}`;
    image.height=`${200}`;
    image.className = "restaurant-detailed-image";

    const button = document.createElement("a");
    button.className = "readmore-btn";
    button.textContent = "Find out more";

    button.setAttribute("href","/details.html");

    //TODO: send restaurant to the other html file
    button.addEventListener("click", e =>{
      console.log("button was clicked");
      renderTitle(restaurant);
    });


    divImage.append(image);

    inner.append(divImage);
    inner.append(title);
    inner.append(location);
    inner.append(button);


    //div.textContent=`${restaurant.name} ${restaurant.area}`;
    div.append(inner);
    row.append(div);
    console.log("Llego al final");

  };
};

fetch("./getRestaurants")
  .then(res => res.json())
  .then(renderRestaurants)
  .catch(() => {
    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.textContent = "Error downloading data";
    document.getElementById("target").append(div);
  });


