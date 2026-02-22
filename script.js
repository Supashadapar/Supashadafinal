// POP KARATE GAME
let score = 0;
let timeLeft = 10;
let timer;
let playing = false;

function startPopGame() {
  score = 0;
  timeLeft = 10;
  playing = true;

  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;

  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      playing = false;
      alert("Time up! Score: " + score);
    }
  }, 1000);
}

function popKarate() {
  if (!playing) return;
  score++;
  document.getElementById("score").textContent = score;
}


// CALCULATOR
let currentInput = "";

function press(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    currentInput = Function("return " + currentInput)();
    document.getElementById("display").value = currentInput;
  } catch {
    document.getElementById("display").value = "Error";
    currentInput = "";
  }
}
