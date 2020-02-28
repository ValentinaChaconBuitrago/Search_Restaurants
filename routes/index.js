var express = require("express");
var router = express.Router();

//En la carpeta anterior es que se encuentra el archivo
const MongoUtils = require("../db/MongoUtils.js");

const mu = MongoUtils();

// Data endpoint: retorna un archivo json
router.get("/getRestaurants", function(req, res) {
  console.log("Backend!!");
  //Client side rendering
  mu.connect()
    .then(mu.getDocuments)
    //for Front side rendering send the html instead of the json file
    .then(restaurants => res.json(restaurants))
    .catch(err => console.log(err));
});


router.get("/details/:id", (req, res) => {
  console.log("Llegue a los detalles");
  const id = req.params.id;
  console.log("identificador",req.params.id);
  mu.connect()
    .then(client => mu.getRestaurant(client,id))
    .then(restaurant => {
      console.log("pintando el restaurante en router", restaurant);
      res.send(`
        ${restaurant.map(g => `<h1>${g.name}</h1>`)}`);
    })
    .catch(err => console.log(err));
});

module.exports = router;
