function setIdValue(id, player, score) {
    document.getElementById(id + player).textContent = score;
}

function initValues() {
    setIdValue(scoreId, 0, 0);
    setIdValue(scoreId, 1, 0);

    setIdValue(contentId, 0, 0);
    setIdValue(contentId, 1, 0);
}

function getDiceRandomValue() {
    return Math.floor(Math.random() * diceTop) + 1;
}

function getDiceImageSrc(dice) {
    return imgPath + dice + imgExt;
}

function getPanelClass(player) {
    return playerClass + player + panel;
}

function setActivePanelStatus(player) {
    document.querySelector(getPanelClass(player)).classList.toggle(active);
}

function setWinnerPanelStatus(player) {
    document.querySelector(getPanelClass(player)).classList.add(winnerPanel);
    document.querySelector(getPanelClass(player)).classList.remove(active);
}

function hideDice() {
    document.querySelector('.dice').style.display = 'none';
}

function switchActivePlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}

function nextPlayer() {
    switchActivePlayer();

    roundScore = 0;

    setIdValue(contentId, 0, 0);
    setIdValue(contentId, 0, 0);
    setActivePanelStatus(0);
    setActivePanelStatus(1);
    hideDice();
}