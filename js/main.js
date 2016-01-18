var gmo_array = [];
var crop_array = [["wheat", "carb", 1, 3, 3000, 100, 1], ["barley", "carb", 0, 3, 3000, 100, 0], ["corn", "carb", 0, 3, 3000, 100, 0], ["cucumber", "veg", 1, 3, 3000, 100, 1], ["tomato", "veg", 0, 3, 3000, 100, 0], ["lettuce", "veg", 0, 3, 3000, 100, 0], ["bean", "protein", 1, 3, 3000, 100, 1], ["peanut",  "protein", 0, 3, 3000, 100, 0], ["green_pea", "protein", 0, 3, 3000, 100, 0]]
var events = ["Hello and welcome to the GMO game. In this world many bad things can happen to your crops, and this event box tells you exactly whats happening. So check this place out every once in a while."];

var population = 2;
var money = 1000000000000000;
var intervals = [];

function parse_dna(dna) {
	type = dna_split[0];
	type = type.split("");

	if (type.length > 3) {
		alert("Invalid DNA format.");
	} else {	
		switch(type[0]) {
			case "a":
				type[0] = 0;
				break;
			case "t":
				type[0] = 1;
				break;
			case "c":
				type[0] = 2;
				break;
			case "g":
				type[0] = 3;
				break;
		}

		switch(type[1]) {
			case "a":
				type[1] = 0;
				break;
			case "t":
				type[1] = 1;
				break;
			case "c":
				type[1] = 2;
				break;
			case "g":
				type[1] = 3;
				break;
		}

		switch(type[2]) {
			case "a":
				type[2] = 0;
				break;
			case "t":
				type[2] = 1;
				break;
			case "c":
				type[2] = 2;
				break;
			case "g":
				type[2] = 3;
				break;
		}
	}

	type = type.join("");

	harvest_time = dna_split[1];
	harvest_time = harvest_time.split("");

	if (harvest_time.length > 3) {
		alert("Invalid DNA format.");
	} else {
		switch(harvest_time[0]) {
			case "a":
				harvest_time[0] = 0;
				break;
			case "t":
				harvest_time[0] = 1;
				break;
			case "c":
				harvest_time[0] = 2;
				break;
			case "g":
				harvest_time[0] = 3;
				break;
		}

		switch(harvest_time[1]) {
			case "a":
				harvest_time[1] = 0;
				break;
			case "t":
				harvest_time[1] = 1;
				break;
			case "c":
				harvest_time[1] = 2;
				break;
			case "g":
				harvest_time[1] = 3;
				break;
		}

		switch(harvest_time[2]) {
			case "a":
				harvest_time[2] = 0;
				break;
			case "t":
				harvest_time[2] = 1;
				break;
			case "c":
				harvest_time[2] = 2;
				break;
			case "g":
				harvest_time[2] = 3;
				break;
		}
	}

	harvest_time = harvest_time.join("");

	production_costs = dna_split[2];
	production_costs = production_costs.split("");

	if (production_costs.length > 3) {
		alert("Invalid DNA format.");
	} else {			
		switch(production_costs[0]) {
			case "a":
				production_costs[0] = 0;
				break;
			case "t":
				production_costs[0] = 1;
				break;
			case "c":
				production_costs[0] = 2;
				break;
			case "g":
				production_costs[0] = 3;
				break;
		}

		switch(production_costs[1]) {
			case "a":
				production_costs[1] = 0;
				break;
			case "t":
				production_costs[1] = 1;
				break;
			case "c":
				production_costs[1] = 2;
				break;
			case "g":
				production_costs[1] = 3;
				break;
		}

		switch(production_costs[2]) {
			case "a":
				production_costs[2] = 0;
				break;
			case "t":
				production_costs[2] = 1;
				break;
			case "c":
				production_costs[2] = 2;
				break;
			case "g":
				production_costs[2] = 3;
				break;
		}
	}

	production_costs = production_costs.join("");

	feeding_ratio = dna_split[3];
	feeding_ratio = feeding_ratio.split("");

	if (feeding_ratio.length > 3) {
		alert("Invalid DNA format.");
	} else {
		switch(feeding_ratio[0]) {
			case "a":
				feeding_ratio[0] = 0;
				break;
			case "t":
				feeding_ratio[0] = 1;
				break;
			case "c":
				feeding_ratio[0] = 2;
				break;
			case "g":
				feeding_ratio[0] = 3;
				break;
		}

		switch(feeding_ratio[1]) {
			case "a":
				feeding_ratio[1] = 0;
				break;
			case "t":
				feeding_ratio[1] = 1;
				break;
			case "c":
				feeding_ratio[1] = 2;
				break;
			case "g":
				feeding_ratio[1] = 3;
				break;
		}	

		switch(feeding_ratio[2]) {
			case "a":
				feeding_ratio[2] = 0;
				break;
			case "t":
				feeding_ratio[2] = 1;
				break;
			case "c":
				feeding_ratio[2] = 2;
				break;
			case "g":
				feeding_ratio[2] = 3;
				break;
		}
	}

	feeding_ratio = feeding_ratio.join("");

	gmo_crop = [];
	gmo_crop.push($("#gmo_name").val());


	if (type == 001) {
		gmo_crop.push("carb");
	} else if (type == 002) {
		gmo_crop.push("veg");
	} else if (type == 003) {
		gmo_crop.push("protein");
	}

	gmo_crop.push(0);

	feeding_ratio = parseInt(feeding_ratio, 10);
	gmo_crop.push(feeding_ratio);
	gmo_array.push(gmo_crop);

	harvest_time = harvest_time.split("");

	if (harvest_time[0] > 0) {
		var min = harvest_time[0] * 60000;
	} else {
		min = 0;
	} 

	if (harvest_time[1] > 0) {
		var sec = harvest_time[1] * 1000;
	} else {
		sec = 0;
	}

	if (harvest_time[2] > 0) {
		var ms = harvest_time[2] * 100;
	} else {
		ms = 0;
	}

	harvest_time = min + sec + ms
	gmo_crop.push(harvest_time);

	production_costs = parseInt(production_costs, 10);
	production_costs = production_costs * 10;
	gmo_crop.push(production_costs);
	gmo_crop.push(0);
}

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

