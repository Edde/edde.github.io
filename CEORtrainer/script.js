const zeroPuzzle = new Puzzle(standardMoves, solvedStates.lb, movesets.zeroMoves, zeroPruneTable, 7, 5);
const cpfbPuzzle = new Puzzle(cpMoves, solvedStates.cpfb, movesets.fullSimple, cpfbPruneTable, 5, 4);
const zeroPuzzleSimple = new Puzzle(standardMoves, solvedStates.lb, movesets.zeroSimple, zeroPruneTableNoS, 7, 5);
const rbPuzzle = new Puzzle(standardMoves, solvedStates.rb, movesets.ruMoves, rbPruneTable, 10, 4);
const fbPuzzle = new Puzzle(standardMoves, solvedStates.lb, movesets.fullSimple, fbPruneTable, 5, 4);
const ssPuzzle = new Puzzle(standardMoves, solvedStates.ss, movesets.RUrMoves, SSPruneTable, 7, 4);
const twoPuzzle = new Puzzle(standardMoves, solvedStates.twoB, movesets.RUrMoves, twoBPruneTable, 8, 4);

let getNewScram = true;
let currMode = "zeroMoveS";
let currCase = {};
let rightMode = false;
let timerRunning = false;
let timerStartTime;
let timerInterval;
let currentTime = 0;
let timerUsed = false;
let showAllHistory = false;
const historyData = JSON.parse(localStorage.getItem("history")) ?? [];
const maxVisibleHistory = 5;

const nextBtn = document.getElementById("nextBtn");
const timerDisplay = document.getElementById("timerDisplay");
const timerContainer = document.querySelector(".right-column");
const historyTable = document.getElementById("historyTable").getElementsByTagName("tbody")[0];
const showMoreBtn = document.getElementById("showMoreBtn");

function newImage(algStr, imgMask) {
  let imgOptions = {
    width: 300,
    height: 300,
    strokeWidth: 0.01,
    puzzle: {
      size: 3,
      alg: algStr,
      mask: imgMask
    }
  }
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

function updateMode() {
  currMode = document.getElementById("mode").value;
  let maxLevel;
  switch (currMode) {
    case "zeroMoveS":
      maxLevel = 9;
      break;
    case "cpfb":
      maxLevel = 8;
      break;
    case "zeroMove":
      maxLevel = 9;
      break;
    case "rb":
      maxLevel = 11;
      break;
    case "fb":
      maxLevel = 8;
      break;
    case "ss":
      maxLevel = 9;
      break;
    case "twob":
      maxLevel = 10;
      break;
  };
  if (document.getElementById("level").value > maxLevel) {
    document.getElementById(maxLevel).selected = true;
  }
  let i;
  for (i = 9; i <= maxLevel; i++) {
    let elem = document.getElementById(i);
    elem.style.display = "";
  };
  while (i <= 11) {
    let elem = document.getElementById(i);
    elem.style.display = "none";
    i++;
  };
}

function nextPhase() {
  if (timerRunning) {
    stopTimer();
  }

  if (getNewScram) {
    const level = Number(document.getElementById("level").value);
    let maskChoice;
    switch (currMode) {
      case "zeroMoveS":
        currCase = zeroPuzzle.getMinMoveScrams(level+1, 10, ["z'"]);
        maskChoice = "lb";
        break;
      case "cpfb":
        currCase = cpfbPuzzle.getMinMoveScrams(level, 5, []);
        maskChoice = "lb";
        break;
      case "zeroMove":
        currCase = zeroPuzzleSimple.getMinMoveScrams(level+1, 10, ["z'"]);
        maskChoice = "lb";
        break;
      case "rb":
        currCase = rbPuzzle.getMinMoveScrams(level, 5, []);
        maskChoice = "rb";
        break;
      case "fb":
        currCase = fbPuzzle.getMinMoveScrams(level, 5, []);
        maskChoice = "lb";
        break;
      case "ss":
        currCase = ssPuzzle.getMinMoveScrams(level, 5, []);
        maskChoice = "rss";
        break;
      case "twob":
        currCase = twoPuzzle.getMinMoveScrams(level, 5, []);
        maskChoice = "rtwo";
        break;
    }
    if (document.getElementById("righthand").checked) {
      currCase.givenScram = mirrorAlg(currCase.givenScram.split(" ")).join(" ");
      rightMode = true;
      maskChoice = (maskChoice[0] == "l") ? "r"+maskChoice.slice(1) : "l"+maskChoice.slice(1);
    } else {
      rightMode = false;
    }
    document.getElementById("scramStr").textContent = currCase.givenScram;
    document.getElementById("solStr").innerHTML = "";
    newImage(currCase.givenScram, imgMasks[maskChoice]);
    nextBtn.textContent = "Reveal Solutions";
    getNewScram = false;
    timerDisplay.textContent = "00.00";
    currentTime = 0;
    timerUsed = false;
  } else {
    if (rightMode) {
      let rightSols = [];
      for (sol of currCase.solutions) {
        rightSols.push(mirrorAlg(sol.split(" ")).join(" "));
      }
      document.getElementById("solStr").innerHTML = rightSols.join("<br>");
    } else {
      document.getElementById("solStr").innerHTML = currCase.solutions.join("<br>");
    }
    nextBtn.textContent = "Generate New Scramble";
    getNewScram = true;
    addToHistory();
  }
}

function addToHistory() {
  const mode = document.getElementById("mode").options[document.getElementById("mode").selectedIndex].text;
  const level = document.getElementById("level").value;
  const scramble = currCase.givenScram;
  const time = currentTime > 0 ? currentTime.toFixed(2) : "-";
  const moves = "-";

  const row = historyTable.insertRow(0);
  row.oninput = function(){updateRow(this);};
  [mode, level, scramble, time, moves].forEach(text => {
    const cell = row.insertCell();
    cell.textContent = text;
    cell.contentEditable = true;
  });
  historyData.push([mode, level, scramble, time, moves]);
  localStorage.setItem("history", JSON.stringify(historyData));
  showAllHistory = false;
  updateHistoryVisibility();
}

function updateRow(rowObj) {
  let newRow = Array.from(rowObj.cells).map(td => td.textContent);
  historyData[historyData.length-rowObj.rowIndex] = newRow;
  localStorage.setItem("history", JSON.stringify(historyData));
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

function resetSession() {
  for (let i=historyTable.rows.length-1; i>=0; i--) {
    historyTable.deleteRow(i);
    historyData.pop();
  }
  localStorage.setItem("history", JSON.stringify(historyData));
  updateHistoryVisibility();
}

function fillHistory() {
  for (let rowData of historyData) {
    const row = historyTable.insertRow(0);
    row.oninput = function(){updateRow(this);};
    rowData.forEach(text => {
      const cell = row.insertCell();
      cell.textContent = text;
      cell.contentEditable = true;
    }); 
  }
  updateHistoryVisibility();
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

nextBtn.onclick = function(){nextPhase(); this.blur();};
newImage("", imgMasks["lb"]);
fillHistory();