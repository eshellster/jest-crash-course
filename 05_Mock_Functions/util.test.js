import { forEach } from "./util";
it("mock function", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);

  expect(mockCallback.mock.calls[0][0]).toBe(0);

  expect(mockCallback.mock.calls[1][0]).toBe(1);

  expect(mockCallback.mock.results[0].value).toBe(42);
});

it(".mock property", () => {
  const myMock = jest.fn();
  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound();
  // console.log(myMock.mock.instances);
});

it(".mock implementations", () => {
  const myMockFn = jest.fn((cb) => cb(42));
  myMockFn((age) => console.log(age));
});
it(".mock implementations", () => {
  const myMockFn = jest.fn();
  myMockFn.mockImplementation(() => 42);
  myMockFn((age) => console.log(age));
});
