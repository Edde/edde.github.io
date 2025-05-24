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
function leftAlg(alg) {
    let leftAlg = [];
    for (let i = 0; i < alg.length; i++) {
        let turnStr = alg[i][0];
        switch (turnStr) {
            case "R":
                turnStr = "L";
                break;
            case "r":
                turnStr = "l";
                break;
            case "L":
                turnStr = "R";
                break;
            case "l":
                turnStr = "r";
                break;
        }
        if (alg[i][alg[i].length-1] == "2") {
            leftAlg.push(turnStr + "2");
        } else if (alg[i][alg[i].length-1] == "'") {
            leftAlg.push(turnStr);
        } else {
            leftAlg.push(turnStr+"'");
        }
    }
    return leftAlg;
}
function countSQTM(alg) {
    let sqtmLen = 0;
    for (move of alg) {
        sqtmLen += 1;
        if (move[1] == "2") {
            sqtmLen += 1;
        }
    }
    return sqtmLen;
}
function compressState(state) {
    return String.fromCharCode(state[0] >>> 16, state[0], state[1] >>> 16, state[1])
}
function decompressState(state_str) {
    let state = [];
    state[0] = (state_str.charCodeAt(0) << 16 | state_str.charCodeAt(1));
    state[1] = (state_str.charCodeAt(2) << 16 | state_str.charCodeAt(3));
    return state;
}

