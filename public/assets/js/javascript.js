$(document).ready(function() {

	$("#submitBtn").click(function(event) {
		// event.preventDefault();
		const newBurger = {
			burger_name: $("#newBurger").val()
		}

		console.log(newBurger.burger_name);

		$.post("/api/burgers", newBurger)
		.then(function() {
			console.log("Added data");
			location.reload();
		})
	})

	$(".devour-btn").click(function(event) {
		event.preventDefault();
		const id = $(this).data("id");
		const state = 1;

		const devourData = {
			id: id,
			state: state
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: devourData
		})
		.then(function() {
			console.log("Updated id " + id);
			location.reload();
		})
	})
})