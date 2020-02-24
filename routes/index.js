var express = require("express");
var router = express.Router();

//En la carpeta anterior es que se encuentra el archivo
const MongoUtils = require("../db/MongoUtils.js");

const mu = MongoUtils();



// Data endpoint: retorna un archivo json
router.get("/getRestaurants", function(req, res, next) {
  console.log("Backend!!");
  //Server side rendering
  mu.connect()
  	.then(mu.getDocuments)
  	//for Front side rendering send the html instead of the json file
  	.then(restaurants => res.json(restaurants))
  	.catch(err => console.log(err));
});

module.exports = router;
