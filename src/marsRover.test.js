const { parseInput, marsRover } = require("./marsRover");

describe("marsRover", () => {
  it("parseInput should process input as expected", () => {
    const input = `4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF`;
    const result = parseInput(input);

    expect(result).toMatchInlineSnapshot(`
[
  "4 8",
  [
    2,
    3,
    "E",
  ],
  "LFRFF",
  [
    0,
    2,
    "N",
  ],
  "FFLFRFF",
]
`);
  });

  it("marsRover should return expected result from test case 1", () => {
    const input = `4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF`;
    const result = marsRover(input);

    expect(result).toMatchInlineSnapshot(`
"(4, 4, E)
(0, 4, W) LOST"
`);
  });

  it("marsRover should return expected result from test case 2", () => {
    const input = `4 8
(2, 3, N) FLLFR
(1, 0, S) FFRLF`;
    const result = marsRover(input);

    expect(result).toMatchInlineSnapshot(`
"(2, 3, W)
(1, 0, S) LOST"
`);
  });
});
