const headings = ['N', 'E', 'S', 'W'];

const moveLookup = {
  'N': (x, y) => [x, y + 1],
  'S': (x, y) => [x, y - 1],
  'E': (x, y) => [x + 1, y],
  'W': (x, y) => [x - 1, y]
};

const actionsLookup = {
  'R': (heading) => headings[(headings.indexOf(heading) + 1) % 4],
  'L': (heading) => headings[(headings.indexOf(heading) + 3) % 4],
  move: ({roverX, roverY, heading}) => moveLookup[heading](roverX, roverY)
};

const outOfBoundsCheck = ({xLength, yLength, newRoverX, newRoverY}) => newRoverX > xLength
    || newRoverX < 0
    || newRoverY > yLength
    || newRoverY < 0;

function getMatrix(matrix) {
  const [xLength, yLength]= matrix.split(' ').map(Number);

  return ([roverX, roverY, heading], directions) => {

    for (let x = 0; x < directions.length; x++) {
      if (['L', 'R'].includes(directions[x])) {
        heading = actionsLookup[directions[x]](heading);
        continue;
      }
      const [newRoverX, newRoverY] = actionsLookup.move({roverX, roverY, heading});

      if (outOfBoundsCheck({xLength, yLength, newRoverX, newRoverY})) {
        return `(${roverX}, ${roverY}, ${heading}) LOST`;
      }

      [roverX, roverY] = [newRoverX, newRoverY];      
    }

    return `(${roverX}, ${roverY}, ${heading})`;
  };
}

const matrix = getMatrix('4 8');

module.exports = {
  getMatrix
}

// console.log(matrix([2, 3, 'E'], 'LFRFF'));  // (4, 4, E)
// console.log(matrix([0, 2, 'N'], 'FFLFRFF'));  // (0, 4, W) LOST

// console.log(matrix([2, 3, 'N'], 'FLLFR'));  // (2, 3, W)
// console.log(matrix([1, 0, 'S'], 'FFRLF'));  // (1, 0, S) LOST
