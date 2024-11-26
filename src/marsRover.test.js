const { getMatrix } = require("./marsRover");

describe('getMatrix', () => {
  it('should return expected results from test case 1', () => {
    const partial = getMatrix('4 8');

    const result1 = partial([2, 3, 'E'], 'LFRFF');
    const result2 = partial([0, 2, 'N'], 'FFLFRFF');
  
    expect(result1).toMatchInlineSnapshot(`"(4, 4, E)"`);
    expect(result2).toMatchInlineSnapshot(`"(0, 4, W) LOST"`);  
  });

  it('should return expected results from test case 2', () => {
    const partial = getMatrix('4 8');

    const result1 = partial([2, 3, 'N'], 'FLLFR');
    const result2 = partial([1, 0, 'S'], 'FFRLF');
  
    expect(result1).toMatchInlineSnapshot(`"(2, 3, W)"`);
    expect(result2).toMatchInlineSnapshot(`"(1, 0, S) LOST"`);  
  });
});
