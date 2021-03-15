const { fetchUserPromise, fetchUserThrowError } = require("./2_Promise");

/**
테스트 방법
 * test에 넘기는 함수 앞에 async 키워드 추가
 * promise를 반환하는 함수 호출 앞에 await 키워드 추가
 * resolves/rejects 와 혼합해서 사용 가능
 */

describe("Async Await", () => {
  test("fetch a user by Async Await", async () => {
    const user = await fetchUserPromise(1);
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });
});
describe("Async/Await", () => {
  test("the data is peanut butter", async () => {
    const data = await fetchUserPromise(1);
    expect(data).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });

  test("the fetch fails with an error", async () => {
    expect.assertions(1);
    try {
      await fetchUserThrowError();
    } catch (error) {
      expect(error).toMatch("error reason");
    }
  });
});

describe("Async/Await with resolves/rejects", () => {
  test("the data is peanut butter", async () => {
    await expect(fetchUserPromise(1)).resolves.toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });

  test("the fetch fails with an error", async () => {
    expect.assertions(1);
    await expect(fetchUserThrowError()).rejects.toMatch("error reason");
  });
});
