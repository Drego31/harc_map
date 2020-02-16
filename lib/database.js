// TODO This is test of db connection - to refactor
const MongoClient = require("mongodb").MongoClient;
const config = require("../config/database.config");

const connectionString = `mongodb://${config.user}:${config.password}@${config.host}:${config.port}/${config.db}`;

MongoClient.connect(connectionString, { useUnifiedTopology: true }, (error, connection) => {
	connection.db(config.db).collection("users").find().toArray((err, result) => {
		console.log(result);
	});
});