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

class Puzzle {
    constructor(moves, baseState, allowedMoves, pruneTable, pruneDepth, searchMax) {
        this.moves = moves;
        this.pruneTable = pruneTable;
        this.pruneDepth = pruneDepth;
        this.baseState = baseState;
        this.allowedMoves = allowedMoves;
        this.searchMax = searchMax;
        this.fl_mask = 64;
        this.bl_mask = 32;
        this.dl_mask = 16;
        this.dfl_mask = 12;
        this.dbl_mask = 3;
        this.ce_masks = {
            "U": 0b100000000000000000000000000000,
            "L": 0b010000000000000000000000000000,
            "F": 0b001000000000000000000000000000,
            "R": 0b000100000000000000000000000000,
            "B": 0b000010000000000000000000000000,
            "D": 0b000001000000000000000000000000
        };
        this.e_masks = {
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
        this.fl_vals = {
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
        this.bl_vals = {
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
        this.dl_vals = {
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
        this.c_masks = {
            "ubr": 0b000000111000000000000000000000,
            "ufr": 0b000000000111000000000000000000,
            "ufl": 0b000000000000111000000000000000,
            "ubl": 0b000000000000000111000000000000,
            "dbl": 0b000000000000000000111000000000,
            "dfl": 0b000000000000000000000111000000,
            "dfr": 0b000000000000000000000000111000,
            "dbr": 0b000000000000000000000000000111
        };
        this.dfl_vals = {
            "ubr": 0b000000101000000000000000000000,
            "ufr": 0b000000000101000000000000000000,
            "ufl": 0b000000000000101000000000000000,
            "ubl": 0b000000000000000101000000000000,
            "dbl": 0b000000000000000000101000000000,
            "dfl": 0b000000000000000000000101000000,
            "dfr": 0b000000000000000000000000101000,
            "dbr": 0b000000000000000000000000000101
        };
        this.dbl_vals = {
            "ubr": 0b000000100000000000000000000000,
            "ufr": 0b000000000100000000000000000000,
            "ufl": 0b000000000000100000000000000000,
            "ubl": 0b000000000000000100000000000000,
            "dbl": 0b000000000000000000100000000000,
            "dfl": 0b000000000000000000000100000000,
            "dfr": 0b000000000000000000000000100000,
            "dbr": 0b000000000000000000000000000100
        };
    }
    turn (start, move, result) {
        result[0] = start[0] & move.main1;
        result[1] = start[1] & move.main2;
        //permutations
        for (let shift_info of move.p1.left) {
            result[0] |= (start[0] & shift_info.mask) << shift_info.shift;
        }
        for (let shift_info of move.p1.right) {
            result[0] |= (start[0] & shift_info.mask) >>> shift_info.shift;
        }
        for (let shift_info of move.p2.left) {
            result[1] |= (start[1] & shift_info.mask) << shift_info.shift;
        }
        for (let shift_info of move.p2.right) {
            result[1] |= (start[1] & shift_info.mask) >>> shift_info.shift;
        }
        //orientation
        if ("o_e" in move) {
            let fl_unchanged = true;
            let bl_unchanged = true;
            let dl_unchanged = true;
            for (let edge of move.o_e) {
                if ((start[1] & this.e_masks[edge]) == this.fl_vals[edge]) {
                    result[1] |= (start[1] & this.fl_mask) ^ this.fl_mask;
                    fl_unchanged = false;
                } else if ((start[1] & this.e_masks[edge]) == this.bl_vals[edge]) {
                    result[1] |= (start[1] & this.bl_mask) ^ this.bl_mask;
                    bl_unchanged = false;
                } else if ((start[1] & this.e_masks[edge]) == this.dl_vals[edge]) {
                    result[1] |= (start[1] & this.dl_mask) ^ this.dl_mask;
                    dl_unchanged = false;
                }
            }
            if (fl_unchanged) {
                result[1] |= start[1] & this.fl_mask;
            }
            if (bl_unchanged) {
                result[1] |= start[1] & this.bl_mask;
            }
            if (dl_unchanged) {
                result[1] |= start[1] & this.dl_mask;
            }
        }
        if ("o_c" in move) {
            let dfl_unchanged = true;
            let dbl_unchanged = true;
            for (let o_info of move.o_c) {
                if ((start[0] & this.c_masks[o_info.c]) == this.dfl_vals[o_info.c]) {
                    result[1] |= ((((start[1] & this.dfl_mask) >>> 2) + o_info.o) % 3) << 2;
                    dfl_unchanged = false;
                } else if ((start[0] & this.c_masks[o_info.c]) == this.dbl_vals[o_info.c]) {
                    result[1] |= ((start[1] & this.dbl_mask) + o_info.o) % 3;
                    dbl_unchanged = false;
                }
            }
            if (dfl_unchanged) {
                result[1] |= start[1] & this.dfl_mask;
            }
            if (dbl_unchanged) {
                result[1] |= start[1] & this.dbl_mask;
            }
        }
    }
    createPruneTable (maxDepth, firstLayer) {
        let pruneTable = new Map();
        if (firstLayer.length != 0) {
            let seqStart = [];
            for (let state of firstLayer) {
                seqStart.push(state[1]);
                pruneTable.set(state[0], state[1]);
            }
            for (let currLayer=1; currLayer < maxDepth; currLayer++) {
                console.log(currLayer);
                for (let start of seqStart) {
                    for (let seq of this.generateSeq(currLayer)) {
                        let candState = [];
                        this.executeSeq(this.baseState, start.concat(seq), candState);
                        candState = this.compressState(candState);
                        if (!(pruneTable.has(candState))) {
                            pruneTable.set(candState, start.concat(seq));
                        }
                    }
                }
            }
        } else {
            for (let currLayer=1; currLayer <= maxDepth; currLayer++) {
                console.log(currLayer);
                let caseCount = 0;
                for (let seq of this.generateSeq(currLayer)) {
                    let candState = [];
                    this.executeSeq(this.baseState, seq, candState);
                    candState = this.compressState(candState);
                    if (!(pruneTable.has(candState))) {
                        pruneTable.set(candState, seq);
                        caseCount += 1;
                        if (caseCount % 100000 == 0) {
                            console.log(caseCount);
                        }
                    }
                }
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
        download(testStr, 'json.txt', 'text/plain');*/
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
        if ((solLen-this.pruneDepth <= 0) && (disallowedFirst.length == 0)) {
            if (this.pruneTable.has(this.compressState(scramState))) {
                let fullSol = invertAlg(this.pruneTable.get(this.compressState(scramState)));
                solutions.push(fullSol);
                solLen = fullSol.length;
            }
            for (let searchSeq of this.generateSeq(1)) {
                let candState = [];
                this.executeSeq(scramState, searchSeq, candState);
                candState = this.compressState(candState);
                if (this.pruneTable.has(candState)) {
                    let fullSol = searchSeq.concat(invertAlg(this.pruneTable.get(candState)));
                    if (fullSol.length == solLen) {
                        solutions.push(fullSol);
                        solLen = fullSol.length;
                    }
                    if (solutions.length == maxSols) {
                        return solutions;
                    }
                }
            }
        } else {
            for (let i=1, continueSearch=true; i<=this.searchMax && continueSearch; i++) {
                for (let searchSeq of this.generateSeq(i)) {
                    let acceptSeq = true;
                    if (disallowedFirst) {
                        if (searchSeq[0][0] == disallowedFirst[0]) {
                            acceptSeq = false;
                        }
                    }
                    if (acceptSeq) {
                        let candState = [];
                        this.executeSeq(scramState, searchSeq, candState);
                        candState = this.compressState(candState);
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
                    let longScram = this.findLongSol(randSeq, 5);
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
    getCorners(state) {
        let dfl_str = "dfl: ";
        let dbl_str = "dbl: ";
        for (let i in this.c_masks) {
            if ((state[0] & this.c_masks[i]) == this.dfl_vals[i]) {
                dfl_str += i+", ";
            } else if ((state[0] & this.c_masks[i]) == this.dbl_vals[i]) {
                dbl_str += i+", ";
            }
        }
        dfl_str += ((state[1] & this.dfl_mask) >>> 2).toString(2);
        dbl_str += (state[1] & this.dbl_mask).toString(2);
        return dfl_str+" ; "+dbl_str;
    }
    getCenter(state) {
        for (let i in this.ce_masks) {
            if ((state[0] & this.ce_masks[i]) == this.ce_masks[i]) {
                return i;
            }
        }
    }
}