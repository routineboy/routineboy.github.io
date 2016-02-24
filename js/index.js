var background_state_1 = 1;
var background_state_2 = 0;
var background_count = 2;

function background_loop() {
	setTimeout(function() {	
		if (background_state_1 == 1 && background_state_2 == 0) {
			$("#background_div_1").css("background", "url('../routineboy.github.io/img/background_" + background_count + ".jpg')");
			$("#background_div_1").css("background-size", "cover");
			$("#background_div_1").css("webkit-background-size", "cover");
			$("#background_div_1").css("moz-background-size", "cover");
			$("#background_div_1").css("-o-background-size", "cover");
			
			$("#background_div_1").fadeIn(1000);
		} else if (background_state_1 == 0 && background_state_2 == 1) {
			$("#background_div_2").css("background", "url('../routineboy.github.io/img/background_" + background_count + ".jpg')");
			$("#background_div_2").css("webkit-background-size", "cover");
			$("#background_div_2").css("moz-background-size", "cover");
			$("#background_div_2").css("-o-background-size", "cover");			
			$("#background_div_2").css("background-size", "cover");

			$("#background_div_1").fadeOut(1000);
		}

		if (background_count == 4) {
			background_count = 1;
		} else {
			background_count++;
		}

		background_loop();
	}, 10000);
}

$(document).ready(function() {
	background_loop();
});