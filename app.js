/*
    GAME RULES:
    --------------
        - The game has 2 players, playing in rounds
        - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
        - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
        - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
        - The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, dice;
scores = [0, 0];
roundScore = 0;

initValues();
dice = getDiceRandomValue();

hideDice();
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = getDiceImageSrc(dice);

    //3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        roundScore += dice;
        setIdValue(contentId, activePlayer, roundScore);
    } else
        nextPlayer();
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    setIdValue(scoreId, activePlayer, scores[activePlayer]);

    // Check if player won the game
    if (scores[activePlayer] >= winnerScore) {
        setIdValue(nameLabel, activePlayer, winnerText);
        hideDice();
        setWinnerPanelStatus(activePlayer);
    } else {
        // Update the UI
        nextPlayer();
    }
});
