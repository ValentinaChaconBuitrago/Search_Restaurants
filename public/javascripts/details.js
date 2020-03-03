/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
let restaurantActual;
function renderStars(number) {
  const target = document.getElementById("rating");
  let left = 5 - number;
  console.log("numero left", left);
  while (number > 0) {
    console.log("se agrega estrella llena");
    const star = document.createElement("span");
    star.className = "fa fa-star";
    target.append(star);
    number--;
  }
  while (left > 0) {
    console.log("se agrega estrella llena");
    const star = document.createElement("span");
    star.className = "fa fa-star-o";
    target.append(star);
    left--;
  }
}
function setActual(id) {
  console.log("me llamaron");
  console.log(id);

  restaurantActual = restaurant;
}
function renderPrice(number) {
  const target = document.getElementById("pricing");
  while (number > 0) {
    console.log("se agrega dinero");
    const money = document.createElement("span");
    money.className = "fa fa-usd";
    target.append(money);
    number--;
  }
}
function rate() {
  let id = restaurantActual._id;
  let ratings = restaurantActual.reviews;
  let rating = Number(document.getElementById("ratingValue").value);
  let comment = document.getElementById("comment").value;
  let n = ratings.length();
  let newRating = (n * Number(restaurantActual.rating) + rating) / (n + 1);
  ratings.push(comment);
  var body = JSON.stringify({
    rating: newRating,
    reviews: ratings
  });
  updateRest(body, id);
}
function updateRest(restaurant, id) {
  fetch("./restaurant/" + id, {
    method: "PUT", // or 'PUT'
    body: restaurant, // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => {
      console.log("Success:", response);
      renderStars(restaurant.rating);
    });
}
