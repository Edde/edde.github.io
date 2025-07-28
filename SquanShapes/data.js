const shape_relations = {
    "square_square": {
        "setup": "0,0",
        "relations": {
            "kite_kite": [
                "0,0",
                "1,-1"
            ],
            "square_square": [
                "0,-1",
                "1,0"
            ]
        }
    },
    "square_barrel": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 / 2,4 / -2,6 /",
        "relations": {
            "leftPawn_rightPawn": [
                "0,0"
            ],
            "rightFist_leftFist": [
                "0,1",
                "0,-2",
                "-1,0"
            ],
            "leftFist_rightFist": [
                "0,2",
                "-1,1",
                "-1,-2"
            ],
            "rightPawn_leftPawn": [
                "-1,2"
            ]
        }
    },
    "square_scallop": {
        "setup": "0,0 / 0,3 / 1,2 / 0,2 / 0,-2 /",
        "relations": {
            "4-1-1_perpendicularEdges": [
                "0,0",
                "-1,2"
            ],
            "left5-1_perpendicularEdges": [
                "0,2"
            ],
            "leftFist_rightPawn": [
                "0,-2"
            ],
            "leftPawn_rightFist": [
                "0,4"
            ],
            "perpendicularEdges_right5-1": [
                "0,-4"
            ],
            "perpendicularEdges_4-1-1": [
                "0,6",
                "-1,-4"
            ],
            "right5-1_perpendicularEdges": [
                "-1,0"
            ],
            "rightPawn_leftFist": [
                "-1,-2"
            ],
            "rightFist_leftPawn": [
                "-1,4"
            ],
            "perpendicularEdges_left5-1": [
                "-1,6"
            ]
        }
    },
    "square_mushroom": {
        "setup": "0,0 / 0,3 / 0,2 /",
        "relations": {
            "leftFist_leftFist": [
                "0,0",
                "1,1"
            ],
            "rightPawn_rightFist": [
                "0,1"
            ],
            "leftFist_leftPawn": [
                "0,-5"
            ],
            "rightFist_rightFist": [
                "0,6",
                "1,-5"
            ],
            "rightFist_rightPawn": [
                "1,0"
            ],
            "leftPawn_leftFist": [
                "1,6"
            ]
        }
    },
    "square_shield": {
        "setup": "0,0 / 0,3 / 1,0 /",
        "relations": {
            "leftFist_leftFist": [
                "0,0",
                "-1,2"
            ],
            "rightFist_rightPawn": [
                "0,2"
            ],
            "perpendicularEdges_3-2-1": [
                "0,-2"
            ],
            "3-1-2_perpendicularEdges": [
                "0,4"
            ],
            "leftPawn_leftFist": [
                "0,-4"
            ],
            "rightFist_rightFist": [
                "0,6",
                "-1,-4"
            ],
            "rightPawn_rightFist": [
                "-1,0"
            ],
            "perpendicularEdges_3-1-2": [
                "-1,-2"
            ],
            "3-2-1_perpendicularEdges": [
                "-1,4"
            ],
            "leftFist_leftPawn": [
                "-1,6"
            ]
        }
    },
    "square_leftPawn": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,-1 /",
        "relations": {
            "perpendicularEdges_3-2-1": [
                "0,0"
            ],
            "rightPawn_square": [
                "0,2"
            ],
            "square_leftPawn": [
                "0,-4"
            ],
            "3-1-2_perpendicularEdges": [
                "0,6"
            ],
            "perpendicularEdges_4-1-1": [
                "1,0"
            ],
            "leftFist_kite": [
                "1,2"
            ],
            "kite_rightFist": [
                "1,-4"
            ],
            "4-1-1_perpendicularEdges": [
                "1,6"
            ]
        }
    },
    "square_leftFist": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / 0,1 / 6,4 /",
        "relations": {
            "kite_rightPawn": [
                "0,0"
            ],
            "square_leftFist": [
                "0,1",
                "0,-2",
                "-1,0"
            ],
            "rightFist_square": [
                "0,4",
                "0,-5",
                "-1,6"
            ],
            "leftPawn_kite": [
                "0,6"
            ],
            "kite_rightFist": [
                "-1,1",
                "-1,-2"
            ],
            "leftFist_kite": [
                "-1,4",
                "-1,-5"
            ]
        }
    },
    "square_rightPawn": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / -2,1 /",
        "relations": {
            "perpendicularEdges_3-1-2": [
                "0,0"
            ],
            "leftPawn_square": [
                "0,-2"
            ],
            "square_rightPawn": [
                "0,4"
            ],
            "3-2-1_perpendicularEdges": [
                "0,6"
            ],
            "perpendicularEdges_4-1-1": [
                "-1,0"
            ],
            "rightFist_kite": [
                "-1,-2"
            ],
            "kite_leftFist": [
                "-1,4"
            ],
            "4-1-1_perpendicularEdges": [
                "-1,6"
            ]
        }
    },
    "square_rightFist": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 0,-1 / 6,-4 /",
        "relations": {
            "kite_leftPawn": [
                "0,0"
            ],
            "square_rightFist": [
                "0,-1",
                "0,2",
                "1,0"
            ],
            "leftFist_square": [
                "0,-4",
                "0,5",
                "1,6"
            ],
            "rightPawn_kite": [
                "0,6"
            ],
            "kite_leftFist": [
                "1,-1",
                "1,2"
            ],
            "rightFist_kite": [
                "1,-4",
                "1,5"
            ]
        }
    },
    "square_kite": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,0 / 0,-2 / 1,0 /",
        "relations": {
            "rightFist_leftFist": [
                "0,0",
                "0,6"
            ],
            "square_kite": [
                "0,3",
                "-1,-3"
            ],
            "kite_square": [
                "0,-3",
                "-1,3"
            ],
            "leftFist_rightFist": [
                "-1,0",
                "-1,6"
            ]
        }
    },
    "kite_kite": {
        "setup": "0,0 /",
        "relations": {
            "square_square": [
                "0,0",
                "6,6"
            ],
            "leftFist_leftFist": [
                "0,3",
                "0,-3",
                "3,0",
                "-3,0"
            ],
            "kite_kite": [
                "0,6",
                "3,-3",
                "-3,3",
                "6,0"
            ],
            "barrel_barrel": [
                "3,3",
                "-3,-3"
            ],
            "rightFist_rightFist": [
                "3,6",
                "-3,6",
                "6,3",
                "6,-3"
            ]
        }
    },
    "kite_shield": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,0 /",
        "relations": {
            "perpendicularEdges_3-2-1": [
                "0,0"
            ],
            "rightPawn_leftFist": [
                "0,2"
            ],
            "rightFist_leftFist": [
                "0,-2",
                "6,4"
            ],
            "leftFist_rightPawn": [
                "0,4"
            ],
            "leftFist_rightFist": [
                "0,-4",
                "6,2"
            ],
            "3-2-1_perpendicularEdges": [
                "0,6"
            ],
            "parallelEdges_2-2-2": [
                "3,0"
            ],
            "mushroom_barrel": [
                "3,2",
                "3,-2"
            ],
            "kite_shield": [
                "3,4",
                "3,-4"
            ],
            "3-3_pairedEdges": [
                "3,6"
            ],
            "pairedEdges_3-3": [
                "-3,0"
            ],
            "shield_kite": [
                "-3,2",
                "-3,-2"
            ],
            "barrel_mushroom": [
                "-3,4",
                "-3,-4"
            ],
            "2-2-2_parallelEdges": [
                "-3,6"
            ],
            "perpendicularEdges_3-1-2": [
                "6,0"
            ],
            "leftPawn_rightFist": [
                "6,-2"
            ],
            "rightFist_leftPawn": [
                "6,-4"
            ],
            "3-1-2_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "kite_rightPawn": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / 0,1 /",
        "relations": {
            "perpendicularEdges_3-1-2": [
                "0,0"
            ],
            "rightFist_square": [
                "0,-2"
            ],
            "kite_rightPawn": [
                "0,4"
            ],
            "4-1-1_perpendicularEdges": [
                "0,6"
            ],
            "parallelEdges_3-2-1": [
                "3,0"
            ],
            "mushroom_leftFist": [
                "3,-2"
            ],
            "rightFist_shield": [
                "3,4"
            ],
            "left4-2_pairedEdges": [
                "3,6"
            ],
            "pairedEdges_right4-2": [
                "-3,0"
            ],
            "shield_leftFist": [
                "-3,-2"
            ],
            "rightFist_mushroom": [
                "-3,4"
            ],
            "3-1-2_parallelEdges": [
                "-3,6"
            ],
            "perpendicularEdges_4-1-1": [
                "6,0"
            ],
            "leftPawn_kite": [
                "6,-2"
            ],
            "square_leftFist": [
                "6,4"
            ],
            "3-2-1_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "kite_scallop": {
        "setup": "0,0 / 0,3 / 1,2 /",
        "relations": {
            "leftFist_leftFist": [
                "0,0"
            ],
            "4-1-1_perpendicularEdges": [
                "0,2",
                "6,4"
            ],
            "perpendicularEdges_4-1-1": [
                "0,-2",
                "6,-4"
            ],
            "left5-1_perpendicularEdges": [
                "0,4"
            ],
            "perpendicularEdges_left5-1": [
                "0,-4"
            ],
            "leftPawn_leftPawn": [
                "0,6"
            ],
            "shield_mushroom": [
                "3,0",
                "3,6"
            ],
            "right4-2_parallelEdges": [
                "3,2"
            ],
            "pairedEdges_left5-1": [
                "3,-2"
            ],
            "left4-2_parallelEdges": [
                "3,4"
            ],
            "pairedEdges_right5-1": [
                "3,-4"
            ],
            "mushroom_shield": [
                "-3,0",
                "-3,6"
            ],
            "left5-1_pairedEdges": [
                "-3,2"
            ],
            "parallelEdges_right4-2": [
                "-3,-2"
            ],
            "right5-1_pairedEdges": [
                "-3,4"
            ],
            "parallelEdges_left4-2": [
                "-3,-4"
            ],
            "rightPawn_rightPawn": [
                "6,0"
            ],
            "right5-1_perpendicularEdges": [
                "6,2"
            ],
            "perpendicularEdges_right5-1": [
                "6,-2"
            ],
            "rightFist_rightFist": [
                "6,6"
            ]
        }
    },
    "kite_barrel": {
        "setup": "0,0 / 0,3 / 0,3 /",
        "relations": {
            "leftFist_leftFist": [
                "0,0",
                "0,3"
            ],
            "rightPawn_rightFist": [
                "0,1"
            ],
            "rightFist_rightPawn": [
                "0,-1"
            ],
            "barrel_kite": [
                "3,0",
                "-3,3"
            ],
            "mushroom_shield": [
                "3,1",
                "3,-1"
            ],
            "kite_barrel": [
                "3,3",
                "-3,0"
            ],
            "shield_mushroom": [
                "-3,1",
                "-3,-1"
            ],
            "rightFist_rightFist": [
                "6,0",
                "6,3"
            ],
            "leftFist_leftPawn": [
                "6,1"
            ],
            "leftPawn_leftFist": [
                "6,-1"
            ]
        }
    },
    "kite_rightFist": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,-1 / 1,-4 /",
        "relations": {
            "square_leftPawn": [
                "0,0"
            ],
            "kite_rightFist": [
                "0,-1",
                "0,2",
                "3,5",
                "-3,-4",
                "6,0"
            ],
            "rightFist_square": [
                "0,-4",
                "0,5"
            ],
            "leftFist_kite": [
                "0,6",
                "3,2",
                "-3,-1",
                "6,-4",
                "6,5"
            ],
            "rightFist_mushroom": [
                "3,0"
            ],
            "leftFist_barrel": [
                "3,-1",
                "-3,2"
            ],
            "barrel_rightFist": [
                "3,-4",
                "-3,5"
            ],
            "shield_leftFist": [
                "3,6"
            ],
            "rightFist_shield": [
                "-3,0"
            ],
            "mushroom_leftFist": [
                "-3,6"
            ],
            "square_leftFist": [
                "6,-1",
                "6,2"
            ],
            "rightPawn_square": [
                "6,6"
            ]
        }
    },
    "kite_mushroom": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,-4 / -3,4 /",
        "relations": {
            "leftFist_rightPawn": [
                "0,0"
            ],
            "rightPawn_leftFist": [
                "0,1"
            ],
            "leftFist_rightFist": [
                "0,-5",
                "6,1"
            ],
            "rightFist_leftFist": [
                "0,6",
                "6,0"
            ],
            "barrel_shield": [
                "3,0",
                "3,-5"
            ],
            "mushroom_kite": [
                "3,1",
                "3,6"
            ],
            "kite_mushroom": [
                "-3,0",
                "-3,-5"
            ],
            "shield_barrel": [
                "-3,1",
                "-3,6"
            ],
            "rightFist_leftPawn": [
                "6,-5"
            ],
            "leftPawn_rightFist": [
                "6,6"
            ]
        }
    },
    "kite_leftFist": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / -2,1 / -1,4 /",
        "relations": {
            "square_rightPawn": [
                "0,0"
            ],
            "kite_leftFist": [
                "0,1",
                "0,-2",
                "3,4",
                "-3,-5",
                "6,0"
            ],
            "leftFist_square": [
                "0,4",
                "0,-5"
            ],
            "rightFist_kite": [
                "0,6",
                "3,1",
                "-3,-2",
                "6,4",
                "6,-5"
            ],
            "leftFist_shield": [
                "3,0"
            ],
            "rightFist_barrel": [
                "3,-2",
                "-3,1"
            ],
            "barrel_leftFist": [
                "3,-5",
                "-3,4"
            ],
            "mushroom_rightFist": [
                "3,6"
            ],
            "leftFist_mushroom": [
                "-3,0"
            ],
            "shield_rightFist": [
                "-3,6"
            ],
            "square_rightFist": [
                "6,1",
                "6,-2"
            ],
            "leftPawn_square": [
                "6,6"
            ]
        }
    },
    "kite_leftPawn": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 0,-1 /",
        "relations": {
            "perpendicularEdges_3-2-1": [
                "0,0"
            ],
            "leftFist_square": [
                "0,2"
            ],
            "kite_leftPawn": [
                "0,-4"
            ],
            "4-1-1_perpendicularEdges": [
                "0,6"
            ],
            "pairedEdges_left4-2": [
                "3,0"
            ],
            "shield_rightFist": [
                "3,2"
            ],
            "leftFist_mushroom": [
                "3,-4"
            ],
            "3-2-1_parallelEdges": [
                "3,6"
            ],
            "parallelEdges_3-1-2": [
                "-3,0"
            ],
            "mushroom_rightFist": [
                "-3,2"
            ],
            "leftFist_shield": [
                "-3,-4"
            ],
            "right4-2_pairedEdges": [
                "-3,6"
            ],
            "perpendicularEdges_4-1-1": [
                "6,0"
            ],
            "rightPawn_kite": [
                "6,2"
            ],
            "square_rightFist": [
                "6,-4"
            ],
            "3-1-2_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "kite_square": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,0 / 0,-2 / 4,-3 /",
        "relations": {
            "rightFist_leftFist": [
                "0,0",
                "6,0"
            ],
            "leftFist_rightFist": [
                "0,-1",
                "6,-1"
            ],
            "kite_square": [
                "3,0",
                "-3,-1"
            ],
            "square_kite": [
                "3,-1",
                "-3,0"
            ]
        }
    },
    "barrel_barrel": {
        "setup": "0,0 / 3,3 /",
        "relations": {
            "kite_kite": [
                "0,0",
                "3,3"
            ],
            "mushroom_mushroom": [
                "0,2",
                "0,-2",
                "1,3",
                "-1,3"
            ],
            "barrel_barrel": [
                "0,3",
                "1,-2",
                "-1,2",
                "3,0"
            ],
            "shield_shield": [
                "1,0",
                "-1,0",
                "3,2",
                "3,-2"
            ],
            "scallop_scallop": [
                "1,2",
                "-1,-2"
            ]
        }
    },
    "barrel_square": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 / 2,4 / 4,0 /",
        "relations": {
            "leftPawn_rightPawn": [
                "0,0"
            ],
            "rightFist_leftFist": [
                "0,-1",
                "1,0",
                "-2,0"
            ],
            "leftFist_rightFist": [
                "1,-1",
                "2,0",
                "-2,-1"
            ],
            "rightPawn_leftPawn": [
                "2,-1"
            ]
        }
    },
    "barrel_mushroom": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,0 / -3,4 /",
        "relations": {
            "kite_shield": [
                "0,0",
                "0,-5"
            ],
            "shield_kite": [
                "0,1",
                "0,6"
            ],
            "mushroom_barrel": [
                "2,0",
                "-2,-5",
                "3,1",
                "3,6"
            ],
            "scallop_mushroom": [
                "2,1",
                "-2,6"
            ],
            "mushroom_scallop": [
                "2,-5",
                "-2,0"
            ],
            "barrel_mushroom": [
                "2,6",
                "-2,1",
                "3,0",
                "3,-5"
            ]
        }
    },
    "barrel_shield": {
        "setup": "0,0 / 3,3 / 1,0 / 0,-2 / 2,0 /",
        "relations": {
            "pairedEdges_2-2-2": [
                "0,0"
            ],
            "shield_barrel": [
                "0,2",
                "0,-2",
                "2,4",
                "-2,-4"
            ],
            "barrel_shield": [
                "0,4",
                "0,-4",
                "2,-2",
                "-2,2"
            ],
            "2-2-2_pairedEdges": [
                "0,6"
            ],
            "pairedEdges_right4-2": [
                "2,0"
            ],
            "scallop_shield": [
                "2,2",
                "-2,-2"
            ],
            "shield_scallop": [
                "2,-4",
                "-2,4"
            ],
            "left4-2_pairedEdges": [
                "2,6"
            ],
            "pairedEdges_left4-2": [
                "-2,0"
            ],
            "right4-2_pairedEdges": [
                "-2,6"
            ],
            "parallelEdges_3-3": [
                "3,0"
            ],
            "mushroom_kite": [
                "3,2",
                "3,-2"
            ],
            "kite_mushroom": [
                "3,4",
                "3,-4"
            ],
            "3-3_parallelEdges": [
                "3,6"
            ]
        }
    },
    "barrel_scallop": {
        "setup": "0,0 / 3,3 / 0,2 / 0,-5 /",
        "relations": {
            "mushroom_mushroom": [
                "0,0",
                "0,6"
            ],
            "parallelEdges_right5-1": [
                "0,2"
            ],
            "right5-1_parallelEdges": [
                "0,-2"
            ],
            "parallelEdges_left5-1": [
                "0,4"
            ],
            "left5-1_parallelEdges": [
                "0,-4"
            ],
            "scallop_barrel": [
                "1,0",
                "-1,6"
            ],
            "pairedEdges_right4-2": [
                "1,2",
                "3,4"
            ],
            "6_pairedEdges": [
                "1,-2",
                "-1,-4"
            ],
            "pairedEdges_6": [
                "1,4",
                "-1,2"
            ],
            "left4-2_pairedEdges": [
                "1,-4",
                "3,-2"
            ],
            "barrel_scallop": [
                "1,6",
                "-1,0"
            ],
            "right4-2_pairedEdges": [
                "-1,-2",
                "3,-4"
            ],
            "pairedEdges_left4-2": [
                "-1,4",
                "3,2"
            ],
            "shield_shield": [
                "3,0",
                "3,6"
            ]
        }
    },
    "barrel_leftPawn": {
        "setup": "0,0 / 0,3 / 1,2 / 3,2 / 3,0 /",
        "relations": {
            "right4-2_parallelEdges": [
                "0,0"
            ],
            "leftFist_mushroom": [
                "0,2"
            ],
            "mushroom_rightFist": [
                "0,-4"
            ],
            "parallelEdges_left4-2": [
                "0,6"
            ],
            "right5-1_pairedEdges": [
                "1,0"
            ],
            "rightPawn_barrel": [
                "1,2"
            ],
            "barrel_leftPawn": [
                "1,-4"
            ],
            "pairedEdges_left5-1": [
                "1,6"
            ],
            "3-3_pairedEdges": [
                "-1,0"
            ],
            "rightFist_scallop": [
                "-1,2"
            ],
            "scallop_leftFist": [
                "-1,-4"
            ],
            "pairedEdges_3-3": [
                "-1,6"
            ],
            "3-2-1_pairedEdges": [
                "3,0"
            ],
            "leftFist_shield": [
                "3,2"
            ],
            "shield_rightFist": [
                "3,-4"
            ],
            "pairedEdges_3-1-2": [
                "3,6"
            ]
        }
    },
    "barrel_kite": {
        "setup": "0,0 / 0,3 / -3,6 /",
        "relations": {
            "leftFist_leftFist": [
                "0,0",
                "3,0"
            ],
            "kite_barrel": [
                "0,3",
                "3,-3"
            ],
            "barrel_kite": [
                "0,-3",
                "3,3"
            ],
            "rightFist_rightFist": [
                "0,6",
                "3,6"
            ],
            "rightFist_rightPawn": [
                "2,0"
            ],
            "mushroom_shield": [
                "2,3",
                "-2,3"
            ],
            "shield_mushroom": [
                "2,-3",
                "-2,-3"
            ],
            "leftPawn_leftFist": [
                "2,6"
            ],
            "rightPawn_rightFist": [
                "-2,0"
            ],
            "leftFist_leftPawn": [
                "-2,6"
            ]
        }
    },
    "barrel_rightFist": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 0,1 / 6,2 /",
        "relations": {
            "shield_leftPawn": [
                "0,0"
            ],
            "barrel_rightFist": [
                "0,-2",
                "-1,-3",
                "2,0"
            ],
            "rightPawn_mushroom": [
                "0,3"
            ],
            "mushroom_leftPawn": [
                "0,-3"
            ],
            "leftFist_barrel": [
                "0,4",
                "-1,3",
                "2,6"
            ],
            "rightPawn_shield": [
                "0,6"
            ],
            "kite_rightFist": [
                "-1,0",
                "2,-3"
            ],
            "mushroom_leftFist": [
                "-1,-2",
                "-2,-3"
            ],
            "rightFist_mushroom": [
                "-1,4",
                "-2,3"
            ],
            "leftFist_kite": [
                "-1,6",
                "2,3"
            ],
            "shield_leftFist": [
                "2,-2",
                "-2,0"
            ],
            "rightFist_shield": [
                "2,4",
                "-2,6"
            ],
            "scallop_rightPawn": [
                "-2,-2"
            ],
            "leftPawn_scallop": [
                "-2,4"
            ]
        }
    },
    "barrel_leftFist": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 2,1 / 6,2 /",
        "relations": {
            "scallop_leftPawn": [
                "0,0"
            ],
            "mushroom_rightFist": [
                "0,1",
                "-1,0"
            ],
            "shield_rightFist": [
                "0,-2",
                "2,0"
            ],
            "leftFist_shield": [
                "0,4",
                "2,6"
            ],
            "leftFist_mushroom": [
                "0,-5",
                "-1,6"
            ],
            "rightPawn_scallop": [
                "0,6"
            ],
            "barrel_leftFist": [
                "-1,1",
                "2,-2",
                "-2,0"
            ],
            "kite_leftFist": [
                "-1,-2",
                "2,1"
            ],
            "rightFist_kite": [
                "-1,4",
                "2,-5"
            ],
            "rightFist_barrel": [
                "-1,-5",
                "2,4",
                "-2,6"
            ],
            "mushroom_rightPawn": [
                "-2,1"
            ],
            "shield_rightPawn": [
                "-2,-2"
            ],
            "leftPawn_shield": [
                "-2,4"
            ],
            "leftPawn_mushroom": [
                "-2,-5"
            ]
        }
    },
    "barrel_rightPawn": {
        "setup": "0,0 / 0,3 / 1,2 / 3,4 / -3,0 /",
        "relations": {
            "left4-2_parallelEdges": [
                "0,0"
            ],
            "rightFist_mushroom": [
                "0,-2"
            ],
            "mushroom_leftFist": [
                "0,4"
            ],
            "parallelEdges_right4-2": [
                "0,6"
            ],
            "3-3_pairedEdges": [
                "1,0"
            ],
            "leftFist_scallop": [
                "1,-2"
            ],
            "scallop_rightFist": [
                "1,4"
            ],
            "pairedEdges_3-3": [
                "1,6"
            ],
            "left5-1_pairedEdges": [
                "-1,0"
            ],
            "leftPawn_barrel": [
                "-1,-2"
            ],
            "barrel_rightPawn": [
                "-1,4"
            ],
            "pairedEdges_right5-1": [
                "-1,6"
            ],
            "3-1-2_pairedEdges": [
                "3,0"
            ],
            "rightFist_shield": [
                "3,-2"
            ],
            "shield_leftFist": [
                "3,4"
            ],
            "pairedEdges_3-2-1": [
                "3,6"
            ]
        }
    },
    "scallop_scallop": {
        "setup": "0,0 / 3,3 / 1,2 /",
        "relations": {
            "barrel_barrel": [
                "0,0",
                "6,6"
            ],
            "left4-2_pairedEdges": [
                "0,2",
                "2,0"
            ],
            "pairedEdges_left4-2": [
                "0,-2",
                "-2,0"
            ],
            "6_pairedEdges": [
                "0,4",
                "2,6",
                "4,0",
                "6,2"
            ],
            "pairedEdges_6": [
                "0,-4",
                "-2,6",
                "-4,0",
                "6,-2"
            ],
            "scallop_scallop": [
                "0,6",
                "2,-2",
                "2,-4",
                "-2,2",
                "-2,4",
                "4,-2",
                "4,-4",
                "-4,2",
                "-4,4",
                "6,0"
            ],
            "4-4_star": [
                "2,2",
                "4,4"
            ],
            "8_star": [
                "2,4",
                "4,2"
            ],
            "star_4-4": [
                "-2,-2",
                "-4,-4"
            ],
            "star_8": [
                "-2,-4",
                "-4,-2"
            ],
            "right4-2_pairedEdges": [
                "4,6",
                "6,4"
            ],
            "pairedEdges_right4-2": [
                "-4,6",
                "6,-4"
            ]
        }
    },
    "scallop_mushroom": {
        "setup": "0,0 / 0,3 / 1,2 / 3,2 / -4,6 /",
        "relations": {
            "right4-2_parallelEdges": [
                "0,0"
            ],
            "right5-1_pairedEdges": [
                "0,1",
                "0,6"
            ],
            "6_parallelEdges": [
                "0,-5",
                "-2,0"
            ],
            "barrel_mushroom": [
                "2,0",
                "-4,-5"
            ],
            "mushroom_barrel": [
                "2,1",
                "-4,6"
            ],
            "scallop_mushroom": [
                "2,-5",
                "-4,0"
            ],
            "mushroom_scallop": [
                "2,6",
                "-4,1"
            ],
            "left5-1_pairedEdges": [
                "-2,1",
                "-2,6"
            ],
            "left4-2_parallelEdges": [
                "-2,-5"
            ],
            "pairedEdges_right5-1": [
                "4,0",
                "4,-5"
            ],
            "parallelEdges_right4-2": [
                "4,1"
            ],
            "parallelEdges_6": [
                "4,6",
                "6,1"
            ],
            "pairedEdges_left5-1": [
                "6,0",
                "6,-5"
            ],
            "parallelEdges_left4-2": [
                "6,6"
            ]
        }
    },
    "scallop_shield": {
        "setup": "0,0 / 0,3 / 1,-4 / 2,4 / 1,0 /",
        "relations": {
            "6-2_star": [
                "0,0",
                "2,0"
            ],
            "right4-2_pairedEdges": [
                "0,2",
                "0,-2",
                "2,4",
                "-2,0"
            ],
            "6_pairedEdges": [
                "0,4",
                "2,-4"
            ],
            "left4-2_pairedEdges": [
                "0,-4",
                "2,2",
                "2,-2",
                "4,0"
            ],
            "scallop_shield": [
                "0,6",
                "2,6",
                "-2,4",
                "4,-4"
            ],
            "shield_scallop": [
                "-2,2",
                "4,-2",
                "-4,0",
                "6,0"
            ],
            "shield_barrel": [
                "-2,-2",
                "4,2"
            ],
            "barrel_shield": [
                "-2,-4",
                "4,4"
            ],
            "pairedEdges_right4-2": [
                "-2,6",
                "-4,4",
                "-4,-4",
                "6,2"
            ],
            "pairedEdges_left4-2": [
                "4,6",
                "-4,-2",
                "6,4",
                "6,-4"
            ],
            "pairedEdges_6": [
                "-4,2",
                "6,-2"
            ],
            "star_6-2": [
                "-4,6",
                "6,6"
            ]
        }
    },
    "scallop_barrel": {
        "setup": "0,0 / 3,3 / 0,2 / 1,6 /",
        "relations": {
            "mushroom_mushroom": [
                "0,0",
                "6,0"
            ],
            "barrel_scallop": [
                "0,1",
                "6,-1"
            ],
            "scallop_barrel": [
                "0,-1",
                "6,1"
            ],
            "shield_shield": [
                "0,3",
                "6,3"
            ],
            "left5-1_parallelEdges": [
                "2,0"
            ],
            "left4-2_pairedEdges": [
                "2,1",
                "4,3"
            ],
            "6_pairedEdges": [
                "2,-1",
                "4,1"
            ],
            "right4-2_pairedEdges": [
                "2,3",
                "4,-1"
            ],
            "parallelEdges_left5-1": [
                "-2,0"
            ],
            "pairedEdges_6": [
                "-2,1",
                "-4,-1"
            ],
            "pairedEdges_left4-2": [
                "-2,-1",
                "-4,3"
            ],
            "pairedEdges_right4-2": [
                "-2,3",
                "-4,1"
            ],
            "right5-1_parallelEdges": [
                "4,0"
            ],
            "parallelEdges_right5-1": [
                "-4,0"
            ]
        }
    },
    "scallop_square": {
        "setup": "0,0 / 0,3 / 1,2 / 0,2 / -4,6 /",
        "relations": {
            "4-1-1_perpendicularEdges": [
                "0,0",
                "-2,1"
            ],
            "left5-1_perpendicularEdges": [
                "0,1"
            ],
            "rightFist_leftPawn": [
                "2,0"
            ],
            "leftPawn_rightFist": [
                "2,1"
            ],
            "right5-1_perpendicularEdges": [
                "-2,0"
            ],
            "perpendicularEdges_left5-1": [
                "4,0"
            ],
            "perpendicularEdges_4-1-1": [
                "4,1",
                "6,0"
            ],
            "rightPawn_leftFist": [
                "-4,0"
            ],
            "leftFist_rightPawn": [
                "-4,1"
            ],
            "perpendicularEdges_right5-1": [
                "6,1"
            ]
        }
    },
    "scallop_leftFist": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 / 3,4 /",
        "relations": {
            "left5-1_perpendicularEdges": [
                "0,0"
            ],
            "6_perpendicularEdges": [
                "0,-1"
            ],
            "4-1-1_pairedEdges": [
                "0,3",
                "2,5"
            ],
            "right4-2_perpendicularEdges": [
                "0,-3",
                "2,-1"
            ],
            "right5-1_pairedEdges": [
                "0,5"
            ],
            "4-1-1_parallelEdges": [
                "0,6"
            ],
            "right5-1_perpendicularEdges": [
                "2,0"
            ],
            "left5-1_pairedEdges": [
                "2,3"
            ],
            "left4-2_perpendicularEdges": [
                "2,-3"
            ],
            "left5-1_parallelEdges": [
                "2,6"
            ],
            "mushroom_rightPawn": [
                "-2,0"
            ],
            "scallop_leftFist": [
                "-2,-1"
            ],
            "leftFist_shield": [
                "-2,3"
            ],
            "shield_rightPawn": [
                "-2,-3"
            ],
            "rightPawn_barrel": [
                "-2,5"
            ],
            "leftFist_mushroom": [
                "-2,6"
            ],
            "mushroom_rightFist": [
                "4,0"
            ],
            "barrel_leftPawn": [
                "4,-1"
            ],
            "leftPawn_shield": [
                "4,3"
            ],
            "shield_rightFist": [
                "4,-3"
            ],
            "rightFist_scallop": [
                "4,5"
            ],
            "leftPawn_mushroom": [
                "4,6"
            ],
            "parallelEdges_right5-1": [
                "-4,0"
            ],
            "pairedEdges_4-1-1": [
                "-4,-1",
                "6,-3"
            ],
            "perpendicularEdges_right4-2": [
                "-4,3"
            ],
            "pairedEdges_right5-1": [
                "-4,-3"
            ],
            "perpendicularEdges_left4-2": [
                "-4,5",
                "6,3"
            ],
            "perpendicularEdges_left5-1": [
                "-4,6"
            ],
            "parallelEdges_4-1-1": [
                "6,0"
            ],
            "pairedEdges_left5-1": [
                "6,-1"
            ],
            "perpendicularEdges_6": [
                "6,5"
            ],
            "perpendicularEdges_right5-1": [
                "6,6"
            ]
        }
    },
    "scallop_kite": {
        "setup": "0,0 / 0,3 / -5,-4 /",
        "relations": {
            "leftFist_leftFist": [
                "0,0"
            ],
            "shield_mushroom": [
                "0,3",
                "6,3"
            ],
            "mushroom_shield": [
                "0,-3",
                "6,-3"
            ],
            "rightPawn_rightPawn": [
                "0,6"
            ],
            "4-1-1_perpendicularEdges": [
                "2,0",
                "4,6"
            ],
            "right4-2_parallelEdges": [
                "2,3"
            ],
            "left5-1_pairedEdges": [
                "2,-3"
            ],
            "right5-1_perpendicularEdges": [
                "2,6"
            ],
            "perpendicularEdges_4-1-1": [
                "-2,0",
                "-4,6"
            ],
            "pairedEdges_left5-1": [
                "-2,3"
            ],
            "parallelEdges_right4-2": [
                "-2,-3"
            ],
            "perpendicularEdges_right5-1": [
                "-2,6"
            ],
            "left5-1_perpendicularEdges": [
                "4,0"
            ],
            "left4-2_parallelEdges": [
                "4,3"
            ],
            "right5-1_pairedEdges": [
                "4,-3"
            ],
            "perpendicularEdges_left5-1": [
                "-4,0"
            ],
            "pairedEdges_right5-1": [
                "-4,3"
            ],
            "parallelEdges_left4-2": [
                "-4,-3"
            ],
            "leftPawn_leftPawn": [
                "6,0"
            ],
            "rightFist_rightFist": [
                "6,6"
            ]
        }
    },
    "scallop_leftPawn": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 2,1 /",
        "relations": {
            "pairedEdges_left5-1": [
                "0,0",
                "2,2"
            ],
            "scallop_leftPawn": [
                "0,2",
                "-2,0",
                "-4,0"
            ],
            "rightFist_barrel": [
                "0,-4"
            ],
            "3-3_pairedEdges": [
                "0,6"
            ],
            "star_7-1": [
                "2,0"
            ],
            "perpendicularEdges_right4-2": [
                "2,-4"
            ],
            "rightPawn_scallop": [
                "2,6",
                "4,6",
                "6,-4"
            ],
            "6_perpendicularEdges": [
                "-2,2"
            ],
            "4-1-1_pairedEdges": [
                "-2,-4"
            ],
            "5-3_star": [
                "-2,6"
            ],
            "star_5-3": [
                "4,0"
            ],
            "pairedEdges_4-1-1": [
                "4,2"
            ],
            "perpendicularEdges_6": [
                "4,-4"
            ],
            "left4-2_perpendicularEdges": [
                "-4,2"
            ],
            "right5-1_pairedEdges": [
                "-4,-4",
                "6,6"
            ],
            "7-1_star": [
                "-4,6"
            ],
            "pairedEdges_3-3": [
                "6,0"
            ],
            "barrel_leftFist": [
                "6,2"
            ]
        }
    },
    "scallop_rightPawn": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-4 / -2,-1 /",
        "relations": {
            "pairedEdges_right5-1": [
                "0,0",
                "-2,-2"
            ],
            "scallop_rightPawn": [
                "0,-2",
                "2,0",
                "4,0"
            ],
            "leftFist_barrel": [
                "0,4"
            ],
            "3-3_pairedEdges": [
                "0,6"
            ],
            "6_perpendicularEdges": [
                "2,-2"
            ],
            "4-1-1_pairedEdges": [
                "2,4"
            ],
            "5-3_star": [
                "2,6"
            ],
            "star_7-1": [
                "-2,0"
            ],
            "perpendicularEdges_left4-2": [
                "-2,4"
            ],
            "leftPawn_scallop": [
                "-2,6",
                "-4,6",
                "6,4"
            ],
            "right4-2_perpendicularEdges": [
                "4,-2"
            ],
            "left5-1_pairedEdges": [
                "4,4",
                "6,6"
            ],
            "7-1_star": [
                "4,6"
            ],
            "star_5-3": [
                "-4,0"
            ],
            "pairedEdges_4-1-1": [
                "-4,-2"
            ],
            "perpendicularEdges_6": [
                "-4,4"
            ],
            "pairedEdges_3-3": [
                "6,0"
            ],
            "barrel_rightFist": [
                "6,-2"
            ]
        }
    },
    "scallop_rightFist": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 / 3,6 /",
        "relations": {
            "left5-1_perpendicularEdges": [
                "0,0"
            ],
            "left4-2_perpendicularEdges": [
                "0,1",
                "2,3"
            ],
            "right4-2_perpendicularEdges": [
                "0,3"
            ],
            "right5-1_pairedEdges": [
                "0,-3"
            ],
            "4-1-1_pairedEdges": [
                "0,-5",
                "2,-3"
            ],
            "right5-1_parallelEdges": [
                "0,6"
            ],
            "right5-1_perpendicularEdges": [
                "2,0"
            ],
            "6_perpendicularEdges": [
                "2,1"
            ],
            "left5-1_pairedEdges": [
                "2,-5"
            ],
            "4-1-1_parallelEdges": [
                "2,6"
            ],
            "mushroom_leftFist": [
                "-2,0"
            ],
            "barrel_rightPawn": [
                "-2,1"
            ],
            "shield_leftFist": [
                "-2,3"
            ],
            "rightPawn_shield": [
                "-2,-3"
            ],
            "leftFist_scallop": [
                "-2,-5"
            ],
            "rightPawn_mushroom": [
                "-2,6"
            ],
            "mushroom_leftPawn": [
                "4,0"
            ],
            "scallop_rightFist": [
                "4,1"
            ],
            "shield_leftPawn": [
                "4,3"
            ],
            "rightFist_shield": [
                "4,-3"
            ],
            "leftPawn_barrel": [
                "4,-5"
            ],
            "rightFist_mushroom": [
                "4,6"
            ],
            "parallelEdges_4-1-1": [
                "-4,0"
            ],
            "pairedEdges_right5-1": [
                "-4,1"
            ],
            "pairedEdges_4-1-1": [
                "-4,3",
                "6,1"
            ],
            "perpendicularEdges_right4-2": [
                "-4,-3",
                "6,-5"
            ],
            "perpendicularEdges_6": [
                "-4,-5"
            ],
            "perpendicularEdges_left5-1": [
                "-4,6"
            ],
            "parallelEdges_left5-1": [
                "6,0"
            ],
            "pairedEdges_left5-1": [
                "6,3"
            ],
            "perpendicularEdges_left4-2": [
                "6,-3"
            ],
            "perpendicularEdges_right5-1": [
                "6,6"
            ]
        }
    },
    "star_4-4": {
        "setup": "0,0 / 3,3 / 1,0 / -2,-2 /",
        "relations": {
            "shield_shield": [
                "0,0"
            ],
            "leftPawn_rightPawn": [
                "0,1"
            ],
            "rightPawn_leftPawn": [
                "0,-1"
            ],
            "scallop_scallop": [
                "0,2",
                "0,-2"
            ]
        }
    },
    "star_6-2": {
        "setup": "0,0 / 0,3 / 1,-4 / -4,-2 /",
        "relations": {
            "leftPawn_leftPawn": [
                "0,0"
            ],
            "scallop_shield": [
                "0,1",
                "0,5"
            ],
            "shield_scallop": [
                "0,-1",
                "0,-5"
            ],
            "6_pairedEdges": [
                "0,3"
            ],
            "pairedEdges_6": [
                "0,-3"
            ],
            "rightPawn_rightPawn": [
                "0,6"
            ]
        }
    },
    "star_8": {
        "setup": "0,0 / 3,3 / 1,2 / -2,-4 /",
        "relations": {
            "scallop_scallop": [
                "0,0",
                "0,6"
            ],
            "pairedEdges_6": [
                "0,2",
                "0,4"
            ],
            "6_pairedEdges": [
                "0,-2",
                "0,-4"
            ],
            "parallelEdges_6": [
                "0,3"
            ],
            "6_parallelEdges": [
                "0,-3"
            ]
        }
    },
    "star_5-3": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 0,1 / 4,0 /",
        "relations": {
            "shield_leftPawn": [
                "0,0"
            ],
            "leftPawn_shield": [
                "0,1"
            ],
            "rightPawn_scallop": [
                "0,-1"
            ],
            "scallop_rightPawn": [
                "0,2"
            ],
            "leftPawn_scallop": [
                "0,-4"
            ],
            "scallop_leftPawn": [
                "0,5"
            ],
            "shield_rightPawn": [
                "0,-5"
            ],
            "rightPawn_shield": [
                "0,6"
            ]
        }
    },
    "star_7-1": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 2,1 / 2,0 /",
        "relations": {
            "scallop_leftPawn": [
                "0,0"
            ],
            "leftPawn_scallop": [
                "0,-1"
            ],
            "6_perpendicularEdges": [
                "0,2",
                "0,3"
            ],
            "perpendicularEdges_6": [
                "0,-3",
                "0,-4"
            ],
            "scallop_rightPawn": [
                "0,5"
            ],
            "rightPawn_scallop": [
                "0,6"
            ]
        }
    },
    "4-4_star": {
        "setup": "0,0 / 3,3 / 1,0 / 4,4 /",
        "relations": {
            "shield_shield": [
                "0,0"
            ],
            "leftPawn_rightPawn": [
                "1,0"
            ],
            "rightPawn_leftPawn": [
                "-1,0"
            ],
            "scallop_scallop": [
                "2,0",
                "-2,0"
            ]
        }
    },
    "rightPawn_rightPawn": {
        "setup": "0,0 / 0,3 / -5,2 /",
        "relations": {
            "leftFist_leftFist": [
                "0,0"
            ],
            "3-3_perpendicularEdges": [
                "0,2",
                "4,6"
            ],
            "pairedEdges_4-1-1": [
                "0,-4",
                "-2,6"
            ],
            "scallop_kite": [
                "0,6"
            ],
            "perpendicularEdges_3-3": [
                "-2,0",
                "6,-4"
            ],
            "leftPawn_leftPawn": [
                "-2,2"
            ],
            "star_6-2": [
                "-2,-4"
            ],
            "4-1-1_pairedEdges": [
                "4,0",
                "6,2"
            ],
            "6-2_star": [
                "4,2"
            ],
            "rightPawn_rightPawn": [
                "4,-4"
            ],
            "kite_scallop": [
                "6,0"
            ],
            "rightFist_rightFist": [
                "6,6"
            ]
        }
    },
    "rightPawn_rightFist": {
        "setup": "0,0 / 0,3 / 0,2 / 0,1 /",
        "relations": {
            "square_mushroom": [
                "0,0"
            ],
            "kite_barrel": [
                "0,1"
            ],
            "square_shield": [
                "0,3"
            ],
            "leftFist_leftPawn": [
                "0,-3",
                "0,6",
                "6,1"
            ],
            "rightPawn_rightFist": [
                "0,-5",
                "6,0",
                "6,3"
            ],
            "3-1-2_parallelEdges": [
                "-2,0"
            ],
            "4-1-1_pairedEdges": [
                "-2,1"
            ],
            "3-1-2_pairedEdges": [
                "-2,3"
            ],
            "3-2-1_perpendicularEdges": [
                "-2,-3"
            ],
            "right5-1_perpendicularEdges": [
                "-2,-5"
            ],
            "right4-2_perpendicularEdges": [
                "-2,6"
            ],
            "perpendicularEdges_left4-2": [
                "4,0"
            ],
            "perpendicularEdges_left5-1": [
                "4,1"
            ],
            "perpendicularEdges_3-1-2": [
                "4,3"
            ],
            "pairedEdges_3-2-1": [
                "4,-3"
            ],
            "pairedEdges_4-1-1": [
                "4,-5"
            ],
            "parallelEdges_3-2-1": [
                "4,6"
            ],
            "shield_square": [
                "6,-3"
            ],
            "barrel_kite": [
                "6,-5"
            ],
            "mushroom_square": [
                "6,6"
            ]
        }
    },
    "rightPawn_kite": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 6,5 /",
        "relations": {
            "perpendicularEdges_3-2-1": [
                "0,0"
            ],
            "pairedEdges_left4-2": [
                "0,3"
            ],
            "parallelEdges_3-1-2": [
                "0,-3"
            ],
            "perpendicularEdges_4-1-1": [
                "0,6"
            ],
            "leftFist_square": [
                "2,0"
            ],
            "shield_rightFist": [
                "2,3"
            ],
            "mushroom_rightFist": [
                "2,-3"
            ],
            "rightPawn_kite": [
                "2,6"
            ],
            "kite_leftPawn": [
                "-4,0"
            ],
            "leftFist_mushroom": [
                "-4,3"
            ],
            "leftFist_shield": [
                "-4,-3"
            ],
            "square_rightFist": [
                "-4,6"
            ],
            "4-1-1_perpendicularEdges": [
                "6,0"
            ],
            "3-2-1_parallelEdges": [
                "6,3"
            ],
            "right4-2_pairedEdges": [
                "6,-3"
            ],
            "3-1-2_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "rightPawn_leftPawn": {
        "setup": "0,0 / 0,3 / 1,2 / 0,-4 / 2,4 /",
        "relations": {
            "perpendicularEdges_left5-1": [
                "0,0",
                "4,-4"
            ],
            "rightPawn_leftPawn": [
                "0,2",
                "-2,0",
                "4,6",
                "6,-4"
            ],
            "square_barrel": [
                "0,-4"
            ],
            "3-1-2_pairedEdges": [
                "0,6",
                "-2,-4"
            ],
            "right5-1_perpendicularEdges": [
                "-2,2",
                "6,6"
            ],
            "4-4_star": [
                "-2,6"
            ],
            "star_4-4": [
                "4,0"
            ],
            "pairedEdges_3-2-1": [
                "4,2",
                "6,0"
            ],
            "barrel_square": [
                "6,2"
            ]
        }
    },
    "rightPawn_mushroom": {
        "setup": "0,0 / 3,3 / 1,0 / 0,4 / 5,4 /",
        "relations": {
            "right4-2_pairedEdges": [
                "0,0",
                "0,5"
            ],
            "3-3_parallelEdges": [
                "0,-1"
            ],
            "right5-1_parallelEdges": [
                "0,6"
            ],
            "leftFist_barrel": [
                "2,0"
            ],
            "rightFist_mushroom": [
                "2,-1"
            ],
            "leftFist_scallop": [
                "2,5"
            ],
            "rightPawn_mushroom": [
                "2,6"
            ],
            "mushroom_leftPawn": [
                "-4,0"
            ],
            "scallop_rightFist": [
                "-4,-1"
            ],
            "mushroom_leftFist": [
                "-4,5"
            ],
            "barrel_rightFist": [
                "-4,6"
            ],
            "parallelEdges_left5-1": [
                "6,0"
            ],
            "pairedEdges_left4-2": [
                "6,-1",
                "6,6"
            ],
            "parallelEdges_3-3": [
                "6,5"
            ]
        }
    },
    "rightPawn_leftFist": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / 4,-2 /",
        "relations": {
            "perpendicularEdges_3-1-2": [
                "0,0"
            ],
            "perpendicularEdges_3-3": [
                "0,2"
            ],
            "perpendicularEdges_left4-2": [
                "0,3"
            ],
            "parallelEdges_4-1-1": [
                "0,-3"
            ],
            "pairedEdges_3-2-1": [
                "0,-4"
            ],
            "pairedEdges_4-1-1": [
                "0,6"
            ],
            "leftFist_rightFist": [
                "2,0",
                "2,3",
                "-4,-3",
                "-4,6"
            ],
            "rightPawn_leftFist": [
                "2,2"
            ],
            "mushroom_kite": [
                "2,-3"
            ],
            "scallop_square": [
                "2,-4"
            ],
            "shield_kite": [
                "2,6"
            ],
            "kite_shield": [
                "-4,0"
            ],
            "square_scallop": [
                "-4,2"
            ],
            "kite_mushroom": [
                "-4,3"
            ],
            "rightFist_leftPawn": [
                "-4,-4"
            ],
            "4-1-1_pairedEdges": [
                "6,0"
            ],
            "3-1-2_pairedEdges": [
                "6,2"
            ],
            "4-1-1_parallelEdges": [
                "6,3"
            ],
            "right4-2_perpendicularEdges": [
                "6,-3"
            ],
            "3-3_perpendicularEdges": [
                "6,-4"
            ],
            "3-2-1_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "rightPawn_shield": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 6,-5 /",
        "relations": {
            "pairedEdges_left5-1": [
                "0,0"
            ],
            "pairedEdges_3-1-2": [
                "0,2",
                "0,6",
                "2,4"
            ],
            "shield_leftPawn": [
                "0,-2",
                "2,0"
            ],
            "star_5-3": [
                "0,4"
            ],
            "pairedEdges_3-3": [
                "0,-4"
            ],
            "scallop_rightFist": [
                "2,2"
            ],
            "right4-2_perpendicularEdges": [
                "2,-2"
            ],
            "shield_leftFist": [
                "2,-4"
            ],
            "barrel_rightFist": [
                "2,6"
            ],
            "leftFist_barrel": [
                "-4,0"
            ],
            "rightFist_shield": [
                "-4,2"
            ],
            "3-2-1_pairedEdges": [
                "-4,-2",
                "6,0",
                "6,-4"
            ],
            "perpendicularEdges_left4-2": [
                "-4,4"
            ],
            "leftFist_scallop": [
                "-4,-4"
            ],
            "rightPawn_shield": [
                "-4,6",
                "6,4"
            ],
            "3-3_pairedEdges": [
                "6,2"
            ],
            "5-3_star": [
                "6,-2"
            ],
            "right5-1_pairedEdges": [
                "6,6"
            ]
        }
    },
    "rightPawn_scallop": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / -2,-3 /",
        "relations": {
            "pairedEdges_left5-1": [
                "0,0",
                "-2,-2"
            ],
            "pairedEdges_4-1-1": [
                "0,2"
            ],
            "scallop_leftPawn": [
                "0,-2",
                "-2,-4",
                "-2,6"
            ],
            "barrel_leftFist": [
                "0,4"
            ],
            "6_perpendicularEdges": [
                "0,-4"
            ],
            "left4-2_perpendicularEdges": [
                "0,6"
            ],
            "star_7-1": [
                "-2,0"
            ],
            "star_5-3": [
                "-2,2"
            ],
            "pairedEdges_3-3": [
                "-2,4"
            ],
            "rightPawn_scallop": [
                "4,0",
                "4,2",
                "6,4"
            ],
            "3-3_pairedEdges": [
                "4,-2"
            ],
            "right5-1_pairedEdges": [
                "4,4",
                "6,6"
            ],
            "5-3_star": [
                "4,-4"
            ],
            "7-1_star": [
                "4,6"
            ],
            "perpendicularEdges_right4-2": [
                "6,0"
            ],
            "perpendicularEdges_6": [
                "6,2"
            ],
            "rightFist_barrel": [
                "6,-2"
            ],
            "4-1-1_pairedEdges": [
                "6,-4"
            ]
        }
    },
    "rightPawn_barrel": {
        "setup": "0,0 / 0,3 / 1,2 / 3,2 / -3,6 /",
        "relations": {
            "right4-2_parallelEdges": [
                "0,0"
            ],
            "right5-1_pairedEdges": [
                "0,1"
            ],
            "3-3_pairedEdges": [
                "0,-1"
            ],
            "3-2-1_pairedEdges": [
                "0,3"
            ],
            "leftFist_mushroom": [
                "2,0"
            ],
            "rightPawn_barrel": [
                "2,1"
            ],
            "rightFist_scallop": [
                "2,-1"
            ],
            "leftFist_shield": [
                "2,3"
            ],
            "mushroom_rightFist": [
                "-4,0"
            ],
            "barrel_leftPawn": [
                "-4,1"
            ],
            "scallop_leftFist": [
                "-4,-1"
            ],
            "shield_rightFist": [
                "-4,3"
            ],
            "parallelEdges_left4-2": [
                "6,0"
            ],
            "pairedEdges_left5-1": [
                "6,1"
            ],
            "pairedEdges_3-3": [
                "6,-1"
            ],
            "pairedEdges_3-1-2": [
                "6,3"
            ]
        }
    },
    "rightPawn_square": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / -4,5 /",
        "relations": {
            "perpendicularEdges_3-2-1": [
                "0,0"
            ],
            "perpendicularEdges_4-1-1": [
                "0,1"
            ],
            "rightPawn_square": [
                "2,0"
            ],
            "leftFist_kite": [
                "2,1"
            ],
            "square_leftPawn": [
                "-4,0"
            ],
            "kite_rightFist": [
                "-4,1"
            ],
            "3-1-2_perpendicularEdges": [
                "6,0"
            ],
            "4-1-1_perpendicularEdges": [
                "6,1"
            ]
        }
    },
    "rightFist_rightFist": {
        "setup": "0,0 / 3,6 /",
        "relations": {
            "kite_kite": [
                "0,0",
                "3,3",
                "-3,-3",
                "6,6"
            ],
            "mushroom_square": [
                "0,-2",
                "-1,-3"
            ],
            "leftFist_leftFist": [
                "0,3",
                "0,6",
                "3,-2",
                "-3,3",
                "-3,6",
                "5,0",
                "5,-3",
                "6,-2"
            ],
            "barrel_kite": [
                "0,-3",
                "-3,0"
            ],
            "rightFist_rightFist": [
                "0,4",
                "-1,3",
                "-1,6",
                "3,0",
                "3,-3",
                "-3,4",
                "6,0",
                "6,-3"
            ],
            "shield_square": [
                "-1,0",
                "-3,-2"
            ],
            "scallop_kite": [
                "-1,-2"
            ],
            "leftPawn_leftPawn": [
                "-1,4"
            ],
            "square_shield": [
                "3,4",
                "5,6"
            ],
            "kite_barrel": [
                "3,6",
                "6,3"
            ],
            "rightPawn_rightPawn": [
                "5,-2"
            ],
            "square_mushroom": [
                "5,3",
                "6,4"
            ],
            "kite_scallop": [
                "5,4"
            ]
        }
    },
    "rightFist_rightPawn": {
        "setup": "0,0 / 0,3 / 0,2 / 1,0 /",
        "relations": {
            "square_mushroom": [
                "0,0"
            ],
            "3-2-1_parallelEdges": [
                "0,2"
            ],
            "perpendicularEdges_right4-2": [
                "0,-4"
            ],
            "leftPawn_leftFist": [
                "0,6",
                "-3,6",
                "5,0"
            ],
            "kite_barrel": [
                "-1,0"
            ],
            "4-1-1_pairedEdges": [
                "-1,2"
            ],
            "perpendicularEdges_right5-1": [
                "-1,-4"
            ],
            "rightFist_rightPawn": [
                "-1,6",
                "3,0",
                "6,0"
            ],
            "3-1-2_perpendicularEdges": [
                "3,2"
            ],
            "pairedEdges_3-1-2": [
                "3,-4"
            ],
            "shield_square": [
                "3,6"
            ],
            "square_shield": [
                "-3,0"
            ],
            "3-2-1_pairedEdges": [
                "-3,2"
            ],
            "perpendicularEdges_3-2-1": [
                "-3,-4"
            ],
            "left5-1_perpendicularEdges": [
                "5,2"
            ],
            "pairedEdges_4-1-1": [
                "5,-4"
            ],
            "barrel_kite": [
                "5,6"
            ],
            "left4-2_perpendicularEdges": [
                "6,2"
            ],
            "parallelEdges_3-1-2": [
                "6,-4"
            ],
            "mushroom_square": [
                "6,6"
            ]
        }
    },
    "rightFist_leftFist": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,0 / 0,-2 /",
        "relations": {
            "kite_shield": [
                "0,0",
                "-2,2"
            ],
            "square_barrel": [
                "0,2",
                "1,3",
                "-2,0"
            ],
            "kite_mushroom": [
                "0,3",
                "1,2"
            ],
            "leftFist_rightPawn": [
                "0,-3",
                "0,6",
                "4,2",
                "-5,2"
            ],
            "rightFist_leftFist": [
                "0,-4",
                "1,-3",
                "1,6",
                "-2,-3",
                "-2,6",
                "4,0",
                "4,3",
                "-5,0",
                "-5,3",
                "6,2"
            ],
            "square_kite": [
                "1,0",
                "-2,3"
            ],
            "leftPawn_rightFist": [
                "1,-4",
                "-2,-4",
                "6,0",
                "6,3"
            ],
            "kite_square": [
                "4,-3",
                "-5,6"
            ],
            "shield_kite": [
                "4,-4",
                "6,6"
            ],
            "barrel_square": [
                "4,6",
                "-5,-3",
                "6,-4"
            ],
            "mushroom_kite": [
                "-5,-4",
                "6,-3"
            ]
        }
    },
    "rightFist_leftPawn": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / -2,4 /",
        "relations": {
            "perpendicularEdges_3-1-2": [
                "0,0"
            ],
            "leftFist_rightFist": [
                "0,2",
                "3,2",
                "-3,-4",
                "6,-4"
            ],
            "kite_shield": [
                "0,-4"
            ],
            "4-1-1_pairedEdges": [
                "0,6"
            ],
            "perpendicularEdges_3-3": [
                "2,0"
            ],
            "rightPawn_leftFist": [
                "2,2"
            ],
            "square_scallop": [
                "2,-4"
            ],
            "3-1-2_pairedEdges": [
                "2,6"
            ],
            "perpendicularEdges_left4-2": [
                "3,0"
            ],
            "kite_mushroom": [
                "3,-4"
            ],
            "4-1-1_parallelEdges": [
                "3,6"
            ],
            "parallelEdges_4-1-1": [
                "-3,0"
            ],
            "mushroom_kite": [
                "-3,2"
            ],
            "right4-2_perpendicularEdges": [
                "-3,6"
            ],
            "pairedEdges_3-2-1": [
                "-4,0"
            ],
            "scallop_square": [
                "-4,2"
            ],
            "rightFist_leftPawn": [
                "-4,-4"
            ],
            "3-3_perpendicularEdges": [
                "-4,6"
            ],
            "pairedEdges_4-1-1": [
                "6,0"
            ],
            "shield_kite": [
                "6,2"
            ],
            "3-2-1_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "rightFist_kite": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / -2,1 / -1,-2 /",
        "relations": {
            "square_rightPawn": [
                "0,0"
            ],
            "leftFist_shield": [
                "0,3"
            ],
            "leftFist_mushroom": [
                "0,-3"
            ],
            "kite_leftFist": [
                "0,6",
                "1,0",
                "-2,0",
                "4,3",
                "-5,-3"
            ],
            "rightFist_kite": [
                "1,3",
                "-2,-3",
                "4,6",
                "-5,6",
                "6,0"
            ],
            "rightFist_barrel": [
                "1,-3",
                "-2,3"
            ],
            "square_rightFist": [
                "1,6",
                "-2,6"
            ],
            "leftFist_square": [
                "4,0",
                "-5,0"
            ],
            "barrel_leftFist": [
                "4,-3",
                "-5,3"
            ],
            "mushroom_rightFist": [
                "6,3"
            ],
            "shield_rightFist": [
                "6,-3"
            ],
            "leftPawn_square": [
                "6,6"
            ]
        }
    },
    "rightFist_barrel": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 2,1 / 0,-4 /",
        "relations": {
            "scallop_leftPawn": [
                "0,0"
            ],
            "mushroom_rightFist": [
                "0,-1",
                "1,0"
            ],
            "shield_rightFist": [
                "0,2",
                "-2,0"
            ],
            "barrel_leftFist": [
                "0,-2",
                "1,-1",
                "-2,2"
            ],
            "kite_leftFist": [
                "1,2",
                "-2,-1"
            ],
            "mushroom_rightPawn": [
                "1,-2"
            ],
            "shield_rightPawn": [
                "-2,-2"
            ],
            "leftFist_shield": [
                "4,0",
                "6,2"
            ],
            "rightFist_kite": [
                "4,-1",
                "-5,2"
            ],
            "rightFist_barrel": [
                "4,2",
                "-5,-1",
                "6,-2"
            ],
            "leftPawn_shield": [
                "4,-2"
            ],
            "leftFist_mushroom": [
                "-5,0",
                "6,-1"
            ],
            "leftPawn_mushroom": [
                "-5,-2"
            ],
            "rightPawn_scallop": [
                "6,0"
            ]
        }
    },
    "rightFist_shield": {
        "setup": "0,0 / 0,3 / 1,-4 / 0,-2 / 0,1 /",
        "relations": {
            "perpendicularEdges_3-3": [
                "0,0"
            ],
            "leftFist_kite": [
                "0,2"
            ],
            "leftPawn_kite": [
                "0,-2"
            ],
            "rightFist_mushroom": [
                "0,4",
                "0,-4"
            ],
            "3-1-2_parallelEdges": [
                "0,6"
            ],
            "perpendicularEdges_right4-2": [
                "-1,0"
            ],
            "rightPawn_shield": [
                "-1,2"
            ],
            "rightFist_shield": [
                "-1,-2",
                "-3,4",
                "-3,-4"
            ],
            "leftFist_barrel": [
                "-1,4",
                "-3,2"
            ],
            "leftFist_scallop": [
                "-1,-4"
            ],
            "3-2-1_pairedEdges": [
                "-1,6"
            ],
            "pairedEdges_3-2-1": [
                "3,0"
            ],
            "shield_leftFist": [
                "3,2",
                "3,-2",
                "5,4"
            ],
            "barrel_rightPawn": [
                "3,4"
            ],
            "barrel_rightFist": [
                "3,-4",
                "5,-2"
            ],
            "2-2-2_perpendicularEdges": [
                "3,6"
            ],
            "perpendicularEdges_2-2-2": [
                "-3,0"
            ],
            "leftPawn_barrel": [
                "-3,-2"
            ],
            "3-1-2_pairedEdges": [
                "-3,6"
            ],
            "pairedEdges_3-1-2": [
                "5,0"
            ],
            "scallop_rightFist": [
                "5,2"
            ],
            "shield_leftPawn": [
                "5,-4"
            ],
            "left4-2_perpendicularEdges": [
                "5,6"
            ],
            "parallelEdges_3-2-1": [
                "6,0"
            ],
            "mushroom_leftFist": [
                "6,2",
                "6,-2"
            ],
            "kite_rightPawn": [
                "6,4"
            ],
            "kite_rightFist": [
                "6,-4"
            ],
            "3-3_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "rightFist_mushroom": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / 0,1 / -3,4 /",
        "relations": {
            "kite_rightPawn": [
                "0,0"
            ],
            "shield_leftFist": [
                "0,1",
                "0,6"
            ],
            "kite_rightFist": [
                "0,-5"
            ],
            "mushroom_leftFist": [
                "2,0",
                "3,1",
                "3,6"
            ],
            "scallop_rightFist": [
                "2,1"
            ],
            "mushroom_leftPawn": [
                "2,-5"
            ],
            "barrel_rightFist": [
                "2,6",
                "3,-5"
            ],
            "barrel_rightPawn": [
                "3,0"
            ],
            "rightFist_mushroom": [
                "-3,0",
                "-3,-5",
                "-4,6"
            ],
            "leftFist_barrel": [
                "-3,1",
                "-4,0"
            ],
            "leftPawn_barrel": [
                "-3,6"
            ],
            "rightPawn_mushroom": [
                "-4,1"
            ],
            "leftFist_scallop": [
                "-4,-5"
            ],
            "rightFist_shield": [
                "6,0",
                "6,-5"
            ],
            "leftFist_kite": [
                "6,1"
            ],
            "leftPawn_kite": [
                "6,6"
            ]
        }
    },
    "rightFist_scallop": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 / -3,-2 /",
        "relations": {
            "left5-1_perpendicularEdges": [
                "0,0"
            ],
            "right5-1_perpendicularEdges": [
                "0,2"
            ],
            "mushroom_rightPawn": [
                "0,-2"
            ],
            "mushroom_rightFist": [
                "0,4"
            ],
            "parallelEdges_right5-1": [
                "0,-4"
            ],
            "parallelEdges_4-1-1": [
                "0,6"
            ],
            "6_perpendicularEdges": [
                "-1,0"
            ],
            "right4-2_perpendicularEdges": [
                "-1,2",
                "-3,0"
            ],
            "scallop_leftFist": [
                "-1,-2"
            ],
            "barrel_leftPawn": [
                "-1,4"
            ],
            "pairedEdges_4-1-1": [
                "-1,-4",
                "-3,6"
            ],
            "pairedEdges_left5-1": [
                "-1,6"
            ],
            "4-1-1_pairedEdges": [
                "3,0",
                "5,2"
            ],
            "left5-1_pairedEdges": [
                "3,2"
            ],
            "leftFist_shield": [
                "3,-2"
            ],
            "leftPawn_shield": [
                "3,4"
            ],
            "perpendicularEdges_right4-2": [
                "3,-4"
            ],
            "perpendicularEdges_left4-2": [
                "3,6",
                "5,-4"
            ],
            "left4-2_perpendicularEdges": [
                "-3,2"
            ],
            "shield_rightPawn": [
                "-3,-2"
            ],
            "shield_rightFist": [
                "-3,4"
            ],
            "pairedEdges_right5-1": [
                "-3,-4"
            ],
            "right5-1_pairedEdges": [
                "5,0"
            ],
            "rightPawn_barrel": [
                "5,-2"
            ],
            "rightFist_scallop": [
                "5,4"
            ],
            "perpendicularEdges_6": [
                "5,6"
            ],
            "4-1-1_parallelEdges": [
                "6,0"
            ],
            "left5-1_parallelEdges": [
                "6,2"
            ],
            "leftFist_mushroom": [
                "6,-2"
            ],
            "leftPawn_mushroom": [
                "6,4"
            ],
            "perpendicularEdges_left5-1": [
                "6,-4"
            ],
            "perpendicularEdges_right5-1": [
                "6,6"
            ]
        }
    },
    "rightFist_square": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / 0,1 / 0,-2 /",
        "relations": {
            "kite_rightPawn": [
                "0,0"
            ],
            "square_leftFist": [
                "0,-1",
                "1,0",
                "-2,0"
            ],
            "kite_rightFist": [
                "1,-1",
                "-2,-1"
            ],
            "rightFist_square": [
                "4,0",
                "-5,0",
                "6,-1"
            ],
            "leftFist_kite": [
                "4,-1",
                "-5,-1"
            ],
            "leftPawn_kite": [
                "6,0"
            ]
        }
    },
    "leftFist_leftFist": {
        "setup": "0,0 / 0,3 /",
        "relations": {
            "kite_kite": [
                "0,0",
                "3,3",
                "-3,-3",
                "6,6"
            ],
            "square_mushroom": [
                "0,2",
                "1,3"
            ],
            "kite_barrel": [
                "0,3",
                "3,0"
            ],
            "leftFist_leftFist": [
                "0,-3",
                "0,6",
                "3,-3",
                "3,6",
                "-3,2",
                "-5,0",
                "-5,3",
                "6,2"
            ],
            "rightFist_rightFist": [
                "0,-4",
                "1,-3",
                "1,6",
                "3,-4",
                "-3,0",
                "-3,3",
                "6,0",
                "6,3"
            ],
            "square_shield": [
                "1,0",
                "3,2"
            ],
            "kite_scallop": [
                "1,2"
            ],
            "leftPawn_leftPawn": [
                "1,-4"
            ],
            "shield_square": [
                "-3,-4",
                "-5,6"
            ],
            "barrel_kite": [
                "-3,6",
                "6,-3"
            ],
            "rightPawn_rightPawn": [
                "-5,2"
            ],
            "mushroom_square": [
                "-5,-3",
                "6,-4"
            ],
            "scallop_kite": [
                "-5,-4"
            ]
        }
    },
    "leftFist_shield": {
        "setup": "0,0 / 0,3 / 1,-4 / 0,-2 / 2,1 /",
        "relations": {
            "perpendicularEdges_3-3": [
                "0,0"
            ],
            "rightPawn_kite": [
                "0,2"
            ],
            "rightFist_kite": [
                "0,-2"
            ],
            "leftFist_mushroom": [
                "0,4",
                "0,-4"
            ],
            "3-2-1_parallelEdges": [
                "0,6"
            ],
            "perpendicularEdges_left4-2": [
                "1,0"
            ],
            "leftFist_shield": [
                "1,2",
                "3,4",
                "3,-4"
            ],
            "leftPawn_shield": [
                "1,-2"
            ],
            "rightFist_scallop": [
                "1,4"
            ],
            "rightFist_barrel": [
                "1,-4",
                "3,-2"
            ],
            "3-1-2_pairedEdges": [
                "1,6"
            ],
            "perpendicularEdges_2-2-2": [
                "3,0"
            ],
            "rightPawn_barrel": [
                "3,2"
            ],
            "3-2-1_pairedEdges": [
                "3,6"
            ],
            "pairedEdges_3-1-2": [
                "-3,0"
            ],
            "shield_rightFist": [
                "-3,2",
                "-3,-2",
                "-5,-4"
            ],
            "barrel_leftFist": [
                "-3,4",
                "-5,2"
            ],
            "barrel_leftPawn": [
                "-3,-4"
            ],
            "2-2-2_perpendicularEdges": [
                "-3,6"
            ],
            "pairedEdges_3-2-1": [
                "-5,0"
            ],
            "scallop_leftFist": [
                "-5,-2"
            ],
            "shield_rightPawn": [
                "-5,4"
            ],
            "right4-2_perpendicularEdges": [
                "-5,6"
            ],
            "parallelEdges_3-1-2": [
                "6,0"
            ],
            "mushroom_rightFist": [
                "6,2",
                "6,-2"
            ],
            "kite_leftFist": [
                "6,4"
            ],
            "kite_leftPawn": [
                "6,-4"
            ],
            "3-3_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "leftFist_scallop": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 / -3,0 /",
        "relations": {
            "left5-1_perpendicularEdges": [
                "0,0"
            ],
            "right5-1_perpendicularEdges": [
                "0,2"
            ],
            "mushroom_leftFist": [
                "0,-2"
            ],
            "mushroom_leftPawn": [
                "0,4"
            ],
            "parallelEdges_4-1-1": [
                "0,-4"
            ],
            "parallelEdges_left5-1": [
                "0,6"
            ],
            "left4-2_perpendicularEdges": [
                "1,0",
                "3,2"
            ],
            "6_perpendicularEdges": [
                "1,2"
            ],
            "barrel_rightPawn": [
                "1,-2"
            ],
            "scallop_rightFist": [
                "1,4"
            ],
            "pairedEdges_right5-1": [
                "1,-4"
            ],
            "pairedEdges_4-1-1": [
                "1,6",
                "3,-4"
            ],
            "right4-2_perpendicularEdges": [
                "3,0"
            ],
            "shield_leftFist": [
                "3,-2"
            ],
            "shield_leftPawn": [
                "3,4"
            ],
            "pairedEdges_left5-1": [
                "3,6"
            ],
            "right5-1_pairedEdges": [
                "-3,0"
            ],
            "4-1-1_pairedEdges": [
                "-3,2",
                "-5,0"
            ],
            "rightPawn_shield": [
                "-3,-2"
            ],
            "rightFist_shield": [
                "-3,4"
            ],
            "perpendicularEdges_right4-2": [
                "-3,-4",
                "-5,6"
            ],
            "perpendicularEdges_left4-2": [
                "-3,6"
            ],
            "left5-1_pairedEdges": [
                "-5,2"
            ],
            "leftFist_scallop": [
                "-5,-2"
            ],
            "leftPawn_barrel": [
                "-5,4"
            ],
            "perpendicularEdges_6": [
                "-5,-4"
            ],
            "right5-1_parallelEdges": [
                "6,0"
            ],
            "4-1-1_parallelEdges": [
                "6,2"
            ],
            "rightPawn_mushroom": [
                "6,-2"
            ],
            "rightFist_mushroom": [
                "6,4"
            ],
            "perpendicularEdges_left5-1": [
                "6,-4"
            ],
            "perpendicularEdges_right5-1": [
                "6,6"
            ]
        }
    },
    "leftFist_rightPawn": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,-4 /",
        "relations": {
            "perpendicularEdges_3-2-1": [
                "0,0"
            ],
            "rightFist_leftFist": [
                "0,-2",
                "3,4",
                "-3,-2",
                "6,4"
            ],
            "kite_shield": [
                "0,4"
            ],
            "4-1-1_pairedEdges": [
                "0,6"
            ],
            "perpendicularEdges_3-3": [
                "-2,0"
            ],
            "leftPawn_rightFist": [
                "-2,-2"
            ],
            "square_scallop": [
                "-2,4"
            ],
            "3-2-1_pairedEdges": [
                "-2,6"
            ],
            "parallelEdges_4-1-1": [
                "3,0"
            ],
            "mushroom_kite": [
                "3,-2"
            ],
            "left4-2_perpendicularEdges": [
                "3,6"
            ],
            "perpendicularEdges_right4-2": [
                "-3,0"
            ],
            "kite_mushroom": [
                "-3,4"
            ],
            "4-1-1_parallelEdges": [
                "-3,6"
            ],
            "pairedEdges_3-1-2": [
                "4,0"
            ],
            "scallop_square": [
                "4,-2"
            ],
            "leftFist_rightPawn": [
                "4,4"
            ],
            "3-3_perpendicularEdges": [
                "4,6"
            ],
            "pairedEdges_4-1-1": [
                "6,0"
            ],
            "shield_kite": [
                "6,-2"
            ],
            "3-1-2_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "leftFist_rightFist": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,0 / 0,-4 /",
        "relations": {
            "kite_shield": [
                "0,0",
                "-2,2"
            ],
            "square_kite": [
                "0,-1",
                "-3,2"
            ],
            "square_barrel": [
                "0,2",
                "-2,0",
                "-3,-1"
            ],
            "leftFist_rightFist": [
                "0,-4",
                "0,5",
                "-2,6",
                "3,-1",
                "3,2",
                "-3,-4",
                "-3,5",
                "4,0",
                "6,-1",
                "6,2"
            ],
            "rightPawn_leftFist": [
                "0,6",
                "-3,6",
                "4,-1",
                "4,2"
            ],
            "kite_mushroom": [
                "-2,-1",
                "-3,0"
            ],
            "rightFist_leftPawn": [
                "-2,-4",
                "-2,5",
                "3,0",
                "6,0"
            ],
            "kite_square": [
                "3,-4",
                "6,5"
            ],
            "barrel_square": [
                "3,5",
                "4,6",
                "6,-4"
            ],
            "mushroom_kite": [
                "3,6",
                "4,5"
            ],
            "shield_kite": [
                "4,-4",
                "6,6"
            ]
        }
    },
    "leftFist_square": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 0,-1 / 0,2 /",
        "relations": {
            "kite_leftPawn": [
                "0,0"
            ],
            "square_rightFist": [
                "0,1",
                "-1,0",
                "2,0"
            ],
            "kite_leftFist": [
                "-1,1",
                "2,1"
            ],
            "leftFist_square": [
                "-4,0",
                "5,0",
                "6,1"
            ],
            "rightFist_kite": [
                "-4,1",
                "5,1"
            ],
            "rightPawn_kite": [
                "6,0"
            ]
        }
    },
    "leftFist_mushroom": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 0,-1 / 3,-4 /",
        "relations": {
            "kite_leftPawn": [
                "0,0"
            ],
            "shield_rightFist": [
                "0,-1",
                "0,6"
            ],
            "kite_leftFist": [
                "0,5"
            ],
            "mushroom_rightFist": [
                "-2,0",
                "-3,-1",
                "-3,6"
            ],
            "scallop_leftFist": [
                "-2,-1"
            ],
            "mushroom_rightPawn": [
                "-2,5"
            ],
            "barrel_leftFist": [
                "-2,6",
                "-3,5"
            ],
            "leftFist_mushroom": [
                "3,0",
                "3,5",
                "4,6"
            ],
            "rightFist_barrel": [
                "3,-1",
                "4,0"
            ],
            "rightPawn_barrel": [
                "3,6"
            ],
            "barrel_leftPawn": [
                "-3,0"
            ],
            "leftPawn_mushroom": [
                "4,-1"
            ],
            "rightFist_scallop": [
                "4,5"
            ],
            "leftFist_shield": [
                "6,0",
                "6,5"
            ],
            "rightFist_kite": [
                "6,-1"
            ],
            "rightPawn_kite": [
                "6,6"
            ]
        }
    },
    "leftFist_barrel": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 0,1 / 0,-4 /",
        "relations": {
            "shield_leftPawn": [
                "0,0"
            ],
            "kite_rightFist": [
                "0,-1",
                "-3,2"
            ],
            "barrel_rightFist": [
                "0,2",
                "-2,0",
                "-3,-1"
            ],
            "shield_leftFist": [
                "0,-2",
                "-2,2"
            ],
            "mushroom_leftFist": [
                "-2,-1",
                "-3,-2"
            ],
            "scallop_rightPawn": [
                "-2,-2"
            ],
            "rightPawn_mushroom": [
                "3,0"
            ],
            "leftFist_barrel": [
                "3,-1",
                "4,0",
                "6,2"
            ],
            "leftFist_kite": [
                "3,2",
                "6,-1"
            ],
            "rightFist_mushroom": [
                "3,-2",
                "4,-1"
            ],
            "mushroom_leftPawn": [
                "-3,0"
            ],
            "rightFist_shield": [
                "4,2",
                "6,-2"
            ],
            "leftPawn_scallop": [
                "4,-2"
            ],
            "rightPawn_shield": [
                "6,0"
            ]
        }
    },
    "leftFist_leftPawn": {
        "setup": "0,0 / 0,3 / 0,2 / 0,-5 /",
        "relations": {
            "square_mushroom": [
                "0,0"
            ],
            "3-1-2_parallelEdges": [
                "0,-2"
            ],
            "perpendicularEdges_left4-2": [
                "0,4"
            ],
            "rightPawn_rightFist": [
                "0,6",
                "3,6",
                "-5,0"
            ],
            "kite_barrel": [
                "1,0"
            ],
            "4-1-1_pairedEdges": [
                "1,-2"
            ],
            "perpendicularEdges_left5-1": [
                "1,4"
            ],
            "leftFist_leftPawn": [
                "1,6",
                "-3,0",
                "6,0"
            ],
            "square_shield": [
                "3,0"
            ],
            "3-1-2_pairedEdges": [
                "3,-2"
            ],
            "perpendicularEdges_3-1-2": [
                "3,4"
            ],
            "3-2-1_perpendicularEdges": [
                "-3,-2"
            ],
            "pairedEdges_3-2-1": [
                "-3,4"
            ],
            "shield_square": [
                "-3,6"
            ],
            "right5-1_perpendicularEdges": [
                "-5,-2"
            ],
            "pairedEdges_4-1-1": [
                "-5,4"
            ],
            "barrel_kite": [
                "-5,6"
            ],
            "right4-2_perpendicularEdges": [
                "6,-2"
            ],
            "parallelEdges_3-2-1": [
                "6,4"
            ],
            "mushroom_square": [
                "6,6"
            ]
        }
    },
    "leftFist_kite": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,-1 / 1,2 /",
        "relations": {
            "square_leftPawn": [
                "0,0"
            ],
            "rightFist_mushroom": [
                "0,3"
            ],
            "rightFist_shield": [
                "0,-3"
            ],
            "kite_rightFist": [
                "0,6",
                "-1,0",
                "2,0",
                "-4,-3",
                "5,3"
            ],
            "leftFist_barrel": [
                "-1,3",
                "2,-3"
            ],
            "leftFist_kite": [
                "-1,-3",
                "2,3",
                "-4,6",
                "5,6",
                "6,0"
            ],
            "square_leftFist": [
                "-1,6",
                "2,6"
            ],
            "rightFist_square": [
                "-4,0",
                "5,0"
            ],
            "barrel_rightFist": [
                "-4,3",
                "5,-3"
            ],
            "shield_leftFist": [
                "6,3"
            ],
            "mushroom_leftFist": [
                "6,-3"
            ],
            "rightPawn_square": [
                "6,6"
            ]
        }
    },
    "shield_kite": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / -4,6 /",
        "relations": {
            "perpendicularEdges_3-2-1": [
                "0,0"
            ],
            "parallelEdges_2-2-2": [
                "0,3"
            ],
            "pairedEdges_3-3": [
                "0,-3"
            ],
            "perpendicularEdges_3-1-2": [
                "0,6"
            ],
            "rightPawn_leftFist": [
                "2,0"
            ],
            "mushroom_barrel": [
                "2,3",
                "-2,3"
            ],
            "shield_kite": [
                "2,-3",
                "-2,-3"
            ],
            "leftFist_rightFist": [
                "2,6",
                "-4,0"
            ],
            "rightFist_leftFist": [
                "-2,0",
                "4,6"
            ],
            "leftPawn_rightFist": [
                "-2,6"
            ],
            "leftFist_rightPawn": [
                "4,0"
            ],
            "kite_shield": [
                "4,3",
                "-4,3"
            ],
            "barrel_mushroom": [
                "4,-3",
                "-4,-3"
            ],
            "rightFist_leftPawn": [
                "-4,6"
            ],
            "3-2-1_perpendicularEdges": [
                "6,0"
            ],
            "3-3_pairedEdges": [
                "6,3"
            ],
            "2-2-2_parallelEdges": [
                "6,-3"
            ],
            "3-1-2_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "shield_scallop": {
        "setup": "0,0 / 0,3 / 1,-4 / 2,4 / -1,0 /",
        "relations": {
            "6-2_star": [
                "0,0",
                "0,-2"
            ],
            "left4-2_pairedEdges": [
                "0,2",
                "2,0",
                "-2,0",
                "-4,-2"
            ],
            "shield_scallop": [
                "0,4",
                "0,6",
                "2,-4",
                "-2,2"
            ],
            "right4-2_pairedEdges": [
                "0,-4",
                "2,-2",
                "-2,-2",
                "4,0"
            ],
            "shield_barrel": [
                "2,2",
                "-2,-4"
            ],
            "pairedEdges_right4-2": [
                "2,4",
                "4,6",
                "-4,6",
                "6,-4"
            ],
            "pairedEdges_6": [
                "2,6",
                "-2,4"
            ],
            "pairedEdges_left4-2": [
                "-2,6",
                "4,4",
                "-4,4",
                "6,2"
            ],
            "barrel_shield": [
                "4,2",
                "-4,-4"
            ],
            "6_pairedEdges": [
                "4,-2",
                "-4,0"
            ],
            "scallop_shield": [
                "4,-4",
                "-4,2",
                "6,0",
                "6,-2"
            ],
            "star_6-2": [
                "6,4",
                "6,6"
            ]
        }
    },
    "shield_barrel": {
        "setup": "0,0 / 3,3 / 1,0 / 0,-2 / -4,2 /",
        "relations": {
            "pairedEdges_2-2-2": [
                "0,0"
            ],
            "pairedEdges_right4-2": [
                "0,2"
            ],
            "pairedEdges_left4-2": [
                "0,-2"
            ],
            "parallelEdges_3-3": [
                "0,3"
            ],
            "shield_barrel": [
                "2,0",
                "-2,0",
                "4,2",
                "-4,-2"
            ],
            "scallop_shield": [
                "2,2",
                "-2,-2"
            ],
            "barrel_shield": [
                "2,-2",
                "-2,2",
                "4,0",
                "-4,0"
            ],
            "mushroom_kite": [
                "2,3",
                "-2,3"
            ],
            "shield_scallop": [
                "4,-2",
                "-4,2"
            ],
            "kite_mushroom": [
                "4,3",
                "-4,3"
            ],
            "2-2-2_pairedEdges": [
                "6,0"
            ],
            "left4-2_pairedEdges": [
                "6,2"
            ],
            "right4-2_pairedEdges": [
                "6,-2"
            ],
            "3-3_parallelEdges": [
                "6,3"
            ]
        }
    },
    "shield_shield": {
        "setup": "0,0 / 3,3 / 1,0 /",
        "relations": {
            "barrel_barrel": [
                "0,0",
                "2,2",
                "-4,-4",
                "6,6"
            ],
            "shield_shield": [
                "0,2",
                "0,6",
                "2,0",
                "2,-4",
                "-2,4",
                "4,-2",
                "-4,2",
                "-4,6",
                "6,0",
                "6,-4"
            ],
            "pairedEdges_2-2-2": [
                "0,-2",
                "-2,0",
                "-2,-4",
                "-4,-2"
            ],
            "right4-2_pairedEdges": [
                "0,4",
                "4,0"
            ],
            "scallop_barrel": [
                "0,-4",
                "-4,0"
            ],
            "pairedEdges_right4-2": [
                "2,-2",
                "-2,2"
            ],
            "2-2-2_pairedEdges": [
                "2,4",
                "4,2",
                "4,6",
                "6,4"
            ],
            "barrel_scallop": [
                "2,6",
                "6,2"
            ],
            "star_4-4": [
                "-2,-2"
            ],
            "pairedEdges_left4-2": [
                "-2,6",
                "6,-2"
            ],
            "4-4_star": [
                "4,4"
            ],
            "left4-2_pairedEdges": [
                "4,-4",
                "-4,4"
            ]
        }
    },
    "shield_leftFist": {
        "setup": "0,0 / 0,3 / 1,-4 / 0,-2 / 6,-5 /",
        "relations": {
            "perpendicularEdges_3-3": [
                "0,0"
            ],
            "perpendicularEdges_right4-2": [
                "0,-1"
            ],
            "pairedEdges_3-2-1": [
                "0,3"
            ],
            "perpendicularEdges_2-2-2": [
                "0,-3"
            ],
            "pairedEdges_3-1-2": [
                "0,5"
            ],
            "parallelEdges_3-2-1": [
                "0,6"
            ],
            "leftFist_kite": [
                "2,0"
            ],
            "rightPawn_shield": [
                "2,-1"
            ],
            "shield_leftFist": [
                "2,3",
                "-2,3",
                "4,5"
            ],
            "leftFist_barrel": [
                "2,-3",
                "4,-1"
            ],
            "scallop_rightFist": [
                "2,5"
            ],
            "mushroom_leftFist": [
                "2,6",
                "-2,6"
            ],
            "leftPawn_kite": [
                "-2,0"
            ],
            "rightFist_shield": [
                "-2,-1",
                "4,-3",
                "-4,-3"
            ],
            "leftPawn_barrel": [
                "-2,-3"
            ],
            "barrel_rightFist": [
                "-2,5",
                "-4,3"
            ],
            "rightFist_mushroom": [
                "4,0",
                "-4,0"
            ],
            "barrel_rightPawn": [
                "4,3"
            ],
            "kite_rightPawn": [
                "4,6"
            ],
            "leftFist_scallop": [
                "-4,-1"
            ],
            "shield_leftPawn": [
                "-4,5"
            ],
            "kite_rightFist": [
                "-4,6"
            ],
            "3-1-2_parallelEdges": [
                "6,0"
            ],
            "3-2-1_pairedEdges": [
                "6,-1"
            ],
            "2-2-2_perpendicularEdges": [
                "6,3"
            ],
            "3-1-2_pairedEdges": [
                "6,-3"
            ],
            "left4-2_perpendicularEdges": [
                "6,5"
            ],
            "3-3_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "shield_leftPawn": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 0,1 /",
        "relations": {
            "pairedEdges_left5-1": [
                "0,0"
            ],
            "shield_leftPawn": [
                "0,2",
                "-2,0"
            ],
            "leftFist_barrel": [
                "0,-4"
            ],
            "3-2-1_pairedEdges": [
                "0,6",
                "-2,-4",
                "-4,6"
            ],
            "pairedEdges_3-1-2": [
                "2,0",
                "4,2",
                "6,0"
            ],
            "scallop_rightFist": [
                "2,2"
            ],
            "rightFist_shield": [
                "2,-4"
            ],
            "3-3_pairedEdges": [
                "2,6"
            ],
            "right4-2_perpendicularEdges": [
                "-2,2"
            ],
            "5-3_star": [
                "-2,6"
            ],
            "star_5-3": [
                "4,0"
            ],
            "perpendicularEdges_left4-2": [
                "4,-4"
            ],
            "rightPawn_shield": [
                "4,6",
                "6,-4"
            ],
            "pairedEdges_3-3": [
                "-4,0"
            ],
            "shield_leftFist": [
                "-4,2"
            ],
            "leftFist_scallop": [
                "-4,-4"
            ],
            "barrel_rightFist": [
                "6,2"
            ],
            "right5-1_pairedEdges": [
                "6,6"
            ]
        }
    },
    "shield_rightPawn": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-4 / 0,-1 /",
        "relations": {
            "pairedEdges_right5-1": [
                "0,0"
            ],
            "shield_rightPawn": [
                "0,-2",
                "2,0"
            ],
            "rightFist_barrel": [
                "0,4"
            ],
            "3-1-2_pairedEdges": [
                "0,6",
                "2,4",
                "4,6"
            ],
            "left4-2_perpendicularEdges": [
                "2,-2"
            ],
            "5-3_star": [
                "2,6"
            ],
            "pairedEdges_3-2-1": [
                "-2,0",
                "-4,-2",
                "6,0"
            ],
            "scallop_leftFist": [
                "-2,-2"
            ],
            "leftFist_shield": [
                "-2,4"
            ],
            "3-3_pairedEdges": [
                "-2,6"
            ],
            "pairedEdges_3-3": [
                "4,0"
            ],
            "shield_rightFist": [
                "4,-2"
            ],
            "rightFist_scallop": [
                "4,4"
            ],
            "star_5-3": [
                "-4,0"
            ],
            "perpendicularEdges_right4-2": [
                "-4,4"
            ],
            "leftPawn_shield": [
                "-4,6",
                "6,4"
            ],
            "barrel_leftFist": [
                "6,-2"
            ],
            "left5-1_pairedEdges": [
                "6,6"
            ]
        }
    },
    "shield_mushroom": {
        "setup": "0,0 / 0,3 / 0,3 / -3,1 /",
        "relations": {
            "kite_barrel": [
                "0,0",
                "-4,5"
            ],
            "shield_mushroom": [
                "0,-1",
                "0,6",
                "-4,-1",
                "-4,6"
            ],
            "kite_scallop": [
                "0,5",
                "-4,0"
            ],
            "mushroom_shield": [
                "2,0",
                "2,5",
                "6,0",
                "6,5"
            ],
            "barrel_kite": [
                "2,-1",
                "6,6"
            ],
            "scallop_kite": [
                "2,6",
                "6,-1"
            ],
            "3-3_pairedEdges": [
                "-2,0",
                "-2,5"
            ],
            "left4-2_parallelEdges": [
                "-2,-1"
            ],
            "right4-2_parallelEdges": [
                "-2,6"
            ],
            "parallelEdges_left4-2": [
                "4,0"
            ],
            "pairedEdges_3-3": [
                "4,-1",
                "4,6"
            ],
            "parallelEdges_right4-2": [
                "4,5"
            ]
        }
    },
    "shield_square": {
        "setup": "0,0 / 0,3 / -3,-4 /",
        "relations": {
            "leftFist_leftFist": [
                "0,0",
                "-2,1"
            ],
            "rightFist_rightPawn": [
                "0,1"
            ],
            "3-2-1_perpendicularEdges": [
                "2,0"
            ],
            "3-1-2_perpendicularEdges": [
                "2,1"
            ],
            "rightPawn_rightFist": [
                "-2,0"
            ],
            "leftFist_leftPawn": [
                "4,0"
            ],
            "rightFist_rightFist": [
                "4,1",
                "6,0"
            ],
            "perpendicularEdges_3-1-2": [
                "-4,0"
            ],
            "perpendicularEdges_3-2-1": [
                "-4,1"
            ],
            "leftPawn_leftFist": [
                "6,1"
            ]
        }
    },
    "shield_rightFist": {
        "setup": "0,0 / 0,3 / 1,-4 / 0,-2 / -4,-5 /",
        "relations": {
            "perpendicularEdges_3-3": [
                "0,0"
            ],
            "perpendicularEdges_left4-2": [
                "0,1"
            ],
            "perpendicularEdges_2-2-2": [
                "0,3"
            ],
            "pairedEdges_3-1-2": [
                "0,-3"
            ],
            "pairedEdges_3-2-1": [
                "0,-5"
            ],
            "parallelEdges_3-1-2": [
                "0,6"
            ],
            "rightPawn_kite": [
                "2,0"
            ],
            "leftFist_shield": [
                "2,1",
                "4,3",
                "-4,3"
            ],
            "rightPawn_barrel": [
                "2,3"
            ],
            "shield_rightFist": [
                "2,-3",
                "-2,-3",
                "-4,-5"
            ],
            "barrel_leftFist": [
                "2,-5",
                "4,-3"
            ],
            "mushroom_rightFist": [
                "2,6",
                "-2,6"
            ],
            "rightFist_kite": [
                "-2,0"
            ],
            "leftPawn_shield": [
                "-2,1"
            ],
            "rightFist_barrel": [
                "-2,3",
                "-4,1"
            ],
            "scallop_leftFist": [
                "-2,-5"
            ],
            "leftFist_mushroom": [
                "4,0",
                "-4,0"
            ],
            "rightFist_scallop": [
                "4,1"
            ],
            "shield_rightPawn": [
                "4,-5"
            ],
            "kite_leftFist": [
                "4,6"
            ],
            "barrel_leftPawn": [
                "-4,-3"
            ],
            "kite_leftPawn": [
                "-4,6"
            ],
            "3-2-1_parallelEdges": [
                "6,0"
            ],
            "3-1-2_pairedEdges": [
                "6,1"
            ],
            "3-2-1_pairedEdges": [
                "6,3"
            ],
            "2-2-2_perpendicularEdges": [
                "6,-3"
            ],
            "right4-2_perpendicularEdges": [
                "6,-5"
            ],
            "3-3_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "mushroom_barrel": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,0 / 3,2 /",
        "relations": {
            "kite_shield": [
                "0,0",
                "5,0"
            ],
            "mushroom_scallop": [
                "0,2",
                "5,-2"
            ],
            "mushroom_barrel": [
                "0,-2",
                "-1,3",
                "5,2",
                "6,3"
            ],
            "barrel_mushroom": [
                "0,3",
                "-1,2",
                "5,3",
                "6,-2"
            ],
            "shield_kite": [
                "-1,0",
                "6,0"
            ],
            "scallop_mushroom": [
                "-1,-2",
                "6,2"
            ]
        }
    },
    "mushroom_scallop": {
        "setup": "0,0 / 0,3 / 1,2 / 3,2 / 2,0 /",
        "relations": {
            "right4-2_parallelEdges": [
                "0,0"
            ],
            "barrel_mushroom": [
                "0,2",
                "-5,-4"
            ],
            "6_parallelEdges": [
                "0,-2",
                "-5,0"
            ],
            "pairedEdges_right5-1": [
                "0,4",
                "-5,4"
            ],
            "scallop_mushroom": [
                "0,-4",
                "-5,2"
            ],
            "pairedEdges_left5-1": [
                "0,6",
                "-5,6"
            ],
            "right5-1_pairedEdges": [
                "1,0",
                "6,0"
            ],
            "mushroom_barrel": [
                "1,2",
                "6,-4"
            ],
            "left5-1_pairedEdges": [
                "1,-2",
                "6,-2"
            ],
            "parallelEdges_right4-2": [
                "1,4"
            ],
            "mushroom_scallop": [
                "1,-4",
                "6,2"
            ],
            "parallelEdges_6": [
                "1,6",
                "6,4"
            ],
            "left4-2_parallelEdges": [
                "-5,-2"
            ],
            "parallelEdges_left4-2": [
                "6,6"
            ]
        }
    },
    "mushroom_rightPawn": {
        "setup": "0,0 / 3,3 / 1,0 / 2,-2 / 2,1 /",
        "relations": {
            "pairedEdges_right4-2": [
                "0,0",
                "-5,0"
            ],
            "barrel_leftFist": [
                "0,-2"
            ],
            "leftPawn_mushroom": [
                "0,4"
            ],
            "left5-1_parallelEdges": [
                "0,6"
            ],
            "parallelEdges_3-3": [
                "1,0"
            ],
            "mushroom_rightFist": [
                "1,-2"
            ],
            "rightFist_scallop": [
                "1,4"
            ],
            "left4-2_pairedEdges": [
                "1,6",
                "6,6"
            ],
            "scallop_leftFist": [
                "-5,-2"
            ],
            "leftFist_mushroom": [
                "-5,4"
            ],
            "3-3_parallelEdges": [
                "-5,6"
            ],
            "parallelEdges_right5-1": [
                "6,0"
            ],
            "mushroom_rightPawn": [
                "6,-2"
            ],
            "rightFist_barrel": [
                "6,4"
            ]
        }
    },
    "mushroom_shield": {
        "setup": "0,0 / 0,3 / 0,3 / 3,1 /",
        "relations": {
            "kite_barrel": [
                "0,0",
                "5,-4"
            ],
            "mushroom_shield": [
                "0,2",
                "0,6",
                "5,2",
                "5,6"
            ],
            "3-3_pairedEdges": [
                "0,-2",
                "5,-2"
            ],
            "parallelEdges_left4-2": [
                "0,4"
            ],
            "kite_scallop": [
                "0,-4",
                "5,0"
            ],
            "shield_mushroom": [
                "-1,0",
                "-1,-4",
                "6,0",
                "6,-4"
            ],
            "barrel_kite": [
                "-1,2",
                "6,6"
            ],
            "left4-2_parallelEdges": [
                "-1,-2"
            ],
            "pairedEdges_3-3": [
                "-1,4",
                "6,4"
            ],
            "scallop_kite": [
                "-1,6",
                "6,2"
            ],
            "parallelEdges_right4-2": [
                "5,4"
            ],
            "right4-2_parallelEdges": [
                "6,-2"
            ]
        }
    },
    "mushroom_square": {
        "setup": "0,0 / 0,3 / -5,-3 /",
        "relations": {
            "leftFist_leftFist": [
                "0,0",
                "-1,-1"
            ],
            "rightPawn_rightFist": [
                "0,-1"
            ],
            "rightFist_rightPawn": [
                "-1,0"
            ],
            "leftPawn_leftFist": [
                "5,0"
            ],
            "rightFist_rightFist": [
                "5,-1",
                "6,0"
            ],
            "leftFist_leftPawn": [
                "6,-1"
            ]
        }
    },
    "mushroom_leftFist": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / 0,1 / 3,-2 /",
        "relations": {
            "kite_rightPawn": [
                "0,0"
            ],
            "mushroom_leftFist": [
                "0,2",
                "1,3",
                "6,3"
            ],
            "barrel_rightPawn": [
                "0,3"
            ],
            "rightFist_mushroom": [
                "0,-3",
                "-5,-3",
                "6,-4"
            ],
            "leftFist_barrel": [
                "0,-4",
                "1,-3"
            ],
            "rightFist_shield": [
                "0,6",
                "-5,6"
            ],
            "shield_leftFist": [
                "1,0",
                "6,0"
            ],
            "scallop_rightFist": [
                "1,2"
            ],
            "rightPawn_mushroom": [
                "1,-4"
            ],
            "leftFist_kite": [
                "1,6"
            ],
            "kite_rightFist": [
                "-5,0"
            ],
            "mushroom_leftPawn": [
                "-5,2"
            ],
            "barrel_rightFist": [
                "-5,3",
                "6,2"
            ],
            "leftFist_scallop": [
                "-5,-4"
            ],
            "leftPawn_barrel": [
                "6,-3"
            ],
            "leftPawn_kite": [
                "6,6"
            ]
        }
    },
    "mushroom_rightFist": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 0,-1 / -3,2 /",
        "relations": {
            "kite_leftPawn": [
                "0,0"
            ],
            "mushroom_rightFist": [
                "0,-2",
                "-1,-3",
                "6,-3"
            ],
            "leftFist_mushroom": [
                "0,3",
                "5,3",
                "6,4"
            ],
            "barrel_leftPawn": [
                "0,-3"
            ],
            "rightFist_barrel": [
                "0,4",
                "-1,3"
            ],
            "leftFist_shield": [
                "0,6",
                "5,6"
            ],
            "shield_rightFist": [
                "-1,0",
                "6,0"
            ],
            "scallop_leftFist": [
                "-1,-2"
            ],
            "leftPawn_mushroom": [
                "-1,4"
            ],
            "rightFist_kite": [
                "-1,6"
            ],
            "kite_leftFist": [
                "5,0"
            ],
            "mushroom_rightPawn": [
                "5,-2"
            ],
            "barrel_leftFist": [
                "5,-3",
                "6,-2"
            ],
            "rightFist_scallop": [
                "5,4"
            ],
            "rightPawn_barrel": [
                "6,3"
            ],
            "rightPawn_kite": [
                "6,6"
            ]
        }
    },
    "mushroom_leftPawn": {
        "setup": "0,0 / 3,3 / 1,0 / 0,4 / -1,2 /",
        "relations": {
            "right4-2_pairedEdges": [
                "0,0",
                "-5,0"
            ],
            "leftFist_scallop": [
                "0,2"
            ],
            "mushroom_leftFist": [
                "0,-4"
            ],
            "parallelEdges_3-3": [
                "0,6"
            ],
            "right5-1_parallelEdges": [
                "1,0"
            ],
            "rightPawn_mushroom": [
                "1,2"
            ],
            "barrel_rightFist": [
                "1,-4"
            ],
            "pairedEdges_left4-2": [
                "1,6",
                "6,6"
            ],
            "leftFist_barrel": [
                "-5,2"
            ],
            "mushroom_leftPawn": [
                "-5,-4"
            ],
            "parallelEdges_left5-1": [
                "-5,6"
            ],
            "3-3_parallelEdges": [
                "6,0"
            ],
            "rightFist_mushroom": [
                "6,2"
            ],
            "scallop_rightFist": [
                "6,-4"
            ]
        }
    },
    "mushroom_kite": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / 2,-4 / 3,-2 /",
        "relations": {
            "leftFist_rightPawn": [
                "0,0"
            ],
            "barrel_shield": [
                "0,3",
                "-5,3"
            ],
            "kite_mushroom": [
                "0,-3",
                "-5,-3"
            ],
            "rightFist_leftFist": [
                "0,6",
                "6,0"
            ],
            "rightPawn_leftFist": [
                "1,0"
            ],
            "mushroom_kite": [
                "1,3",
                "6,3"
            ],
            "shield_barrel": [
                "1,-3",
                "6,-3"
            ],
            "leftFist_rightFist": [
                "1,6",
                "-5,0"
            ],
            "rightFist_leftPawn": [
                "-5,6"
            ],
            "leftPawn_rightFist": [
                "6,6"
            ]
        }
    },
    "mushroom_mushroom": {
        "setup": "0,0 / 3,3 / 0,2 /",
        "relations": {
            "barrel_barrel": [
                "0,0",
                "1,1",
                "-5,-5",
                "6,6"
            ],
            "mushroom_mushroom": [
                "0,1",
                "0,6",
                "1,0",
                "1,-5",
                "-5,1",
                "-5,6",
                "6,0",
                "6,-5"
            ],
            "barrel_scallop": [
                "0,-5",
                "-5,0"
            ],
            "scallop_barrel": [
                "1,6",
                "6,1"
            ]
        }
    },
    "parallelEdges_left4-2": {
        "setup": "0,0 / 0,3 / 1,2 / -3,-4 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "mushroom_scallop": [
                "0,2"
            ],
            "3-3_pairedEdges": [
                "0,-2"
            ],
            "barrel_leftPawn": [
                "0,3"
            ],
            "right4-2_parallelEdges": [
                "0,-3"
            ],
            "mushroom_shield": [
                "0,4"
            ],
            "right5-1_pairedEdges": [
                "0,-4"
            ],
            "left5-1_pairedEdges": [
                "0,6"
            ],
            "pairedEdges_right5-1": [
                "6,0"
            ],
            "pairedEdges_left5-1": [
                "6,2"
            ],
            "shield_mushroom": [
                "6,-2"
            ],
            "parallelEdges_left4-2": [
                "6,3"
            ],
            "rightPawn_barrel": [
                "6,-3"
            ],
            "pairedEdges_3-3": [
                "6,4"
            ],
            "scallop_mushroom": [
                "6,-4"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "parallelEdges_2-2-2": {
        "setup": "0,0 / 0,3 / 0,3 / 3,1 / 0,-2 / 0,-4 /",
        "relations": {
            "3-3_pairedEdges": [
                "0,0"
            ],
            "kite_shield": [
                "0,2"
            ],
            "shield_kite": [
                "6,0"
            ],
            "pairedEdges_3-3": [
                "6,2"
            ]
        }
    },
    "parallelEdges_3-2-1": {
        "setup": "0,0 / 0,3 / 0,2 / 0,1 / 4,6 /",
        "relations": {
            "rightPawn_rightFist": [
                "0,0"
            ],
            "shield_leftFist": [
                "0,1"
            ],
            "pairedEdges_right4-2": [
                "0,3"
            ],
            "leftPawn_kite": [
                "0,-3"
            ],
            "perpendicularEdges_3-3": [
                "0,-5"
            ],
            "perpendicularEdges_left4-2": [
                "0,6"
            ],
            "right4-2_perpendicularEdges": [
                "6,0"
            ],
            "3-3_perpendicularEdges": [
                "6,1"
            ],
            "kite_rightPawn": [
                "6,3"
            ],
            "left4-2_pairedEdges": [
                "6,-3"
            ],
            "rightFist_shield": [
                "6,-5"
            ],
            "leftFist_leftPawn": [
                "6,6"
            ]
        }
    },
    "parallelEdges_6": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 4,0 /",
        "relations": {
            "pairedEdges_left5-1": [
                "0,0"
            ],
            "scallop_mushroom": [
                "0,2",
                "0,6"
            ],
            "star_8": [
                "0,-2"
            ],
            "6_parallelEdges": [
                "0,4"
            ],
            "pairedEdges_right5-1": [
                "0,-4"
            ],
            "mushroom_scallop": [
                "6,0",
                "6,-4"
            ],
            "left5-1_pairedEdges": [
                "6,2"
            ],
            "parallelEdges_6": [
                "6,-2"
            ],
            "8_star": [
                "6,4"
            ],
            "right5-1_pairedEdges": [
                "6,6"
            ]
        }
    },
    "parallelEdges_4-1-1": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 / -3,4 /",
        "relations": {
            "left5-1_perpendicularEdges": [
                "0,0"
            ],
            "left4-2_perpendicularEdges": [
                "0,-1"
            ],
            "right5-1_perpendicularEdges": [
                "0,2"
            ],
            "right4-2_perpendicularEdges": [
                "0,3"
            ],
            "rightFist_leftPawn": [
                "0,-3"
            ],
            "leftFist_scallop": [
                "0,-4"
            ],
            "leftFist_rightPawn": [
                "0,5"
            ],
            "rightFist_scallop": [
                "0,6"
            ],
            "scallop_leftFist": [
                "6,0"
            ],
            "leftPawn_rightFist": [
                "6,-1"
            ],
            "scallop_rightFist": [
                "6,2"
            ],
            "rightPawn_leftFist": [
                "6,3"
            ],
            "perpendicularEdges_left4-2": [
                "6,-3"
            ],
            "perpendicularEdges_left5-1": [
                "6,-4"
            ],
            "perpendicularEdges_right4-2": [
                "6,5"
            ],
            "perpendicularEdges_right5-1": [
                "6,6"
            ]
        }
    },
    "parallelEdges_left5-1": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 / -3,6 /",
        "relations": {
            "left5-1_perpendicularEdges": [
                "0,0"
            ],
            "mushroom_leftPawn": [
                "0,-2"
            ],
            "right5-1_parallelEdges": [
                "0,3"
            ],
            "barrel_scallop": [
                "0,-3"
            ],
            "right4-2_pairedEdges": [
                "0,4"
            ],
            "leftFist_scallop": [
                "0,6"
            ],
            "scallop_rightFist": [
                "6,0"
            ],
            "pairedEdges_left4-2": [
                "6,-2"
            ],
            "scallop_barrel": [
                "6,3"
            ],
            "parallelEdges_left5-1": [
                "6,-3"
            ],
            "rightPawn_mushroom": [
                "6,4"
            ],
            "perpendicularEdges_right5-1": [
                "6,6"
            ]
        }
    },
    "parallelEdges_right4-2": {
        "setup": "0,0 / 0,3 / 1,2 / -3,-2 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "3-3_pairedEdges": [
                "0,2"
            ],
            "mushroom_scallop": [
                "0,-2"
            ],
            "left4-2_parallelEdges": [
                "0,3"
            ],
            "barrel_rightPawn": [
                "0,-3"
            ],
            "left5-1_pairedEdges": [
                "0,4"
            ],
            "mushroom_shield": [
                "0,-4"
            ],
            "right5-1_pairedEdges": [
                "0,6"
            ],
            "pairedEdges_left5-1": [
                "6,0"
            ],
            "shield_mushroom": [
                "6,2"
            ],
            "pairedEdges_right5-1": [
                "6,-2"
            ],
            "leftPawn_barrel": [
                "6,3"
            ],
            "parallelEdges_right4-2": [
                "6,-3"
            ],
            "scallop_mushroom": [
                "6,4"
            ],
            "pairedEdges_3-3": [
                "6,-4"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "parallelEdges_3-3": {
        "setup": "0,0 / 3,3 / 1,0 / 0,4 / -1,-4 /",
        "relations": {
            "right4-2_pairedEdges": [
                "0,0"
            ],
            "3-3_parallelEdges": [
                "0,1"
            ],
            "left4-2_pairedEdges": [
                "0,2"
            ],
            "mushroom_rightPawn": [
                "0,-4"
            ],
            "barrel_shield": [
                "0,-5"
            ],
            "mushroom_leftPawn": [
                "0,6"
            ],
            "rightPawn_mushroom": [
                "6,0"
            ],
            "shield_barrel": [
                "6,1"
            ],
            "leftPawn_mushroom": [
                "6,2"
            ],
            "pairedEdges_right4-2": [
                "6,-4"
            ],
            "parallelEdges_3-3": [
                "6,-5"
            ],
            "pairedEdges_left4-2": [
                "6,6"
            ]
        }
    },
    "parallelEdges_3-1-2": {
        "setup": "0,0 / 0,3 / 0,2 / 1,0 / 6,-4 /",
        "relations": {
            "rightFist_rightPawn": [
                "0,0"
            ],
            "leftFist_shield": [
                "0,-1"
            ],
            "kite_leftPawn": [
                "0,3"
            ],
            "right4-2_pairedEdges": [
                "0,-3"
            ],
            "3-3_perpendicularEdges": [
                "0,5"
            ],
            "left4-2_perpendicularEdges": [
                "0,6"
            ],
            "perpendicularEdges_right4-2": [
                "6,0"
            ],
            "perpendicularEdges_3-3": [
                "6,-1"
            ],
            "pairedEdges_left4-2": [
                "6,3"
            ],
            "rightPawn_kite": [
                "6,-3"
            ],
            "shield_rightFist": [
                "6,5"
            ],
            "leftPawn_leftFist": [
                "6,6"
            ]
        }
    },
    "parallelEdges_right5-1": {
        "setup": "0,0 / 0,3 / 1,2 / 0,-4 / 6,3 /",
        "relations": {
            "perpendicularEdges_left5-1": [
                "0,0"
            ],
            "leftPawn_mushroom": [
                "0,2"
            ],
            "scallop_barrel": [
                "0,3"
            ],
            "parallelEdges_right5-1": [
                "0,-3"
            ],
            "pairedEdges_right4-2": [
                "0,-4"
            ],
            "scallop_leftFist": [
                "0,6"
            ],
            "rightFist_scallop": [
                "6,0"
            ],
            "left4-2_pairedEdges": [
                "6,2"
            ],
            "left5-1_parallelEdges": [
                "6,3"
            ],
            "barrel_scallop": [
                "6,-3"
            ],
            "mushroom_rightPawn": [
                "6,-4"
            ],
            "right5-1_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "left4-2_parallelEdges": {
        "setup": "0,0 / 0,3 / 1,2 / 3,4 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "pairedEdges_left5-1": [
                "0,6"
            ],
            "3-3_pairedEdges": [
                "2,0"
            ],
            "shield_mushroom": [
                "2,6"
            ],
            "mushroom_scallop": [
                "-2,0"
            ],
            "pairedEdges_right5-1": [
                "-2,6"
            ],
            "left4-2_parallelEdges": [
                "3,0"
            ],
            "leftPawn_barrel": [
                "3,6"
            ],
            "barrel_rightPawn": [
                "-3,0"
            ],
            "parallelEdges_right4-2": [
                "-3,6"
            ],
            "left5-1_pairedEdges": [
                "4,0"
            ],
            "scallop_mushroom": [
                "4,6"
            ],
            "mushroom_shield": [
                "-4,0"
            ],
            "pairedEdges_3-3": [
                "-4,6"
            ],
            "right5-1_pairedEdges": [
                "6,0"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "left4-2_pairedEdges": {
        "setup": "0,0 / 3,3 / 1,0 / 4,-4 /",
        "relations": {
            "shield_shield": [
                "0,0",
                "6,6"
            ],
            "shield_barrel": [
                "0,2"
            ],
            "shield_scallop": [
                "0,-2",
                "-2,4",
                "-2,-4",
                "-4,6"
            ],
            "right4-2_pairedEdges": [
                "0,4",
                "2,6",
                "4,-4"
            ],
            "left4-2_pairedEdges": [
                "0,-4",
                "2,4",
                "4,6"
            ],
            "2-2-2_pairedEdges": [
                "0,6"
            ],
            "leftPawn_kite": [
                "1,0"
            ],
            "leftPawn_mushroom": [
                "1,2",
                "1,-2"
            ],
            "3-3_parallelEdges": [
                "1,4"
            ],
            "left5-1_parallelEdges": [
                "1,-4"
            ],
            "3-1-2_parallelEdges": [
                "1,6"
            ],
            "scallop_shield": [
                "2,0",
                "4,2",
                "4,-2",
                "6,4"
            ],
            "scallop_scallop": [
                "2,2",
                "-4,-4"
            ],
            "scallop_barrel": [
                "2,-2",
                "4,0"
            ],
            "6_pairedEdges": [
                "2,-4",
                "4,4"
            ],
            "pairedEdges_right4-2": [
                "-2,0",
                "-4,-2",
                "6,2"
            ],
            "pairedEdges_left4-2": [
                "-2,2",
                "-4,0",
                "6,-2"
            ],
            "pairedEdges_6": [
                "-2,-2",
                "-4,2"
            ],
            "barrel_scallop": [
                "-2,6",
                "-4,4"
            ],
            "parallelEdges_3-2-1": [
                "-5,0"
            ],
            "parallelEdges_right5-1": [
                "-5,2"
            ],
            "parallelEdges_3-3": [
                "-5,-2"
            ],
            "mushroom_rightPawn": [
                "-5,4",
                "-5,-4"
            ],
            "kite_rightPawn": [
                "-5,6"
            ],
            "pairedEdges_2-2-2": [
                "6,0"
            ],
            "barrel_shield": [
                "6,-4"
            ]
        }
    },
    "left4-2_perpendicularEdges": {
        "setup": "0,0 / 0,3 / 0,2 / 1,0 / 6,2 /",
        "relations": {
            "rightFist_rightPawn": [
                "0,0"
            ],
            "leftFist_rightPawn": [
                "0,2"
            ],
            "parallelEdges_4-1-1": [
                "0,-4"
            ],
            "parallelEdges_3-1-2": [
                "0,6"
            ],
            "leftFist_scallop": [
                "1,0",
                "3,2"
            ],
            "rightPawn_scallop": [
                "1,2"
            ],
            "pairedEdges_left5-1": [
                "1,-4"
            ],
            "pairedEdges_4-1-1": [
                "1,6",
                "3,-4"
            ],
            "leftPawn_shield": [
                "-1,0"
            ],
            "rightFist_shield": [
                "-1,2"
            ],
            "pairedEdges_3-1-2": [
                "-1,-4"
            ],
            "pairedEdges_3-2-1": [
                "-1,6"
            ],
            "rightFist_scallop": [
                "3,0"
            ],
            "pairedEdges_right5-1": [
                "3,6"
            ],
            "left5-1_pairedEdges": [
                "-3,0"
            ],
            "4-1-1_pairedEdges": [
                "-3,2",
                "-5,0"
            ],
            "scallop_rightFist": [
                "-3,-4",
                "-5,6"
            ],
            "scallop_leftFist": [
                "-3,6"
            ],
            "3-1-2_pairedEdges": [
                "5,0"
            ],
            "3-2-1_pairedEdges": [
                "5,2"
            ],
            "shield_leftFist": [
                "5,-4"
            ],
            "shield_rightPawn": [
                "5,6"
            ],
            "right5-1_pairedEdges": [
                "-5,2"
            ],
            "scallop_leftPawn": [
                "-5,-4"
            ],
            "3-2-1_parallelEdges": [
                "6,0"
            ],
            "4-1-1_parallelEdges": [
                "6,2"
            ],
            "leftPawn_rightFist": [
                "6,-4"
            ],
            "leftPawn_leftFist": [
                "6,6"
            ]
        }
    },
    "right5-1_pairedEdges": {
        "setup": "0,0 / 0,3 / 1,2 / -3,4 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "mushroom_scallop": [
                "0,2",
                "0,-2"
            ],
            "parallelEdges_6": [
                "0,4"
            ],
            "parallelEdges_left4-2": [
                "0,-4"
            ],
            "parallelEdges_right4-2": [
                "0,6"
            ],
            "shield_leftPawn": [
                "1,0"
            ],
            "scallop_leftPawn": [
                "1,2",
                "3,4"
            ],
            "barrel_leftPawn": [
                "1,-2"
            ],
            "pairedEdges_left5-1": [
                "1,4"
            ],
            "pairedEdges_3-3": [
                "1,-4"
            ],
            "pairedEdges_3-1-2": [
                "1,6"
            ],
            "right4-2_perpendicularEdges": [
                "3,0"
            ],
            "6_perpendicularEdges": [
                "3,2"
            ],
            "left4-2_perpendicularEdges": [
                "3,-2"
            ],
            "scallop_leftFist": [
                "3,-4"
            ],
            "scallop_rightFist": [
                "3,6"
            ],
            "leftFist_scallop": [
                "-3,0"
            ],
            "rightFist_scallop": [
                "-3,2"
            ],
            "rightPawn_scallop": [
                "-3,-2",
                "-5,-4"
            ],
            "perpendicularEdges_right4-2": [
                "-3,4"
            ],
            "perpendicularEdges_6": [
                "-3,-4"
            ],
            "perpendicularEdges_left4-2": [
                "-3,6"
            ],
            "3-2-1_pairedEdges": [
                "-5,0"
            ],
            "3-3_pairedEdges": [
                "-5,2"
            ],
            "right5-1_pairedEdges": [
                "-5,-2"
            ],
            "rightPawn_barrel": [
                "-5,4"
            ],
            "rightPawn_shield": [
                "-5,6"
            ],
            "left4-2_parallelEdges": [
                "6,0"
            ],
            "right4-2_parallelEdges": [
                "6,2"
            ],
            "6_parallelEdges": [
                "6,-2"
            ],
            "scallop_mushroom": [
                "6,4",
                "6,-4"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "right5-1_perpendicularEdges": {
        "setup": "0,0 / 0,3 / 1,2 / 6,2 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "square_scallop": [
                "0,2"
            ],
            "perpendicularEdges_left5-1": [
                "0,-4"
            ],
            "perpendicularEdges_4-1-1": [
                "0,6"
            ],
            "4-1-1_pairedEdges": [
                "-2,0"
            ],
            "3-1-2_pairedEdges": [
                "-2,2"
            ],
            "rightPawn_leftPawn": [
                "-2,-4",
                "4,2"
            ],
            "rightPawn_rightFist": [
                "-2,6"
            ],
            "rightFist_scallop": [
                "3,0"
            ],
            "leftFist_scallop": [
                "3,2"
            ],
            "parallelEdges_4-1-1": [
                "3,-4"
            ],
            "parallelEdges_right5-1": [
                "3,6"
            ],
            "left5-1_parallelEdges": [
                "-3,0"
            ],
            "4-1-1_parallelEdges": [
                "-3,2"
            ],
            "scallop_rightFist": [
                "-3,-4"
            ],
            "scallop_leftFist": [
                "-3,6"
            ],
            "leftFist_leftPawn": [
                "4,0"
            ],
            "pairedEdges_3-2-1": [
                "4,-4"
            ],
            "pairedEdges_4-1-1": [
                "4,6"
            ],
            "4-1-1_perpendicularEdges": [
                "6,0"
            ],
            "right5-1_perpendicularEdges": [
                "6,2"
            ],
            "scallop_square": [
                "6,-4"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "right5-1_parallelEdges": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 / 3,0 /",
        "relations": {
            "left5-1_perpendicularEdges": [
                "0,0"
            ],
            "scallop_rightFist": [
                "0,6"
            ],
            "mushroom_leftPawn": [
                "-2,0"
            ],
            "pairedEdges_left4-2": [
                "-2,6"
            ],
            "right5-1_parallelEdges": [
                "3,0"
            ],
            "scallop_barrel": [
                "3,6"
            ],
            "barrel_scallop": [
                "-3,0"
            ],
            "parallelEdges_left5-1": [
                "-3,6"
            ],
            "right4-2_pairedEdges": [
                "4,0"
            ],
            "rightPawn_mushroom": [
                "4,6"
            ],
            "leftFist_scallop": [
                "6,0"
            ],
            "perpendicularEdges_right5-1": [
                "6,6"
            ]
        }
    },
    "pairedEdges_right5-1": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-4 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "shield_rightPawn": [
                "0,-1"
            ],
            "rightFist_scallop": [
                "0,3"
            ],
            "left4-2_perpendicularEdges": [
                "0,-3"
            ],
            "3-1-2_pairedEdges": [
                "0,5"
            ],
            "right4-2_parallelEdges": [
                "0,6"
            ],
            "mushroom_scallop": [
                "2,0",
                "-2,0"
            ],
            "barrel_rightPawn": [
                "2,-1"
            ],
            "leftPawn_scallop": [
                "2,3",
                "4,5"
            ],
            "right4-2_perpendicularEdges": [
                "2,-3"
            ],
            "left5-1_pairedEdges": [
                "2,5"
            ],
            "6_parallelEdges": [
                "2,6"
            ],
            "scallop_rightPawn": [
                "-2,-1",
                "-4,-3"
            ],
            "leftFist_scallop": [
                "-2,3"
            ],
            "6_perpendicularEdges": [
                "-2,-3"
            ],
            "3-3_pairedEdges": [
                "-2,5"
            ],
            "left4-2_parallelEdges": [
                "-2,6"
            ],
            "parallelEdges_right4-2": [
                "4,0"
            ],
            "pairedEdges_3-3": [
                "4,-1"
            ],
            "perpendicularEdges_6": [
                "4,3"
            ],
            "scallop_rightFist": [
                "4,-3"
            ],
            "scallop_mushroom": [
                "4,6",
                "-4,6"
            ],
            "parallelEdges_6": [
                "-4,0"
            ],
            "pairedEdges_right5-1": [
                "-4,-1"
            ],
            "perpendicularEdges_left4-2": [
                "-4,3"
            ],
            "leftPawn_barrel": [
                "-4,5"
            ],
            "parallelEdges_left4-2": [
                "6,0"
            ],
            "pairedEdges_3-2-1": [
                "6,-1"
            ],
            "perpendicularEdges_right4-2": [
                "6,3"
            ],
            "scallop_leftFist": [
                "6,-3"
            ],
            "leftPawn_shield": [
                "6,5"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "pairedEdges_3-3": {
        "setup": "0,0 / 0,3 / 0,3 / 3,1 / -1,4 /",
        "relations": {
            "mushroom_shield": [
                "0,0",
                "-4,0"
            ],
            "scallop_rightPawn": [
                "0,1"
            ],
            "barrel_leftPawn": [
                "0,-1"
            ],
            "3-3_pairedEdges": [
                "0,5",
                "-4,-5"
            ],
            "left5-1_pairedEdges": [
                "0,-5"
            ],
            "left4-2_parallelEdges": [
                "0,6"
            ],
            "parallelEdges_left4-2": [
                "2,0"
            ],
            "pairedEdges_3-3": [
                "2,1",
                "6,-1"
            ],
            "pairedEdges_left5-1": [
                "2,-1"
            ],
            "rightPawn_scallop": [
                "2,5"
            ],
            "leftPawn_barrel": [
                "2,-5"
            ],
            "shield_mushroom": [
                "2,6",
                "6,6"
            ],
            "kite_shield": [
                "-2,0"
            ],
            "shield_rightPawn": [
                "-2,1"
            ],
            "shield_leftPawn": [
                "-2,-1"
            ],
            "3-2-1_pairedEdges": [
                "-2,5"
            ],
            "3-1-2_pairedEdges": [
                "-2,-5"
            ],
            "2-2-2_parallelEdges": [
                "-2,6"
            ],
            "parallelEdges_2-2-2": [
                "4,0"
            ],
            "pairedEdges_3-2-1": [
                "4,1"
            ],
            "pairedEdges_3-1-2": [
                "4,-1"
            ],
            "rightPawn_shield": [
                "4,5"
            ],
            "leftPawn_shield": [
                "4,-5"
            ],
            "shield_kite": [
                "4,6"
            ],
            "barrel_rightPawn": [
                "-4,1"
            ],
            "scallop_leftPawn": [
                "-4,-1"
            ],
            "right5-1_pairedEdges": [
                "-4,5"
            ],
            "right4-2_parallelEdges": [
                "-4,6"
            ],
            "parallelEdges_right4-2": [
                "6,0"
            ],
            "pairedEdges_right5-1": [
                "6,1"
            ],
            "rightPawn_barrel": [
                "6,5"
            ],
            "leftPawn_scallop": [
                "6,-5"
            ]
        }
    },
    "pairedEdges_left4-2": {
        "setup": "0,0 / 3,3 / 1,0 / -2,6 /",
        "relations": {
            "shield_shield": [
                "0,0",
                "6,6"
            ],
            "rightPawn_kite": [
                "0,-1"
            ],
            "pairedEdges_left4-2": [
                "0,2",
                "2,4",
                "-2,6"
            ],
            "scallop_shield": [
                "0,-2",
                "2,-4",
                "-2,-4",
                "-4,6"
            ],
            "pairedEdges_right4-2": [
                "0,4",
                "2,6",
                "-2,2"
            ],
            "scallop_barrel": [
                "0,-4",
                "2,-2"
            ],
            "parallelEdges_3-1-2": [
                "0,5"
            ],
            "pairedEdges_2-2-2": [
                "0,6"
            ],
            "shield_scallop": [
                "2,0",
                "4,2",
                "-4,2",
                "6,4"
            ],
            "rightPawn_mushroom": [
                "2,-1",
                "-2,-1"
            ],
            "pairedEdges_6": [
                "2,2",
                "-2,4"
            ],
            "parallelEdges_3-3": [
                "2,5"
            ],
            "shield_barrel": [
                "-2,0"
            ],
            "scallop_scallop": [
                "-2,-2",
                "4,4"
            ],
            "parallelEdges_left5-1": [
                "-2,5"
            ],
            "right4-2_pairedEdges": [
                "4,0",
                "-4,-2",
                "6,-4"
            ],
            "right5-1_parallelEdges": [
                "4,-1"
            ],
            "6_pairedEdges": [
                "4,-2",
                "-4,-4"
            ],
            "left4-2_pairedEdges": [
                "4,-4",
                "-4,0",
                "6,-2"
            ],
            "mushroom_leftPawn": [
                "4,5",
                "-4,5"
            ],
            "barrel_shield": [
                "4,6"
            ],
            "3-3_parallelEdges": [
                "-4,-1"
            ],
            "barrel_scallop": [
                "-4,4",
                "6,2"
            ],
            "2-2-2_pairedEdges": [
                "6,0"
            ],
            "3-2-1_parallelEdges": [
                "6,-1"
            ],
            "kite_leftPawn": [
                "6,5"
            ]
        }
    },
    "pairedEdges_6": {
        "setup": "0,0 / 3,3 / 1,2 / 0,-4 /",
        "relations": {
            "scallop_scallop": [
                "0,0",
                "-2,-2",
                "4,4",
                "6,6"
            ],
            "pairedEdges_6": [
                "0,2",
                "2,2",
                "-2,0",
                "4,2",
                "6,4"
            ],
            "6_pairedEdges": [
                "0,-2",
                "-2,-4",
                "4,6",
                "-4,-4",
                "6,-4"
            ],
            "barrel_scallop": [
                "0,4",
                "4,0"
            ],
            "8_star": [
                "0,-4",
                "4,-4"
            ],
            "left4-2_pairedEdges": [
                "0,6",
                "2,-2"
            ],
            "shield_scallop": [
                "2,0",
                "2,4"
            ],
            "6-2_star": [
                "2,-4"
            ],
            "right4-2_pairedEdges": [
                "2,6",
                "4,-2"
            ],
            "star_8": [
                "-2,2",
                "6,2"
            ],
            "pairedEdges_left4-2": [
                "-2,4",
                "-4,0"
            ],
            "scallop_barrel": [
                "-2,6",
                "6,-2"
            ],
            "star_6-2": [
                "-4,2"
            ],
            "scallop_shield": [
                "-4,-2",
                "-4,6"
            ],
            "pairedEdges_right4-2": [
                "-4,4",
                "6,0"
            ]
        }
    },
    "pairedEdges_2-2-2": {
        "setup": "0,0 / 3,3 / 1,0 / 0,-2 /",
        "relations": {
            "shield_shield": [
                "0,0",
                "-2,2",
                "4,0",
                "6,2"
            ],
            "right4-2_pairedEdges": [
                "0,2"
            ],
            "barrel_shield": [
                "2,0"
            ],
            "2-2-2_pairedEdges": [
                "2,2"
            ],
            "pairedEdges_right4-2": [
                "-2,0"
            ],
            "left4-2_pairedEdges": [
                "4,2"
            ],
            "pairedEdges_2-2-2": [
                "-4,0"
            ],
            "shield_barrel": [
                "-4,2"
            ],
            "pairedEdges_left4-2": [
                "6,0"
            ]
        }
    },
    "pairedEdges_3-2-1": {
        "setup": "0,0 / 0,3 / 0,2 / 0,1 / 4,-3 /",
        "relations": {
            "rightPawn_rightFist": [
                "0,0"
            ],
            "shield_leftFist": [
                "0,1"
            ],
            "pairedEdges_3-2-1": [
                "0,3"
            ],
            "leftPawn_barrel": [
                "0,-3"
            ],
            "perpendicularEdges_2-2-2": [
                "0,-5"
            ],
            "perpendicularEdges_3-1-2": [
                "0,6"
            ],
            "rightPawn_leftFist": [
                "2,0"
            ],
            "shield_rightPawn": [
                "2,1",
                "4,3",
                "-4,3"
            ],
            "pairedEdges_right5-1": [
                "2,3"
            ],
            "leftPawn_shield": [
                "2,-3",
                "-2,-3",
                "-4,-5"
            ],
            "perpendicularEdges_right4-2": [
                "2,-5"
            ],
            "perpendicularEdges_3-3": [
                "2,6"
            ],
            "rightPawn_leftPawn": [
                "-2,0",
                "4,6"
            ],
            "shield_rightFist": [
                "-2,1"
            ],
            "pairedEdges_3-3": [
                "-2,3"
            ],
            "perpendicularEdges_left4-2": [
                "-2,-5"
            ],
            "perpendicularEdges_left5-1": [
                "-2,6"
            ],
            "right5-1_perpendicularEdges": [
                "4,0"
            ],
            "right4-2_perpendicularEdges": [
                "4,1"
            ],
            "3-3_pairedEdges": [
                "4,-3"
            ],
            "leftFist_shield": [
                "4,-5"
            ],
            "3-3_perpendicularEdges": [
                "-4,0"
            ],
            "left4-2_perpendicularEdges": [
                "-4,1"
            ],
            "left5-1_pairedEdges": [
                "-4,-3"
            ],
            "rightFist_leftPawn": [
                "-4,6"
            ],
            "3-2-1_perpendicularEdges": [
                "6,0"
            ],
            "2-2-2_perpendicularEdges": [
                "6,1"
            ],
            "barrel_rightPawn": [
                "6,3"
            ],
            "3-1-2_pairedEdges": [
                "6,-3"
            ],
            "rightFist_shield": [
                "6,-5"
            ],
            "leftFist_leftPawn": [
                "6,6"
            ]
        }
    },
    "pairedEdges_4-1-1": {
        "setup": "0,0 / 0,3 / 1,-4 / -4,0 /",
        "relations": {
            "leftPawn_leftPawn": [
                "0,0",
                "-2,-2"
            ],
            "scallop_rightFist": [
                "0,1",
                "2,3"
            ],
            "perpendicularEdges_left5-1": [
                "0,-2"
            ],
            "scallop_leftPawn": [
                "0,3"
            ],
            "perpendicularEdges_6": [
                "0,-3",
                "4,-5"
            ],
            "rightPawn_rightFist": [
                "0,4"
            ],
            "perpendicularEdges_right4-2": [
                "0,-5",
                "2,-3"
            ],
            "perpendicularEdges_3-3": [
                "0,6",
                "4,-2"
            ],
            "leftPawn_rightFist": [
                "2,0"
            ],
            "scallop_leftFist": [
                "2,1",
                "4,3"
            ],
            "perpendicularEdges_3-1-2": [
                "2,-2"
            ],
            "rightPawn_leftFist": [
                "2,4"
            ],
            "perpendicularEdges_left4-2": [
                "2,-5",
                "4,-3"
            ],
            "perpendicularEdges_3-2-1": [
                "2,6"
            ],
            "left5-1_perpendicularEdges": [
                "-2,0"
            ],
            "6_perpendicularEdges": [
                "-2,1",
                "6,3"
            ],
            "right4-2_perpendicularEdges": [
                "-2,3",
                "-4,1"
            ],
            "rightFist_scallop": [
                "-2,-3",
                "-4,-5"
            ],
            "3-3_perpendicularEdges": [
                "-2,4",
                "6,0"
            ],
            "leftPawn_scallop": [
                "-2,-5"
            ],
            "rightFist_rightPawn": [
                "-2,6"
            ],
            "leftPawn_leftFist": [
                "4,0"
            ],
            "scallop_rightPawn": [
                "4,1"
            ],
            "rightPawn_rightPawn": [
                "4,4",
                "6,6"
            ],
            "perpendicularEdges_right5-1": [
                "4,6"
            ],
            "3-1-2_perpendicularEdges": [
                "-4,0"
            ],
            "rightFist_leftPawn": [
                "-4,-2"
            ],
            "left4-2_perpendicularEdges": [
                "-4,3",
                "6,1"
            ],
            "leftFist_scallop": [
                "-4,-3",
                "6,-5"
            ],
            "3-2-1_perpendicularEdges": [
                "-4,4"
            ],
            "leftFist_rightPawn": [
                "-4,6"
            ],
            "leftFist_leftPawn": [
                "6,-2"
            ],
            "rightPawn_scallop": [
                "6,-3"
            ],
            "right5-1_perpendicularEdges": [
                "6,4"
            ]
        }
    },
    "pairedEdges_left5-1": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "shield_leftPawn": [
                "0,1"
            ],
            "right4-2_perpendicularEdges": [
                "0,3"
            ],
            "leftFist_scallop": [
                "0,-3"
            ],
            "3-2-1_pairedEdges": [
                "0,-5"
            ],
            "left4-2_parallelEdges": [
                "0,6"
            ],
            "mushroom_scallop": [
                "2,0",
                "-2,0"
            ],
            "scallop_leftPawn": [
                "2,1",
                "4,3"
            ],
            "6_perpendicularEdges": [
                "2,3"
            ],
            "rightFist_scallop": [
                "2,-3"
            ],
            "3-3_pairedEdges": [
                "2,-5"
            ],
            "right4-2_parallelEdges": [
                "2,6"
            ],
            "barrel_leftPawn": [
                "-2,1"
            ],
            "left4-2_perpendicularEdges": [
                "-2,3"
            ],
            "rightPawn_scallop": [
                "-2,-3",
                "-4,-5"
            ],
            "right5-1_pairedEdges": [
                "-2,-5"
            ],
            "6_parallelEdges": [
                "-2,6"
            ],
            "parallelEdges_6": [
                "4,0"
            ],
            "pairedEdges_left5-1": [
                "4,1"
            ],
            "perpendicularEdges_right4-2": [
                "4,-3"
            ],
            "rightPawn_barrel": [
                "4,-5"
            ],
            "scallop_mushroom": [
                "4,6",
                "-4,6"
            ],
            "parallelEdges_left4-2": [
                "-4,0"
            ],
            "pairedEdges_3-3": [
                "-4,1"
            ],
            "scallop_leftFist": [
                "-4,3"
            ],
            "perpendicularEdges_6": [
                "-4,-3"
            ],
            "parallelEdges_right4-2": [
                "6,0"
            ],
            "pairedEdges_3-1-2": [
                "6,1"
            ],
            "scallop_rightFist": [
                "6,3"
            ],
            "perpendicularEdges_left4-2": [
                "6,-3"
            ],
            "rightPawn_shield": [
                "6,-5"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "pairedEdges_right4-2": {
        "setup": "0,0 / 3,3 / 1,0 / 2,-2 /",
        "relations": {
            "shield_shield": [
                "0,0",
                "6,6"
            ],
            "kite_rightPawn": [
                "0,1"
            ],
            "shield_scallop": [
                "0,2",
                "2,4",
                "-2,4",
                "4,6"
            ],
            "left4-2_pairedEdges": [
                "0,-2",
                "2,6",
                "-2,-4"
            ],
            "barrel_scallop": [
                "0,4",
                "-2,2"
            ],
            "right4-2_pairedEdges": [
                "0,-4",
                "2,-2",
                "-2,6"
            ],
            "3-1-2_parallelEdges": [
                "0,-5"
            ],
            "2-2-2_pairedEdges": [
                "0,6"
            ],
            "barrel_shield": [
                "2,0"
            ],
            "mushroom_rightPawn": [
                "2,1",
                "-2,1"
            ],
            "scallop_scallop": [
                "2,2",
                "-4,-4"
            ],
            "6_pairedEdges": [
                "2,-4",
                "-2,-2"
            ],
            "left5-1_parallelEdges": [
                "2,-5"
            ],
            "scallop_shield": [
                "-2,0",
                "4,-2",
                "-4,-2",
                "6,-4"
            ],
            "3-3_parallelEdges": [
                "-2,-5"
            ],
            "pairedEdges_left4-2": [
                "4,0",
                "-4,4",
                "6,2"
            ],
            "parallelEdges_3-3": [
                "4,1"
            ],
            "pairedEdges_right4-2": [
                "4,2",
                "-4,0",
                "6,4"
            ],
            "pairedEdges_6": [
                "4,4",
                "-4,2"
            ],
            "scallop_barrel": [
                "4,-4",
                "6,-2"
            ],
            "leftPawn_mushroom": [
                "4,-5",
                "-4,-5"
            ],
            "parallelEdges_right5-1": [
                "-4,1"
            ],
            "shield_barrel": [
                "-4,6"
            ],
            "pairedEdges_2-2-2": [
                "6,0"
            ],
            "parallelEdges_3-2-1": [
                "6,1"
            ],
            "leftPawn_kite": [
                "6,-5"
            ]
        }
    },
    "pairedEdges_3-1-2": {
        "setup": "0,0 / 0,3 / 0,2 / 1,0 / 3,-4 /",
        "relations": {
            "rightFist_rightPawn": [
                "0,0"
            ],
            "leftFist_shield": [
                "0,-1"
            ],
            "barrel_leftPawn": [
                "0,3"
            ],
            "3-2-1_pairedEdges": [
                "0,-3"
            ],
            "2-2-2_perpendicularEdges": [
                "0,5"
            ],
            "3-1-2_perpendicularEdges": [
                "0,6"
            ],
            "leftPawn_rightPawn": [
                "2,0",
                "-4,6"
            ],
            "rightFist_shield": [
                "2,-1"
            ],
            "shield_leftPawn": [
                "2,3",
                "-2,3",
                "4,5"
            ],
            "3-3_pairedEdges": [
                "2,-3"
            ],
            "left4-2_perpendicularEdges": [
                "2,5"
            ],
            "left5-1_perpendicularEdges": [
                "2,6"
            ],
            "leftFist_rightPawn": [
                "-2,0"
            ],
            "rightPawn_shield": [
                "-2,-1",
                "4,-3",
                "-4,-3"
            ],
            "right5-1_pairedEdges": [
                "-2,-3"
            ],
            "right4-2_perpendicularEdges": [
                "-2,5"
            ],
            "3-3_perpendicularEdges": [
                "-2,6"
            ],
            "perpendicularEdges_3-3": [
                "4,0"
            ],
            "perpendicularEdges_left4-2": [
                "4,-1"
            ],
            "pairedEdges_left5-1": [
                "4,3"
            ],
            "leftPawn_rightFist": [
                "4,6"
            ],
            "perpendicularEdges_right5-1": [
                "-4,0"
            ],
            "perpendicularEdges_right4-2": [
                "-4,-1"
            ],
            "pairedEdges_3-3": [
                "-4,3"
            ],
            "shield_leftFist": [
                "-4,5"
            ],
            "perpendicularEdges_3-2-1": [
                "6,0"
            ],
            "perpendicularEdges_2-2-2": [
                "6,-1"
            ],
            "pairedEdges_3-1-2": [
                "6,3"
            ],
            "rightPawn_barrel": [
                "6,-3"
            ],
            "shield_rightFist": [
                "6,5"
            ],
            "leftPawn_leftFist": [
                "6,6"
            ]
        }
    },
    "3-3_pairedEdges": {
        "setup": "0,0 / 0,3 / 0,3 / 3,1 / 0,-2 /",
        "relations": {
            "mushroom_shield": [
                "0,0",
                "0,4"
            ],
            "kite_shield": [
                "0,2"
            ],
            "parallelEdges_right4-2": [
                "0,-2"
            ],
            "parallelEdges_2-2-2": [
                "0,-4"
            ],
            "parallelEdges_left4-2": [
                "0,6"
            ],
            "barrel_rightPawn": [
                "1,0"
            ],
            "shield_rightPawn": [
                "1,2"
            ],
            "pairedEdges_right5-1": [
                "1,-2"
            ],
            "scallop_rightPawn": [
                "1,4"
            ],
            "pairedEdges_3-2-1": [
                "1,-4"
            ],
            "pairedEdges_3-3": [
                "1,6",
                "-1,-2"
            ],
            "scallop_leftPawn": [
                "-1,0"
            ],
            "shield_leftPawn": [
                "-1,2"
            ],
            "barrel_leftPawn": [
                "-1,4"
            ],
            "pairedEdges_3-1-2": [
                "-1,-4"
            ],
            "pairedEdges_left5-1": [
                "-1,6"
            ],
            "right5-1_pairedEdges": [
                "5,0"
            ],
            "3-2-1_pairedEdges": [
                "5,2"
            ],
            "rightPawn_barrel": [
                "5,-2"
            ],
            "3-3_pairedEdges": [
                "5,4",
                "-5,0"
            ],
            "rightPawn_shield": [
                "5,-4"
            ],
            "rightPawn_scallop": [
                "5,6"
            ],
            "3-1-2_pairedEdges": [
                "-5,2"
            ],
            "leftPawn_scallop": [
                "-5,-2"
            ],
            "left5-1_pairedEdges": [
                "-5,4"
            ],
            "leftPawn_shield": [
                "-5,-4"
            ],
            "leftPawn_barrel": [
                "-5,6"
            ],
            "right4-2_parallelEdges": [
                "6,0"
            ],
            "2-2-2_parallelEdges": [
                "6,2"
            ],
            "shield_mushroom": [
                "6,-2",
                "6,6"
            ],
            "left4-2_parallelEdges": [
                "6,4"
            ],
            "shield_kite": [
                "6,-4"
            ]
        }
    },
    "3-3_perpendicularEdges": {
        "setup": "0,0 / 0,3 / 1,-4 / 2,0 /",
        "relations": {
            "leftPawn_leftPawn": [
                "0,0",
                "4,4"
            ],
            "leftPawn_rightFist": [
                "0,-2"
            ],
            "3-2-1_pairedEdges": [
                "0,4"
            ],
            "4-1-1_pairedEdges": [
                "0,6",
                "-2,4"
            ],
            "shield_rightFist": [
                "-1,0"
            ],
            "shield_leftFist": [
                "-1,-2"
            ],
            "3-1-2_parallelEdges": [
                "-1,4"
            ],
            "3-2-1_parallelEdges": [
                "-1,6"
            ],
            "rightPawn_leftFist": [
                "-2,0"
            ],
            "rightPawn_rightPawn": [
                "-2,-2",
                "6,6"
            ],
            "3-1-2_pairedEdges": [
                "-2,6"
            ],
            "pairedEdges_3-2-1": [
                "4,0"
            ],
            "pairedEdges_4-1-1": [
                "4,-2",
                "6,0"
            ],
            "rightFist_leftPawn": [
                "4,6"
            ],
            "parallelEdges_3-1-2": [
                "5,0"
            ],
            "parallelEdges_3-2-1": [
                "5,-2"
            ],
            "rightFist_shield": [
                "5,4"
            ],
            "leftFist_shield": [
                "5,6"
            ],
            "pairedEdges_3-1-2": [
                "6,-2"
            ],
            "leftFist_rightPawn": [
                "6,4"
            ]
        }
    },
    "3-3_parallelEdges": {
        "setup": "0,0 / 3,3 / 1,0 / 0,4 / 5,2 /",
        "relations": {
            "right4-2_pairedEdges": [
                "0,0"
            ],
            "rightPawn_mushroom": [
                "0,6"
            ],
            "3-3_parallelEdges": [
                "1,0"
            ],
            "shield_barrel": [
                "1,6"
            ],
            "left4-2_pairedEdges": [
                "2,0"
            ],
            "leftPawn_mushroom": [
                "2,6"
            ],
            "mushroom_rightPawn": [
                "-4,0"
            ],
            "pairedEdges_right4-2": [
                "-4,6"
            ],
            "barrel_shield": [
                "-5,0"
            ],
            "parallelEdges_3-3": [
                "-5,6"
            ],
            "mushroom_leftPawn": [
                "6,0"
            ],
            "pairedEdges_left4-2": [
                "6,6"
            ]
        }
    },
    "2-2-2_parallelEdges": {
        "setup": "0,0 / 0,3 / 0,3 / 3,1 / 0,-2 / 6,2 /",
        "relations": {
            "3-3_pairedEdges": [
                "0,0"
            ],
            "shield_kite": [
                "0,6"
            ],
            "kite_shield": [
                "2,0"
            ],
            "pairedEdges_3-3": [
                "2,6"
            ]
        }
    },
    "2-2-2_pairedEdges": {
        "setup": "0,0 / 3,3 / 1,0 / 2,4 /",
        "relations": {
            "shield_shield": [
                "0,0",
                "0,-4",
                "2,2",
                "2,6"
            ],
            "pairedEdges_left4-2": [
                "0,2"
            ],
            "barrel_shield": [
                "0,-2"
            ],
            "pairedEdges_2-2-2": [
                "0,4"
            ],
            "pairedEdges_right4-2": [
                "0,6"
            ],
            "left4-2_pairedEdges": [
                "2,0"
            ],
            "2-2-2_pairedEdges": [
                "2,-2"
            ],
            "shield_barrel": [
                "2,4"
            ],
            "right4-2_pairedEdges": [
                "2,-4"
            ]
        }
    },
    "2-2-2_perpendicularEdges": {
        "setup": "0,0 / 0,3 / 0,2 / 0,1 / -2,3 / 1,6 /",
        "relations": {
            "3-1-2_pairedEdges": [
                "0,0"
            ],
            "3-2-1_pairedEdges": [
                "0,2"
            ],
            "shield_rightFist": [
                "0,-4"
            ],
            "shield_leftFist": [
                "0,6"
            ],
            "rightFist_shield": [
                "2,0"
            ],
            "leftFist_shield": [
                "2,2"
            ],
            "pairedEdges_3-1-2": [
                "2,-4"
            ],
            "pairedEdges_3-2-1": [
                "2,6"
            ]
        }
    },
    "perpendicularEdges_3-3": {
        "setup": "0,0 / 0,3 / 1,-4 / 0,-2 /",
        "relations": {
            "leftPawn_leftPawn": [
                "0,0",
                "-4,-4"
            ],
            "rightFist_shield": [
                "0,1"
            ],
            "leftFist_rightPawn": [
                "0,2"
            ],
            "3-2-1_pairedEdges": [
                "0,-4"
            ],
            "3-1-2_parallelEdges": [
                "0,-5"
            ],
            "4-1-1_pairedEdges": [
                "0,6",
                "2,-4"
            ],
            "rightFist_leftPawn": [
                "2,0"
            ],
            "leftFist_shield": [
                "2,1"
            ],
            "rightPawn_rightPawn": [
                "2,2",
                "6,6"
            ],
            "3-2-1_parallelEdges": [
                "2,-5"
            ],
            "3-1-2_pairedEdges": [
                "2,6"
            ],
            "pairedEdges_3-2-1": [
                "-4,0"
            ],
            "parallelEdges_3-1-2": [
                "-4,1"
            ],
            "pairedEdges_4-1-1": [
                "-4,2",
                "6,0"
            ],
            "shield_rightFist": [
                "-4,-5"
            ],
            "rightPawn_leftFist": [
                "-4,6"
            ],
            "parallelEdges_3-2-1": [
                "6,1"
            ],
            "pairedEdges_3-1-2": [
                "6,2"
            ],
            "leftPawn_rightFist": [
                "6,-4"
            ],
            "shield_leftFist": [
                "6,-5"
            ]
        }
    },
    "perpendicularEdges_3-1-2": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 /",
        "relations": {
            "square_shield": [
                "0,0"
            ],
            "kite_rightPawn": [
                "0,1"
            ],
            "3-1-2_pairedEdges": [
                "0,-2"
            ],
            "leftFist_leftPawn": [
                "0,4"
            ],
            "4-1-1_perpendicularEdges": [
                "0,-5"
            ],
            "3-2-1_perpendicularEdges": [
                "0,6",
                "-2,-5"
            ],
            "kite_shield": [
                "-2,0"
            ],
            "square_rightPawn": [
                "-2,1"
            ],
            "4-1-1_pairedEdges": [
                "-2,-2"
            ],
            "rightFist_leftPawn": [
                "-2,4"
            ],
            "3-1-2_perpendicularEdges": [
                "-2,6"
            ],
            "perpendicularEdges_3-2-1": [
                "4,0"
            ],
            "perpendicularEdges_3-1-2": [
                "4,1",
                "6,0"
            ],
            "rightPawn_leftFist": [
                "4,-2"
            ],
            "pairedEdges_4-1-1": [
                "4,4"
            ],
            "leftPawn_square": [
                "4,-5"
            ],
            "shield_kite": [
                "4,6"
            ],
            "perpendicularEdges_4-1-1": [
                "6,1"
            ],
            "rightPawn_rightFist": [
                "6,-2"
            ],
            "pairedEdges_3-2-1": [
                "6,4"
            ],
            "leftPawn_kite": [
                "6,-5"
            ],
            "shield_square": [
                "6,6"
            ]
        }
    },
    "perpendicularEdges_3-2-1": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 /",
        "relations": {
            "square_shield": [
                "0,0"
            ],
            "kite_leftPawn": [
                "0,-1"
            ],
            "3-2-1_pairedEdges": [
                "0,2"
            ],
            "rightFist_rightPawn": [
                "0,-4"
            ],
            "4-1-1_perpendicularEdges": [
                "0,5"
            ],
            "3-1-2_perpendicularEdges": [
                "0,6",
                "2,5"
            ],
            "kite_shield": [
                "2,0"
            ],
            "square_leftPawn": [
                "2,-1"
            ],
            "4-1-1_pairedEdges": [
                "2,2"
            ],
            "leftFist_rightPawn": [
                "2,-4"
            ],
            "3-2-1_perpendicularEdges": [
                "2,6"
            ],
            "perpendicularEdges_3-1-2": [
                "-4,0"
            ],
            "perpendicularEdges_3-2-1": [
                "-4,-1",
                "6,0"
            ],
            "leftPawn_rightFist": [
                "-4,2"
            ],
            "pairedEdges_4-1-1": [
                "-4,-4"
            ],
            "rightPawn_square": [
                "-4,5"
            ],
            "shield_kite": [
                "-4,6"
            ],
            "perpendicularEdges_4-1-1": [
                "6,-1"
            ],
            "leftPawn_leftFist": [
                "6,2"
            ],
            "pairedEdges_3-1-2": [
                "6,-4"
            ],
            "rightPawn_kite": [
                "6,5"
            ],
            "shield_square": [
                "6,6"
            ]
        }
    },
    "perpendicularEdges_4-1-1": {
        "setup": "0,0 / 0,3 / 1,2 / 0,-2 /",
        "relations": {
            "kite_scallop": [
                "0,0",
                "2,-2"
            ],
            "square_leftPawn": [
                "0,1"
            ],
            "square_scallop": [
                "0,-2",
                "2,0"
            ],
            "3-2-1_perpendicularEdges": [
                "0,3"
            ],
            "kite_rightPawn": [
                "0,-3"
            ],
            "4-1-1_perpendicularEdges": [
                "0,4",
                "0,-5",
                "2,3",
                "2,6"
            ],
            "left5-1_perpendicularEdges": [
                "0,6"
            ],
            "kite_leftPawn": [
                "2,1"
            ],
            "square_rightPawn": [
                "2,-3"
            ],
            "right5-1_perpendicularEdges": [
                "2,4"
            ],
            "3-1-2_perpendicularEdges": [
                "2,-5"
            ],
            "perpendicularEdges_4-1-1": [
                "-4,0",
                "-4,-3",
                "6,1",
                "6,-2"
            ],
            "perpendicularEdges_3-2-1": [
                "-4,1"
            ],
            "perpendicularEdges_left5-1": [
                "-4,-2"
            ],
            "leftPawn_square": [
                "-4,3"
            ],
            "scallop_kite": [
                "-4,4",
                "6,6"
            ],
            "rightPawn_kite": [
                "-4,-5"
            ],
            "scallop_square": [
                "-4,6",
                "6,4"
            ],
            "perpendicularEdges_right5-1": [
                "6,0"
            ],
            "leftPawn_kite": [
                "6,3"
            ],
            "perpendicularEdges_3-1-2": [
                "6,-3"
            ],
            "rightPawn_square": [
                "6,-5"
            ]
        }
    },
    "perpendicularEdges_right5-1": {
        "setup": "0,0 / 0,3 / 1,2 / 6,-2 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "4-1-1_pairedEdges": [
                "0,2"
            ],
            "right5-1_parallelEdges": [
                "0,3"
            ],
            "leftFist_scallop": [
                "0,-3"
            ],
            "rightFist_rightPawn": [
                "0,-4"
            ],
            "4-1-1_perpendicularEdges": [
                "0,6"
            ],
            "square_scallop": [
                "-2,0"
            ],
            "3-2-1_pairedEdges": [
                "-2,2"
            ],
            "4-1-1_parallelEdges": [
                "-2,3"
            ],
            "rightFist_scallop": [
                "-2,-3"
            ],
            "leftPawn_rightPawn": [
                "-2,-4",
                "4,2"
            ],
            "left5-1_perpendicularEdges": [
                "-2,6"
            ],
            "perpendicularEdges_right5-1": [
                "4,0"
            ],
            "scallop_leftFist": [
                "4,3"
            ],
            "parallelEdges_4-1-1": [
                "4,-3"
            ],
            "pairedEdges_3-1-2": [
                "4,-4"
            ],
            "scallop_square": [
                "4,6"
            ],
            "perpendicularEdges_4-1-1": [
                "6,0"
            ],
            "leftPawn_leftFist": [
                "6,2"
            ],
            "scallop_rightFist": [
                "6,3"
            ],
            "parallelEdges_left5-1": [
                "6,-3"
            ],
            "pairedEdges_4-1-1": [
                "6,-4"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "perpendicularEdges_left5-1": {
        "setup": "0,0 / 0,3 / 1,2 / 0,-4 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "4-1-1_pairedEdges": [
                "0,-2"
            ],
            "rightFist_scallop": [
                "0,3"
            ],
            "left5-1_parallelEdges": [
                "0,-3"
            ],
            "leftFist_leftPawn": [
                "0,4"
            ],
            "4-1-1_perpendicularEdges": [
                "0,6"
            ],
            "square_scallop": [
                "2,0"
            ],
            "3-1-2_pairedEdges": [
                "2,-2"
            ],
            "leftFist_scallop": [
                "2,3"
            ],
            "4-1-1_parallelEdges": [
                "2,-3"
            ],
            "rightPawn_leftPawn": [
                "2,4",
                "-4,-2"
            ],
            "right5-1_perpendicularEdges": [
                "2,6"
            ],
            "perpendicularEdges_left5-1": [
                "-4,0"
            ],
            "parallelEdges_4-1-1": [
                "-4,3"
            ],
            "scallop_rightFist": [
                "-4,-3"
            ],
            "pairedEdges_3-2-1": [
                "-4,4"
            ],
            "scallop_square": [
                "-4,6"
            ],
            "perpendicularEdges_4-1-1": [
                "6,0"
            ],
            "rightPawn_rightFist": [
                "6,-2"
            ],
            "parallelEdges_right5-1": [
                "6,3"
            ],
            "scallop_leftFist": [
                "6,-3"
            ],
            "pairedEdges_4-1-1": [
                "6,4"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "perpendicularEdges_right4-2": {
        "setup": "0,0 / 0,3 / 0,2 / 1,0 / 0,-4 /",
        "relations": {
            "rightFist_rightPawn": [
                "0,0"
            ],
            "leftFist_scallop": [
                "0,1",
                "2,3"
            ],
            "leftPawn_shield": [
                "0,-1"
            ],
            "rightFist_scallop": [
                "0,3"
            ],
            "left5-1_pairedEdges": [
                "0,-3"
            ],
            "3-1-2_pairedEdges": [
                "0,5"
            ],
            "4-1-1_pairedEdges": [
                "0,-5",
                "2,-3"
            ],
            "3-2-1_parallelEdges": [
                "0,6"
            ],
            "leftFist_rightPawn": [
                "2,0"
            ],
            "rightPawn_scallop": [
                "2,1"
            ],
            "rightFist_shield": [
                "2,-1"
            ],
            "3-2-1_pairedEdges": [
                "2,5"
            ],
            "right5-1_pairedEdges": [
                "2,-5"
            ],
            "4-1-1_parallelEdges": [
                "2,6"
            ],
            "parallelEdges_4-1-1": [
                "-4,0"
            ],
            "pairedEdges_left5-1": [
                "-4,1"
            ],
            "pairedEdges_3-1-2": [
                "-4,-1"
            ],
            "pairedEdges_4-1-1": [
                "-4,3",
                "6,1"
            ],
            "scallop_rightFist": [
                "-4,-3",
                "6,-5"
            ],
            "shield_leftFist": [
                "-4,5"
            ],
            "scallop_leftPawn": [
                "-4,-5"
            ],
            "leftPawn_rightFist": [
                "-4,6"
            ],
            "parallelEdges_3-1-2": [
                "6,0"
            ],
            "pairedEdges_3-2-1": [
                "6,-1"
            ],
            "pairedEdges_right5-1": [
                "6,3"
            ],
            "scallop_leftFist": [
                "6,-3"
            ],
            "shield_rightPawn": [
                "6,5"
            ],
            "leftPawn_leftFist": [
                "6,6"
            ]
        }
    },
    "perpendicularEdges_2-2-2": {
        "setup": "0,0 / 0,3 / 0,2 / 0,1 / -2,3 / -5,0 /",
        "relations": {
            "3-1-2_pairedEdges": [
                "0,0"
            ],
            "rightFist_shield": [
                "0,2"
            ],
            "3-2-1_pairedEdges": [
                "2,0"
            ],
            "leftFist_shield": [
                "2,2"
            ],
            "shield_rightFist": [
                "-4,0"
            ],
            "pairedEdges_3-1-2": [
                "-4,2"
            ],
            "shield_leftFist": [
                "6,0"
            ],
            "pairedEdges_3-2-1": [
                "6,2"
            ]
        }
    },
    "perpendicularEdges_left4-2": {
        "setup": "0,0 / 0,3 / 0,2 / 0,1 / 4,0 /",
        "relations": {
            "rightPawn_rightFist": [
                "0,0"
            ],
            "shield_leftPawn": [
                "0,1"
            ],
            "scallop_leftFist": [
                "0,-1",
                "-2,-3"
            ],
            "pairedEdges_left5-1": [
                "0,3"
            ],
            "scallop_rightFist": [
                "0,-3"
            ],
            "pairedEdges_4-1-1": [
                "0,5",
                "-2,3"
            ],
            "pairedEdges_3-1-2": [
                "0,-5"
            ],
            "parallelEdges_3-2-1": [
                "0,6"
            ],
            "rightPawn_leftFist": [
                "-2,0"
            ],
            "shield_rightFist": [
                "-2,1"
            ],
            "scallop_rightPawn": [
                "-2,-1"
            ],
            "pairedEdges_right5-1": [
                "-2,5"
            ],
            "pairedEdges_3-2-1": [
                "-2,-5"
            ],
            "parallelEdges_4-1-1": [
                "-2,6"
            ],
            "4-1-1_parallelEdges": [
                "4,0"
            ],
            "3-1-2_pairedEdges": [
                "4,1"
            ],
            "left5-1_pairedEdges": [
                "4,-1"
            ],
            "rightFist_scallop": [
                "4,3",
                "6,5"
            ],
            "4-1-1_pairedEdges": [
                "4,-3",
                "6,-1"
            ],
            "leftPawn_scallop": [
                "4,5"
            ],
            "leftFist_shield": [
                "4,-5"
            ],
            "rightFist_leftPawn": [
                "4,6"
            ],
            "3-1-2_parallelEdges": [
                "6,0"
            ],
            "3-2-1_pairedEdges": [
                "6,1"
            ],
            "leftFist_scallop": [
                "6,3"
            ],
            "right5-1_pairedEdges": [
                "6,-3"
            ],
            "rightPawn_shield": [
                "6,-5"
            ],
            "leftFist_leftPawn": [
                "6,6"
            ]
        }
    },
    "perpendicularEdges_6": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / -4,-3 /",
        "relations": {
            "pairedEdges_left5-1": [
                "0,0"
            ],
            "star_7-1": [
                "0,2",
                "-2,2"
            ],
            "scallop_leftPawn": [
                "0,-2"
            ],
            "pairedEdges_4-1-1": [
                "0,4",
                "-2,0"
            ],
            "6_perpendicularEdges": [
                "0,-4",
                "-2,-4"
            ],
            "scallop_leftFist": [
                "0,6"
            ],
            "scallop_rightFist": [
                "-2,-2"
            ],
            "pairedEdges_right5-1": [
                "-2,4"
            ],
            "scallop_rightPawn": [
                "-2,6"
            ],
            "leftPawn_scallop": [
                "4,0"
            ],
            "perpendicularEdges_6": [
                "4,2",
                "6,2"
            ],
            "left5-1_pairedEdges": [
                "4,-2"
            ],
            "leftFist_scallop": [
                "4,4"
            ],
            "7-1_star": [
                "4,-4",
                "6,-4"
            ],
            "4-1-1_pairedEdges": [
                "4,6",
                "6,-2"
            ],
            "rightFist_scallop": [
                "6,0"
            ],
            "rightPawn_scallop": [
                "6,4"
            ],
            "right5-1_pairedEdges": [
                "6,6"
            ]
        }
    },
    "3-2-1_parallelEdges": {
        "setup": "0,0 / 0,3 / 0,2 / 1,0 / 0,2 /",
        "relations": {
            "rightFist_rightPawn": [
                "0,0"
            ],
            "perpendicularEdges_right4-2": [
                "0,6"
            ],
            "leftFist_shield": [
                "-1,0"
            ],
            "perpendicularEdges_3-3": [
                "-1,6"
            ],
            "kite_leftPawn": [
                "3,0"
            ],
            "pairedEdges_left4-2": [
                "3,6"
            ],
            "right4-2_pairedEdges": [
                "-3,0"
            ],
            "rightPawn_kite": [
                "-3,6"
            ],
            "3-3_perpendicularEdges": [
                "5,0"
            ],
            "shield_rightFist": [
                "5,6"
            ],
            "left4-2_perpendicularEdges": [
                "6,0"
            ],
            "leftPawn_leftFist": [
                "6,6"
            ]
        }
    },
    "3-2-1_pairedEdges": {
        "setup": "0,0 / 0,3 / 0,2 / 1,0 / -3,2 /",
        "relations": {
            "rightFist_rightPawn": [
                "0,0"
            ],
            "leftPawn_rightPawn": [
                "0,2",
                "6,-4"
            ],
            "leftFist_rightPawn": [
                "0,-2"
            ],
            "perpendicularEdges_3-3": [
                "0,4"
            ],
            "perpendicularEdges_right5-1": [
                "0,-4"
            ],
            "perpendicularEdges_3-2-1": [
                "0,6"
            ],
            "leftFist_shield": [
                "-1,0"
            ],
            "rightFist_shield": [
                "-1,2"
            ],
            "rightPawn_shield": [
                "-1,-2",
                "-3,4",
                "-3,-4"
            ],
            "perpendicularEdges_left4-2": [
                "-1,4"
            ],
            "perpendicularEdges_right4-2": [
                "-1,-4"
            ],
            "perpendicularEdges_2-2-2": [
                "-1,6"
            ],
            "barrel_leftPawn": [
                "3,0"
            ],
            "shield_leftPawn": [
                "3,2",
                "3,-2",
                "5,4"
            ],
            "pairedEdges_left5-1": [
                "3,4"
            ],
            "pairedEdges_3-3": [
                "3,-4"
            ],
            "pairedEdges_3-1-2": [
                "3,6"
            ],
            "3-2-1_pairedEdges": [
                "-3,0"
            ],
            "3-3_pairedEdges": [
                "-3,2"
            ],
            "right5-1_pairedEdges": [
                "-3,-2"
            ],
            "rightPawn_barrel": [
                "-3,6"
            ],
            "2-2-2_perpendicularEdges": [
                "5,0"
            ],
            "left4-2_perpendicularEdges": [
                "5,2"
            ],
            "right4-2_perpendicularEdges": [
                "5,-2"
            ],
            "shield_leftFist": [
                "5,-4"
            ],
            "shield_rightFist": [
                "5,6"
            ],
            "3-1-2_perpendicularEdges": [
                "6,0"
            ],
            "left5-1_perpendicularEdges": [
                "6,2"
            ],
            "3-3_perpendicularEdges": [
                "6,-2"
            ],
            "leftPawn_rightFist": [
                "6,4"
            ],
            "leftPawn_leftFist": [
                "6,6"
            ]
        }
    },
    "3-2-1_perpendicularEdges": {
        "setup": "0,0 / 0,3 / 1,0 / -1,4 /",
        "relations": {
            "square_shield": [
                "0,0"
            ],
            "kite_shield": [
                "0,-2"
            ],
            "perpendicularEdges_3-2-1": [
                "0,4"
            ],
            "perpendicularEdges_3-1-2": [
                "0,6",
                "1,4"
            ],
            "kite_rightPawn": [
                "1,0"
            ],
            "square_rightPawn": [
                "1,-2"
            ],
            "perpendicularEdges_4-1-1": [
                "1,6"
            ],
            "3-1-2_pairedEdges": [
                "-2,0"
            ],
            "4-1-1_pairedEdges": [
                "-2,-2"
            ],
            "rightPawn_leftFist": [
                "-2,4"
            ],
            "rightPawn_rightFist": [
                "-2,6"
            ],
            "leftFist_leftPawn": [
                "4,0"
            ],
            "rightFist_leftPawn": [
                "4,-2"
            ],
            "pairedEdges_4-1-1": [
                "4,4"
            ],
            "pairedEdges_3-2-1": [
                "4,6"
            ],
            "4-1-1_perpendicularEdges": [
                "-5,0"
            ],
            "3-2-1_perpendicularEdges": [
                "-5,-2",
                "6,0"
            ],
            "leftPawn_square": [
                "-5,4"
            ],
            "leftPawn_kite": [
                "-5,6"
            ],
            "3-1-2_perpendicularEdges": [
                "6,-2"
            ],
            "shield_kite": [
                "6,4"
            ],
            "shield_square": [
                "6,6"
            ]
        }
    },
    "6_pairedEdges": {
        "setup": "0,0 / 3,3 / 1,2 / 0,4 /",
        "relations": {
            "scallop_scallop": [
                "0,0",
                "2,2",
                "-4,-4",
                "6,6"
            ],
            "pairedEdges_6": [
                "0,2",
                "-2,0",
                "-2,-2",
                "-2,-4",
                "-4,6"
            ],
            "shield_scallop": [
                "0,-2",
                "-4,-2"
            ],
            "pairedEdges_right4-2": [
                "0,4",
                "-4,2"
            ],
            "barrel_scallop": [
                "0,-4",
                "-4,0"
            ],
            "pairedEdges_left4-2": [
                "0,6",
                "-4,4"
            ],
            "6_pairedEdges": [
                "2,0",
                "4,2",
                "4,4",
                "4,6",
                "6,-4"
            ],
            "right4-2_pairedEdges": [
                "2,-2",
                "6,0"
            ],
            "scallop_shield": [
                "2,4",
                "6,4"
            ],
            "left4-2_pairedEdges": [
                "2,-4",
                "6,-2"
            ],
            "scallop_barrel": [
                "2,6",
                "6,2"
            ],
            "star_8": [
                "-2,2",
                "-2,6"
            ],
            "star_6-2": [
                "-2,4"
            ],
            "8_star": [
                "4,0",
                "4,-4"
            ],
            "6-2_star": [
                "4,-2"
            ]
        }
    },
    "6_parallelEdges": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / -2,6 /",
        "relations": {
            "pairedEdges_left5-1": [
                "0,0"
            ],
            "mushroom_scallop": [
                "0,6",
                "-4,6"
            ],
            "scallop_mushroom": [
                "2,0",
                "6,0"
            ],
            "left5-1_pairedEdges": [
                "2,6"
            ],
            "star_8": [
                "-2,0"
            ],
            "parallelEdges_6": [
                "-2,6"
            ],
            "6_parallelEdges": [
                "4,0"
            ],
            "8_star": [
                "4,6"
            ],
            "pairedEdges_right5-1": [
                "-4,0"
            ],
            "right5-1_pairedEdges": [
                "6,6"
            ]
        }
    },
    "6_perpendicularEdges": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 2,3 /",
        "relations": {
            "pairedEdges_left5-1": [
                "0,0"
            ],
            "pairedEdges_4-1-1": [
                "0,-2",
                "4,0"
            ],
            "leftPawn_scallop": [
                "0,4"
            ],
            "rightFist_scallop": [
                "0,6"
            ],
            "star_7-1": [
                "2,0",
                "2,-2"
            ],
            "perpendicularEdges_6": [
                "2,4",
                "2,6"
            ],
            "scallop_leftPawn": [
                "-2,0"
            ],
            "scallop_rightFist": [
                "-2,-2"
            ],
            "left5-1_pairedEdges": [
                "-2,4"
            ],
            "4-1-1_pairedEdges": [
                "-2,6",
                "6,4"
            ],
            "pairedEdges_right5-1": [
                "4,-2"
            ],
            "leftFist_scallop": [
                "4,4"
            ],
            "rightPawn_scallop": [
                "4,6"
            ],
            "6_perpendicularEdges": [
                "-4,0",
                "-4,-2"
            ],
            "7-1_star": [
                "-4,4",
                "-4,6"
            ],
            "scallop_leftFist": [
                "6,0"
            ],
            "scallop_rightPawn": [
                "6,-2"
            ],
            "right5-1_pairedEdges": [
                "6,6"
            ]
        }
    },
    "6-2_star": {
        "setup": "0,0 / 0,3 / 1,-4 / 2,4 /",
        "relations": {
            "leftPawn_leftPawn": [
                "0,0"
            ],
            "scallop_shield": [
                "1,0",
                "5,0"
            ],
            "shield_scallop": [
                "-1,0",
                "-5,0"
            ],
            "6_pairedEdges": [
                "3,0"
            ],
            "pairedEdges_6": [
                "-3,0"
            ],
            "rightPawn_rightPawn": [
                "6,0"
            ]
        }
    },
    "8_star": {
        "setup": "0,0 / 3,3 / 1,2 / 2,4 /",
        "relations": {
            "scallop_scallop": [
                "0,0",
                "6,0"
            ],
            "6_pairedEdges": [
                "2,0",
                "4,0"
            ],
            "pairedEdges_6": [
                "-2,0",
                "-4,0"
            ],
            "6_parallelEdges": [
                "3,0"
            ],
            "parallelEdges_6": [
                "-3,0"
            ]
        }
    },
    "3-1-2_perpendicularEdges": {
        "setup": "0,0 / 0,3 / 1,0 / 0,4 /",
        "relations": {
            "square_shield": [
                "0,0"
            ],
            "kite_shield": [
                "0,2"
            ],
            "perpendicularEdges_3-1-2": [
                "0,-4"
            ],
            "perpendicularEdges_3-2-1": [
                "0,6",
                "-1,-4"
            ],
            "kite_leftPawn": [
                "-1,0"
            ],
            "square_leftPawn": [
                "-1,2"
            ],
            "perpendicularEdges_4-1-1": [
                "-1,6"
            ],
            "3-2-1_pairedEdges": [
                "2,0"
            ],
            "4-1-1_pairedEdges": [
                "2,2"
            ],
            "leftPawn_rightFist": [
                "2,-4"
            ],
            "leftPawn_leftFist": [
                "2,6"
            ],
            "rightFist_rightPawn": [
                "-4,0"
            ],
            "leftFist_rightPawn": [
                "-4,2"
            ],
            "pairedEdges_4-1-1": [
                "-4,-4"
            ],
            "pairedEdges_3-1-2": [
                "-4,6"
            ],
            "4-1-1_perpendicularEdges": [
                "5,0"
            ],
            "3-1-2_perpendicularEdges": [
                "5,2",
                "6,0"
            ],
            "rightPawn_square": [
                "5,-4"
            ],
            "rightPawn_kite": [
                "5,6"
            ],
            "3-2-1_perpendicularEdges": [
                "6,2"
            ],
            "shield_kite": [
                "6,-4"
            ],
            "shield_square": [
                "6,6"
            ]
        }
    },
    "3-1-2_pairedEdges": {
        "setup": "0,0 / 0,3 / 0,2 / 0,1 / -2,3 /",
        "relations": {
            "rightPawn_rightFist": [
                "0,0"
            ],
            "rightPawn_leftFist": [
                "0,2"
            ],
            "rightPawn_leftPawn": [
                "0,-2",
                "6,4"
            ],
            "right5-1_perpendicularEdges": [
                "0,4"
            ],
            "3-3_perpendicularEdges": [
                "0,-4"
            ],
            "3-2-1_perpendicularEdges": [
                "0,6"
            ],
            "shield_leftFist": [
                "1,0"
            ],
            "shield_rightPawn": [
                "1,2",
                "3,4",
                "3,-4"
            ],
            "shield_rightFist": [
                "1,-2"
            ],
            "right4-2_perpendicularEdges": [
                "1,4"
            ],
            "left4-2_perpendicularEdges": [
                "1,-4"
            ],
            "2-2-2_perpendicularEdges": [
                "1,6"
            ],
            "pairedEdges_3-2-1": [
                "3,0"
            ],
            "pairedEdges_right5-1": [
                "3,2"
            ],
            "pairedEdges_3-3": [
                "3,-2"
            ],
            "barrel_rightPawn": [
                "3,6"
            ],
            "leftPawn_barrel": [
                "-3,0"
            ],
            "leftPawn_shield": [
                "-3,2",
                "-3,-2",
                "-5,-4"
            ],
            "3-3_pairedEdges": [
                "-3,4"
            ],
            "left5-1_pairedEdges": [
                "-3,-4"
            ],
            "3-1-2_pairedEdges": [
                "-3,6"
            ],
            "perpendicularEdges_2-2-2": [
                "-5,0"
            ],
            "perpendicularEdges_right4-2": [
                "-5,2"
            ],
            "perpendicularEdges_left4-2": [
                "-5,-2"
            ],
            "leftFist_shield": [
                "-5,4"
            ],
            "rightFist_shield": [
                "-5,6"
            ],
            "perpendicularEdges_3-1-2": [
                "6,0"
            ],
            "perpendicularEdges_3-3": [
                "6,2"
            ],
            "perpendicularEdges_left5-1": [
                "6,-2"
            ],
            "rightFist_leftPawn": [
                "6,-4"
            ],
            "leftFist_leftPawn": [
                "6,6"
            ]
        }
    },
    "3-1-2_parallelEdges": {
        "setup": "0,0 / 0,3 / 0,2 / 0,1 / -2,0 /",
        "relations": {
            "rightPawn_rightFist": [
                "0,0"
            ],
            "right4-2_perpendicularEdges": [
                "0,6"
            ],
            "shield_leftFist": [
                "1,0"
            ],
            "3-3_perpendicularEdges": [
                "1,6"
            ],
            "pairedEdges_right4-2": [
                "3,0"
            ],
            "kite_rightPawn": [
                "3,6"
            ],
            "leftPawn_kite": [
                "-3,0"
            ],
            "left4-2_pairedEdges": [
                "-3,6"
            ],
            "perpendicularEdges_3-3": [
                "-5,0"
            ],
            "rightFist_shield": [
                "-5,6"
            ],
            "perpendicularEdges_left4-2": [
                "6,0"
            ],
            "leftFist_leftPawn": [
                "6,6"
            ]
        }
    },
    "4-1-1_perpendicularEdges": {
        "setup": "0,0 / 0,3 / 1,2 / 0,2 /",
        "relations": {
            "kite_scallop": [
                "0,0",
                "2,-2"
            ],
            "square_scallop": [
                "0,-2",
                "2,0"
            ],
            "perpendicularEdges_4-1-1": [
                "0,4",
                "-1,6",
                "2,6",
                "3,4"
            ],
            "perpendicularEdges_left5-1": [
                "0,6"
            ],
            "square_rightPawn": [
                "-1,0"
            ],
            "kite_rightPawn": [
                "-1,-2"
            ],
            "perpendicularEdges_3-1-2": [
                "-1,4"
            ],
            "perpendicularEdges_right5-1": [
                "2,4"
            ],
            "kite_leftPawn": [
                "3,0"
            ],
            "square_leftPawn": [
                "3,-2"
            ],
            "perpendicularEdges_3-2-1": [
                "3,6"
            ],
            "3-1-2_perpendicularEdges": [
                "-3,0"
            ],
            "4-1-1_perpendicularEdges": [
                "-3,-2",
                "-4,0",
                "5,0",
                "6,-2"
            ],
            "rightPawn_square": [
                "-3,4"
            ],
            "rightPawn_kite": [
                "-3,6"
            ],
            "left5-1_perpendicularEdges": [
                "-4,-2"
            ],
            "scallop_kite": [
                "-4,4",
                "6,6"
            ],
            "scallop_square": [
                "-4,6",
                "6,4"
            ],
            "3-2-1_perpendicularEdges": [
                "5,-2"
            ],
            "leftPawn_kite": [
                "5,4"
            ],
            "leftPawn_square": [
                "5,6"
            ],
            "right5-1_perpendicularEdges": [
                "6,0"
            ]
        }
    },
    "4-1-1_parallelEdges": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 / 3,-2 /",
        "relations": {
            "left5-1_perpendicularEdges": [
                "0,0"
            ],
            "scallop_leftFist": [
                "0,6"
            ],
            "left4-2_perpendicularEdges": [
                "-1,0"
            ],
            "leftPawn_rightFist": [
                "-1,6"
            ],
            "right5-1_perpendicularEdges": [
                "2,0"
            ],
            "scallop_rightFist": [
                "2,6"
            ],
            "right4-2_perpendicularEdges": [
                "3,0"
            ],
            "rightPawn_leftFist": [
                "3,6"
            ],
            "rightFist_leftPawn": [
                "-3,0"
            ],
            "perpendicularEdges_left4-2": [
                "-3,6"
            ],
            "leftFist_scallop": [
                "-4,0"
            ],
            "perpendicularEdges_left5-1": [
                "-4,6"
            ],
            "leftFist_rightPawn": [
                "5,0"
            ],
            "perpendicularEdges_right4-2": [
                "5,6"
            ],
            "rightFist_scallop": [
                "6,0"
            ],
            "perpendicularEdges_right5-1": [
                "6,6"
            ]
        }
    },
    "4-1-1_pairedEdges": {
        "setup": "0,0 / 0,3 / 1,-4 / 0,4 /",
        "relations": {
            "leftPawn_leftPawn": [
                "0,0",
                "2,2"
            ],
            "perpendicularEdges_left5-1": [
                "0,2"
            ],
            "rightFist_leftPawn": [
                "0,-2"
            ],
            "perpendicularEdges_3-1-2": [
                "0,4"
            ],
            "leftFist_leftPawn": [
                "0,-4"
            ],
            "perpendicularEdges_3-3": [
                "0,6",
                "-4,2"
            ],
            "rightFist_scallop": [
                "-1,0",
                "-3,-2"
            ],
            "perpendicularEdges_6": [
                "-1,2",
                "-3,6"
            ],
            "leftFist_scallop": [
                "-1,-2",
                "-3,-4"
            ],
            "perpendicularEdges_right4-2": [
                "-1,4",
                "-3,2"
            ],
            "rightPawn_scallop": [
                "-1,-4"
            ],
            "perpendicularEdges_left4-2": [
                "-1,6",
                "-3,4"
            ],
            "left5-1_perpendicularEdges": [
                "2,0"
            ],
            "3-1-2_perpendicularEdges": [
                "2,-2"
            ],
            "leftPawn_rightFist": [
                "2,4"
            ],
            "3-3_perpendicularEdges": [
                "2,-4",
                "6,0"
            ],
            "leftPawn_leftFist": [
                "2,6"
            ],
            "6_perpendicularEdges": [
                "3,0",
                "5,-4"
            ],
            "scallop_rightFist": [
                "3,2",
                "5,4"
            ],
            "right4-2_perpendicularEdges": [
                "3,-2",
                "5,0"
            ],
            "scallop_leftFist": [
                "3,4",
                "5,6"
            ],
            "left4-2_perpendicularEdges": [
                "3,-4",
                "5,-2"
            ],
            "scallop_rightPawn": [
                "3,6"
            ],
            "leftPawn_scallop": [
                "-3,0"
            ],
            "rightFist_rightPawn": [
                "-4,0"
            ],
            "leftFist_rightPawn": [
                "-4,-2"
            ],
            "perpendicularEdges_3-2-1": [
                "-4,4"
            ],
            "rightPawn_rightPawn": [
                "-4,-4",
                "6,6"
            ],
            "perpendicularEdges_right5-1": [
                "-4,6"
            ],
            "scallop_leftPawn": [
                "5,2"
            ],
            "rightPawn_rightFist": [
                "6,2"
            ],
            "3-2-1_perpendicularEdges": [
                "6,-2"
            ],
            "rightPawn_leftFist": [
                "6,4"
            ],
            "right5-1_perpendicularEdges": [
                "6,-4"
            ]
        }
    },
    "left5-1_perpendicularEdges": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "square_scallop": [
                "0,-2"
            ],
            "perpendicularEdges_right5-1": [
                "0,4"
            ],
            "perpendicularEdges_4-1-1": [
                "0,6"
            ],
            "4-1-1_pairedEdges": [
                "2,0"
            ],
            "3-2-1_pairedEdges": [
                "2,-2"
            ],
            "leftPawn_rightPawn": [
                "2,4",
                "-4,-2"
            ],
            "leftPawn_leftFist": [
                "2,6"
            ],
            "right5-1_parallelEdges": [
                "3,0"
            ],
            "4-1-1_parallelEdges": [
                "3,-2"
            ],
            "scallop_leftFist": [
                "3,4"
            ],
            "scallop_rightFist": [
                "3,6"
            ],
            "leftFist_scallop": [
                "-3,0"
            ],
            "rightFist_scallop": [
                "-3,-2"
            ],
            "parallelEdges_4-1-1": [
                "-3,4"
            ],
            "parallelEdges_left5-1": [
                "-3,6"
            ],
            "rightFist_rightPawn": [
                "-4,0"
            ],
            "pairedEdges_3-1-2": [
                "-4,4"
            ],
            "pairedEdges_4-1-1": [
                "-4,6"
            ],
            "4-1-1_perpendicularEdges": [
                "6,0"
            ],
            "left5-1_perpendicularEdges": [
                "6,-2"
            ],
            "scallop_square": [
                "6,4"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "left5-1_pairedEdges": {
        "setup": "0,0 / 0,3 / 1,2 / -3,2 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "mushroom_scallop": [
                "0,2",
                "0,-2"
            ],
            "parallelEdges_right4-2": [
                "0,4"
            ],
            "parallelEdges_6": [
                "0,-4"
            ],
            "parallelEdges_left4-2": [
                "0,6"
            ],
            "shield_rightPawn": [
                "-1,0"
            ],
            "barrel_rightPawn": [
                "-1,2"
            ],
            "scallop_rightPawn": [
                "-1,-2",
                "-3,-4"
            ],
            "pairedEdges_3-3": [
                "-1,4"
            ],
            "pairedEdges_right5-1": [
                "-1,-4"
            ],
            "pairedEdges_3-2-1": [
                "-1,6"
            ],
            "rightFist_scallop": [
                "3,0"
            ],
            "leftPawn_scallop": [
                "3,2",
                "5,4"
            ],
            "leftFist_scallop": [
                "3,-2"
            ],
            "perpendicularEdges_6": [
                "3,4"
            ],
            "perpendicularEdges_left4-2": [
                "3,-4"
            ],
            "perpendicularEdges_right4-2": [
                "3,6"
            ],
            "left4-2_perpendicularEdges": [
                "-3,0"
            ],
            "right4-2_perpendicularEdges": [
                "-3,2"
            ],
            "6_perpendicularEdges": [
                "-3,-2"
            ],
            "scallop_rightFist": [
                "-3,4"
            ],
            "scallop_leftFist": [
                "-3,6"
            ],
            "3-1-2_pairedEdges": [
                "5,0"
            ],
            "left5-1_pairedEdges": [
                "5,2"
            ],
            "3-3_pairedEdges": [
                "5,-2"
            ],
            "leftPawn_barrel": [
                "5,-4"
            ],
            "leftPawn_shield": [
                "5,6"
            ],
            "right4-2_parallelEdges": [
                "6,0"
            ],
            "6_parallelEdges": [
                "6,2"
            ],
            "left4-2_parallelEdges": [
                "6,-2"
            ],
            "scallop_mushroom": [
                "6,4",
                "6,-4"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "left5-1_parallelEdges": {
        "setup": "0,0 / 0,3 / 1,2 / 0,-4 / 0,-3 /",
        "relations": {
            "perpendicularEdges_left5-1": [
                "0,0"
            ],
            "rightFist_scallop": [
                "0,6"
            ],
            "leftPawn_mushroom": [
                "2,0"
            ],
            "left4-2_pairedEdges": [
                "2,6"
            ],
            "scallop_barrel": [
                "3,0"
            ],
            "left5-1_parallelEdges": [
                "3,6"
            ],
            "parallelEdges_right5-1": [
                "-3,0"
            ],
            "barrel_scallop": [
                "-3,6"
            ],
            "pairedEdges_right4-2": [
                "-4,0"
            ],
            "mushroom_rightPawn": [
                "-4,6"
            ],
            "scallop_leftFist": [
                "6,0"
            ],
            "right5-1_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "leftPawn_rightPawn": {
        "setup": "0,0 / 0,3 / 1,2 / 0,4 / 2,4 /",
        "relations": {
            "left5-1_perpendicularEdges": [
                "0,0",
                "4,-4"
            ],
            "leftPawn_rightPawn": [
                "0,2",
                "-2,0",
                "4,6",
                "6,-4"
            ],
            "4-4_star": [
                "0,-4"
            ],
            "3-2-1_pairedEdges": [
                "0,6",
                "-2,-4"
            ],
            "perpendicularEdges_right5-1": [
                "-2,2",
                "6,6"
            ],
            "square_barrel": [
                "-2,6"
            ],
            "barrel_square": [
                "4,0"
            ],
            "pairedEdges_3-1-2": [
                "4,2",
                "6,0"
            ],
            "star_4-4": [
                "6,2"
            ]
        }
    },
    "leftPawn_scallop": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-4 / 2,3 /",
        "relations": {
            "pairedEdges_right5-1": [
                "0,0",
                "2,2"
            ],
            "scallop_rightPawn": [
                "0,2",
                "2,4",
                "2,6"
            ],
            "pairedEdges_4-1-1": [
                "0,-2"
            ],
            "6_perpendicularEdges": [
                "0,4"
            ],
            "barrel_rightFist": [
                "0,-4"
            ],
            "right4-2_perpendicularEdges": [
                "0,6"
            ],
            "star_7-1": [
                "2,0"
            ],
            "star_5-3": [
                "2,-2"
            ],
            "pairedEdges_3-3": [
                "2,-4"
            ],
            "leftPawn_scallop": [
                "-4,0",
                "-4,-2",
                "6,-4"
            ],
            "3-3_pairedEdges": [
                "-4,2"
            ],
            "5-3_star": [
                "-4,4"
            ],
            "left5-1_pairedEdges": [
                "-4,-4",
                "6,6"
            ],
            "7-1_star": [
                "-4,6"
            ],
            "perpendicularEdges_left4-2": [
                "6,0"
            ],
            "leftFist_barrel": [
                "6,2"
            ],
            "perpendicularEdges_6": [
                "6,-2"
            ],
            "4-1-1_pairedEdges": [
                "6,4"
            ]
        }
    },
    "leftPawn_barrel": {
        "setup": "0,0 / 0,3 / 1,2 / 3,4 / 3,6 /",
        "relations": {
            "left4-2_parallelEdges": [
                "0,0"
            ],
            "3-3_pairedEdges": [
                "0,1"
            ],
            "left5-1_pairedEdges": [
                "0,-1"
            ],
            "3-1-2_pairedEdges": [
                "0,3"
            ],
            "rightFist_mushroom": [
                "-2,0"
            ],
            "leftFist_scallop": [
                "-2,1"
            ],
            "leftPawn_barrel": [
                "-2,-1"
            ],
            "rightFist_shield": [
                "-2,3"
            ],
            "mushroom_leftFist": [
                "4,0"
            ],
            "scallop_rightFist": [
                "4,1"
            ],
            "barrel_rightPawn": [
                "4,-1"
            ],
            "shield_leftFist": [
                "4,3"
            ],
            "parallelEdges_right4-2": [
                "6,0"
            ],
            "pairedEdges_3-3": [
                "6,1"
            ],
            "pairedEdges_right5-1": [
                "6,-1"
            ],
            "pairedEdges_3-2-1": [
                "6,3"
            ]
        }
    },
    "leftPawn_shield": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-4 / 6,5 /",
        "relations": {
            "pairedEdges_right5-1": [
                "0,0"
            ],
            "shield_rightPawn": [
                "0,2",
                "-2,0"
            ],
            "pairedEdges_3-2-1": [
                "0,-2",
                "0,6",
                "-2,-4"
            ],
            "pairedEdges_3-3": [
                "0,4"
            ],
            "star_5-3": [
                "0,-4"
            ],
            "left4-2_perpendicularEdges": [
                "-2,2"
            ],
            "scallop_leftFist": [
                "-2,-2"
            ],
            "shield_rightFist": [
                "-2,4"
            ],
            "barrel_leftFist": [
                "-2,6"
            ],
            "rightFist_barrel": [
                "4,0"
            ],
            "3-1-2_pairedEdges": [
                "4,2",
                "6,0",
                "6,4"
            ],
            "leftFist_shield": [
                "4,-2"
            ],
            "rightFist_scallop": [
                "4,4"
            ],
            "perpendicularEdges_right4-2": [
                "4,-4"
            ],
            "leftPawn_shield": [
                "4,6",
                "6,-4"
            ],
            "5-3_star": [
                "6,2"
            ],
            "3-3_pairedEdges": [
                "6,-2"
            ],
            "left5-1_pairedEdges": [
                "6,6"
            ]
        }
    },
    "leftPawn_rightFist": {
        "setup": "0,0 / 0,3 / 1,0 / 0,-2 / -4,2 /",
        "relations": {
            "perpendicularEdges_3-2-1": [
                "0,0"
            ],
            "perpendicularEdges_3-3": [
                "0,-2"
            ],
            "parallelEdges_4-1-1": [
                "0,3"
            ],
            "perpendicularEdges_right4-2": [
                "0,-3"
            ],
            "pairedEdges_3-1-2": [
                "0,4"
            ],
            "pairedEdges_4-1-1": [
                "0,6"
            ],
            "rightFist_leftFist": [
                "-2,0",
                "-2,-3",
                "4,3",
                "4,6"
            ],
            "leftPawn_rightFist": [
                "-2,-2"
            ],
            "mushroom_kite": [
                "-2,3"
            ],
            "scallop_square": [
                "-2,4"
            ],
            "shield_kite": [
                "-2,6"
            ],
            "kite_shield": [
                "4,0"
            ],
            "square_scallop": [
                "4,-2"
            ],
            "kite_mushroom": [
                "4,-3"
            ],
            "leftFist_rightPawn": [
                "4,4"
            ],
            "4-1-1_pairedEdges": [
                "6,0"
            ],
            "3-2-1_pairedEdges": [
                "6,-2"
            ],
            "left4-2_perpendicularEdges": [
                "6,3"
            ],
            "4-1-1_parallelEdges": [
                "6,-3"
            ],
            "3-3_perpendicularEdges": [
                "6,4"
            ],
            "3-1-2_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "leftPawn_square": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / 4,-5 /",
        "relations": {
            "perpendicularEdges_3-1-2": [
                "0,0"
            ],
            "perpendicularEdges_4-1-1": [
                "0,-1"
            ],
            "leftPawn_square": [
                "-2,0"
            ],
            "rightFist_kite": [
                "-2,-1"
            ],
            "square_rightPawn": [
                "4,0"
            ],
            "kite_leftFist": [
                "4,-1"
            ],
            "3-2-1_perpendicularEdges": [
                "6,0"
            ],
            "4-1-1_perpendicularEdges": [
                "6,-1"
            ]
        }
    },
    "leftPawn_mushroom": {
        "setup": "0,0 / 3,3 / 1,0 / 2,-2 / 4,-5 /",
        "relations": {
            "pairedEdges_right4-2": [
                "0,0",
                "0,5"
            ],
            "parallelEdges_right5-1": [
                "0,-1"
            ],
            "parallelEdges_3-3": [
                "0,6"
            ],
            "scallop_leftFist": [
                "-2,0"
            ],
            "mushroom_rightPawn": [
                "-2,-1"
            ],
            "barrel_leftFist": [
                "-2,5"
            ],
            "mushroom_rightFist": [
                "-2,6"
            ],
            "leftFist_mushroom": [
                "4,0"
            ],
            "rightFist_barrel": [
                "4,-1"
            ],
            "leftPawn_mushroom": [
                "4,5"
            ],
            "rightFist_scallop": [
                "4,6"
            ],
            "3-3_parallelEdges": [
                "6,0"
            ],
            "left4-2_pairedEdges": [
                "6,-1",
                "6,6"
            ],
            "left5-1_parallelEdges": [
                "6,5"
            ]
        }
    },
    "leftPawn_leftFist": {
        "setup": "0,0 / 0,3 / 0,2 / 1,6 /",
        "relations": {
            "square_mushroom": [
                "0,0"
            ],
            "kite_barrel": [
                "0,-1"
            ],
            "rightFist_rightPawn": [
                "0,3",
                "0,6",
                "6,-1"
            ],
            "square_shield": [
                "0,-3"
            ],
            "leftPawn_leftFist": [
                "0,5",
                "6,0",
                "6,-3"
            ],
            "3-2-1_parallelEdges": [
                "2,0"
            ],
            "4-1-1_pairedEdges": [
                "2,-1"
            ],
            "3-1-2_perpendicularEdges": [
                "2,3"
            ],
            "3-2-1_pairedEdges": [
                "2,-3"
            ],
            "left5-1_perpendicularEdges": [
                "2,5"
            ],
            "left4-2_perpendicularEdges": [
                "2,6"
            ],
            "perpendicularEdges_right4-2": [
                "-4,0"
            ],
            "perpendicularEdges_right5-1": [
                "-4,-1"
            ],
            "pairedEdges_3-1-2": [
                "-4,3"
            ],
            "perpendicularEdges_3-2-1": [
                "-4,-3"
            ],
            "pairedEdges_4-1-1": [
                "-4,5"
            ],
            "parallelEdges_3-1-2": [
                "-4,6"
            ],
            "shield_square": [
                "6,3"
            ],
            "barrel_kite": [
                "6,5"
            ],
            "mushroom_square": [
                "6,6"
            ]
        }
    },
    "leftPawn_kite": {
        "setup": "0,0 / 0,3 / 1,0 / -1,-2 / 6,-5 /",
        "relations": {
            "perpendicularEdges_3-1-2": [
                "0,0"
            ],
            "parallelEdges_3-2-1": [
                "0,3"
            ],
            "pairedEdges_right4-2": [
                "0,-3"
            ],
            "perpendicularEdges_4-1-1": [
                "0,6"
            ],
            "rightFist_square": [
                "-2,0"
            ],
            "mushroom_leftFist": [
                "-2,3"
            ],
            "shield_leftFist": [
                "-2,-3"
            ],
            "leftPawn_kite": [
                "-2,6"
            ],
            "kite_rightPawn": [
                "4,0"
            ],
            "rightFist_shield": [
                "4,3"
            ],
            "rightFist_mushroom": [
                "4,-3"
            ],
            "square_leftFist": [
                "4,6"
            ],
            "4-1-1_perpendicularEdges": [
                "6,0"
            ],
            "left4-2_pairedEdges": [
                "6,3"
            ],
            "3-1-2_parallelEdges": [
                "6,-3"
            ],
            "3-2-1_perpendicularEdges": [
                "6,6"
            ]
        }
    },
    "leftPawn_leftPawn": {
        "setup": "0,0 / 0,3 / 1,-4 /",
        "relations": {
            "leftFist_leftFist": [
                "0,0"
            ],
            "perpendicularEdges_3-3": [
                "0,-2",
                "-4,6"
            ],
            "4-1-1_pairedEdges": [
                "0,4",
                "2,6"
            ],
            "kite_scallop": [
                "0,6"
            ],
            "3-3_perpendicularEdges": [
                "2,0",
                "6,4"
            ],
            "leftPawn_leftPawn": [
                "2,-2"
            ],
            "6-2_star": [
                "2,4"
            ],
            "pairedEdges_4-1-1": [
                "-4,0",
                "6,-2"
            ],
            "star_6-2": [
                "-4,-2"
            ],
            "rightPawn_rightPawn": [
                "-4,4"
            ],
            "scallop_kite": [
                "6,0"
            ],
            "rightFist_rightFist": [
                "6,6"
            ]
        }
    },
    "right4-2_pairedEdges": {
        "setup": "0,0 / 3,3 / 1,0 / 0,4 /",
        "relations": {
            "shield_shield": [
                "0,0",
                "6,6"
            ],
            "scallop_shield": [
                "0,2",
                "2,4",
                "2,-4",
                "4,6"
            ],
            "barrel_shield": [
                "0,-2"
            ],
            "pairedEdges_left4-2": [
                "0,4",
                "-2,-4",
                "-4,6"
            ],
            "pairedEdges_right4-2": [
                "0,-4",
                "-2,6",
                "-4,4"
            ],
            "pairedEdges_2-2-2": [
                "0,6"
            ],
            "kite_leftPawn": [
                "-1,0"
            ],
            "mushroom_leftPawn": [
                "-1,2",
                "-1,-2"
            ],
            "parallelEdges_left5-1": [
                "-1,4"
            ],
            "parallelEdges_3-3": [
                "-1,-4"
            ],
            "parallelEdges_3-1-2": [
                "-1,6"
            ],
            "right4-2_pairedEdges": [
                "2,0",
                "4,2",
                "6,-2"
            ],
            "6_pairedEdges": [
                "2,2",
                "4,-2"
            ],
            "left4-2_pairedEdges": [
                "2,-2",
                "4,0",
                "6,2"
            ],
            "scallop_barrel": [
                "2,6",
                "4,-4"
            ],
            "shield_scallop": [
                "-2,0",
                "-4,2",
                "-4,-2",
                "6,-4"
            ],
            "barrel_scallop": [
                "-2,2",
                "-4,0"
            ],
            "scallop_scallop": [
                "-2,-2",
                "4,4"
            ],
            "pairedEdges_6": [
                "-2,4",
                "-4,-4"
            ],
            "3-2-1_parallelEdges": [
                "5,0"
            ],
            "3-3_parallelEdges": [
                "5,2"
            ],
            "right5-1_parallelEdges": [
                "5,-2"
            ],
            "rightPawn_mushroom": [
                "5,4",
                "5,-4"
            ],
            "rightPawn_kite": [
                "5,6"
            ],
            "2-2-2_pairedEdges": [
                "6,0"
            ],
            "shield_barrel": [
                "6,4"
            ]
        }
    },
    "right4-2_perpendicularEdges": {
        "setup": "0,0 / 0,3 / 0,2 / 0,1 / -2,6 /",
        "relations": {
            "rightPawn_rightFist": [
                "0,0"
            ],
            "rightPawn_leftFist": [
                "0,-2"
            ],
            "4-1-1_parallelEdges": [
                "0,4"
            ],
            "3-1-2_parallelEdges": [
                "0,6"
            ],
            "shield_leftPawn": [
                "1,0"
            ],
            "shield_rightFist": [
                "1,-2"
            ],
            "3-1-2_pairedEdges": [
                "1,4"
            ],
            "3-2-1_pairedEdges": [
                "1,6"
            ],
            "scallop_leftFist": [
                "-1,0",
                "-3,-2"
            ],
            "scallop_rightPawn": [
                "-1,-2"
            ],
            "left5-1_pairedEdges": [
                "-1,4"
            ],
            "4-1-1_pairedEdges": [
                "-1,6",
                "-3,4"
            ],
            "pairedEdges_left5-1": [
                "3,0"
            ],
            "pairedEdges_4-1-1": [
                "3,-2",
                "5,0"
            ],
            "rightFist_scallop": [
                "3,4",
                "5,6"
            ],
            "leftFist_scallop": [
                "3,6"
            ],
            "scallop_rightFist": [
                "-3,0"
            ],
            "right5-1_pairedEdges": [
                "-3,6"
            ],
            "pairedEdges_right5-1": [
                "5,-2"
            ],
            "leftPawn_scallop": [
                "5,4"
            ],
            "pairedEdges_3-1-2": [
                "-5,0"
            ],
            "pairedEdges_3-2-1": [
                "-5,-2"
            ],
            "leftFist_shield": [
                "-5,4"
            ],
            "rightPawn_shield": [
                "-5,6"
            ],
            "parallelEdges_3-2-1": [
                "6,0"
            ],
            "parallelEdges_4-1-1": [
                "6,-2"
            ],
            "rightFist_leftPawn": [
                "6,4"
            ],
            "leftFist_leftPawn": [
                "6,6"
            ]
        }
    },
    "right4-2_parallelEdges": {
        "setup": "0,0 / 0,3 / 1,2 / 3,2 /",
        "relations": {
            "kite_scallop": [
                "0,0"
            ],
            "pairedEdges_right5-1": [
                "0,6"
            ],
            "mushroom_scallop": [
                "2,0"
            ],
            "pairedEdges_left5-1": [
                "2,6"
            ],
            "3-3_pairedEdges": [
                "-2,0"
            ],
            "shield_mushroom": [
                "-2,6"
            ],
            "barrel_leftPawn": [
                "3,0"
            ],
            "parallelEdges_left4-2": [
                "3,6"
            ],
            "right4-2_parallelEdges": [
                "-3,0"
            ],
            "rightPawn_barrel": [
                "-3,6"
            ],
            "mushroom_shield": [
                "4,0"
            ],
            "pairedEdges_3-3": [
                "4,6"
            ],
            "right5-1_pairedEdges": [
                "-4,0"
            ],
            "scallop_mushroom": [
                "-4,6"
            ],
            "left5-1_pairedEdges": [
                "6,0"
            ],
            "scallop_kite": [
                "6,6"
            ]
        }
    },
    "5-3_star": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 0,1 / -2,6 /",
        "relations": {
            "shield_leftPawn": [
                "0,0"
            ],
            "leftPawn_shield": [
                "1,0"
            ],
            "rightPawn_scallop": [
                "-1,0"
            ],
            "scallop_rightPawn": [
                "2,0"
            ],
            "leftPawn_scallop": [
                "-4,0"
            ],
            "scallop_leftPawn": [
                "5,0"
            ],
            "shield_rightPawn": [
                "-5,0"
            ],
            "rightPawn_shield": [
                "6,0"
            ]
        }
    },
    "7-1_star": {
        "setup": "0,0 / 0,3 / 1,2 / 3,-2 / 2,1 / -4,6 /",
        "relations": {
            "scallop_leftPawn": [
                "0,0"
            ],
            "leftPawn_scallop": [
                "-1,0"
            ],
            "6_perpendicularEdges": [
                "2,0",
                "3,0"
            ],
            "perpendicularEdges_6": [
                "-3,0",
                "-4,0"
            ],
            "scallop_rightPawn": [
                "5,0"
            ],
            "rightPawn_scallop": [
                "6,0"
            ]
        }
    }
};
const shape_combinations = {
    "square": [
        "square",
        "barrel",
        "scallop",
        "mushroom",
        "shield",
        "leftPawn",
        "leftFist",
        "rightPawn",
        "rightFist",
        "kite"
    ],
    "kite": [
        "kite",
        "shield",
        "rightPawn",
        "scallop",
        "barrel",
        "rightFist",
        "mushroom",
        "leftFist",
        "leftPawn",
        "square"
    ],
    "barrel": [
        "barrel",
        "square",
        "mushroom",
        "shield",
        "scallop",
        "leftPawn",
        "kite",
        "rightFist",
        "leftFist",
        "rightPawn"
    ],
    "scallop": [
        "scallop",
        "mushroom",
        "shield",
        "barrel",
        "square",
        "leftFist",
        "kite",
        "leftPawn",
        "rightPawn",
        "rightFist"
    ],
    "star": [
        "4-4",
        "6-2",
        "8",
        "5-3",
        "7-1"
    ],
    "4-4": [
        "star"
    ],
    "rightPawn": [
        "rightPawn",
        "rightFist",
        "kite",
        "leftPawn",
        "mushroom",
        "leftFist",
        "shield",
        "scallop",
        "barrel",
        "square"
    ],
    "rightFist": [
        "rightFist",
        "rightPawn",
        "leftFist",
        "leftPawn",
        "kite",
        "barrel",
        "shield",
        "mushroom",
        "scallop",
        "square"
    ],
    "leftFist": [
        "leftFist",
        "shield",
        "scallop",
        "rightPawn",
        "rightFist",
        "square",
        "mushroom",
        "barrel",
        "leftPawn",
        "kite"
    ],
    "shield": [
        "kite",
        "scallop",
        "barrel",
        "shield",
        "leftFist",
        "leftPawn",
        "rightPawn",
        "mushroom",
        "square",
        "rightFist"
    ],
    "mushroom": [
        "barrel",
        "scallop",
        "rightPawn",
        "shield",
        "square",
        "leftFist",
        "rightFist",
        "leftPawn",
        "kite",
        "mushroom"
    ],
    "parallelEdges": [
        "left4-2",
        "2-2-2",
        "3-2-1",
        "6",
        "4-1-1",
        "left5-1",
        "right4-2",
        "3-3",
        "3-1-2",
        "right5-1"
    ],
    "left4-2": [
        "parallelEdges",
        "pairedEdges",
        "perpendicularEdges"
    ],
    "right5-1": [
        "pairedEdges",
        "perpendicularEdges",
        "parallelEdges"
    ],
    "pairedEdges": [
        "right5-1",
        "3-3",
        "left4-2",
        "6",
        "2-2-2",
        "3-2-1",
        "4-1-1",
        "left5-1",
        "right4-2",
        "3-1-2"
    ],
    "3-3": [
        "pairedEdges",
        "perpendicularEdges",
        "parallelEdges"
    ],
    "2-2-2": [
        "parallelEdges",
        "pairedEdges",
        "perpendicularEdges"
    ],
    "perpendicularEdges": [
        "3-3",
        "3-1-2",
        "3-2-1",
        "4-1-1",
        "right5-1",
        "left5-1",
        "right4-2",
        "2-2-2",
        "left4-2",
        "6"
    ],
    "3-2-1": [
        "parallelEdges",
        "pairedEdges",
        "perpendicularEdges"
    ],
    "6": [
        "pairedEdges",
        "parallelEdges",
        "perpendicularEdges"
    ],
    "6-2": [
        "star"
    ],
    "8": [
        "star"
    ],
    "3-1-2": [
        "perpendicularEdges",
        "pairedEdges",
        "parallelEdges"
    ],
    "4-1-1": [
        "perpendicularEdges",
        "parallelEdges",
        "pairedEdges"
    ],
    "left5-1": [
        "perpendicularEdges",
        "pairedEdges",
        "parallelEdges"
    ],
    "leftPawn": [
        "rightPawn",
        "scallop",
        "barrel",
        "shield",
        "rightFist",
        "square",
        "mushroom",
        "leftFist",
        "kite",
        "leftPawn"
    ],
    "right4-2": [
        "pairedEdges",
        "perpendicularEdges",
        "parallelEdges"
    ],
    "5-3": [
        "star"
    ],
    "7-1": [
        "star"
    ]
};