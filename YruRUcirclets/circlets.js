const circlets = {
    "dfr_dbr": ["ufr","ufl","ubl","ubr"],
    "dbr_dfr": ["ubr","ubl","ufl","ufr"],
    "ufr_ufl": ["ubl","ubr","dfr","dbr"],
    "ufl_ufr": ["dbr","dfr","ubr","ubl"],
    "ufr_ubl": ["ufl","dfr","ubr","dbr"],
    "ubl_ufr": ["dbr","ubr","dfr","ufl"],
    "ufr_ubr": ["ubl","ufl","dbr","dfr"],
    "ubr_ufr": ["dfr","dbr","ufl","ubl"],
    "ufl_ubl": ["ubr","ufr","dfr","dbr"],
    "ubl_ufl": ["dbr","dfr","ufr","ubr"],
    "ufl_ubr": ["ufr","dbr","ubl","dfr"],
    "ubr_ufl": ["dfr","ubl","dbr","ufr"],
    "ubl_ubr": ["ufr","ufl","dfr","dbr"],
    "ubr_ubl": ["dbr","dfr","ufl","ufr"],
    "ufr_dfr": ["ufl","ubl","dbr","ubr"],
    "dfr_ufr": ["ubr","dbr","ubl","ufl"],
    "ufr_dbr": ["ufl","ubr","ubl","dfr"],
    "dbr_ufr": ["dfr","ubl","ubr","ufl"],
    "ufl_dfr": ["ufr","ubl","ubr","dbr"],
    "dfr_ufl": ["dbr","ubr","ubl","ufr"],
    "ufl_dbr": ["ufr","ubr","dfr","ubl"],
    "dbr_ufl": ["ubl","dfr","ubr","ufr"],
    "ubl_dfr": ["ufr","dbr","ufl","ubr"],
    "dfr_ubl": ["ubr","ufl","dbr","ufr"],
    "ubl_dbr": ["ufr","dfr","ubr","ufl"],
    "dbr_ubl": ["ufl","ubr","dfr","ufr"],
    "ubr_dfr": ["ufr","ufl","dbr","ubl"],
    "dfr_ubr": ["ubl","dbr","ufl","ufr"],
    "ubr_dbr": ["ufr","ubl","ufl","dfr"],
    "dbr_ubr": ["dfr","ufl","ubl","ufr"]
}
const bodyDiags = ["dfr_ubl", "ubl_dfr", "dbr_ufl", "ufl_dbr"];
const arrowFacelets = {
    "ufr": ["U8","R0","F2"],
    "ufl": ["U6","F0"],
    "ubl": ["U0"],
    "ubr": ["U2","R2"],
    "dfr": ["R6", "F8"],
    "dbr": ["R8"]
}
function getArrows(corFive, corSix) {
    let arrows = [];
    let allArrows = [];
    let facesUsed = [];
    let overlayNeeded = false;
    for (let i of [[0,1],[1,2],[2,3],[3,0]]) {
        if (circlets[corFive+"_"+corSix][i[0]]+"_"+circlets[corFive+"_"+corSix][i[1]] == "ubl_dbr") {
            overlayNeeded = "U0R8";
        } else if (circlets[corFive+"_"+corSix][i[0]]+"_"+circlets[corFive+"_"+corSix][i[1]] == "dbr_ubl") {
            overlayNeeded = "R8U0";
        } else if (!(bodyDiags.includes(circlets[corFive+"_"+corSix][i[0]]+"_"+circlets[corFive+"_"+corSix][i[1]]))) {
            let arrowCase = [];
            for (let facelet1 of arrowFacelets[circlets[corFive+"_"+corSix][i[0]]]) {
                for (let facelet2 of arrowFacelets[circlets[corFive+"_"+corSix][i[1]]]) {
                    if (facelet1[0] == facelet2[0]) {
                        arrowCase.push(facelet1+facelet2);
                    }
                }
            }
            if (arrowCase.length == 1) {
                facesUsed.push(arrowCase[0][0]);
            }
            allArrows.push(arrowCase);
        }
    }
    for (let arrowCase of allArrows) {
        let arrowAdded = false;
        if (arrowCase.length == 1) {
            arrows.push(arrowCase[0]+"-s5-ffffff");
            arrowAdded = true;
        } else {
            for (let i = 0; i < arrowCase.length; i++) {
                if (facesUsed.includes(arrowCase[i][0]) || facesUsed.includes(arrowCase[i][2])) {
                    arrows.push(arrowCase[i]+"-s5-ffffff");
                    arrowAdded = true;
                    break;
                }
            }
        }
        if (!arrowAdded) {
            arrows.push(arrowCase[0]+"-s5-ffffff");
        }
    }
    if (arrows.length == 3) {
        overlayNeeded = false;
    }
    return {"arrows": arrows.join(","), "overlay": overlayNeeded}
}