function generate_gmos() {
	$('#gmo_container > *').remove();

	x = 0
	while (x < gmo_array.length) {
		$("#gmo_container").append("<div id='" + gmo_array[x][0] + "_" + x + "' class='gmo_item'><p id='" + gmo_array[x][0] + "_text' class='gmo_item_text'>&nbsp" + gmo_array[x][0] + ":&nbsp&nbsp&nbspFeeding ratio: 1:" + gmo_array[x][3] + "&nbsp&nbsp&nbspharvest time: " + gmo_array[x][4] + "ms&nbsp&nbsp&nbsp" + gmo_array[x][0] + " bundles in stock: " + gmo_array[x][2] + "</p></div>");

		if (gmo_array[x][1] == "carb") {
			$("#" + gmo_array[x][0]  + "_text").css("color", "#D87722");

		} else if (gmo_array[x][1] == "veg") {
			$("#" + gmo_array[x][0]  + "_text").css("color", "#068939");

		} else if (gmo_array[x][1] == "protein") {
			$("#" + gmo_array[x][0]  + "_text").css("color", "#B5171C");
		}
		x++;
	}	
}

function generate_crops() {
	$(".menu > *").remove();
	$(".menu").append("<div id='crop_container'></div>");
	
	x = 0
	while (x < crop_array.length) {
		$("#crop_container").append("<div id='" + crop_array[x][0] + "_" + x + "' class='crop_item'><p id='" + crop_array[x][0] + "_text' class='crop_item_text'>&nbsp" + crop_array[x][0] + ":&nbsp&nbsp&nbspFeeding ratio: 1:" + crop_array[x][3] + "&nbsp&nbsp&nbspharvest time: " + crop_array[x][4] + "ms&nbsp&nbsp&nbsp" + crop_array[x][0] + " bundles in stock: " + crop_array[x][2] + "</p></div>");

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

function generate_counter() {
	$(".menu").append("<div id='counter_container'></div>");

	setInterval(function() {
		$("#counter_container > *").remove();
		x = 0;
		while (x < crop_array.length) {	

			$("#counter_container").append("<div id='" + crop_array[x][0] + "' class='counter_item'><p id='" + crop_array[x][0] + "_text' class='counter_item_text'>" + crop_array[x][0] + ": " + crop_array[x][6] + "</p></div>")

			if (x == 0) {
				$("#"+crop_array[x][0]).css("border-top", "2px solid #252323");
				$("#"+crop_array[x][0]).css("padding", "5px");
				$("#"+crop_array[x][0] + "_text").css("margin-top", "10px");
				$("#"+crop_array[x][0] + "_text").css("margin-left", "-5px");
			}

			if (crop_array[x][1] == "carb") {
				$("#" + crop_array[x][0]  + "_text").css("color", "#D87722");

			} else if (crop_array[x][1] == "veg") {
				$("#" + crop_array[x][0]  + "_text").css("color", "#068939");

			} else if (crop_array[x][1] == "protein") {
				$("#" + crop_array[x][0]  + "_text").css("color", "#B5171C");
			}
			x++;
		}	
	}, 1000);
}

function game_loop_generator(array_index) {
	setInterval(function() {
		bundle_number = crop_array[array_index][2];
		ratio = crop_array[array_index][3];

		incrementer = bundle_number * ratio;

		if (bundle_number > 0) {
			crop_array[array_index][6] = crop_array[array_index][6] + incrementer;
		}

	}, crop_array[array_index][4]);
}

function human_loop_generator() {
	/*food consumption*/
	setInterval(function() {
		
	}, 10000);

	/*money making*/
	setInterval(function() {

	});

	/*reproduction*/
	setInterval(function() {

	});	

}

$(document).ready(function() {
	$("#pop").append("Population: " + String(population));
	generate_counter();
	human_loop_generator();
	show_events();

	x = 0;
	while (x < crop_array.length) {
		game_loop_generator(x);
		x++;
	}

	/*Main menu*/
	$("#title").click(function() {
		$(".menu > *").remove();
		$(".menu").append("<div id='event_box'></div>");
		$(".menu").append("<div id='event_content'></div>");
		$("#event_box").append("<div id='tinter'></div>");
		$("#event_content").append("<p id='event_title'>Recent Events</p>'");
		show_events();
		generate_counter();
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
		purchase = confirm("Purchase '" + product_name + "'' for $" + crop_array[array_index][5] + "? you have $" + money + " in your wallet.");
		
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
				crop_array[array_index][6] = 1;
				events.push("You purchased $" + String(total) + " worth of '" + crop_array[array_index][0] + "' bundles");
			}

			generate_crops();
		} else {
			//do noting m80
		}
	})


	/*Lab menu*/
	$("#lab").click(function() {
		$(".menu > *").remove();
		$(".menu").append("<div id='gmo_container'></div>");
		$(".menu").append("<input type='text'  spellcheck='false' placeholder='GMO Name' id='gmo_name'></input>");
		$(".menu").append("<textarea spellcheck='false' id='gmo_dna' placeholder='Enter GMO DNA'></textarea>");
		$(".menu").append("<div id='save_gmo'>Save</div>");
		generate_gmos();
	});

	$(document).on("click", "#save_gmo", function() {
		name = $("#gmo_name").val();
		dna = $("#gmo_dna").val();
		dna = dna.toLowerCase();
		dna_split = dna.split(",");

		if (dna_split.length > 4) {
			type = dna_split[0];
			harvest_time = dna_split[1];
			production_costs = dna_split[2];
			feeding_ratio = dna_split[3];
			virus_dna = dna_split[4];

			dna_split = [dna_split[0], dna_split[1], dna_split[2], dna_split[3]];
			parse_dna(dna_split);
			generate_gmos();

		} else {
			parse_dna(dna_split);
			generate_gmos();
			console.log(gmo_array);
		}

	});

	$(document).on("click", ".gmo_item", function() {
		gmo = $(this).attr("id");
		gmo = gmo.split("_");
		array_index = gmo[1];
		gmo_name = gmo[0];


		purchase = confirm("Add '" + gmo_name + "' to your crops list for $1000?");

		if (purchase == true) {
			if (money >= 1000) {
				new_crop = gmo_array[array_index];
				crop_array.push(new_crop);
				events.push("You just created '" + gmo_name + "' for $1000");

				for (var i = 1; i < 99999; i++) {
				    window.clearInterval(i);
				    window.clearTimeout(i);
				}

				x = 0;
				while (x < crop_array.length) {

					game_loop_generator(x);
					x++;
				}				

				delete(gmo_array[array_index]);
			} else {
				alert("YOUR TO POOR!");
			}
		}
	});

	/*Store menu*/
	$("#store").click(function() {
		$('.menu > *').remove();

		$(".menu").append("<div id='store_container'></div>");
		store_array = [["2x food ratio multiplier", 1000], ["4x food ratio multiplier", 2000], ["6x food ratio multiplier", 4000], ["Decrease production costs", 5000], ["Decrease time to harvest", 5000]];

		x = 0
		while (x < store_array.length) {
			/*$("#crop_container").append("<div id='" + crop_array[x][0] + "_" + x + "' class='crop_item'><p id='" + crop_array[x][0] + "_text' class='crop_item_text'>&nbsp" + crop_array[x][0] + ":&nbsp&nbsp&nbspFeeding ratio: 1:" + crop_array[x][3] + "&nbsp&nbsp&nbspharvest time: " + crop_array[x][4] + "s&nbsp&nbsp&nbsp" + crop_array[x][0] + " bundles in stock: " + crop_array[x][2] + "</p></div>");*/
			$("#store_container").append("<div id='storeItem_" + x + "' class='store_item'><p class='store_item_text'>&nbsp" + store_array[x][0] + ":&nbsp&nbsp&nbspCosts: $" + store_array[x][1] + "</p></div>");
			x++;
		}

	});

	$(document).on("click", ".store_item", function() {
		item = $(this).attr("id");
		item_array = item.split("_");
		array_index = item_array[1];
		item_name = store_array[array_index][0];

		purchase = confirm("Would you like to buy '" + item_name + "' for $" + store_array[array_index][1] + "? ");
		if (purchase == true) {
			if (money >= store_array[array_index][1]) {
				if (array_index == 0) {
					crop_name = prompt("Please enter the name of the product you wish to modify");
					x = 0;
					while (x < crop_array.length) {
						if (crop_name == crop_array[x][0]) {
							crop_array[x][3] = crop_array[x][3] * 2;
							money = money - store_array[array_index][1];
							events.push("You added the '" + item_name + "' GMO to your '" + crop_array[x][0] + "' crop");

							for (var i = 1; i < 99999; i++) {
							    window.clearInterval(i);
							    window.clearTimeout(i);
							}

							y = 0;
							while (y < crop_array.length) {

								game_loop_generator(y);
								y++;
							}	

							alert("Added gmo");
						}

						x++;
					}
				} else if (array_index == 1) {
					crop_name = prompt("Please enter the name of the product you wish to modify");
					x = 0;
					while (x < crop_array.length) {
						if (crop_name == crop_array[x][0]) {
							crop_array[x][3] = crop_array[x][3] * 4;
							money = money - store_array[array_index][1];
							events.push("You added the '" + item_name + "' GMO to your '" + crop_array[x][0] + "' crop");

							for (var i = 1; i < 99999; i++) {
							    window.clearInterval(i);
							    window.clearTimeout(i);
							}

							y = 0;
							while (y < crop_array.length) {

								game_loop_generator(y);
								y++;
							}	

							alert("Added gmo");
						}

						x++;
					}						
				} else if (array_index == 2) {
					crop_name = prompt("Please enter the name of the product you wish to modify");
					x = 0;
					while (x < crop_array.length) {
						if (crop_name == crop_array[x][0]) {
							crop_array[x][3] = crop_array[x][3] * 6;
							money = money - store_array[array_index][1];
							events.push("You added the '" + item_name + "' GMO to your '" + crop_array[x][0] + "' crop");

							for (var i = 1; i < 99999; i++) {
							    window.clearInterval(i);
							    window.clearTimeout(i);
							}

							y = 0;
							while (y < crop_array.length) {

								game_loop_generator(y);
								y++;
							}	

							alert("Added gmo");
						}
						x++;
					}				
				} else if (array_index == 3) {
					crop_name = prompt("Please enter the name of the product you wish to modify");
					x = 0;
					while (x < crop_array.length) {
						if (crop_name == crop_array[x][0]) {
							crop_array[x][5] = 100;
							money = money - store_array[array_index][1];
							events.push("You added the '" + item_name + "' GMO to your '" + crop_array[x][0] + "' crop");

							for (var i = 1; i < 99999; i++) {
							    window.clearInterval(i);
							    window.clearTimeout(i);
							}

							y = 0;
							while (y < crop_array.length) {

								game_loop_generator(y);
								y++;
							}								

							alert("Added gmo");
						}
						x++;
					}							
				} else if (array_index == 4) {
					crop_name = prompt("Please enter the name of the product you wish to modify");
					x = 0;
					while (x < crop_array.length) {
						if (crop_name == crop_array[x][0]) {
							crop_array[x][4] = 10000;
							money = money - store_array[array_index][1];
							events.push("You added the '" + item_name + "' GMO to your '" + crop_array[x][0] + "' crop");

							for (var i = 1; i < 99999; i++) {
							    window.clearInterval(i);
							    window.clearTimeout(i);
							}

							y = 0;
							while (y < crop_array.length) {

								game_loop_generator(y);
								y++;
							}	

							alert("Added gmo");
						}
						x++;
					}							
				}
			} else {
				alert("YOUR TO POOR");
			}
		}

	});

});