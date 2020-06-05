const getUserChoice = userInput => {
    if (userInput === 'rock' || 'paper' || 'scissors' || 'bomb') {
      return userInput;
    } else {
      console.log('error');
    }
  };
  
  
  function getComputerChoice() {
    var num = Math.floor(Math.random() * 3);
    switch(num) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  
  function determineWinner(userChoice, computerChoice) {
  
    if (userChoice === computerChoice) {
      return 'Game has tied';
    } 
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer has won';
      } else {
        return 'User has won';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer has won';
      } else {
        return 'User has won';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer has won';
      } else {
        return 'User has won';
      }
    }
  
    if (userChoice === 'bomb') {
      return 'User wins in all the situations';
    }
  }
  
  
  function playGame() {
    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();