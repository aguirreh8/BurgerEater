//create dependencies
const orm = require("../config/orm.js");

const burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		}) 
	},
	update: function(state, id, cb) {
		orm.update("burgers", state, id, function(res) {
			cb(res);
		})
	}
}

module.exports = burger;