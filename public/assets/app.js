document.addEventListener("DOMContentLoaded", function() {
	// Query selector
	var $ = function(selector) {
		return document.querySelector(selector);
	};

	// POST when submit button is clicked
	function postBurger() {
		document.getElementById("addBurger").addEventListener("click", function() {
			event.preventDefault();
			var xhttp = new XMLHttpRequest();
			var newBurger = {
				burger_name: document.getElementById("burgerName").value
			};
			console.log(newBurger);
			// Vanilla JS AJAX requests
			xhttp.open("POST", "/api/burgers", true);
			xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhttp.send(`burger_name=${newBurger.burger_name}`);

			document.getElementById("burgerName").value = "";
			// Front-end redirect/reload
			location.reload();
		});
	};

	// Get list items in the menu list
	var listItems = $("#menuBurgers").getElementsByClassName("devour");
	console.log(listItems);

	function addButtons() {
		for (var i = 0; i < listItems.length; i++) {
			var li = listItems[i];
			// Add devour buttons to the page
			var devourButton = document.createElement('button');
			devourButton.className = 'devourBtn'; // Class name
			devourButton.id = `devour${li.attributes[1].nodeValue}`; //ID name
			console.log("Devour button id is " + devourButton.id);
			devourButton.innerHTML = 'Devour it!'; // Text inside
			li.appendChild(devourButton); // Append it
			//  Adding PUT function to devour buttons as anon due to scoping issue
			devourButton.onclick = function() {
				var xhttp = new XMLHttpRequest();
				// Find id of button
				var buttonID = this.getAttribute("id");
				console.log(buttonID);
				console.log("click");
				var updateID = parseInt(this.id.slice(6));
				console.log("updateID is " + updateID);
				var updateBurger = {
					id: updateID
				};
				console.log(updateBurger);
				// Vanilla JS AJAX requests
				xhttp.open("PUT", "/api/devour", true);
				xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhttp.send(`id=${updateBurger.id}`);

				document.getElementById("burgerName").value = "";
				// Front-end redirect/reload
				location.reload();
			}; // Attach the event!
		}
	};
	addButtons();
	postBurger();
});