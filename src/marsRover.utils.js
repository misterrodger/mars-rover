const parseInput = (str) => {
  const [dimensions, rover1Start, rover1Moves, rover2Start, rover2Moves] = str.split('(')
    .map(each => each.split(')')).flat()
    .map(each => each.trim());

  const [rover1X, rover1Y, rover1Heading] = rover1Start.split(', ');
  const [rover2X, rover2Y, rover2Heading] = rover2Start.split(', ');

  return [
    dimensions,
    [Number(rover1X), Number(rover1Y), rover1Heading],
    rover1Moves,
    [Number(rover2X), Number(rover2Y), rover2Heading],
    rover2Moves,
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

module.exports = {
  parseInput,
  actionsLookup,
  outOfBoundsCheck,
}
