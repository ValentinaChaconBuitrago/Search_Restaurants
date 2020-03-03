/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
let datos;
let logge;

function updateLogged() {
  resp = JSON.stringify({ logged: true });
  fetch("/logUpdate", {
    method: "POST", // or 'PUT'
    body: resp, // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json"
    }
  });
}
function checkLogged(a) {
  logge = a.locked;
  console.log("LLEGOOOO", logge);
  if (logge == true) {
    document.getElementById("loginB").style.visibility = "hidden";
  }
  return logge;
}
const renderRestaurants = data => {
  fetch("/log").then(res => checkLogged(res.body));

  console.log("got data", data);
  datos = data;
  const target = document.getElementById("list");
  let counter = 0;
  let totalRow = 0;
  let row = document.createElement("div");

  for (const restaurant of data) {
    vale(restaurant);
    if (counter % 3 === 0) {
      console.log("created new row");
      row = document.createElement("div");
      row.className = "row";
      target.appendChild(row);
      totalRow++;
      let name = "row" + totalRow;
      row.setAttribute("id", name);
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
    image.src = `${restaurant.image}`;
    image.height = `${200}`;
    image.className = "restaurant-detailed-image";

    const button = document.createElement("a");
    button.className = "readmore-btn";
    button.textContent = "Find out more";

    const id = restaurant._id;
    button.setAttribute("href", `./details/${id}`);
    //button.setAttribute("href","detailsTrial.html");

    divImage.append(image);

    inner.append(divImage);
    inner.append(title);
    inner.append(location);
    inner.append(button);

    div.append(inner);
    row.append(div);
    console.log("Llego al final");
  }
  if (logged == true) {
    document.getElementById("loginB").style.visibility = "hidden";
  }
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
fetch("./getRestaurants")
  .then(res => res.json())
  .then(renderRestaurants)
  .catch(() => {
    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.textContent = "Error downloading data";
    document.getElementById("target").append(div);
  });

let breakfastp = false;
let lunchp = false;
let dinnerp = false;
let chapinerop = false;
let chicop = false;
let usaquenp = false;
let centrop = false;
let parquep = false;
let salitrep = false;
let colombianp = false;
let italianp = false;
let japanesep = false;
let healthyp = false;
let mexicanp = false;
//Registrar un usuario
function register() {
  window.localStorage.logged = false;
  let username = document.getElementById("usuarioregistro").value;
  let hashpass = hashCode(document.getElementById("contrasenharegistro").value);
  var user = JSON.stringify({
    username: username,
    password: hashpass
  });
  addUser(user);
}
function addUser(user) {
  fetch("./user", {
    method: "POST", // or 'PUT'
    body: user, // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => {
      console.log("Response:", response);
      if (response == "OK") {
        window.localStorage.logged = true;
        document.getElementById("loginB").style.visibility = "hidden";

        document.getElementById("addB").style.display = "none";
      } else {
        alert("El nombre de usuario ya existe");
      }
    });
}
function login() {
  updateLogged();
  let username = document.getElementById("usuariologin").value;
  let hashpass = hashCode(document.getElementById("contrasenhalogin").value);
  var user = JSON.stringify({
    username: username,
    password: hashpass
  });
  validate(username, hashpass, x => valeOno(x));
}
function valeOno(bool) {
  if (bool == false) {
    alert("Usuario o contraseña incorrectos");
  } else {
    updateLogged();
    filtering();
  }
}

//hashcode function
function hashCode(s) {
  return s.split("").reduce(function(a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
}
let validate = (id, pass, callback) => {
  fetch("/usuarios/" + id)
    .then(res => res.json())
    .then(res => {
      console.log(res, "LLEGOOO");
      console.log(res[0].password);
      console.log(pass);

      if (res[0].password == pass) {
        console.log("SISISI");
        callback(true);
      } else {
        console.log("NONONO");
        callback(false);
      }
    })
    .catch(() => {
      return "error";
    });
};
//funcionespara revisar los filtros cada vez que los oprimen
function breakfast(param) {
  breakfastp = $(param).is(":checked");
  filtering();
}
function lunch(param) {
  lunchp = $(param).is(":checked");
  filtering();
}
function dinner(param) {
  dinnerp = $(param).is(":checked");
  filtering();
}
function chico(param) {
  chicop = $(param).is(":checked");
  filtering();
}
function chapinero(param) {
  chapinerop = $(param).is(":checked");
  filtering();
}
function salitre(param) {
  salitrep = $(param).is(":checked");
  filtering();
}
function parque(param) {
  parquep = $(param).is(":checked");
  filtering();
}
function usaquen(param) {
  usaquenp = $(param).is(":checked");
  filtering();
}
function centro(param) {
  centrop = $(param).is(":checked");
  filtering();
}
function colombian(param) {
  colombianp = $(param).is(":checked");
  filtering();
}
function italian(param) {
  italianp = $(param).is(":checked");
  filtering();
}
function japanese(param) {
  japanesep = $(param).is(":checked");
  filtering();
}
function mexican(param) {
  mexicanp = $(param).is(":checked");
  filtering();
}
function healthy(param) {
  healthyp = $(param).is(":checked");
  filtering();
}
function createRestaurant() {
  console.log("llegue");
  console.log("element", document.getElementById("name").value);
  let name = document.getElementById("name").value;
  let area = document.getElementById("area").value;
  let address = document.getElementById("address").value;
  let openinghours = document.getElementById("openinghours").value;
  let closinghours = document.getElementById("closinghours").value;
  let type = document.getElementById("type").value;
  let specialty = document.getElementById("specialty").value;
  let ratingsList = [];
  let rating = 5;
  let reviews = [];
  let price = document.getElementById("price").value;
  let image = document.getElementById("image").value;
  let description = document.getElementById("description").value;
  var restaurant = JSON.stringify({
    name: name,
    area: area,
    address: address,
    openinghours: openinghours,
    closinghours: closinghours,
    type: type,
    specialty: specialty,
    rating: rating,
    ratingsList: ratingsList,
    reviews: reviews,
    price: price,
    image: image,
    description: description
  });
  console.log("va por el add");
  console.log(restaurant);
  addRestaurant(restaurant);
}
let filtering = () => {
  document.getElementById("list").innerHTML = "";
  const target = document.getElementById("list");
  let counter = 0;
  let totalRow = 0;
  let row = document.createElement("div");
  const data = datos;
  for (const restaurant of data) {
    if (vale(restaurant)) {
      if (counter % 3 === 0) {
        console.log("created new row");
        row = document.createElement("div");
        row.className = "row";
        target.appendChild(row);
        totalRow++;
        let name = "row" + totalRow;
        row.setAttribute("id", name);
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
      image.src = `${restaurant.image}`;
      image.height = `${200}`;
      image.className = "restaurant-detailed-image";

      const button = document.createElement("a");
      button.className = "readmore-btn";
      button.textContent = "Find out more";

      const id = restaurant._id;
      button.setAttribute("href", `./details/${id}`);
      //button.setAttribute("href","detailsTrial.html");

      divImage.append(image);

      inner.append(divImage);
      inner.append(title);
      inner.append(location);
      inner.append(button);

      div.append(inner);
      row.append(div);
      console.log("Llego al final");
    }
  }
  fetch("/log").then(res => checkLogged(res.body));
  if (logged == true) {
    document.getElementById("loginB").style.visibility = "hidden";
  }
};

function vale(obj) {
  let val = true;
  if (!(obj.specialty == "Breakfast") * breakfastp == true) {
    val = false;
    return val;
  }
  if (!(obj.specialty == "Lunch") * lunchp == true) {
    val = false;
    return val;
  }
  if (!(obj.specialty == "Dinner") * dinnerp == true) {
    val = false;
    return val;
  }
  if (!(obj.area == "Chico") * chicop == true) {
    val = false;
    return val;
  }
  if (!(obj.area == "Usaquen") * usaquenp == true) {
    val = false;
    return val;
  }
  if (!(obj.area == "Chapinero Alto") * chapinerop == true) {
    val = false;
    return val;
  }
  if (!(obj.area == "Parque 93") * parquep == true) {
    val = false;
    return val;
  }
  if (!(obj.area == "Centro") * centrop == true) {
    val = false;
    return val;
  }
  if (!(obj.area == "Salitre") * salitrep == true) {
    val = false;
    return val;
  }
  if (!(obj.type == "Colombian") * colombianp == true) {
    val = false;
    return val;
  }
  if (!(obj.type == "Mexican") * mexicanp == true) {
    val = false;
    return val;
  }
  if (!(obj.type == "Italian") * italianp == true) {
    val = false;
    return val;
  }
  if (!(obj.type == "Japanese") * japanesep == true) {
    val = false;
    return val;
  }
  if (!(obj.type == "Healthy") * healthyp == true) {
    val = false;
    return val;
  }
  return val;
}
function addRestaurant(restaurant) {
  fetch("./restaurant", {
    method: "POST", // or 'PUT'
    body: restaurant, // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => {
      console.log("Success:", response);
      filtering();
    });
}
