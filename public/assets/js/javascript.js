$(document).ready(function() {

	$(".devour-btn").click(function(event) {
		event.preventDefault()
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