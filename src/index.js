const { marsRover } = require("./marsRover");

const input1 = `4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF`;

const input2 = `4 8
(2, 3, N) FLLFR
(1, 0, S) FFRLF`;

const result1 = marsRover(input1);
const result2 = marsRover(input2);

console.log(`Results:\n${result1}\n${result2}`);
