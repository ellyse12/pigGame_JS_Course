'use strict';

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");

//Buton elementleri
const btnRoll = document.querySelector(".btn--roll");

//Diğer değişkenler
let currentScore = 0;
let activePlayer = 0;


//Bir başlangıç durumu fonksiyonu oluşturalım.
const init = function () {
    //Total score'u sıfırlama
    score0El.textContent = 0;
    score1El.textContent = 0;
    //Dice görselini hidden hale getirelim.
    diceEl.classList.add("hidden");


}
init();
//Dice roll butonunu aktifleştirelim.
btnRoll.addEventListener('click', function () {
    //Rnd bir sayı alalım(1-6 arası)
    const dice = Math.trunc(Math.random() * 6 + 1);
    //Dice görselini ekrana getirme
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    //1 değilse koşulu
    if (dice !== 1) {
        //Gelen dice'ı current score'a ekle.
        currentScore += dice;
        currentScore0El.textContent = currentScore;
    } else {

    }
})