class Puzzle {
    constructor(moves, baseState, allowedMoves, pruneTable, pruneDepth, searchMax) {
        this.moves = moves;
        this.pruneTable = pruneTable;
        this.pruneDepth = pruneDepth;
        this.baseState = baseState;
        this.allowedMoves = allowedMoves;
        this.searchMax = searchMax;
        this.cpStateMask = 0b111111;
        this.flMask = 64;
        this.blMask = 32;
        this.dlMask = 16;
        this.dflMask = 12;
        this.dblMask = 3;
        this.ceMask = 0b111111000000000000000000000000;
        this.ceMasks = {
            "U": 0b100000000000000000000000000000,
            "L": 0b010000000000000000000000000000,
            "F": 0b001000000000000000000000000000,
            "R": 0b000100000000000000000000000000,
            "B": 0b000010000000000000000000000000,
            "D": 0b000001000000000000000000000000
        };
        this.eMasks = {
            "ub": 0b1100000000000000000000000000000,
            "ur": 0b0011000000000000000000000000000,
            "uf": 0b0000110000000000000000000000000,
            "ul": 0b0000001100000000000000000000000,
            "br": 0b0000000011000000000000000000000,
            "fr": 0b0000000000110000000000000000000,
            "fl": 0b0000000000001100000000000000000,
            "bl": 0b0000000000000011000000000000000,
            "db": 0b0000000000000000110000000000000,
            "dl": 0b0000000000000000001100000000000,
            "df": 0b0000000000000000000011000000000,
            "dr": 0b0000000000000000000000110000000
        };
        this.flVals = {
            "ub": 0b0100000000000000000000000000000,
            "ur": 0b0001000000000000000000000000000,
            "uf": 0b0000010000000000000000000000000,
            "ul": 0b0000000100000000000000000000000,
            "br": 0b0000000001000000000000000000000,
            "fr": 0b0000000000010000000000000000000,
            "fl": 0b0000000000000100000000000000000,
            "bl": 0b0000000000000001000000000000000,
            "db": 0b0000000000000000010000000000000,
            "dl": 0b0000000000000000000100000000000,
            "df": 0b0000000000000000000001000000000,
            "dr": 0b0000000000000000000000010000000
        };
        this.blVals = {
            "ub": 0b1000000000000000000000000000000,
            "ur": 0b0010000000000000000000000000000,
            "uf": 0b0000100000000000000000000000000,
            "ul": 0b0000001000000000000000000000000,
            "br": 0b0000000010000000000000000000000,
            "fr": 0b0000000000100000000000000000000,
            "fl": 0b0000000000001000000000000000000,
            "bl": 0b0000000000000010000000000000000,
            "db": 0b0000000000000000100000000000000,
            "dl": 0b0000000000000000001000000000000,
            "df": 0b0000000000000000000010000000000,
            "dr": 0b0000000000000000000000100000000
        };
        this.dlVals = {
            "ub": 0b1100000000000000000000000000000,
            "ur": 0b0011000000000000000000000000000,
            "uf": 0b0000110000000000000000000000000,
            "ul": 0b0000001100000000000000000000000,
            "br": 0b0000000011000000000000000000000,
            "fr": 0b0000000000110000000000000000000,
            "fl": 0b0000000000001100000000000000000,
            "bl": 0b0000000000000011000000000000000,
            "db": 0b0000000000000000110000000000000,
            "dl": 0b0000000000000000001100000000000,
            "df": 0b0000000000000000000011000000000,
            "dr": 0b0000000000000000000000110000000
        };
        this.cMask = 0b000000111111111111111111111111;
        this.cMasks = {
            "ubr": 0b000000111000000000000000000000,
            "ufr": 0b000000000111000000000000000000,
            "ufl": 0b000000000000111000000000000000,
            "ubl": 0b000000000000000111000000000000,
            "dbl": 0b000000000000000000111000000000,
            "dfl": 0b000000000000000000000111000000,
            "dfr": 0b000000000000000000000000111000,
            "dbr": 0b000000000000000000000000000111
        };
        this.dflVals = {
            "ubr": 0b000000101000000000000000000000,
            "ufr": 0b000000000101000000000000000000,
            "ufl": 0b000000000000101000000000000000,
            "ubl": 0b000000000000000101000000000000,
            "dbl": 0b000000000000000000101000000000,
            "dfl": 0b000000000000000000000101000000,
            "dfr": 0b000000000000000000000000101000,
            "dbr": 0b000000000000000000000000000101
        };
        this.dblVals = {
            "ubr": 0b000000100000000000000000000000,
            "ufr": 0b000000000100000000000000000000,
            "ufl": 0b000000000000100000000000000000,
            "ubl": 0b000000000000000100000000000000,
            "dbl": 0b000000000000000000100000000000,
            "dfl": 0b000000000000000000000100000000,
            "dfr": 0b000000000000000000000000100000,
            "dbr": 0b000000000000000000000000000100
        };
        this.cornerVals = {
            "ubr": 0b000,
            "ufr": 0b001,
            "ufl": 0b010,
            "ubl": 0b011,
            "dbl": 0b100,
            "dfl": 0b101,
            "dfr": 0b110,
            "dbr": 0b111
        }
    }
    turn (start, move, result) {
        result[0] = start[0] & move.main1;
        if ("stateChange" in move) {
            result[0] |= stateMappings[(start[0] & this.cpStateMask)][move.stateChange];
        }
        result[1] = start[1] & move.main2;
        //permutations
        if ("p1" in move) {
            for (let shift_info of move.p1.left) {
                result[0] |= (start[0] & shift_info.mask) << shift_info.shift;
            }
            for (let shift_info of move.p1.right) {
                result[0] |= (start[0] & shift_info.mask) >>> shift_info.shift;
            }
        }
        for (let shift_info of move.p2.left) {
            result[1] |= (start[1] & shift_info.mask) << shift_info.shift;
        }
        for (let shift_info of move.p2.right) {
            result[1] |= (start[1] & shift_info.mask) >>> shift_info.shift;
        }
        //orientation
        if ("o_e" in move) {
            let flUnchanged = true;
            let blUnchanged = true;
            let dlUnchanged = true;
            for (let edge of move.o_e) {
                if ((start[1] & this.eMasks[edge]) == this.flVals[edge]) {
                    result[1] |= (start[1] & this.flMask) ^ this.flMask;
                    flUnchanged = false;
                } else if ((start[1] & this.eMasks[edge]) == this.blVals[edge]) {
                    result[1] |= (start[1] & this.blMask) ^ this.blMask;
                    blUnchanged = false;
                } else if ((start[1] & this.eMasks[edge]) == this.dlVals[edge]) {
                    result[1] |= (start[1] & this.dlMask) ^ this.dlMask;
                    dlUnchanged = false;
                }
            }
            if (flUnchanged) {
                result[1] |= start[1] & this.flMask;
            }
            if (blUnchanged) {
                result[1] |= start[1] & this.blMask;
            }
            if (dlUnchanged) {
                result[1] |= start[1] & this.dlMask;
            }
        }
        if ("o_c" in move) {
            if ("stateChange" in move) {
                let dflUnchanged = true;
                for (let o_info of move.o_c) {
                    if ((start[0] & 0b111) == this.cornerVals[o_info.c]) {
                        result[1] |= ((((start[1] & this.dflMask) >>> 2) + o_info.o) % 3) << 2;
                        dflUnchanged = false;
                    }
                }
                if (dflUnchanged) {
                    result[1] |= start[1] & this.dflMask;
                }
            } else {
                let dflUnchanged = true;
                let dblUnchanged = true;
                for (let o_info of move.o_c) {
                    if ((start[0] & this.cMasks[o_info.c]) == this.dflVals[o_info.c]) {
                        result[1] |= ((((start[1] & this.dflMask) >>> 2) + o_info.o) % 3) << 2;
                        dflUnchanged = false;
                    } else if ((start[0] & this.cMasks[o_info.c]) == this.dblVals[o_info.c]) {
                        result[1] |= ((start[1] & this.dblMask) + o_info.o) % 3;
                        dblUnchanged = false;
                    }
                }
                if (dflUnchanged) {
                    result[1] |= start[1] & this.dflMask;
                }
                if (dblUnchanged) {
                    result[1] |= start[1] & this.dblMask;
                }
            }
        }
    }
    createPruneTable (maxDepth, firstLayer) {
        let pruneTable = new Map([[compressState(this.baseState), []]]);
        if (firstLayer.length != 0) {
            let seqStart = [];
            for (let state of firstLayer) {
                seqStart.push(state[1]);
                pruneTable.set(state[0], state[1]);
            }
            for (let currLayer=1; currLayer < maxDepth; currLayer++) {
                console.log(currLayer);
                let caseCount = 0;
                for (let start of seqStart) {
                    for (let seq of this.generateSeq(currLayer)) {
                        let candState = [];
                        this.executeSeq(this.baseState, start.concat(seq), candState);
                        candState = compressState(candState);
                        if (!(pruneTable.has(candState))) {
                            pruneTable.set(candState, start.concat(seq));
                            caseCount += 1;
                            if (caseCount % 100000 == 0) {
                                console.log(caseCount);
                            }
                        }
                    }
                }
                console.log(caseCount);
            }
        } else {
            for (let currLayer=1; currLayer <= maxDepth; currLayer++) {
                console.log(currLayer);
                let caseCount = 0;
                for (let seq of this.generateSeq(currLayer)) {
                    let candState = [];
                    this.executeSeq(this.baseState, seq, candState);
                    candState = compressState(candState);
                    if (!(pruneTable.has(candState))) {
                        pruneTable.set(candState, seq);
                        caseCount += 1;
                        if (caseCount % 50000 == 0) {
                            console.log(caseCount);
                        }
                    }
                }
                console.log(caseCount);
            }
        }
        console.log(pruneTable.size);
        this.pruneTable = pruneTable;
        this.pruneDepth = maxDepth;
        /*let testObj = Object.fromEntries(this.pruneTable);
        let testStr = JSON.stringify(testObj);
        function download(content, fileName, contentType) {
            var a = document.createElement("a");
            var file = new Blob([content], {type: contentType});
            a.href = URL.createObjectURL(file);
            a.download = fileName;
            a.click();
        }
        download(testStr, 'rightBlockRU.js', 'text/plain');*/
    }
    compressState(state) {
        return String.fromCharCode(state[0] >>> 16, state[0], state[1] >>> 16, state[1])
    }
    decompressState(state_str) {
        let state = [];
        state[0] = (state_str.charCodeAt(0) << 16 | state_str.charCodeAt(1));
        state[1] = (state_str.charCodeAt(2) << 16 | state_str.charCodeAt(3));
        return state;
    }
    executeSeq(start, seq, result) {
        let tempState = [];
        this.turn(start, this.moves[seq[0]], result);
        for (let i=1; i<seq.length; i++) {
            tempState = result.slice();
            this.turn(tempState, this.moves[seq[i]], result);
        }
        return result;
    }
    findSol(scram, maxSols, disallowedFirst) {
        let solutions = [];
        let solLen = scram.length;
        let scramState = [];
        this.executeSeq(this.baseState, scram, scramState);
        if (this.pruneTable.has(compressState(scramState))) {
            let fullSol = invertAlg(this.pruneTable.get(compressState(scramState)));
            let acceptSeq = true;
            if (disallowedFirst) {
                if (fullSol[0][0].toLowerCase() == disallowedFirst[0].toLowerCase()) {
                    acceptSeq = false;
                }
            }
            if (acceptSeq) {
                solutions.push(fullSol);
                solLen = fullSol.length;
            }
        }
        for (let i=1, continueSearch=true; i<=this.searchMax && continueSearch; i++) {
            for (let searchSeq of this.generateSeq(i)) {
                let acceptSeq = true;
                if (disallowedFirst) {
                    if (searchSeq[0][0].toLowerCase() == disallowedFirst[0].toLowerCase()) {
                        acceptSeq = false;
                    }
                }
                if (acceptSeq) {
                    let candState = [];
                    this.executeSeq(scramState, searchSeq, candState);
                    candState = compressState(candState);
                    if (this.pruneTable.has(candState)) {
                        let fullSol = searchSeq.concat(invertAlg(this.pruneTable.get(candState)));
                        if (fullSol.length < solLen) {
                            solutions = [];
                        }
                        if (fullSol.length <= solLen) {
                            solutions.push(fullSol);
                            solLen = fullSol.length;
                        }
                        if (solutions.length == maxSols) {
                            return solutions;
                        }
                        continueSearch=false;
                    }
                }
            }
        }
        if (solutions.length == 0) {
            console.log("no solutions");
        }
        return solutions;
    }
    findLongSol(scram, extraMoves) {
        while (true) {
            let randSeq = this.getRandomSeq(extraMoves);
            let endSeq = this.findSol(scram.concat(randSeq), 1, randSeq[randSeq.length-1]);
            if (!(endSeq.length == 0 || endSeq === undefined)) {
                return invertAlg(randSeq.concat(endSeq[0]));
            }
        }
    }
    getMinMoveScrams(seqLen, maxSols, firstMoves) {
        while (true) {
            let randSeq = firstMoves.concat(this.getRandomSeq(seqLen-firstMoves.length));
            let sol = this.findSol(randSeq, maxSols, "");
            if (!(sol.length == 0 || sol === undefined)) {
                if (sol[0].length == randSeq.length) {
                    let extraMoves = (randSeq.length < 9) ? 5 : 6;
                    let longScram = this.findLongSol(randSeq, extraMoves);
                    return {solutions: [...new Set([invertAlg(randSeq)].concat(sol).map(function temp(value){return value.join(" ");}))], givenScram: longScram.join(" ")};
                }
            }
        }
    }
    getRandomSeq(seqLen) {
        if (seqLen == 1) {
            let i = Math.floor(Math.random()*this.allowedMoves.length);
            return [this.allowedMoves[i]];
        } else {
            let seq = this.getRandomSeq(seqLen-1);
            while (true) {
                let i = Math.floor(Math.random()*this.allowedMoves.length);
                let candMove = this.allowedMoves[i];
                if (seq[seq.length-1][0] != candMove[0] && (seq[seq.length-1][0] != candMove[0].toLowerCase())) {
                    return seq.concat([candMove]);
                }
            }
        }
    }
    *generateSeq(seqLen) {
        if (seqLen == 1) {
            for (let move of this.allowedMoves) {
                yield [move];
            }
        } else {
            for (let seq of this.generateSeq(seqLen-1)) {
                for (let move of this.allowedMoves) {
                    if (seq[seq.length-1][0] != move[0] && (seq[seq.length-1][0] != move[0].toLowerCase())) {
                        yield seq.concat([move]);
                    }
                }
            }
        }
    }
    getCpRepr(state, repr) {
        repr[0] = cpStateHash[(state[0] & this.cMask)] | (state[0] & this.ceMask);
        repr[1] = state[1];
    }
}