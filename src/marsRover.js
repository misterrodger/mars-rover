const parseInput = (str) => {
  const [dimensions, rover1Start, rover1Moves, rover2Start, rover2Moves] = str.split('(').map(each => each.split(')')).flat().map(each => each.trim());
  const [rover1X, rover1Y, rover1Heading] = rover1Start.split(', ');
  const [rover2X, rover2Y, rover2Heading] = rover2Start.split(', ');

  return [
    dimensions,
    [Number(rover1X), Number(rover1Y), rover1Heading],
    rover1Moves,
    [Number(rover2X), Number(rover2Y), rover2Heading],
    rover2Moves
  ]
}

const headings = ["N", "E", "S", "W"];

const moveLookup = {
  N: (x, y) => [x, y + 1],
  S: (x, y) => [x, y - 1],
  E: (x, y) => [x + 1, y],
  W: (x, y) => [x - 1, y],
};

const actionsLookup = {
  R: (heading) => headings[(headings.indexOf(heading) + 1) % 4],
  L: (heading) => headings[(headings.indexOf(heading) + 3) % 4],
  move: ({ roverX, roverY, heading }) => moveLookup[heading](roverX, roverY),
};

const outOfBoundsCheck = ({ xLength, yLength, newRoverX, newRoverY }) => newRoverX > xLength
  || newRoverX < 0
  || newRoverY > yLength
  || newRoverY < 0;

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

  return `${rover1Result}\n${rover2Result}`
}

module.exports = {
  parseInput,
  marsRover,
};
