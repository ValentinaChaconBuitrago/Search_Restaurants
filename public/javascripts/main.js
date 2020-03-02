let datos;
const renderRestaurants = data => {
  console.log("got data", data);
  datos = data;
  const target = document.getElementById("list");
  let counter = 0;
  let totalRow=0;
  let row = document.createElement("div");

  for(const restaurant of data){
    vale(restaurant);
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

let validate = (id,pass) =>{
  fetch(`./usuarios/${id}`)
  .then(res => res.json())
  .then(res=>{
    for(const user of res){
      if(user.password==pass){
        return true ;
      }else
      {return false;}
    }
  }
  )
  .catch(() => {
    return "error";
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

function breakfast(param){
breakfastp = $(param).is(":checked");
filtering();
console.log(validate('juandarango','juandarango'));
}
function lunch(param){
lunchp = $(param).is(":checked");
filtering();
}
function dinner(param){
  dinnerp = $(param).is(":checked");
  filtering();
}
function chico(param){
  chicop = $(param).is(":checked");
  filtering();
}
function chapinero(param){
  chapinerop = $(param).is(":checked");
  filtering();
}
function salitre(param){
  salitrep = $(param).is(":checked");
  filtering();
}
function parque(param){
  parquep = $(param).is(":checked");
  filtering();
}
function usaquen(param){
  usaquenp = $(param).is(":checked");
  filtering();
}
function centro(param){
  centrop = $(param).is(":checked");
  filtering();
}
function colombian(param){
  colombianp = $(param).is(":checked");
  filtering();
}
function italian(param){
  italianp = $(param).is(":checked");
  filtering();
}
function japanese(param){
  japanesep = $(param).is(":checked");
  filtering();
}
function mexican(param){
  mexicanp = $(param).is(":checked");
  filtering();
}
function healthy(param){
  healthyp = $(param).is(":checked");
  filtering();
}

let filtering = () => {
  document.getElementById("list").innerHTML = "";
  const target = document.getElementById("list");
  let counter = 0;
  let totalRow=0;
  let row = document.createElement("div");
  const data = datos;
  for(const restaurant of data){
  if(vale(restaurant)){
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
  }
  };
};

function vale(obj){
  let val = true;
  if(((!(obj.specialty=="Breakfast"))*breakfastp)==true){
    val = false;
    return val;
  }
  if(((!(obj.specialty=="Lunch"))*lunchp)==true){
    val = false;
    return val;  
  }
  if(((!(obj.specialty=="Dinner"))*dinnerp)==true){
    val = false;
    return val;
  }
  if(((!(obj.area=="Chico"))*chicop)==true){
    val = false;
    return val;
  }
  if(((!(obj.area=="Usaquen"))*usaquenp)==true){
    val = false;
    return val;
  }
  if(((!(obj.area=="Chapinero Alto"))*chapinerop)==true){
    val = false;
    return val;
  }
  if(((!(obj.area=="Parque 93"))*parquep)==true){
    val = false;
    return val;
  }
  if(((!(obj.area=="Centro"))*centrop)==true){
    val = false;
    return val;
  }
  if(((!(obj.area=="Salitre"))*salitrep)==true){
    val = false;
    return val;
  }
  if(((!(obj.type=="Colombian"))*colombianp)==true){
    val = false;
    return val;
  }
  if(((!(obj.type=="Mexican"))*mexicanp)==true){
    val = false;
    return val;
  }
  if(((!(obj.type=="Italian"))*italianp)==true){
    val = false;
    return val;
  }
  if(((!(obj.type=="Japanese"))*japanesep)==true){
    val = false;
    return val;
  }
  if(((!(obj.type=="Healthy"))*healthyp)==true){
    val = false;
    return val;
  }
  return val;
  };

