const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

function MongoUtils(){
  const mu = {};

  mu.connect = () => {
  	const uri = "mongodb+srv://prueba:CLAVE@cluster0-wnneh.azure.mongodb.net/test?retryWrites=true&w=majority";

  	const client = new MongoClient(uri,{useNewUrlParser: true });
  	console.log("Connecting");
  	//retorna una promesa
  	return client.connect();
  };

  mu.getDocuments = (client) => {
  	const collectionRestaurant = client.db("web").collection("restaurants");
  	console.log("Getting documents");
  	//retorna una promesa
  	return collectionRestaurant.find({}).toArray().finally(()=>{
      console.log("closing client");
      client.close();
    });
  };
  mu.addRestaurant = (client,body) =>{
    const col = client.db("web").collection("users");
  	
    col.insertOne(body, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      client.close();
    });
  }
  mu.getUsers = (client,callback) => {
  	const col = client.db("web").collection("users");
  	console.log("Getting documents X2");
  	//retorna una promesa
  	col.find({}).toArray((error,data) => {
      console.log("La lista de usuarios es: ")
      console.log(data)
      callback(data);
    });
  };

  mu.getRestaurant = (client,id) => {
    const collectionRestaurant = client.db("web").collection("restaurants");
    console.log("Getting restaurant");
    //retorna una promesa
    return collectionRestaurant.find({ _id: ObjectId(id)}).toArray().finally(()=>{
      console.log("closing client");
      client.close();
    });
  };
  mu.getUser = (client,id) => {
    const collectionUser = client.db("web").collection("users");
    console.log("Getting users");
    //retorna una promesa
    return collectionUser.find({'username':id}).toArray().finally(()=>{
      console.log("closing client");
      client.close();
    });
  };
  

  return mu;
}

module.exports = MongoUtils;

