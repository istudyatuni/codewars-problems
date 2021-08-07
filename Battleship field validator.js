// here not count number of ships

// square - [[1, 0], [0, 0]]
function validateWindow(square) {
  let sum = 0;
  square.map(e => e).forEach(e => sum += e[0] + e[1])
  switch(sum) {
    case 1: return true; break;
    case 3: case 4: return false; break;
  }
  // bad when in diagonals
  if(square[0] === [1, 0] && square[1] === [0, 1] ||
     square[0] === [0, 1] && square[1] === [1, 0]) {
    return false;
  }
  return true;
}

function validateBattlefield(field) {
  let sq = [[0, 0], [0 ,0]];
  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      sq = [[field[i][j],     field[i][j + 1]],
            [field[i + 1][j], field[i + 1][j + 1]]]
      if(!validateWindow(sq)) {
        return false;
      }
    }
  }
  return true;
}
