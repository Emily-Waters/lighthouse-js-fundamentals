const generateBoard = function(wQPos,bQPos) {
  let board = [];
  //  Create new row
  for (let c = 0; c < 8; c++) {
    board.push([])
    //  Populate columns in row with 0 for empty, or 1 for queen
    for (let r = 0; r < 8; r++) {
      if (c === wQPos[0] && r === wQPos[1]) {
        board[c].push(1)
      } else if (c === bQPos[0] && r === bQPos[1]) {
        board[c].push(1)
      } else {
        board[c].push(0)
      }
    }
  }
  return board
};

const queenThreat = function(board) {
  let queenOne = 0;
  let queenTwo = 0;
  let threatDetected = false;
  //  Find index positions for both queens
  for (let c = 0; c < 8; c++) {
    for (let r = 0; r < 8; r++) {
      if (board[c][r] === 1 && !queenOne) {
        queenOne = [c,r];
      } else if (board[c][r] === 1 && !queenTwo) {
        queenTwo = [c,r];
      }
    }
  }
  //  Absolute value of row - col for both queens will be
  //  equal if they're on diagonals of eachother
  queenSumOne = Math.abs(queenOne[0] - queenOne[1]);
  queenSumTwo = Math.abs(queenTwo[0] - queenTwo[1]);
  //  Check diagonals, check rows or columns
  if (queenSumOne === queenSumTwo){
    threatDetected = true
  } else if (queenOne[0] === queenTwo[0] || queenOne[1] === queenTwo[1] ) {
    threatDetected = true
  }
  return threatDetected
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));


//  EXPECTED OUTPUT :
//  [
//    [0, 0, 0, 0, 0, 1, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 0],
//    [1, 0, 0, 0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 0]
//  ]
//  true

let whiteQueen2 = [0, 0];
let blackQueen2 = [5, 7];
let generatedBoard2 = generateBoard(whiteQueen2, blackQueen2);
console.log(generatedBoard2);
console.log(queenThreat(generatedBoard2));

//  EXPECTED OUTPUT :
//  [
//    [1, 0, 0, 0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 1],
//    [0, 0, 0, 0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0, 0]
//  ]
//  false