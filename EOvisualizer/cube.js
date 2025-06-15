function turn(cube, moveStr) {
    switch (moveStr) {
        case "U":
            tempCo = cube.co[0];
            cube.co[0] = cube.co[3];
            cube.co[3] = cube.co[2];
            cube.co[2] = cube.co[1];
            cube.co[1] = tempCo;
            tempEd = cube.ed[0];
            cube.ed[0] = cube.ed[3];
            cube.ed[3] = cube.ed[2];
            cube.ed[2] = cube.ed[1];
            cube.ed[1] = tempEd;
            break;
        case "D":
            tempCo = cube.co[4];
            cube.co[4] = cube.co[7];
            cube.co[7] = cube.co[6];
            cube.co[6] = cube.co[5];
            cube.co[5] = tempCo;
            tempEd = cube.ed[8];
            cube.ed[8] = cube.ed[11];
            cube.ed[11] = cube.ed[10];
            cube.ed[10] = cube.ed[9];
            cube.ed[9] = tempEd;
            break;
        case "R":
            tempCo = cube.co[0];
            cube.co[0] = cube.co[1];
            cube.co[1] = cube.co[6];
            cube.co[6] = cube.co[7];
            cube.co[7] = tempCo;
            tempEd = cube.ed[1];
            cube.ed[1] = cube.ed[5];
            cube.ed[5] = cube.ed[11];
            cube.ed[11] = cube.ed[4];
            cube.ed[4] = tempEd;
            cube.co[0][1] = (cube.co[0][1]+1) % 3;
            cube.co[1][1] = (cube.co[1][1]+2) % 3;
            cube.co[6][1] = (cube.co[6][1]+1) % 3;
            cube.co[7][1] = (cube.co[7][1]+2) % 3;
            break;
        case "L":
            tempCo = cube.co[2];
            cube.co[2] = cube.co[3];
            cube.co[3] = cube.co[4];
            cube.co[4] = cube.co[5];
            cube.co[5] = tempCo;
            tempEd = cube.ed[3];
            cube.ed[3] = cube.ed[7];
            cube.ed[7] = cube.ed[9];
            cube.ed[9] = cube.ed[6];
            cube.ed[6] = tempEd;
            cube.co[2][1] = (cube.co[2][1]+1) % 3;
            cube.co[3][1] = (cube.co[3][1]+2) % 3;
            cube.co[4][1] = (cube.co[4][1]+1) % 3;
            cube.co[5][1] = (cube.co[5][1]+2) % 3;
            break;
        case "F":
            tempCo = cube.co[1];
            cube.co[1] = cube.co[2];
            cube.co[2] = cube.co[5];
            cube.co[5] = cube.co[6];
            cube.co[6] = tempCo;
            tempEd = cube.ed[2];
            cube.ed[2] = cube.ed[6];
            cube.ed[6] = cube.ed[10];
            cube.ed[10] = cube.ed[5];
            cube.ed[5] = tempEd;
            cube.co[1][1] = (cube.co[1][1]+1) % 3;
            cube.co[2][1] = (cube.co[2][1]+2) % 3;
            cube.co[5][1] = (cube.co[5][1]+1) % 3;
            cube.co[6][1] = (cube.co[6][1]+2) % 3;
            cube.ed[2][1] = (cube.ed[2][1]+1) % 2;
            cube.ed[6][1] = (cube.ed[6][1]+1) % 2;
            cube.ed[10][1] = (cube.ed[10][1]+1) % 2;
            cube.ed[5][1] = (cube.ed[5][1]+1) % 2;
            break;
        case "B":
            tempCo = cube.co[0];
            cube.co[0] = cube.co[7];
            cube.co[7] = cube.co[4];
            cube.co[4] = cube.co[3];
            cube.co[3] = tempCo;
            tempEd = cube.ed[0];
            cube.ed[0] = cube.ed[4];
            cube.ed[4] = cube.ed[11];
            cube.ed[11] = cube.ed[7];
            cube.ed[7] = tempEd;
            cube.co[0][1] = (cube.co[0][1]+2) % 3;
            cube.co[7][1] = (cube.co[7][1]+1) % 3;
            cube.co[4][1] = (cube.co[4][1]+2) % 3;
            cube.co[3][1] = (cube.co[3][1]+1) % 3;
            cube.ed[0][1] = (cube.ed[0][1]+1) % 2;
            cube.ed[4][1] = (cube.ed[4][1]+1) % 2;
            cube.ed[11][1] = (cube.ed[11][1]+1) % 2;
            cube.ed[7][1] = (cube.ed[7][1]+1) % 2;
            break;
        case "M":
            tempCe = cube.ce[0];
            cube.ce[0] = cube.ce[4];
            cube.ce[4] = cube.ce[5];
            cube.ce[5] = cube.ce[2];
            cube.ce[2] = tempCe;
            tempEd = cube.ed[0];
            cube.ed[0] = cube.ed[8];
            cube.ed[8] = cube.ed[10];
            cube.ed[10] = cube.ed[2];
            cube.ed[2] = tempEd;
            cube.ed[0][1] = (cube.ed[0][1]+1) % 2;
            cube.ed[8][1] = (cube.ed[8][1]+1) % 2;
            cube.ed[10][1] = (cube.ed[10][1]+1) % 2;
            cube.ed[2][1] = (cube.ed[2][1]+1) % 2;
            break;
        case "E":
            tempCe = cube.ce[1];
            cube.ce[1] = cube.ce[4];
            cube.ce[4] = cube.ce[3];
            cube.ce[3] = cube.ce[2];
            cube.ce[2] = tempCe;
            tempEd = cube.ed[4];
            cube.ed[4] = cube.ed[5];
            cube.ed[5] = cube.ed[6];
            cube.ed[6] = cube.ed[7];
            cube.ed[7] = tempEd;
            cube.ed[4][1] = (cube.ed[4][1]+1) % 2;
            cube.ed[5][1] = (cube.ed[5][1]+1) % 2;
            cube.ed[6][1] = (cube.ed[6][1]+1) % 2;
            cube.ed[7][1] = (cube.ed[7][1]+1) % 2;
            break;
        case "S":
            tempCe = cube.ce[0];
            cube.ce[0] = cube.ce[1];
            cube.ce[1] = cube.ce[5];
            cube.ce[5] = cube.ce[3];
            cube.ce[3] = tempCe;
            tempEd = cube.ed[1];
            cube.ed[1] = cube.ed[3];
            cube.ed[3] = cube.ed[9];
            cube.ed[9] = cube.ed[11];
            cube.ed[11] = tempEd;
            cube.ed[1][1] = (cube.ed[1][1]+1) % 2;
            cube.ed[3][1] = (cube.ed[3][1]+1) % 2;
            cube.ed[9][1] = (cube.ed[9][1]+1) % 2;
            cube.ed[11][1] = (cube.ed[11][1]+1) % 2;
            break;
    }
}
const workingMoves = ["U","D","R","L","F","B","M","E","S"];
const otherMoves = {
    "u": ["U","E","E","E"],
    "d": ["D","E"],
    "r": ["R","M","M","M"],
    "l": ["L","M"],
    "f": ["F","S"],
    "b": ["B","S","S","S"],
    "x": ["R","L","L","L","M","M","M"],
    "y": ["U","D","D","D","E","E","E"],
    "z": ["F","B","B","B","S"]
};
const cubeRef = {
    ce:["u", "l", "f", "r", "b", "d"],
    co:[["ubr",0], ["ufr",0], ["ufl",0], ["ubl",0], ["dbl",0], ["dfl",0], ["dfr",0], ["dbr",0]],
    ed:[["ub",0], ["ur",0], ["uf",0], ["ul",0], ["br",0], ["fr",0], ["fl",0], ["bl",0], ["db",0], ["dl",0], ["df",0], ["dr",0]]
};
const stickerPos = {
    "ub": {"U": 1},
    "ur": {"U": 5, "R": 1},
    "uf": {"U": 7, "F": 1},
    "ul": {"U": 3},
    "br": {"R": 5},
    "fr": {"R": 3, "F": 5},
    "dr": {"R": 7}
}
function executeAlg(cubeObj, algList) {
    for (let move of algList) {
        let steps = 1;
        if (move[move.length-1] == "'") {
            steps = 3;
        } else if (move[move.length-1] == "2") {
            steps = 2;
        }
        while (steps > 0) {
            if (workingMoves.includes(move[0])) {
                turn(cubeObj, move[0]);
            } else if (move[0] in otherMoves) {
                for (let subMove of otherMoves[move[0]]) {
                    turn(cubeObj, subMove);
                }
            }
            steps--;
        }
    }
}
function invertAlg(alg) {
    let inverse = [];
    for (let i = alg.length-1; i >= 0; i--) {
        if (alg[i][alg[i].length-1] == "2") {
            inverse.push(alg[i]);
        } else if (alg[i][alg[i].length-1] == "'") {
            inverse.push(alg[i][0]);
        } else {
            inverse.push(alg[i]+"'");
        }
    }
    return inverse;
}
function checkPreservedBlock(candCube) {
    for (let i of [6,7,8,9,10]) {
        if (candCube.ed[i][0] != cubeRef.ed[i][0] || candCube.ed[i][1] != cubeRef.ed[i][1]) {
            return false;
        }
    }
    for (let i of [4,5]) {
        if (candCube.co[i][0] != cubeRef.co[i][0] || candCube.co[i][1] != cubeRef.co[i][1]) {
            return false;
        }
    }
    for (let i of [1,5]) {
        if (candCube.ce[i] != cubeRef.ce[i]) {
            return false;
        }
    }
    return true;
}
function getImageOptions(cubeObj, showDR, showArrows) {
    let imgOptions = {
        width: 300,
        height: 300,
        puzzle: {
            size: 3,
            stickerColors: {
                "U": [puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR],
                "F": [puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.GREEN,puzzleGen.Colors.GREEN,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.GREEN,puzzleGen.Colors.GREEN,puzzleGen.Colors.MASK_COLOR],
                "R": [puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR,puzzleGen.Colors.MASK_COLOR]
            },
            arrows: []
        }
    };
    let permList = [];
    let oriList = [];
    let drPos = 11;
    for (let i = 0; i < cubeObj.ed.length; i++) {
        if (cubeObj.ed[i][0] != cubeRef.ed[i][0]) {
            permList.push([cubeRef.ed[i][0], cubeObj.ed[i][0]]);
        }
        if (cubeObj.ed[i][1] == 1) {
            oriList.push(cubeRef.ed[i][0]);
        }
        if (cubeObj.ed[i][0] == "dr") {
            drPos = cubeRef.ed[i][0];
        }
    }
    for (let edge of oriList) {
        for (let i in stickerPos[edge]) {
            imgOptions.puzzle.stickerColors[i][stickerPos[edge][i]] = puzzleGen.Colors.WHITE;
        }
    }
    if (showDR) {
        for (let i in stickerPos[drPos]) {
            imgOptions.puzzle.stickerColors[i][stickerPos[drPos][i]] = puzzleGen.Colors.YELLOW;
        }
    }
    if (showArrows) {
        for (let pair of permList) {
            let sharedFace = "";
            for (let face1 in stickerPos[pair[0]]) {
                for (let face2 in stickerPos[pair[1]]) {
                    if (face1 == face2) {
                        sharedFace = face1;
                    }
                }
            }
            if (sharedFace) {
                let startObj = {"face": sharedFace, "sticker": stickerPos[pair[0]][sharedFace]};
                let endObj = {"face": sharedFace, "sticker": stickerPos[pair[1]][sharedFace]};
                imgOptions.puzzle.arrows.push({"start": startObj, "end": endObj});
            } else {
                let startObj = {"face": Object.entries(stickerPos[pair[0]])[0][0], "sticker": Object.entries(stickerPos[pair[0]])[0][1]};
                let endObj = {"face": Object.entries(stickerPos[pair[1]])[0][0], "sticker": Object.entries(stickerPos[pair[1]])[0][1]};
                imgOptions.puzzle.arrows.push({"start": startObj, "end": endObj});
            }
        }
    }
    return imgOptions;
}