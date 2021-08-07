// Tic-Tac-Toe Checker
// https://www.codewars.com/kata/525caa5c1bf619d28c000335
/* If we were to set up a Tic-Tac-Toe game, we would want to know whether 
the board's current state is solved, wouldn't we? Our goal is to create 
a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, 
where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe
*/

function isSolved(b) {
  let win_symbol = -1, tmp = 0
  for (let i = 0; i < 3; i++) {
    // rows
    tmp = b[i][0]
    if (b[i][1] === tmp && b[i][2] === tmp) {
      win_symbol = tmp
      break
    }
    // columns
    tmp = b[0][i]
    if (b[1][i] === tmp && b[2][i] === tmp) {
      win_symbol = tmp
      break
    }
  }
  // diagonals
  tmp = b[0][0]
  if (win_symbol === -1 && b[1][1] === tmp && b[2][2] === tmp) {
    win_symbol = tmp
  }
  tmp = b[0][2]
  if (win_symbol === -1 && b[1][1] === tmp && b[2][0] === tmp) {
    win_symbol = tmp
  }
  // check state
  if (win_symbol === -1) {
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        // some cells is empty
        if (b[i][j] === 0)
          return -1
    // all cells isn't empty, so it's draw game
    return 0
  }
  if (win_symbol === 0) {
    // some line fill with 0
    return -1
  }
  return win_symbol
}
