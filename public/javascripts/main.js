const renderRestaurants = data => {
  console.log("got data", data);

  const target = document.getElementById("list");
  let counter = 0;
  let totalRow=0;
  let row = document.createElement("div");

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

    const id = restaurant._id;
    button.setAttribute("href",`./details/${id}`);
    //button.setAttribute("href","detailsTrial.html");

    divImage.append(image);

    inner.append(divImage);
    inner.append(title);
    inner.append(location);
    inner.append(button);

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


