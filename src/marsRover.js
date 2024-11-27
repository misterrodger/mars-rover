const { parseInput, actionsLookup, outOfBoundsCheck } = require('./marsRover.utils');

function getMatrix(matrix) {
  const [xLength, yLength] = matrix.split(" ").map(Number);

  return ([roverX, roverY, heading], directions) => {
    for (let x = 0; x < directions.length; x++) {
      if (["L", "R"].includes(directions[x])) {
        heading = actionsLookup[directions[x]](heading);
        continue;
      }
      const [newRoverX, newRoverY] = actionsLookup.move({ roverX, roverY, heading });

      if (outOfBoundsCheck({ xLength, yLength, newRoverX, newRoverY })) {
        return `(${roverX}, ${roverY}, ${heading}) LOST`;
      }

      [roverX, roverY] = [newRoverX, newRoverY];
    }

    return `(${roverX}, ${roverY}, ${heading})`;
  };
}

function marsRover(str) {
  const [dimensions, rover1Start, rover1Moves, rover2Start, rover2Moves] = parseInput(str);

  const matrix = getMatrix(dimensions);

  const rover1Result = matrix(rover1Start, rover1Moves);
  const rover2Result = matrix(rover2Start, rover2Moves);

  return `${rover1Result}\n${rover2Result}`;
}

module.exports = {
  parseInput,
  marsRover,
};
