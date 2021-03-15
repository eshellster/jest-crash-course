const fetchUser = require("./1_callback");
//test 함수의 인자로 done을 받아서 사용
//done이 호출되어야 테스트 종료
//테스트가 실패하는 경우를 대비해서 try, catch로 예외 처리
test("올바른 테스트방법", (done) => {
  fetchUser(1, (usr) => {
    expect(usr).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
    done();
  });
});

//callback 함수가 호출되지 않고 test 종료
//잘못 된 결과가 나와도 테스트가 통과 됨
test("잘못된 테스트방법", () => {
  fetchUser(1, (user) => {
    expect(user).toEqual({
      // 1대신 2를 넣어도 통과된다.
      id: 2,
      name: "User1",
      email: "1@test.com",
    });
  });
});
