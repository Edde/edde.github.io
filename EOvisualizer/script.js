function analyzeAlg() {
    let rawText = document.getElementById("algText").value.trim();
    let currAlg = rawText.split(" ");
    let cubeStart = {
        ce:["u", "l", "f", "r", "b", "d"],
        co:[["ubr",0], ["ufr",0], ["ufl",0], ["ubl",0], ["dbl",0], ["dfl",0], ["dfr",0], ["dbr",0]],
        ed:[["ub",0], ["ur",0], ["uf",0], ["ul",0], ["br",0], ["fr",0], ["fl",0], ["bl",0], ["db",0], ["dl",0], ["df",0], ["dr",0]]
    };
    executeAlg(cubeStart, invertAlg(currAlg));
    if (!checkPreservedBlock(cubeStart)) {
        alert("Alg does not preserve 223 block.");
    } else {
        let showDR = document.getElementById("showDR").checked;
        let showArrows = document.getElementById("showCycles").checked;
        newImage(cubeStart, showDR, showArrows)
    }
}
function newImage(cubeObj, showDR, showArrows) {
    let imgOptions = getImageOptions(cubeObj, showDR, showArrows);
    document.getElementById("imgMain").innerHTML = "";
    puzzleGen.SVG(document.getElementById("imgMain"), puzzleGen.Type.CUBE, imgOptions);
};