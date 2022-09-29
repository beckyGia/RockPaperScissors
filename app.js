const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    // allows us to remove the animation after the animation is DONE, so you can repeat
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    //Making the random number to select computerOptions when one of the players options button has been clicked
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        // Update the picture and winning message after a certain amoutn of time
        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //UpdateImages
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        //Add Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";

        //Go back to Rock
        setTimeout(() => {
          playerHand.src = "./assets/rock.png";
          computerHand.src = "./assets/rock.png";
        }, 3000);
      });
    });
  };

  //Updating the Score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    endGame();
  };

  //Compares the hands
  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      // this stops the rest of the function from running
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    // Check for Rock
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  // reset the game
  const resetGame = () => {
    const resetBtn = document.querySelector(".resetClass button");
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const winner = document.querySelector(".winner");
    resetBtn.addEventListener("click", () => {
      pScore = 0;
      cScore = 0;

      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
      playerHand.src = "./assets/rock.png";
      computerHand.src = "./assets/rock.png";
      winner.textContent = "Choose an option";
    });
  };

  // After either player or  computer reaches a score of ten the game ends and the WINNER is declared
  const endGame = () => {
    const endGameText = document.querySelector(".winGame");
    const mainSection = document.querySelector(".game");
    const spanText = document.querySelector(".whoWon");
    const match = document.querySelector(".match");
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const winner = document.querySelector(".winner");

    //Check if either player or computer has won
    if (cScore == 5) {
      endGameText.classList.remove("hidden-2");
      spanText.innerText = "Computer";
      mainSection.classList.add("hidden-1");
      match.classList.add("fadeOut");
      endGameText.classList.add("fadeIn");
      setTimeout(() => {
        endGameText.classList.add("hidden-2");
        mainSection.classList.remove("hidden-1");
        startGame();
        pScore = 0;
        cScore = 0;

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        playerHand.src = "./assets/rock.png";
        computerHand.src = "./assets/rock.png";
        winner.textContent = "Choose an option";
      }, 4000);
    } else if (pScore == 5) {
      endGameText.classList.remove("hidden-2");
      spanText.innerText = "Player";
      mainSection.classList.add("hidden-1");
      match.classList.add("fadeOut");
      endGameText.classList.add("fadeIn");
      setTimeout(() => {
        endGameText.classList.add("hidden-2");
        mainSection.classList.remove("hidden-1");
        startGame();
        pScore = 0;
        cScore = 0;
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        playerHand.src = "./assets/rock.png";
        computerHand.src = "./assets/rock.png";
        winner.textContent = "Choose an option";
      }, 4000);
    }
  };

  //Is call al the inner functions
  startGame();
  playMatch();
  resetGame();
};

//start the game function
game();
