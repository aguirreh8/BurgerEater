//create dependencies
const connection = require("../config/connection.js");

//create ORM object for data quering
const orm = {
	//Select all from table
	all: function(tableInput, cb) {
		connection.query(
			"SELECT * FROM ??", 
			[tableInput], 
			function(err, data) {
				if (err) {
					throw err;
				}
				cb(data);
		});
	},

	//Update table using specified parameters
	update: function(tableInput, state, id, cb) {
		connection.query(
			"UPDATE ?? SET devoured = ? WHERE id = ?", 
			[tableInput, state, id], 
			function(err, data) {
				if(err) {
					throw err;
				}
				cb(data);
		})
	}
};

module.exports = orm;