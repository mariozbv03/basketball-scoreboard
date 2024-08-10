'use strict';

let scoreIn = 0;
let scoreOut = 0;
const scoreHome = document.getElementById("home-score");
const scoreGuest = document.getElementById("guests-score");

function add1Home() {
    scoreIn += 1;
    scoreHome.textContent = scoreIn;
};

function add2Home() {
    scoreIn += 2;
    scoreHome.textContent = scoreIn;
};

function add3Home() {
    scoreIn += 3;
    scoreHome.textContent = scoreIn;
};

function add1Guest() {
    scoreOut += 1;
    scoreGuest.textContent = scoreOut;
};

function add2Guest() {
    scoreOut += 2;
    scoreGuest.textContent = scoreOut;
};

function add3Guest() {
    scoreOut += 3;
    scoreGuest.textContent = scoreOut;
};


function resetScore() {
    scoreOut = 0;
    scoreIn = 0;
    scoreGuest.textContent = 0;
    scoreHome.textContent = 0;
}