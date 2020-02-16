// TODO This is test of db connection - to refactor
const MongoClient = require("mongodb").MongoClient;
const config = require("../config/system.config");

const dbConfig = config.database;
const connectionString = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`;

MongoClient.connect(connectionString, { useUnifiedTopology: true }, (error, connection) => {
	connection.db(dbConfig.db).collection("users").find().toArray((err, result) => {
		console.log(result);
	});
});