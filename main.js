/*It is Console game where user and ai bet on Heads or Tails and the coinFliping method "Flips the coin randomly "  on line 46 is the User input
for Heads or Tails.*/

// Randomly creates number 0 or 1 and returns if 0 = Heads if 1 = Tails
const coinFliping = () => 
{
    let coinFlipingNumber = Math.round(Math.random() * 2);
    if(coinFlipingNumber === 0) {return 'Heads';} else {return 'Tails';}

}
// Calling the method above and saving result to a variable
let ai = coinFliping();

// userinput
const userInput = (userInput) =>
{
    return userInput;
}

// Randomly computer input was not neccessery but for practice 
const computerInput = () =>
{
    let computer = Math.round(Math.random() * 2);
    if (computer === 0) {return 'Heads';}
    return 'Tails';
}

// Methods that decides who has won the game .
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
// Puting all in playgame together 
const playGame = () => 
{
    let user = userInput('Heads');
    let computerAI = computerInput();
    let winnerChosen = decideWinner(user, computerAI);
    console.log(`Coin flipping .. and it is: ${ai} \n User: ${user} \n  AI : ${computerAI} \n  the winner is ${winnerChosen}.`);
    return winnerChosen; 
}

playGame(); 