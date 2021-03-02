/*It is Console game where user and ai bet on Heads or Tails and the coinFliping method "Flips the coin randomly "  on line 46 is the User input
for Heads or Tails.*/

const coinFliping = () => 
{
    let coinFlipingNumber = Math.round(Math.random() * 2);
    if(coinFlipingNumber === 0) {return 'Heads';} else {return 'Tails';}

}

let ai = coinFliping();

const userInput = (userInput) =>
{
    return userInput;
}


const computerInput = () =>
{
    let computer = Math.round(Math.random() * 2);
    if (computer === 0) {return 'Heads';}
    return 'Tails';
}


const decideWinner = (userInput, computerInput) =>
{
    
    if(userInput === 'boomb') {return 'The User Wins cheating < !';}
    if (userInput === computerInput) 
    { 
        return 'DRAW';
    }

    if(userInput === ai)
    {
        return 'User';
    } else {
    
        return 'AI';
    }
}

const playGame = () => 
{
    let user = userInput('Heads');
    let computerAI = computerInput();
    let winnerChosen = decideWinner(user, computerAI);
    console.log(`Coin flipping .. and it is: ${ai} \n User: ${user} \n  AI : ${computerAI} \n  the winner is ${winnerChosen}.`);
    return winnerChosen; 
}

playGame();