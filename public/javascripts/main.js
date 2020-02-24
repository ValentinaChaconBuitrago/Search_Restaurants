const renderRestaurantsTemplate = data => {
  console.log("got data", data);

  const target = document.getElementById("target");

  data.forEach(restaurant => {
    const div = document.createElement("div");
    div.textContent = `${restaurant.name} ${restaurant.area}`;
    target.append(div);
  });
};

const renderRestaurants = data => {
  console.log("got data", data);

  const target = document.getElementById("list");
  let counter = 1;
  let totalRow=0;
  let row = document.createElement("div");

  for(const restaurant of data){
    //Outer div
    const div = document.createElement("div");
    div.className = "col-lg-4";

    //Inner div
    const inner = document.createElement("div");
    inner.className = "property-item";
    const title = document.createElement("h3");
    title.textContent = `${restaurant.name}`;
    const location = document.createElement("h5");
    location.textContent = `${restaurant.area}`;

    inner.append(title);
    inner.append(location);

    //div.textContent=`${restaurant.name} ${restaurant.area}`;
    div.append(inner);
    row.append(div);

    if(counter%3===0){
      row = document.createElement("div");
      row.className = "row";
      totalRow++;
      let name = "row"+totalRow;
      row.setAttribute("id",name);
      target.appendChild(row);
    }
    counter++;
  };





  data.forEach(restaurant => {
    const div = document.createElement("div");
    div.textContent = `${restaurant.name} ${restaurant.area}`;
    console.log("counter",counter);
    if(counter%3===0){
      console.log("nuevo div");
    }
    counter++;
    target.append(div);
  });
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


