import * as messageService from "../messageService";
import { deregister, register } from "../userService";

messageService.sendEmail = jest.fn();
messageService.sendSMS = jest.fn();

const sendEmail = messageService.sendEmail;
const sendSMS = messageService.sendSMS;

const user = {
  email: "user@test.com",
  phone: "000-0000-0000",
};

beforeEach(() => {
  sendEmail.mockClear();
  sendSMS.mockClear();
});

test("register sends messages", () => {
  register(user);

  expect(sendEmail).toBeCalledTimes(1);
  expect(sendEmail).toBeCalledWith(user.email, "회원 가입을 환영합니다!");

  expect(sendSMS).toBeCalledTimes(1);
  expect(sendSMS).toBeCalledWith(user.phone, "회원 가입을 환영합니다!");
});

test("deregister sends messaes", () => {
  deregister(user);

  expect(sendEmail).toBeCalledTimes(1);
  expect(sendEmail).toBeCalledWith(user.email, "탈퇴 처리 되었습니다.");

  expect(sendSMS).toBeCalledTimes(1);
  expect(sendSMS).toBeCalledWith(user.phone, "탈퇴 처리 되었습니다.");
});
