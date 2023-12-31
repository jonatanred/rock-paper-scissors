const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const btn = document.querySelector("#btn");
const text = document.querySelector(".text");
const game = document.querySelector(".game");
let fadeWon = document.querySelector(".fadeWon");
let fadeLost = document.querySelector(".fadeLost");
let modalWon = document.querySelector(".modalWon");
let modalLost = document.querySelector(".modalLost");
let closeModalWon = document.querySelector("#closeModalWon");
let closeModalLost = document.querySelector("#closeModalLost");
let choosenPlayer = document.querySelector(".choosenPlayer");
let choosenComputer = document.querySelector(".choosenComputer");
let playerPointsHTML = document.querySelector(".playerPointsHTML");
let computerPointsHTML = document.querySelector(".computerPointsHTML")
let playerPoints = 0;
let computerPoints = 0;
let playerChoose = -1;
let computerChoose = -1;

btn.addEventListener("click", function(){
    game.style.display = "flex";
    btn.style.display = "none";
    text.style.display = "none";

});

rock.addEventListener("click", function(){
    playerChoose = 0;
    computerChoose = Math.floor((Math.random() * 3) + 0);
    playRound();
});

paper.addEventListener("click", function(){
    playerChoose = 1;
    computerChoose = Math.floor((Math.random() * 3) + 0);
    playRound();
});

scissors.addEventListener("click", function(){
    playerChoose = 2;
    computerChoose = Math.floor((Math.random() * 3) + 0);
    playRound();
});

function playRound() {
    if (playerChoose === 0 && computerChoose === 2) {
        playerPoints++;
        choosenPlayer.innerHTML = "✊";
        choosenComputer.innerHTML = "✌";
        choosenPlayer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        choosenComputer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        playerPointsHTML.innerHTML = "Player: " + playerPoints;
        computerPointsHTML.innerHTML = "Computer: " + computerPoints;
        playerChoose = -1;
        computerChoose = -1;
    }else if(playerChoose == 1 && computerChoose == 0){
        playerPoints++;
        choosenPlayer.innerHTML = "✋";
        choosenComputer.innerHTML = "✊";
        choosenPlayer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        choosenComputer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        playerPointsHTML.innerHTML = "Player: " + playerPoints;
        computerPointsHTML.innerHTML = "Computer: " + computerPoints;
        playerChoose = -1;
        computerChoose = -1;
    }else if(playerChoose == 2 && computerChoose == 1){
        playerPoints++;
        choosenPlayer.innerHTML = "✌";
        choosenComputer.innerHTML = "✋";
        choosenPlayer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        choosenComputer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        playerPointsHTML.innerHTML = "Player: " + playerPoints;
        computerPointsHTML.innerHTML = "Computer: " + computerPoints;
        playerChoose = -1;
        computerChoose = -1;
    }else if (computerChoose === 0 && playerChoose === 2) {
        computerPoints++;
        choosenPlayer.innerHTML = "✌";
        choosenComputer.innerHTML = "✊";
        choosenPlayer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        choosenComputer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        playerPointsHTML.innerHTML = "Player: " + playerPoints;
        computerPointsHTML.innerHTML = "Computer: " + computerPoints;
        playerChoose = -1;
        computerChoose = -1;
    }else if(computerChoose == 1 && playerChoose == 0){
        computerPoints++;
        choosenPlayer.innerHTML = "✊";
        choosenComputer.innerHTML = "✋";
        choosenPlayer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        choosenComputer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        playerPointsHTML.innerHTML = "Player: " + playerPoints;
        computerPointsHTML.innerHTML = "Computer: " + computerPoints;
        playerChoose = -1;
        computerChoose = -1;
    }else if(computerChoose == 2 && playerChoose == 1){
        computerPoints++;
        choosenPlayer.innerHTML = "✋";
        choosenComputer.innerHTML = "✌";
        choosenPlayer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        choosenComputer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        playerPointsHTML.innerHTML = "Player: " + playerPoints;
        computerPointsHTML.innerHTML = "Computer: " + computerPoints;
        playerChoose = -1;
        computerChoose = -1;
    }else if (computerChoose === 0 && playerChoose === 0) {
        choosenPlayer.innerHTML = "✊";
        choosenComputer.innerHTML = "✊";
        choosenPlayer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        choosenComputer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        playerPointsHTML.innerHTML = "Player: " + playerPoints;
        computerPointsHTML.innerHTML = "Computer: " + computerPoints;
        playerChoose = -1;
        computerChoose = -1;
    }else if(computerChoose == 1 && playerChoose == 1){
        choosenPlayer.innerHTML = "✋";
        choosenComputer.innerHTML = "✋";
        choosenPlayer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        choosenComputer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        playerPointsHTML.innerHTML = "Player: " + playerPoints;
        computerPointsHTML.innerHTML = "Computer: " + computerPoints;
        playerChoose = -1;
        computerChoose = -1;
    }else if(computerChoose == 2 && playerChoose == 2){
        choosenPlayer.innerHTML = "✌";
        choosenComputer.innerHTML = "✌";
        choosenPlayer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        choosenComputer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        playerPointsHTML.innerHTML = "Player: " + playerPoints;
        computerPointsHTML.innerHTML = "Computer: " + computerPoints;
        playerChoose = -1;
        computerChoose = -1;
    };
};

document.body.addEventListener("click", function() {
    if (playerPoints === 5){
        fadeWon.style.display = "block";
        modalWon.style.display = "flex";
        playerPoints = 0;
        computerPoints = 0;
        playerPointsHTML.innerHTML = "Player: " + 0;
        computerPointsHTML.innerHTML = "Computer: " + 0;
        choosenPlayer.innerHTML = "❔";
        choosenComputer.innerHTML = "❔";
        choosenPlayer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        choosenComputer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
    } else if (computerPoints === 5){
        fadeLost.style.display = "block";
        modalLost.style.display = "flex";
        playerPoints = 0;
        computerPoints = 0;
        playerPointsHTML.innerHTML = "Player: " + 0;
        computerPointsHTML.innerHTML = "Computer: " + 0;
        choosenPlayer.innerHTML = "❔";
        choosenComputer.innerHTML = "❔";
        choosenPlayer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
        choosenComputer.style.cssText = "height: 150px; width: 150px; color: #fff; font-size: 64px; display: flex; justify-content: center; align-items: center;";
    };
});

closeModalWon.addEventListener("click", function() {
    fadeWon.style.display = "none";
    modalWon.style.display = "none";
});

closeModalLost.addEventListener("click", function() {
    fadeLost.style.display = "none";
    modalWon.style.display = "none";
});