function renderStars(number){

  const target = document.getElementById("rating");
  let left = 5 - number;
  console.log("numero left",left);
  while(number>0){
  	console.log("se agrega estrella llena");
  	const star = document.createElement("span");
  	star.className = "fa fa-star";
  	target.append(star);
  	number--;
  };
  while(left>0){
  	console.log("se agrega estrella llena");
  	const star = document.createElement("span");
  	star.className = "fa fa-star-o";
  	target.append(star);
  	left--;
  }
};

function renderPrice(number){
  const target = document.getElementById("pricing");
  while(number>0){
  	console.log("se agrega dinero");
  	const money = document.createElement("span");
  	money.className ="fa fa-usd";
  	target.append(money);
    number--;
  };
};