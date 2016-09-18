
(function () {

	// Set variables for start and end screens
	var startUpScreen = '<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>';
	var winScreen = '<div class="screen screen-win" id="finish"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>';
	
	var playerOne = $('#player1');
	var playerTwo = $('#player2');
	var winner = "";

	// When the page loads, show start game screen, hide board and finish screen
	$('body').append(startUpScreen);
	$('#board').hide();
	$('body').append(winScreen);
	$('#finish').hide();
	
	// Start game button click event handler
	$('.button').click(function() {
		$('#start').hide();
		$('#finish').hide();
		$('#board').show();

		playerTwo.removeClass('active');
		$('.box').each(function() {
			$(this).removeClass('box-filled-1');
			$(this).removeClass('box-filled-2');
			$(this).css('background-image', '');
	
			$(this).mouseover(function() {
				if (playerOne.hasClass('active')) {
					$(this).css('background-image', "url('./img/o.svg')");
					// this.style.backgroundImage = "url('img/o.svg')";
				} else {
					$(this).css('background-image', "url('./img/x.svg')");
					// this.style.backgroundImage = "url('img/o.svg')";
				}
			});

			$(this).mouseleave(function() {
				$(this).css('background-image', '');
			})

		});

		playerOne.addClass('active');
	});

	// Each box click event handler 
	$('.box').click(function() {

		if(playerOne.hasClass('active')) {

			if ($(this).hasClass('box-filled-1') === false && $(this).hasClass('box-filled-2') === false) {
				$(this).addClass('box-filled-1');
				playerOne.removeClass('active');
				playerTwo.addClass('active');
				$(this).unbind('mouseover mouseleave');
				checkGame();
			}
			
		} else if(playerTwo.hasClass('active')) {

			if ($(this).hasClass('box-filled-1') === false && $(this).hasClass('box-filled-2') === false) {
				$(this).addClass('box-filled-2');
				playerTwo.removeClass('active');
				playerOne.addClass('active');
				$(this).unbind('mouseover mouseleave');
				checkGame();
			}
		}

		function checkGame() {

			var boxArray = [];
			$('.box').each(function() {
				if($(this).hasClass('box-filled-1') === true) {
					boxArray.push('player1');
				} else if ($(this).hasClass('box-filled-2') === true) {
					boxArray.push('player2');
				} else {
					boxArray.push('null');
				}
			})	
			
			if (boxArray[0]!== 'null' && boxArray[0] === boxArray[1] && boxArray[1] === boxArray[2]) {
				winner = boxArray[0];
				showGameStatus();

			} else if (boxArray[3]!== 'null' && boxArray[3] === boxArray[4] && boxArray[4] === boxArray[5]) {
				winner = boxArray[3];
				showGameStatus();

			} else if (boxArray[6]!== 'null' && boxArray[6] === boxArray[7] && boxArray[7] === boxArray[8]) {
				winner = boxArray[6];
				showGameStatus();

			} else if (boxArray[0]!== 'null' && boxArray[0] === boxArray[3] && boxArray[3] === boxArray[6]) {
				winner = boxArray[0];
				showGameStatus();

			} else if (boxArray[1]!== 'null' && boxArray[1] === boxArray[4] && boxArray[4] === boxArray[7]) {
				winner = boxArray[1];
				showGameStatus();

			} else if (boxArray[2]!== 'null' && boxArray[2] === boxArray[5] && boxArray[5] === boxArray[8]) {
				winner = boxArray[2];
				showGameStatus();

			} else if (boxArray[0]!== 'null' && boxArray[0] === boxArray[4] && boxArray[4] === boxArray[8]) {
				winner = boxArray[0];
				showGameStatus();

			} else if (boxArray[2]!== 'null' && boxArray[2] === boxArray[4] && boxArray[4] === boxArray[6]) {
				winner = boxArray[2];
				showGameStatus();

			} else if (boxArray.includes('null') === false) {
				winner = "tie";
				showGameStatus();
			}
		
			function showGameStatus() {
				if (winner === "player1") {
					$("#finish").removeClass("screen-win-two");
					$("#finish").removeClass("screen-win-tie");
					$(".message").html("Player 1 wins!");
					$("#finish").addClass("screen-win-one");
					$("#finish").show();
					$("#board").hide();
				} else if (winner === "player2") {
					$("#finish").removeClass("screen-win-one");
					$("#finish").removeClass("screen-win-tie");
					$(".message").html("Player 2 wins!");
					$("#finish").addClass("screen-win-two");
					$("#finish").show();
					$("#board").hide();
				} else if (winner === "tie") {
					$("#finish").removeClass("screen-win-one");
					$("#finish").removeClass("screen-win-two");
					$(".message").html("It's a Tie!");
					$("#finish").addClass("screen-win-tie");
					$("#finish").show();
					$("#board").hide();
				}
			}
		};
	});

}());
