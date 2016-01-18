var crop_array = [["wheat", "carb", 1, 3, 30, 100], ["barley", "carb", 0, 3, 30, 100], ["corn", "carb", 0, 3, 30, 100], ["cucumber", "veg", 0, 3, 30, 100], ["tomato", "veg", 0, 3, 30, 100], ["lettuce", "veg", 0, 3, 30, 100], ["bean", "protein", 0, 3, 30, 100], ["peanut",  "protein", 0, 3, 30, 100], ["green_pea", "protein", 0, 3, 30, 100]]
var gmo_array = [];
var events = ["Hello and welcome to the GMO game. In this world many bad things can happen to your crops, and this event box tells you exactly whats happening. So check this place out every once in a while."];

var population = 2;
var money = 1000000000000000;

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
		$("#gmo_container").append("<div id='" + gmo_array[x][0] + "_" + x + "' class='gmo_item'><p id='" + gmo_array[x][0] + "_text' class='gmo_item_text'>&nbsp" + gmo_array[x][0] + ":&nbsp&nbsp&nbspFeeding ratio: 1:" + gmo_array[x][3] + "&nbsp&nbsp&nbspharvest time: " + gmo_array[x][4] + "s&nbsp&nbsp&nbsp" + gmo_array[x][0] + " bundles in stock: " + gmo_array[x][2] + "</p></div>");

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
		}

	});

	$(document).on("click", ".gmo_item", function() {
		gmo = $(this).attr("id");
		gmo = gmo.split("_");
		array_index = gmo[1];
		gmo_name = gmo[0];


		purchase = confirm("Add '" + gmo_name + "' to your crops list for $1000?");

		if (purchase == true) {
			if (money > 1000) {
				new_crop = gmo_array[array_index];
				crop_array.push(new_crop);
				events.push("You just created '" + gmo_name + "' for $1000");
				delete(gmo_array[array_index]);
			} else {
				alert.log("YOUR TO POOR!");
			}
		}
	});

	/*Store menu*/
	$("#store").click(function() {
		$('.menu > *').remove();

		$(".menu").append("<div id='#store_container'></div>");
		store_array = [["2x food ratio multiplier", 1000], ["4x food ratio multiplier", 2000], ["Decrease production costs", 5000], ["Decrease time to harvest", 5000]];

		x = 0
		while (x < store_array.length) {
			/*$("#crop_container").append("<div id='" + crop_array[x][0] + "_" + x + "' class='crop_item'><p id='" + crop_array[x][0] + "_text' class='crop_item_text'>&nbsp" + crop_array[x][0] + ":&nbsp&nbsp&nbspFeeding ratio: 1:" + crop_array[x][3] + "&nbsp&nbsp&nbspharvest time: " + crop_array[x][4] + "s&nbsp&nbsp&nbsp" + crop_array[x][0] + " bundles in stock: " + crop_array[x][2] + "</p></div>");*/
			$("#store_container").append("<div id='store_item_" + String(x) + "' class='store_item'></div>");
			x++;
		}

	})

});