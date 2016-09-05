	var combination = [
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[1,4,7],
		[2,5,8],
		[3,6,9],
		[1,5,9],
		[3,5,7]	
	];

	var state = 0;
	var boxArray1 = [];
	var boxArray2 = [];

	var startScreen = '<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>';
	var winScreen = '<div class="screen screen-win" id="finish"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>';
	// Show start screen
	$('.board').hide();
	$('body').prepend(startScreen);

	// Display game screen when user click start button
	$('.button').click(function() {
		$('.screen-start').hide();
		$('.board').show();
		$('#player1').addClass('active');
	});

	$('.box').hover(function() {
		if (state===1) {
			$(this).toggleClass('box-filled-2');
		} else {
			$(this).toggleClass('box-filled-1');
		}
		
	});

	$('.box').click(function() {
		if (state === 0) {
			$(this).toggleClass('box-notactive-1');
			$('#player1').removeClass('active');
			$('#player2').addClass('active');
			boxArray1.push(parseInt($(this).attr('id')));
			state = 1;
			checkCombination();

		} else {
			$(this).toggleClass('box-notactive-2');
			$('#player1').addClass('active');
			$('#player2').removeClass('active');
			boxArray2.push(parseInt($(this).attr('id')));
			state = 0;
			checkCombination();
		}
		
	});

	var player1Combination;
	var player2Combination;

	function checkCombination() {

		player1Combination = boxArray1.join('|');
		player2Combination = boxArray2.join('|');
		
		var length = combination.length;

		for (var i=0; i < boxArray1.length; i++) {
			for (var j=0; j < length; j++) {
				for(var k=0; k < 3; k++) {
					if (boxArray1[i] === combination[j][k]) {

					}
				}
			}
		}
			/*if (player1Combination === combination[i].sort().join('|')) {
				//$('.board').hide();
				//$('body').append(winScreen);
				console.log('matched');

			}
			if (player2Combination === combination[i].sort().join('|')) {
				// $('.board').hide();
				// $('body').append(winScreen);
				console.log('matched2');
			}*/
	}

	
