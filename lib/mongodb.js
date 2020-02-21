const MongoClient = require("mongodb").MongoClient;
const config = require("../config/database.config");

const connectionString = `mongodb://${config.user}:${config.password}@${config.host}:${config.port}/${config.db}`;

const client = MongoClient(connectionString, { useNewUrlParser: true });

client.connect(err => {
	const collection = client.db(config.db).collection("users");
	// perform actions on the collection object
	collection.find().toArray((err, result) => {
		console.log(result);
		client.close();
	});
});