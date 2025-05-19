const zeroPuzzle = new Puzzle(moves, zeroSolved, zeroSimple, zeroPruneTable, 7, 5);
const cpfbPuzzle = new Puzzle(moves, mainSolved, noRotations, cpfbPruneTable, 4, 4);

let getNewScram = true;
let currCase = {};
let timerRunning = false;
let timerStartTime;
let timerInterval;
let currentTime = 0;
let timerUsed = false;
let showAllHistory = false;
const maxVisibleHistory = 5;

const nextBtn = document.getElementById("nextBtn");
const timerDisplay = document.getElementById("timerDisplay");
const timerContainer = document.querySelector(".right-column");
const historyTable = document.getElementById("historyTable").getElementsByTagName("tbody")[0];
const showMoreBtn = document.getElementById("showMoreBtn");

function newImage(algStr) {
  const imgOptions = {
    width: 300,
    height: 300,
    strokeWidth: 0.01,
    puzzle: {
      size: 3,
      mask: {
        U: [0,1,2,3,4,5,6,7,8],
        R: [0,1,2,3,4,5,6,7,8],
        F: [0,1,2,4,5,7,8],
        D: [1,2,4,5,7,8],
        L: [0,1,2],
        B: [0,1,2,3,4,6,7]
      },
      alg: algStr
    }
  };
  document.getElementById("imgMain").innerHTML = "";
  puzzleGen.SVG(document.getElementById("imgMain"), puzzleGen.Type.CUBE_NET, imgOptions);
}

function updateTimer() {
  const elapsed = (Date.now() - timerStartTime) / 1000;
  currentTime = elapsed; // Update currentTime continuously
  timerDisplay.textContent = elapsed.toFixed(2);
}

function startTimer() {
  if (timerUsed) return;
  timerStartTime = Date.now();
  timerRunning = true;
  timerInterval = setInterval(updateTimer, 50);
}

function stopTimer() {
  if (!timerRunning) return;
  clearInterval(timerInterval);
  timerRunning = false;
  currentTime = parseFloat(((Date.now() - timerStartTime) / 1000).toFixed(2));
  timerDisplay.textContent = currentTime.toFixed(2);
  timerUsed = true;
}

function updateHistoryVisibility() {
  const rows = historyTable.rows;
  const totalRows = rows.length;
  
  if (totalRows <= maxVisibleHistory) {
    showMoreBtn.style.display = 'none';
    return;
  }
  
  showMoreBtn.style.display = showAllHistory ? 'none' : 'block';
  
  for (let i = 0; i < totalRows; i++) {
    rows[i].style.display = (showAllHistory || i < maxVisibleHistory) ? '' : 'none';
  }
}

function nextPhase() {
  if (timerRunning) {
    stopTimer();
  }

  if (getNewScram) {
    const mode = document.getElementById("mode").value;
    const level = Number(document.getElementById("level").value);
    switch (mode) {
      case "zeroMove":
        currCase = zeroPuzzle.getMinMoveScrams(level+1, 10, ["z'"]);
        break;
      case "cpfb":
        currCase = cpfbPuzzle.getMinMoveScrams(level, 5, []);
        break;
    }
    document.getElementById("scramStr").textContent = currCase.givenScram;
    document.getElementById("solStr").innerHTML = "";
    newImage(currCase.givenScram);
    nextBtn.textContent = "Reveal Solutions";
    getNewScram = false;
    timerDisplay.textContent = "00.00";
    currentTime = 0;
    timerUsed = false;
  } else {
    document.getElementById("solStr").innerHTML = currCase.solutions.join("<br>");
    nextBtn.textContent = "Generate New Scramble";
    getNewScram = true;
    addToHistory();
  }
}

function addToHistory() {
  const mode = document.getElementById("mode").value;
  const level = document.getElementById("level").value;
  const scramble = currCase.givenScram;
  const time = currentTime > 0 ? currentTime.toFixed(2) : "-";
  const moves = "-";

  const row = historyTable.insertRow(0);
  [mode, level, scramble, time, moves].forEach(text => {
    const cell = row.insertCell();
    cell.textContent = text;
    cell.contentEditable = true;
  });
  
  showAllHistory = false;
  updateHistoryVisibility();
}

function exportSession() {
  let csv = "Mode,Level,Scramble,Time,Moves\n";
  for (let row of historyTable.rows) {
    const cells = Array.from(row.cells).map(td => td.textContent.replace(/,/g, ";"));
    csv += cells.join(",") + "\n";
  }

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "session_history.csv";
  a.click();
  URL.revokeObjectURL(url);
}

timerContainer.addEventListener("click", function() {
  if (!getNewScram && !timerUsed) {
    if (!timerRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  }
});

document.onkeydown = function (e) {
  switch (e.key) {
    case " ":
      if (!getNewScram && !timerUsed) {
        if (!timerRunning) {
          startTimer();
        } else {
          stopTimer();
        }
      }
      break;
    case "Enter":
      if (timerRunning) {
        stopTimer();
        setTimeout(() => {
          nextBtn.click();
        }, 50);
      } else {
        nextBtn.click();
      }
      break;
  }
};

showMoreBtn.addEventListener("click", function() {
  showAllHistory = true;
  updateHistoryVisibility();
});

nextBtn.onclick = nextPhase;
newImage("");