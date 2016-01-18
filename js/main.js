var crop_array = [["wheat", "carb", 1, 3, 30, 100], ["barley", "carb", 0, 3, 30, 100], ["corn", "carb", 0, 3, 30, 100], ["cucumber", "veg", 0, 3, 30, 100], ["tomatoe", "veg", 0, 3, 30, 100], ["lettuce", "veg", 0, 3, 30, 100], ["bean", "protein", 0, 3, 30, 100], ["peanut",  "protein", 0, 3, 30, 100], ["green_pea", "protein", 0, 3, 30, 100]]
var events = ["Hello and welcome to the GMO game. In this world many bad things can happen to your crops, and this event box tells you exactly whats happening. So check this place out every once in a while."];

var population = 2;
var money = 1000000000000000;

function show_events() {
	x = events.length;
	
	while (x >= 0) {
		if (events[x] == undefined) {
			//do nothing
		} else {
			$("#event_content").append("<p class='event_announcment'>" + events[x] + "</p>");
		}

		x--
	}
}

function generate_crops() {
	$(".menu > *").remove();
	$(".menu").append("<div id='crop_container'></div>");
	
	x = 0
	while (x < crop_array.length) {
		$("#crop_container").append("<div id='" + crop_array[x][0] + "_" + x + "' class='crop_item'><p id='" + crop_array[x][0] + "_text' class='crop_item_text'>&nbsp" + crop_array[x][0] + ":&nbsp&nbsp&nbspFeeding ratio: 1:" + crop_array[x][3] + "&nbsp&nbsp&nbspharvest time: " + crop_array[x][4] + "s&nbsp&nbsp&nbsp" + crop_array[x][0] + " bundles in stock: " + crop_array[x][2] + "</p></div>");

		if (crop_array[x][1] == "carb") {
			$("#" + crop_array[x][0]  + "_text").css("color", "#D87722");

		} else if (crop_array[x][1] == "veg") {
			$("#" + crop_array[x][0]  + "_text").css("color", "#068939");

		} else if (crop_array[x][1] == "protein") {
			$("#" + crop_array[x][0]  + "_text").css("color", "#B5171C");
		}
		x++;
	}
}

$(document).ready(function() {
	$("#pop").append("Population: " + String(population));
	show_events();


	/*Main menu*/
	$("#title").click(function() {
		$(".menu > *").remove();
		$(".menu").append("<div id='event_box'></div>");
		$(".menu").append("<div id='event_content'></div>");
		$("#event_box").append("<div id='tinter'></div>");
		$("#event_content").append("<p id='event_title'>Recent Events</p>'");
		show_events();
	});

	/*CROP menu*/
	$("#crops").click(function() {
		generate_crops();
	});

	$(document).on("click", ".crop_item", function() {
		id = $(this).attr("id");
		id = id.split("_");
		array_index = id[1];
		product_name = id[0];
		purchase = confirm("Purchase " + product_name + " for $" + crop_array[array_index][5] + "? you have $" + money + " in your wallet.");
		
		if (purchase == true) {
			amount = prompt("Please enter the amount you would like to purchase");

			if (money < crop_array[array_index][5] * parseInt(amount)) {
				alert("YOUR TO POOR");
			} else if (money * parseInt(amount) == 0) {
				alert("zero items purchased")
			} else {
				total = crop_array[array_index][5] * parseInt(amount);
				money = money - total;
				crop_array[array_index][2] = crop_array[array_index][2] + parseInt(amount);
				events.push("You purchased $" + String(total) + " worth of " + crop_array[array_index][0] + " bundles");
			}

			generate_crops();
		} else {
			//do noting m80
		}
	})


	/*Lab menu*/



	/*Store menu*/

});