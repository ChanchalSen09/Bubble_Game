let timer = 60;
let score = 0;
let ran = 0;
let gameInterval;
let isGameStarted = false;

function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function hidePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "none";
}

document.getElementById("startBtn").addEventListener("click", () => {
  hidePopup("popup");
  startGame();
});

// document.getElementById("howToPlayBtn").addEventListener("click", () => {
//   showPopup("howToPlayPopup");
// });

document.getElementById("resetBtn").addEventListener("click", () => {
  hidePopup("endPopup");
  resetGame();
});

function increaseScore() {
  score += 10;
  document.querySelector("#scoreid").textContent = score;
}

function getNewHit() {
  ran = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = ran;
}

function makebubble() {
  let clutter = " ";
  let numberOfBubbles = 276;

  if (window.innerWidth < 768) {
    numberOfBubbles = 70;
  }

  for (let i = 1; i <= numberOfBubbles; i++) {
    let rand = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rand}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer() {
  gameInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      endGame();
    }
  }, 1000);
}

function startGame() {
  isGameStarted = true;
  timer = 2;
  score = 0;
  document.querySelector("#timerval").textContent = timer;
  document.querySelector("#scoreid").textContent = score;
  makebubble();
  getNewHit();
  runtimer();
}

function endGame() {
  clearInterval(gameInterval);
  showPopup("endPopup");
  document.querySelector("#finalScore").textContent = score;
  isGameStarted = false;
  document.querySelector("#pbtm").innerHTML = "";
}

function resetGame() {
  hidePopup("endPopup");
  startGame();
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  if (!isGameStarted) return;

  let clickednum = Number(dets.target.textContent);
  if (clickednum === ran) {
    increaseScore();
    makebubble();
    getNewHit();
  }
});

showPopup("popup");
