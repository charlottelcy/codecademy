let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// generate new secret target number
const generateTarget = () => {
    return Math.floor(Math.random() * 9 + 1);
}

// compare whether user or computer guess is nearer to target number
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    let userGuessDiffFromTarget = getAbsoluteDistance(targetNumber, userGuess);
    let computerGuessDiffFromTarget = getAbsoluteDistance(targetNumber, computerGuess);

    if (userGuess == computerGuess) {
        return true;
    }
    // computer wins
    if (userGuessDiffFromTarget > computerGuessDiffFromTarget) {
        return false;
    }
    // user wins
    if (computerGuessDiffFromTarget > userGuessDiffFromTarget) {
        return true;
    }

    /*
    if (targetNumber < userGuess < computerGuess || computerGuess < userGuess < targetNumber) {
      console.log("entered here 2");
      return true;
    }
    if (targetNumber < computerGuess < userGuess  || userGuess < computerGuess < targetNumber) {
      console.log("entered here 3");
      return false;
    }*/
}

// update score
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    }
    else {
        computerScore++;
    }
}

// update round number
const advanceRound = () => {
    currentRoundNumber++;
}

const getAbsoluteDistance = (targetNumber, targetGuess) => {
    let absoluteDistance;
    if (targetGuess < 0 || targetGuess > 9) {
        alert('Your guess is out of range.');
    }
    else {
        return Math.abs(targetNumber - targetGuess);
    }
}

