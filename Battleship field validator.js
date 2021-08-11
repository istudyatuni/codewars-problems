// square - [[1, 0], [0, 0]]
function validateWindow(square) {
  let sum = square.reduce((acc, e) => acc + e[0] + e[1], 0)
  switch(sum) {
    case 1: return sum;
    case 3: case 4: return -1;
  }
  // bad when in diagonals
  if(square[0] === [1, 0] && square[1] === [0, 1] ||
     square[0] === [0, 1] && square[1] === [1, 0]) {
    return -1;
  }
  return sum;
}

let copy

// i, j is coordinates of the top left corner
function countShips(square, countWindow, i, j) {
  if(countWindow !== 1 && countWindow !== 2) return;
  let sq = [...square[0], ...square[1]]
  let indexes = sq.findIndex(1) // not finished
}

function validateBattlefield(field) {
  copy = field.map(e => e.map(e => e === 1 ? -1 : e))

  let sq = [[0, 0], [0 ,0]];
  let countWindow
  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      sq = [[field[i][j],     field[i][j + 1]],
            [field[i + 1][j], field[i + 1][j + 1]]]
      countWindow = validateWindow(sq)
      if(countWindow === -1) {
        return false;
      }
      countShips(sq, countWindow, i, j)
    }
  }
  return true;
}
