/*El archivo mongoUtils esta muy bien organizado , presentan una estructura clara y no presenta errores de sintaxis , 
lo unico a resaltar es que hace falta ddocumentacion que explique de manera concreta que hace cada cosa*/

/* eslint-disable no-console */
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;


/* eslint-disable no-console */
function MongoUtils() {
  const mu = {};

  mu.connect = () => {
    const uri =
      "mongodb+srv://prueba:CLAVE@cluster0-wnneh.azure.mongodb.net/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useNewUrlParser: true });
    console.log("Connecting");
    //retorna una promesa
    return client.connect();
  };

  /* Documentar como funciona la funcion */
  mu.getDocuments = client => {
    const collectionRestaurant = client.db("web").collection("restaurants");
    console.log("Getting documents");
    //retorna una promesa
    return collectionRestaurant
      .find({})
      .toArray()
      .finally(() => {
        console.log("closing client");
        client.close();
      });
  };
  
  /* Documentar como funciona la funcion */
  mu.addRestaurant = (client, body, callback) => {
    const col = client.db("web").collection("restaurants");
    console.log(body);
    let resp = col.insertOne(body, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      client.close();
    });
    console.log(resp);
    callback("OK");
  };
  
  /* Documentar como funciona la funccion */
  mu.getUsers = (client, callback) => {
    const col = client.db("web").collection("users");
    console.log("Getting documents X2");
    //retorna una promesa
    col.find({}).toArray((error, data) => {
      console.log("La lista de usuarios es: ");
      console.log(data);
      callback(data);
    });
  };

  /* Dcoumentar como funciona la funcion */
  mu.getRestaurant = (client, id) => {
    const collectionRestaurant = client.db("web").collection("restaurants");
    console.log("Getting restaurant");
    //retorna una promesa
    return collectionRestaurant
      .find({ _id: ObjectId(id) })
      .toArray()
      .finally(() => {
        console.log("closing client");
        client.close();
      });
  };
  
  /* Documentar como funciona la funcion */
  mu.getUser = (client, id) => {
    const collectionUser = client.db("web").collection("users");
    console.log("Getting users");
    //retorna una promesa
    return collectionUser
      .find({ username: id })
      .toArray()
      .finally(() => {
        console.log("closing client");
        client.close();
      });
  };

  return mu;
}

module.exports = MongoUtils;
