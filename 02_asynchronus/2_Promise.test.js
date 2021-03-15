const { fetchUserPromise, fetchUserThrowError } = require("./2_Promise");
/**
테스트 방법 
 * test 코드에서 promise를 return
 * return 안하면 callback을 이용한 방법에서 done을 빠뜨린 것과 같음
 * promise의 resolve가 호출 될 때 까지 기다림
 * promise의 reject가 호출 될 경우 테스트 실패
 * promise 코드 안의 assertion 코드가 실제로 호출 됐는지는 expect.assertions 함수로 확인 가능
 * then/catch를 이용하는 방법과 resolves/rejects를 이용하는 방법이 존재
 */
describe("Promises then/catch", () => {
  test("get user", () => {
    return fetchUserPromise(1).then((user) => {
      expect(user).toEqual({
        id: 1,
        name: "User1",
        email: "1@test.com",
      });
    });
  });
  test("the test is rejected", () => {
    return fetchUserThrowError(1).catch((error) => {
      expect.assertions(1);
      expect(error).toMatch("error reason");
    });
  });
});

describe("Promises resolves/rejects", () => {
  test("get user", () => {
    return expect(fetchUserPromise(1)).resolves.toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });

  test("the test is rejected", () => {
    expect.assertions(1);
    return expect(fetchUserThrowError()).rejects.toMatch("error reason");
  });
});
