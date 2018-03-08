const express = require("express");
const router =  express.Router();
const burger = require("../models/burger.js")

router.get("/", function(req, res) {
	burger.all(function(data) {
		const hsObj = {
			burgers: data
		}		
		res.render("index", hsObj);
	})
});

router.post("/api/burgers/new", function(req, res) {
	const newBurger = req.body.burger_name;
	burger.insert(newBurger, function(results) {
		res.json(results);
	})
})

router.put("/api/burgers/:id", function(req, res) {
	const id = parseInt(req.params.id);
	const state = parseInt(req.body.state);

	burger.update(state, id, function(results) {
		if (results.changedRows === 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	})
});

module.exports = router;