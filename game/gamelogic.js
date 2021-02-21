var URL = "http://reexel.com/files/bc/index.html?ffdgdfdd" + Math.random(); 
var tourGame = 0;
if (tourGame == 0) { 
	
	var A; 
	var B; 
	var C;
	var D; 

	var A = Math.floor(Math.random( ) * (8+1)) + 1;

	while(1) {
		var B = Math.floor(Math.random( ) * (8+1)) + 1;
		if (B != A) {
			break;
		}
	}

	while(1) {
		var C = Math.floor(Math.random( ) * (8+1)) + 1;
		if ((C != A) && (C != B)) {
			break;
		}
	}

	while(1) {
		var D = Math.floor(Math.random( ) * (8+1)) + 1;
		if ((D != A) && (D != B) && (D != C)) {
			break;
		}
	}

}
function checkedNumbers() {
		switch (tourGame) {
			case 0:
				
				var number_A = new Number(document.getElementById("number_a").value);
				var number_B = new Number(document.getElementById("number_b").value);
				var number_C = new Number(document.getElementById("number_c").value);
				var number_D = new Number(document.getElementById("number_d").value);
				break;
			case 1:
				
				var number_A = new Number(document.getElementById("number_a1").value);
				var number_B = new Number(document.getElementById("number_b1").value);
				var number_C = new Number(document.getElementById("number_c1").value);
				var number_D = new Number(document.getElementById("number_d1").value);
				break;
			case 2:
			
				var number_A = new Number(document.getElementById("number_a2").value);
				var number_B = new Number(document.getElementById("number_b2").value);
				var number_C = new Number(document.getElementById("number_c2").value);
				var number_D = new Number(document.getElementById("number_d2").value);
				break;
			case 3:
				
				var number_A = new Number(document.getElementById("number_a3").value);
				var number_B = new Number(document.getElementById("number_b3").value);
				var number_C = new Number(document.getElementById("number_c3").value);
				var number_D = new Number(document.getElementById("number_d3").value);
				break;
			case 4:
				
				var number_A = new Number(document.getElementById("number_a4").value);
				var number_B = new Number(document.getElementById("number_b4").value);
				var number_C = new Number(document.getElementById("number_c4").value);
				var number_D = new Number(document.getElementById("number_d4").value);
				break;
			case 5:
				
				var number_A = new Number(document.getElementById("number_a5").value);
				var number_B = new Number(document.getElementById("number_b5").value);
				var number_C = new Number(document.getElementById("number_c5").value);
				var number_D = new Number(document.getElementById("number_d5").value);
				break;
			case 6:
				
				var number_A = new Number(document.getElementById("number_a6").value);
				var number_B = new Number(document.getElementById("number_b6").value);
				var number_C = new Number(document.getElementById("number_c6").value);
				var number_D = new Number(document.getElementById("number_d6").value);
				break;
		}
		var Bulls = 0; 
		var Cows = 0;

		/*
		if ((number_A == number_B) || (number_A == number_C) || (number_A == number_D) ||
		   (number_B == number_A) || (number_B == number_C) || (number_B == number_D) ||
		   (number_C == number_A) || (number_A == number_B) || (number_A == number_D) ||
		   (number_D == number_A) || (number_D == number_B) || (number_D == number_C)) {
			alert ('you won');
			}
		*/



		if ((number_A == A) || (number_B == A) || (number_C == A) || (number_D == A)) {
			Bulls++;
		}
		if ((number_A == B) || (number_B == B) || (number_C == B) || (number_D == B)) {
			Bulls++;
		} 
		if ((number_A == C) || (number_B == C) || (number_C == C) || (number_D == C)) {
			Bulls++;
		}
		if ((number_A == D) || (number_B == D) || (number_C == D) || (number_D == D)) {
			Bulls++;
		}

		
		if (number_A == A) {
			Cows++;
		}
		if (number_B == B) {
			Cows++;
		}
		if (number_C == C) {
			Cows++;
		}
		if (number_D == D) {
			Cows++;
		}

		if ((Bulls == 4) && (Cows == 4)) { 
		var replay = confirm ('YOU WON');
			if (replay) {
				location.reload();
			} else {
				window.close();
			}
		} else {

			switch (tourGame) {
				case 0:

					showBulls();
					showCows();
					document.getElementById('textid1').style.display = 'block';
					document.getElementById("number_a").disabled = true;
					document.getElementById("number_b").disabled = true;
					document.getElementById("number_c").disabled = true;
					document.getElementById("number_d").disabled = true;
					break;
				case 1:
					showBulls1();
					showCows1();
					document.getElementById('textid2').style.display = 'block';
					document.getElementById("number_a1").disabled = true;
					document.getElementById("number_b1").disabled = true;
					document.getElementById("number_c1").disabled = true;
					document.getElementById("number_d1").disabled = true;
					break;
				case 2:
					showBulls2();
					showCows2();
					document.getElementById('textid3').style.display = 'block';
					document.getElementById("number_a2").disabled = true;
					document.getElementById("number_b2").disabled = true;
					document.getElementById("number_c2").disabled = true;
					document.getElementById("number_d2").disabled = true;
					break;
				case 3:
					showBulls3();
					showCows3();
					document.getElementById('textid4').style.display = 'block';
					document.getElementById("number_a3").disabled = true;
					document.getElementById("number_b3").disabled = true;
					document.getElementById("number_c3").disabled = true;
					document.getElementById("number_d3").disabled = true;
					break;
				case 4:
					showBulls4();
					showCows4();
					document.getElementById('textid5').style.display = 'block';
					document.getElementById("number_a4").disabled = true;
					document.getElementById("number_b4").disabled = true;
					document.getElementById("number_c4").disabled = true;
					document.getElementById("number_d4").disabled = true;
					break;
				case 5:
					showBulls5();
					showCows5();
					document.getElementById('textid6').style.display = 'block';
					document.getElementById("number_a5").disabled = true;
					document.getElementById("number_b5").disabled = true;
					document.getElementById("number_c5").disabled = true;
					document.getElementById("number_d5").disabled = true;
					break;
				case 6:
					showBulls6();
					showCows6();
					document.getElementById("number_a6").disabled = true;
					document.getElementById("number_b6").disabled = true;
					document.getElementById("number_c6").disabled = true;
					document.getElementById("number_d6").disabled = true;
					break;
			}


			tourGame = tourGame + 1;
			if (tourGame > 6) {
				var replay = confirm ('ANSWER IS  ' + A + B + C + D + '  TRY AGAIN!');
				if (replay) {
					location.reload();
				} else {
					window.close();
				}
			}
		}

		function showBulls() {	
			document.getElementById("b_c_result_b").innerHTML = Bulls;
		}

		function showCows() {
			document.getElementById("b_c_result_c").innerHTML = Cows;
		}

		function showBulls1() {	
			document.getElementById("b_c_result_b1").innerHTML = Bulls;
		}

		function showCows1() { 
			document.getElementById("b_c_result_c1").innerHTML = Cows;
		}

		function showBulls2() {
			document.getElementById("b_c_result_b2").innerHTML = Bulls;
		}

		function showCows2() { 
			document.getElementById("b_c_result_c2").innerHTML = Cows;
		}

		function showBulls3() {	
			document.getElementById("b_c_result_b3").innerHTML = Bulls;
		}

		function showCows3() {
			document.getElementById("b_c_result_c3").innerHTML = Cows;
		}

		function showBulls4() {
			document.getElementById("b_c_result_b4").innerHTML = Bulls;
		}

		function showCows4() { 
			document.getElementById("b_c_result_c4").innerHTML = Cows;
		}

		function showBulls5() {	
			document.getElementById("b_c_result_b5").innerHTML = Bulls;
		}

		function showCows5() {
			document.getElementById("b_c_result_c5").innerHTML = Cows;
		}

		function showBulls6() {	
			document.getElementById("b_c_result_b6").innerHTML = Bulls;
		}

		function showCows6() { 
			document.getElementById("b_c_result_c6").innerHTML = Cows;
		}

}	
function game(input) {
	input.value = input.value.replace(/[^1-9]/g,'');

};
function openbox(id,tt) {
	var div = document.getElementById(id);
	var tt_div = document.getElementById(tt);
	if(div.style.display == 'block') {
		div.style.display = 'none';
	}
	else {
		div.style.display = 'block';
	}
}
