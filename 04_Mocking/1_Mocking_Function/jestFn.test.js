const got = require("got");
/**
 * https://www.daleseo.com/jest-fn-spy-on/
 */

// Return
const mockFn = jest.fn();

test("함수 모킹", () => {
  mockFn.mockReturnValue("I am a mock!");
  expect(mockFn()).toBe("I am a mock!");
});

// Resolved ( Promise가 resolve하는 값 )

const mockResolvedFn = jest.fn();

test("Promise Resolve 모킹", () => {
  mockResolvedFn.mockReturnValue("I will be a mock!");
  expect(mockResolvedFn()).toBe("I will be a mock!");
});

// Implementation 구현코드
const mockImplementationFn = jest.fn();

test("Implementation 모킹", () => {
  mockImplementationFn.mockImplementation((name) => `I am ${name}!`);
  const result = mockImplementationFn("eshell");

  expect(mockImplementationFn).toBeCalledTimes(1);
  expect(mockImplementationFn).toBeCalledWith("eshell");
  expect(result).toBe("I am eshell!");
});

/**
 * spyOn()
 */
const calculator = {
  add: (a, b) => a + b,
};
describe("spyOn 계산기", () => {
  const spyFn = jest.spyOn(calculator, "add");

  const result = calculator.add(2, 3);

  expect(spyFn).toBeCalledTimes(1);
  expect(spyFn).toBeCalledWith(2, 3);
  expect(result).toBe(5);
});

/**
 * 테스트 작성
 * userService.js
 */
const userService = require("./userService");

test("findOne returns a user", async () => {
  const fatch = await userService.findOne(1);
  const user = JSON.parse(fatch);
  expect(user).toHaveProperty("id", 1);
  expect(user).toHaveProperty("name", "Leanne Graham");
});

// spyOn
describe("spyOn", () => {
  test("use spyOn findOne returns a user", async () => {
    const spyGet = jest.spyOn(got, "get");
    const fetch = await userService.findOne(1);
    const user = JSON.parse(fetch);
    expect(spyGet).toBeCalledTimes(1);
    expect(spyGet).toBeCalledWith(
      `http://jsonplaceholder.typicode.com/users/1`
    );
  });
});
