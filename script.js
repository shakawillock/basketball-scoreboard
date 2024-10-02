let homeScoreEl = document.getElementById('home-score');
let guestScoreEl = document.getElementById('guest-score');

let homeButtonOne = document.getElementById('home-button-one')
let homeButtonTwo = document.getElementById('home-button-two');
let homeButtonThree = document.getElementById('home-button-three');

let guestButtonOne = document.getElementById('guest-button-one');
let guestButtonTwo = document.getElementById('guest-button-two');
let guestButtonThree = document.getElementById('guest-button-three');

let homeScore = 0;
let guestScore = 0;

homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

homeButtonOne.addEventListener('click', add1PointToHome)
homeButtonTwo.addEventListener('click', add2PointsToHome)
homeButtonThree.addEventListener('click', add3PointsToHome)

guestButtonOne.addEventListener('click', add1PointToGuest);
guestButtonTwo.addEventListener('click', add2PointsToGuest);
guestButtonThree.addEventListener('click', add3PointsToGuest);


function add1PointToHome() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function add2PointsToHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function add3PointsToHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function add1PointToGuest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function add2PointsToGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function add3PointsToGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}