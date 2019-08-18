// computer choice function
function computerChoice() {
    let randomNumber = Math.floor(Math.random()*3) //picks 1,2,3
    switch (randomNumber){
        case 0:
        return "Rock";
        break;
        case 1:
        return "Paper";
        break;
        case 2:
        return "Scissor";
        break;
        default:
        "Invalid Output";
        break;
    }
}
//play a round of RPS
function gamePlay(playerSelection,computerSelection){
    if (playerSelection === "Rock" && computerSelection ==="Scissor" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissor" && computerSelection === "Paper") {
        return "win";
    } else if (playerSelection === "Rock" && computerSelection ==="Paper" || playerSelection === "Paper" && computerSelection === "Scissor" || playerSelection === "Scissor" && computerSelection === "Rock") {
        return "lose"
    } else if (playerSelection === "Rock" && computerSelection ==="Rock" || playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "Scissor" && computerSelection === "Scissor") {
        return "tie";
    } else {
        return "Rock, Paper or Scissor?";
    }
}


var pScore = 0;
var cScore = 0;

// onclick Rock
var btn = document.querySelector('#rock');
btn.addEventListener('click', e => {
//get players choice
var playerSelection = 'Rock'
//computer picks
var computerSelection = computerChoice();
//run game
result = gamePlay(playerSelection,computerSelection);
if (result ==="win") {
    pScore++;
    document.getElementById("playerScore").innerHTML = pScore;
    document.getElementById("result").innerHTML = 'Round won!' + playerSelection + ' beats ' + computerSelection;
} else if (result==="lose") {
    cScore++;
    document.getElementById("computerScore").innerHTML = cScore;
    document.getElementById("result").innerHTML = 'Round lost... ' + computerSelection + ' beats ' + playerSelection;
} else {
    document.getElementById("result").innerHTML = 'Round drawn';
}
//end game
if (pScore === 5){
    document.getElementById("winner").innerHTML = 'You win!';
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
} else if (cScore === 5){
    document.getElementById("winner").innerHTML = 'You lose!';
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
} else {
    
}
});
var btn = document.querySelector('#paper');
btn.addEventListener('click', e => {
//get players choice
var playerSelection = 'Paper'
//computer picks
var computerSelection = computerChoice();
//run game
result = gamePlay(playerSelection,computerSelection);
if (result ==="win") {
    pScore++;
    document.getElementById("playerScore").innerHTML = pScore;
    document.getElementById("result").innerHTML = 'Round won! ' + playerSelection + ' beats ' + computerSelection;
} else if (result==="lose") {
    cScore++;
    document.getElementById("computerScore").innerHTML = cScore;
    document.getElementById("result").innerHTML = 'Round lost... ' + computerSelection + ' beats ' + playerSelection;
} else {
    document.getElementById("result").innerHTML = 'Round drawn';
}
//end game
if (pScore === 5){
    document.getElementById("winner").innerHTML = 'You win!';
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
} else if (cScore === 5){
    document.getElementById("winner").innerHTML = 'You lose!';
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
} else {
    
}
});
var btn = document.querySelector('#scissor');
btn.addEventListener('click', e => {
//get players choice
var playerSelection = 'Scissor'
//computer picks
var computerSelection = computerChoice();
//run game
result = gamePlay(playerSelection,computerSelection);
//print result from game
if (result ==="win") {
    pScore++;
    document.getElementById("playerScore").innerHTML = pScore;
    document.getElementById("result").innerHTML = 'Round won! ' + playerSelection + ' beats ' + computerSelection;
} else if (result==="lose") {
    cScore++;
    document.getElementById("computerScore").innerHTML = cScore;
    document.getElementById("result").innerHTML = 'Round lost... ' + computerSelection + ' beats ' + playerSelection;
} else {
    document.getElementById("result").innerHTML = 'Round drawn';
}
//end game
if (pScore === 5){
    document.getElementById("winner").innerHTML = 'You win!';
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
} else if (cScore === 5){
    document.getElementById("winner").innerHTML = 'You lose!';
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
} else {

}
});


//reset game
var btn = document.querySelector('#reset');
btn.addEventListener('click', e => {
pScore=0;
document.getElementById("playerScore").innerHTML = pScore
cScore=0;
document.getElementById("computerScore").innerHTML = cScore
document.getElementById("rock").disabled = false;
document.getElementById("paper").disabled = false;
document.getElementById("scissor").disabled = false;
});
