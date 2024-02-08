let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Loses: 0,
    Ties: 0
};

updateScore();

function updateScore() {
    document.querySelector('.js-score')
        .innerHTML = `Wins:${score.Wins}, Loses:${score.Loses}, Ties:${score.Ties}`;
}

function resetScore() {
    score = {
        Wins: 0,
        Loses: 0,
        Ties: 0
    };
    updateScore();
    localStorage.removeItem('score');

}

function playGame(playerMove) {
    computerChoice = pickComputerMove();
    result = '';

    if (playerMove === 'Rock') {
        if (computerChoice === 'Rock') {
            result = 'Tie';
        }
        else if (computerChoice === 'Paper') {
            result = ' You Lose';
        }
        else if (computerChoice === 'Scissors') {
            result = 'You Win';
        }
    }
    else if (playerMove === 'Paper') {
        if (computerChoice === 'Rock') {
            result = 'You Win';
        }
        else if (computerChoice === 'Paper') {
            result = 'Tie';
        }
        else if (computerChoice === 'Scissors') {
            result = 'You Lose';
        }
    }
    else if (playerMove === 'Scissors') {
        if (computerChoice === 'Rock') {
            result = 'You Lose';
        }
        else if (computerChoice === 'Paper') {
            result = 'You Win';
        }
        else if (computerChoice === 'Scissors') {
            result = 'Tie';
        }
    }

    if (result === 'You Win') {
        score.Wins++;
    }
    else if (result === 'You Lose') {
        score.Loses++;
    }
    else {
        score.Ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result')
        .innerHTML = `${result}`;


    document.querySelector('.js-moves')
        .innerHTML = `You
                    <img class="move-icon" src="images/${playerMove}-emoji.png">
                    <img class="move-icon" src="images/${computerChoice}-emoji.png">
                    Computer`;

    updateScore();

}

function pickComputerMove() {
    randomNumber = Math.random();
    computerChoice = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = 'Paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}