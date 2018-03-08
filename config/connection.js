//create dependencies
const mysql = require("mysql");

//Create connection credentials
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	const connection = mysql.createConnection({
		port: 8889,
		host: "localhost",
		user: "root",
		password: "root",
		database: "burgers_db"
	})
}
//connect to database
connection.connect(function(err) {
	if (err) {
		console.log("error connecting " + err.stack);
		return;
	}

	console.log("connected to id " + connection.threadId);
})

//export connection
module.exports = connection;