const algdb = {
    mainHeader:[
        {id: "name", value: "Name", sort: "str", filter: "none", type: "str"},
        {id: "img_main", value: "Image", sort: "no-sort", filter: "none", type: "img_overlay"},
        {id: "img_eo", value: "EO", sort: "no-sort", filter: "none", type: "img_overlay"},
        {id: "algs", value: "Algorithm", sort: "str", filter: "none", type: "alg"},
        {id: "coll", value: "Orientation", sort: "str", filter: "dropdown", type: "str"},
        {id: "cpll", value: "Permutation", sort: "str", filter: "dropdown", type: "str"}
    ],
    algHeader:[
        {id: "alg", value: "Algorithm", sort: "str", filter: "none", type: "str"},
        {id: "stm", value: "STM", sort: "num", filter: "none", type: "str"},
        {id: "gen", value: "Gen", sort: "num", filter: "dropdown", type: "str"},
        {id: "cube_rot", value: "Cube Rotations", sort: "num", filter: "none", type: "str"}
    ],
    algset:{
        case_1: {
            name: "Adjacent Swap",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "O",
            cpll: "Adjacent",
            algs: [
                {alg: "R U R' F' R U R' U' R' F R2 U' R'", stm: "13", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_1.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_3_clock.png", rot:"270"}}},
                {alg: "r U R' F' R U R' U' R' F R2 U' r'", stm: "13", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_1.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_3_clock.png", rot:"270"}}, img_eo: {1:{src: "cmll_imgs/eo_UL.png", rot: "0"}, 2:{src: "cmll_imgs/eo_UF.png", rot: "0"}}},
                {alg: "R U R' U' R' F R2 U' R' U' R U R' F'", stm: "14", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_1.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_adj.png", rot:"90"}}},
                {alg: "r U R' U' r' F R2 U' R' U' R U R' F'", stm: "14", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_1.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_adj.png", rot:"90"}}, img_eo: {1:{src: "cmll_imgs/eo_UF.png", rot: "0"}, 2:{src: "cmll_imgs/eo_UR.png", rot: "0"}}},
                {alg: "r U' L U2 R' U R U2 r' L'", stm: "10", gen: "L, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_1.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_3_counter.png", rot:"270"}}, img_eo: {1:{src: "cmll_imgs/eo_UF.png", rot: "0"}, 2:{src: "cmll_imgs/eo_UR.png", rot: "0"}}}
            ]
        },
        case_2: {
            name: "Diagonal Swap",
            img_eo:  {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "O",
            cpll: "Diagonal",
            algs: [
                {alg: "r2 D r' U r D' R2 U' F' U' F", stm: "11", gen: "r, F, D, R, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_2.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_diag.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}, 2:{src: "cmll_imgs/eo_UL.png", rot: "0"}}},
                {alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'", stm: "17", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_2.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_diag.png", rot:"0"}}},
                {alg: "r' U' r' D' r U' r' D r U r' D' r U r' D r2", stm: "17", gen: "r, U, D", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_2.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_2_adj.png", rot:"90"}}, img_eo: {1:{src: "cmll_imgs/eo_UL.png", rot: "0"}}},
                {alg: "F R U' R' U' R U R' F' r U R' U' r' F R F'", stm: "17", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_2.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_diag.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_UF.png", rot: "0"}, 2:{src: "cmll_imgs/eo_UR.png", rot: "0"}}},
                {alg: "F R' F R2 U' R' U' R U R' F' R U R' U' F'", stm: "16", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_2.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_diag.png", rot:"0"}}}
            ]
        },
        case_3: {
            name: "Columns",
            img_eo:  {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "H",
            cpll: "Pure",
            algs: [
                {alg: "R U R' U R U' R' U R U2' R'", stm: "11", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_3.png", rot:"90"}}},
                {alg: "R U2' R' U' R U R' U' R U' R'", stm: "11", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_3.png", rot:"0"}}},
                {alg: "R' U2' R U R' U' R U R' U R", stm: "11", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_3.png", rot:"0"}}},
                {alg: "r U2 R' U' R U R' U' R U' r'", stm: "11", gen: "r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_3.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_UF.png", rot: "0"}, 2:{src: "cmll_imgs/eo_UR.png", rot: "0"}}},
                {alg: "r U' r' U' r U r' U r U r'", stm: "11", gen: "r, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_3.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_4_counter.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}, 2:{src: "cmll_imgs/eo_UF.png", rot: "0"}}}
            ]
        },
        case_4: {
            name: "Rows",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "H",
            cpll: "",
            algs: [
                {alg: "F U R U' R' U R U' R' U R U' R' F'", stm: "14", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_4.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_2_adj.png", rot:"0"}}},
                {alg: "F R U R' U' R U R' U' R U R' U' F'", stm: "14", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_4.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_2_adj.png", rot:"0"}}},
                {alg: "R' F R U2' R' F' R U F R U R' U F'", stm: "14", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_4.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_diag.png", rot:"90"}}, img_eo: {1:{src: "cmll_imgs/eo_UL.png", rot: "0"}, 2:{src: "cmll_imgs/eo_UR.png", rot: "0"}}}
            ]
        },
        case_5: {
            name: "Column",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "H",
            cpll: "",
            algs: [
                {alg: "R' F' R U2' R' F2 R U' F U F'", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_5.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_4_x.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}, 2:{src: "cmll_imgs/eo_UF.png", rot: "0"}, 3:{src: "cmll_imgs/eo_UL.png", rot: "0"}, 4:{src: "cmll_imgs/eo_UR.png", rot: "0"}}},
                {alg: "R U2' R2' F R F' U2 R' F R F'", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_5.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_3_counter.png", rot:"90"}}, img_eo: {1:{src: "cmll_imgs/eo_UB.png", rot: "0"}, 1:{src: "cmll_imgs/eo_UL.png", rot: "0"}, 1:{src: "cmll_imgs/eo_UL.png", rot: "0"}, 1:{src: "cmll_imgs/eo_UR.png", rot: "0"}}},
                {alg: "F R U' R' U R U2 R' U' R U R' U' F'", stm: "14", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_5.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_4_x.png", rot:"270"}}}
            ]
        },
        case_6: {
            name: "Row",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "H",
            cpll: "",
            algs: [
                {alg: "r U' r2' D' r U' r' D r2 U r'", stm: "11", gen: "r, U, D", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_6.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U R U r' F R' F' r", stm: "11", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_6.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r U' r' F U2' r2' F r U' r", stm: "10", gen: "F, r, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_6.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_7: {
            name: "Right Bar",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "Pi",
            cpll: "",
            algs: [
                {alg: "R U2 R2 U' R2 U' R2 U2 R", stm: "9", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_7.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F R U R' U' R U R' U' F'", stm: "10", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_7.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U2' R2' U' R2 U' R2' U2' R", stm: "9", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_7.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "f R U R' U' R U R' U' f'", stm: "10", gen: "f, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_7.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F U R U' R' U R U' R' F'", stm: "10", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_7.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F' L' U' L U L' U' L U F", stm: "10", gen: "F, L, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_7.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r' U r2 U' r2' U' r2 U r'", stm: "9", gen: "r, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_7.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r U' r2' U r2 U r2' U' r", stm: "9", gen: "r, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_7.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U2 r U' r' U2 r U r' U2 R", stm: "11", gen: "r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_7.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_8: {
            name: "Back Slash",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "Pi",
            cpll: "",
            algs: [
                {alg: "F R' F' R U2 R U' R' U R U2' R'", stm: "12", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_8.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F U R U' R' U R U' R2' F' R U R U' R'", stm: "15", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_8.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' F2 R U2 R U2 R' F2 U' R U' R'", stm: "12", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_8.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U2 R' U' R U' R2 U L U' R U L'", stm: "13", gen: "L, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_8.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_9: {
            name: "X Checkerboard",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "Pi",
            cpll: "",
            algs: [
                {alg: "R' F R U F U' R U R' U' F'", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_9.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' F2 D R2 U' R2' D' F2 R", stm: "9", gen: "F, U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_9.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "D' F R2 U' R2' U R2 U R2' F' D", stm: "11", gen: "D, F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_9.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_10: {
            name: "Forward Slash",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "Pi",
            cpll: "",
            algs: [
                {alg: "R U2' R' U2(') R' F R2 U R' U' F'", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_10.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U2' R' U' R U R' U2' R' F R F'", stm: "12", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_10.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U' R' F R2 U R' U' R U R' U' F'", stm: "15", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_10.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U2 R U R' U R2 U' L' U R' U' L", stm: "13", gen: "L, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_10.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_11: {
            name: "Columns",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "Pi",
            cpll: "",
            algs: [
                {alg: "r U' r2' D' r U r' D r2 U r'", stm: "11", gen: "r, U, D", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_11.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r' F R F' r U' R' U' R U' R'", stm: "11", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_11.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U R U' R2' F R2 U R' U' F' R", stm: "12", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_11.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U L U' R U' L' U' L U' L'", stm: "11", gen: "L, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_11.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_12: {
            name: "Left Bar",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "Pi",
            cpll: "",
            algs: [
                {alg: "R' U' R' F R F' R U' R' U2 R", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_12.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U R U' B U' B' R'", stm: "10", gen: "B, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_12.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' F' U' F U' R U R' U R", stm: "10", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_12.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U2 R' U' F' R U2 R' U' R U' R' F R U' R'", stm: "16", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_12.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U' R U' R' U F' U F R", stm: "10", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_12.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_13: {
            name: "Forward Slash",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "U",
            cpll: "",
            algs: [
                {alg: "R2 D R' U2 R D' R' U2 R'", stm: "9", gen: "U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_13.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r U' r' U' r U' r' U' F' U2' F", stm: "11", gen: "F, r, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_13.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_14: {
            name: "Back Slash",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "U",
            cpll: "",
            algs: [
                {alg: "R2' D' R U2 R' D R U2 R", stm: "9", gen: "U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_14.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' F R U R' F R U F U2' F'", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_14.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_15: {
            name: "Front Row",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "U",
            cpll: "",
            algs: [
                {alg: "R' U' R U' R' U2' R2 U R' U R U2' R'", stm: "13", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_15.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U R U2' R2' U' R U' R' U2' R", stm: "13", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_15.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R2' F U' F U F2 R2 U' R' F R", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_15.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U' R U' R' U2 R U' R' U2 R U R'", stm: "15", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_15.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U2' R2' U' R2 U' R' U R' U' R U R' U R", stm: "15", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_15.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                
            ]
        },
        case_16: {
            name: "Rows",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "U",
            cpll: "",
            algs: [
                {alg: "F R2 D R' U R D' R2' U' F'", stm: "10", gen: "F, U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_16.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R2' F R F' R U2' R' F' U2' F R", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_16.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R", stm: "19", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_16.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_17: {
            name: "X Checkerboard",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "U",
            cpll: "",
            algs: [
                {alg: "r U' r' U r' D' r U' r' D r", stm: "11", gen: "r, U, D", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_17.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' D R U' R U' R' U R' D' R", stm: "11", gen: "U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_17.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U' R' F2 R2 U' R' U' R U R' F2", stm: "14", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_17.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' F U' R F R' U R F'", stm: "9", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_17.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r' U r' D' r U r' D r U' r", stm: "11", gen: "r, U, D", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_17.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_18: {
            name: "Back Row",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "U",
            cpll: "",
            algs: [
                {alg: "F R U R' U' F'", stm: "6", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_18.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F U R U' R' F'", stm: "6", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_18.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "f R U R' U' f'", stm: "6", gen: "f, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_18.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U' R' U' R U R D R' U R D' R2", stm: "13", gen: "U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_18.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_19: {
            name: "Left Bar",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "T",
            cpll: "",
            algs: [
                {alg: "R U R' U' R' F R F'", stm: "8", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_19.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r U R' U' r' F R F'", stm: "8", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_19.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_20: {
            name: "Right Bar",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "T",
            cpll: "",
            algs: [
                {alg: "L' U' L U r U' r' F", stm: "8", gen: "F, L, r, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_20.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "L' U' L U L F' L' F", stm: "8", gen: "F, L, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_20.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F R U' R' U R U R' F'", stm: "9", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_20.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "l' U' L U R U' r' F", stm: "8", gen: "F, L, R, U, l, r", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_20.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "l' U' L U l F' L' F", stm: "8", gen: "F, L, U, l", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_20.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U' R' D' R U R' D R2", stm: "9", gen: "D, R, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_20.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
            ]
        },
        case_21: {
            name: "Rows",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "T",
            cpll: "",
            algs: [
                {alg: "R U2' R' U' R U' R2' U2' R U R' U R", stm: "13", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_21.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U2' R U R' U R2 U2' R' U' R U' R'", stm: "13", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_21.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F R' F R2 U' R' U' R U R' F2", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_21.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U R U' R' U R' U' R2 U' R2' U2' R", stm: "16", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_21.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_22: {
            name: "Front Row",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "T",
            cpll: "",
            algs: [
                {alg: "r U' r' U' F R' F' R2 U' R'", stm: "10", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_22.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r' U r U2' R2' F R F' R", stm: "9", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_22.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U r U2' R2' F R F' r", stm: "9", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_22.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_23: {
            name: "Back Row",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "T",
            cpll: "",
            algs: [
                {alg: "r' D' r U r' D r U' r U r'", stm: "11", gen: "r, U, D", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_23.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F R U R' U' R U' R' U' R U R' F'", stm: "13", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_23.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' D R U' R U R' U R' D' R", stm: "11", gen: "U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_23.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r U' r D r' U r D' r' U r'", stm: "11", gen: "r, U, D", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_23.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_24: {
            name: "Columns",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "T",
            cpll: "",
            algs: [
                {alg: "r U' r2' D' r U2 r' D r2 U r'", stm: "11", gen: "r, U, D", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_24.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r2' D' r U r' D r2 U' r' U' r", stm: "11", gen: "r, U, D", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_24.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U R2 D r' U2 r D' R2' U' R", stm: "11", gen: "r, U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_24.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_25: {
            name: "Left Bar",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "S",
            cpll: "",
            algs: [
                {alg: "R U R' U R U2 R'", stm: "7", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_25.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U2' R U R' U R", stm: "7", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_25.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r U R' U R U2 r'", stm: "7", gen: "r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_25.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_26: {
            name: "X Checkerboard",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "S",
            cpll: "",
            algs: [
                {alg: "L' U2 L U2' L F' L' F", stm: "8", gen: "F, L, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_26.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F U R U2 R' U' R U R' F'", stm: "10", gen: "F, R, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_26.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "L' U2 L U2' l F' L' F M'", stm: "9", gen: "L, l, F, M, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_26.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_27: {
            name: "Forward Slash",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "S",
            cpll: "",
            algs: [
                {alg: "F R' F' R U2 R U2' R'", stm: "8", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_27.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "M F R' F' R U2 R U2' r'", stm: "9", gen: "r, F, M, R, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_27.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_28: {
            name: "Columns",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "S",
            cpll: "",
            algs: [
                {alg: "R' F2 R2 U2' R' F R U2' R2' F2 R", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_28.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U R U' R D R' U' R D' R2'", stm: "13", gen: "U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_28.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U' R' F R F' R U R' U R U2' R'", stm: "15", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_28.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_29: {
            name: "Right Bar",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "S",
            cpll: "",
            algs: [
                {alg: "R U R' U R' F R F' R U2' R'", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_29.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U L' U R U' L U2 R'", stm: "11", gen: "L, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_29.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_30: {
            name: "Back Slash",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "S",
            cpll: "",
            algs: [
                {alg: "r U' r' F R' F' R", stm: "7", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_30.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U' L' U R' U' L", stm: "7", gen: "L, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_30.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "L U' R' U L' U' R", stm: "7", gen: "L, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_30.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_31: {
            name: "Right Bar",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "As",
            cpll: "",
            algs: [
                {alg: "R' U' R U' R' U2' R", stm: "7", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_31.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r' U' R U' R' U2' r", stm: "7", gen: "r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_31.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U2 R' U' R U' R'", stm: "7", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_31.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_32: {
            name: "Columns",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "As",
            cpll: "",
            algs: [
                {alg: "R' F2 R2 U2' R' F' R U2' R2' F2 R", stm: "11", gen: "R, F, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_32.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R2 D R' U R D' R' U R' U' R U' R'", stm: "13", gen: "U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_32.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r R D R' U R D' R' U R' U' R U' r'", stm: "14", gen: "r, U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_32.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_33: {
            name: "Back Slash",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "As",
            cpll: "",
            algs: [
                {alg: "F' r U r' U2' L' U2 L", stm: "8", gen: "F, r, L, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_33.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F R U' R' U R U2 R' U' F'", stm: "10", gen: "F, R, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_33.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F' L F L' U2' L' U2 L", stm: "8", gen: "F, L, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_33.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "M F' L F L' U2' L' U2 L M'", stm: "10", gen: "F, M, L, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_33.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_34: {
            name: "X Checkerboard",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "As",
            cpll: "",
            algs: [
                {alg: "R U2' R' U2 R' F R F'", stm: "8", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_34.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U2' R' U2 r' F R F' M'", stm: "9", gen: "r, F, M, R, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_34.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_35: {
            name: "Forward Slash",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "As",
            cpll: "",
            algs: [
                {alg: "R' F R F' r U r'", stm: "7", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_35.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "L' U R U' L U R'", stm: "7", gen: "L, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_35.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U L U' R U L'", stm: "7", gen: "L, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_35.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_36: {
            name: "Left Bar",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "As",
            cpll: "",
            algs: [
                {alg: "R U2' R' U' R U R2' F R F' R U2' R'", stm: "13", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_36.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U2' R' F R' F' R U' R U' R'", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_36.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U' R U' R' U R' F R F' U R", stm: "12", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_36.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U' R U' L U' R' U L' U2 R", stm: "11", gen: "L, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_36.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_37: {
            name: "Mirror",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "L",
            cpll: "",
            algs: [
                {alg: "F R U' R' U' R U R' F'", stm: "9", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_37.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R2' D' R U' R' D R U R", stm: "9", gen: "U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_37.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F' r U r' U' r' F r", stm: "8", gen: "F, r, U", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_37.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F' r U R' U' r' F R", stm: "8", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_37.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_38: {
            name: "Inverse",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "L",
            cpll: "",
            algs: [
                {alg: "F R' F' R U R U' R'", stm: "8", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_38.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "F R' F' r U R U' r'", stm: "8", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_38.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_39: {
            name: "Pure",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "L",
            cpll: "",
            algs: [
                {alg: "R U R' U R U' R' U R U' R' U R U2 R'", stm: "15", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_39.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U2 R' U' R U R' U' R U R' U' R U' R'", stm: "15", gen: "U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_39.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U' R' F R F' R' F R F' r U r'", stm: "15", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_39.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_40: {
            name: "Front Commutator",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "L",
            cpll: "",
            algs: [
                {alg: "R U2 R D R' U2 R D' R2'", stm: "9", gen: "U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_40.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' F' R U R' U' R' F R2 U' R' U2 R", stm: "13", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_40.png", rot:"270"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U R' F R F' U2 R' F R F'", stm: "13", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_40.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U' F' U2' F U R U R'", stm: "11", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_40.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_41: {
            name: "Diag",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "L",
            cpll: "",
            algs: [
                {alg: "R U2' R2' F R F' R U2' R'", stm: "9", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_41.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R' U' R U R' F' R U R' U' R' F R2", stm: "13", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_41.png", rot:"0"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "r U2' R2' F R F' R U2' r'", stm: "9", gen: "F, r, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_41.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        },
        case_42: {
            name: "Back Commutator",
            img_eo: {0:{src: "cmll_imgs/eo_base.png", rot: "0"}},
            coll: "L",
            cpll: "",
            algs: [
                {alg: "R' U2 R' D' R U2 R' D R2", stm: "9", gen: "U, D, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_42.png", rot:"90"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}},
                {alg: "R U R' U' R' F R2 U' R' U R U R' F'", stm: "14", gen: "F, U, R", cube_rot: "0", img_main: {0:{src: "cmll_imgs/case_42.png", rot:"180"}, 1:{src: "cmll_imgs/arrow_.png", rot:"0"}}, img_eo: {1:{src: "cmll_imgs/eo_DF.png", rot: "0"}}}
            ]
        }
    }
};
const algdb_name = "cmll";