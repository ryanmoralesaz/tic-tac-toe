+function(){
  let boxFilledCount = 0; // count how many boxes on the board are filled
  const player1 = document.querySelector('#player1'); // player one image box
  const player2 = document.querySelector('#player2'); // player 2 image box
  let gameBoxes = document.querySelectorAll('.box'); // game boxes
  const finishScreen = document.querySelector('#finish'); // the finish div
  const startScreenButton = document.querySelector('#start .button'); // new game start screen button
  const finishScreenButton = document.querySelector('#finish .button'); // new game finish screen button
  let newGameButton = document.querySelectorAll('.button'); // array of all buttons
  const winBut = document.querySelectorAll('.winner');
  let playerSelect;
  document.querySelector('#board').style.display = 'none'; // hide the board at the beginning
  document.querySelector('#finish').style.display = 'none'; // hide the finish screen at the beginning
  const message = document.querySelector('.message');
   // add an event listener to the new game buttons
  for (let i = 0; i < newGameButton.length; i++) {
  	newGameButton[i].addEventListener('click', () => {
  		boxFilledCount = 0; // reset the box filled count
  		 // remove all images and classes from game boxes
  		for (let i=0; i < gameBoxes.length; i++) {
  			gameBoxes[i].classList.remove('box-filled-2', 'box-filled-1');
  			gameBoxes[i].style.backgroundImage = 'none';
  		}
  	});
  }
   // add a listener to the start screen new game button
  startScreenButton.addEventListener('click', () => {
    document.querySelector('#start').style.display = 'none'; // hide the start screen
    document.querySelector('#board').style.display = 'block'; // display the game board
     // need to refactor this to be random
    playerSelect = Math.floor(Math.random() * 2) + 1;
    if (playerSelect === 1) {
      player1.className += ' active'; // add active to player 1
    } else {
      player2.className += ' active'; // add active to player 1
    }
    
  });
   // add a listener to the finish screen button
  finishScreenButton.addEventListener('click', () => {
    document.querySelector('#finish').style.display = 'none'; // hide the finish screen
    document.querySelector('#board').style.display = 'block'; // show the game board
    if (player1.classList.contains('active')) {
      player1.classList.remove('active')
    }
    if (player2.classList.contains('active')) {
      player2.classList.remove('active')
    }
    playerSelect = Math.floor(Math.random() * 2) + 1;
    if (playerSelect === 1) {
      player1.className += ' active'; // add active to player 1
    } else {
      player2.className += ' active'; // add active to player 1
    }
    
  });
  
  /* event listeners on the player buttons
  player1.addEventListener('click', () => {
    if (!player1.classList.contains('active')) {
      player1.className += ' active';
      player2.classList.remove('class', 'active');
    } else {
      player1.classList.remove('active');
    }
  });
  player2.addEventListener('click', () => {
    if (!player2.classList.contains('active')) {
  
      player2.className += ' active';
      player1.classList.remove('class', 'active');
    } else {
      player2.classList.remove('active');
    }
  });
  */
  
  
  for (let i = 0; i < gameBoxes.length; i++) {
     // add a listener to check for mouse over
    gameBoxes[i].addEventListener('mouseover', () => {
      if (gameBoxes[i].classList.contains('box-filled-2') || gameBoxes[i].classList.contains('box-filled-1')) {
  
      } else if (player1.classList.contains('active')) {
        gameBoxes[i].style.backgroundImage = 'url("img/o.svg")';
      } else if (player2.classList.contains('active')) {
      	
          gameBoxes[i].style.backgroundImage = 'url("img/x.svg")';
      }
    });
    gameBoxes[i].addEventListener('mouseout', () => {
      if (gameBoxes[i].classList.contains('box-filled-2') || gameBoxes[i].classList.contains('box-filled-1')) {
  
      } else {
        gameBoxes[i].style.backgroundImage = 'none';
      }
    });
    gameBoxes[i].addEventListener('click', () => {
      if (gameBoxes[i].classList.contains('box-filled-2') || gameBoxes[i].classList.contains('box-filled-1')) {
  
      } else {
          if (player2.classList.contains('active')) {
            gameBoxes[i].className += ' box-filled-2';
            boxFilledCount++;
          } 
          if (player1.classList.contains('active')) {
            gameBoxes[i].className += ' box-filled-1';
            boxFilledCount++;
          }
          if (!player2.classList.contains('active')) {
  
            player2.className += ' active';
            player1.classList.remove('class', 'active');
          } else {
            player1.className += ' active';
            player2.classList.remove('class', 'active');
          }
           ///////check for winner
  if (boxFilledCount > 4) {
    
    if ((gameBoxes[0].classList.contains('box-filled-1') && gameBoxes[1].classList.contains('box-filled-1') && gameBoxes[2].classList.contains('box-filled-1')) ||
  (gameBoxes[3].classList.contains('box-filled-1') && gameBoxes[4].classList.contains('box-filled-1') && gameBoxes[5].classList.contains('box-filled-1')) ||
  (gameBoxes[6].classList.contains('box-filled-1') && gameBoxes[7].classList.contains('box-filled-1') && gameBoxes[8].classList.contains('box-filled-1')) ||
  (gameBoxes[0].classList.contains('box-filled-1') && gameBoxes[3].classList.contains('box-filled-1') && gameBoxes[6].classList.contains('box-filled-1')) ||
  (gameBoxes[1].classList.contains('box-filled-1') && gameBoxes[4].classList.contains('box-filled-1') && gameBoxes[7].classList.contains('box-filled-1')) ||
  (gameBoxes[2].classList.contains('box-filled-1') && gameBoxes[5].classList.contains('box-filled-1') && gameBoxes[8].classList.contains('box-filled-1')) ||
  (gameBoxes[0].classList.contains('box-filled-1') && gameBoxes[4].classList.contains('box-filled-1') && gameBoxes[8].classList.contains('box-filled-1')) ||
  (gameBoxes[6].classList.contains('box-filled-1') && gameBoxes[4].classList.contains('box-filled-1') && gameBoxes[2].classList.contains('box-filled-1'))
  ) {
    document.querySelector('#finish').style.display = 'block';
        document.querySelector('#finish').style.background = '#ffa000';
    		message.style.backgroundImage = "url('img/o-big.svg')";
    		message.style.backgroundRepeat = "no-repeat";
    		message.style.backgroundPosition = "center center";
    		message.textContent = "Winner";
  }
    else if ((gameBoxes[0].classList.contains('box-filled-2') && gameBoxes[1].classList.contains('box-filled-2') && gameBoxes[2].classList.contains('box-filled-2')) ||
      (gameBoxes[3].classList.contains('box-filled-2') && gameBoxes[4].classList.contains('box-filled-2') && gameBoxes[5].classList.contains('box-filled-2')) ||
      (gameBoxes[6].classList.contains('box-filled-2') && gameBoxes[7].classList.contains('box-filled-2') && gameBoxes[8].classList.contains('box-filled-2')) ||
      (gameBoxes[0].classList.contains('box-filled-2') && gameBoxes[3].classList.contains('box-filled-2') && gameBoxes[6].classList.contains('box-filled-2')) ||
      (gameBoxes[1].classList.contains('box-filled-2') && gameBoxes[4].classList.contains('box-filled-2') && gameBoxes[7].classList.contains('box-filled-2')) ||
      (gameBoxes[2].classList.contains('box-filled-2') && gameBoxes[5].classList.contains('box-filled-2') && gameBoxes[8].classList.contains('box-filled-2')) ||
      (gameBoxes[0].classList.contains('box-filled-2') && gameBoxes[4].classList.contains('box-filled-2') && gameBoxes[8].classList.contains('box-filled-2')) ||
      (gameBoxes[6].classList.contains('box-filled-2') && gameBoxes[4].classList.contains('box-filled-2') && gameBoxes[2].classList.contains('box-filled-2'))
    ) {
        document.querySelector('#finish').style.display = 'block';
        document.querySelector('#finish').style.background = '#3b89c1';
        message.style.backgroundImage = "url('img/x-big.svg')";
    		message.style.backgroundRepeat = "no-repeat";
    		message.style.backgroundPosition = "center center";
    		message.textContent = "Winner";
    } else {
    // check if all boxes filled
      if (boxFilledCount == 9) {
    		
        document.querySelector('#finish').style.display = 'block';
        document.querySelector('#finish').style.background = 'linear-gradient(#ffa000, #3b89c1)';
    		message.style.backgroundImage = "";
    		message.textContent = "It's a Tie!";
  	  }
    }
  }
        
      }
    });
  }

}();