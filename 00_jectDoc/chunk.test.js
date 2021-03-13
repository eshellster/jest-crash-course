const chunkArray = require("./chunk");

test("chunkArray fucntion exists", () => {
  expect(chunkArray).toBeDefined();
});

test("Chunk an array of 10 values with length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chuckArr = chunkArray(numbers, len);
  expect(chuckArr).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test("Chunk an array of 3 values with length of 1", () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chuckArr = chunkArray(numbers, len);
  expect(chuckArr).toEqual([[1], [2], [3]]);
});
