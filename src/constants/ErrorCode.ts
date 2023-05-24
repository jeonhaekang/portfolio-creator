import { ErrorCodeType } from "~/types/ErrorCode";

export const ErrorCode: ErrorCodeType = {
  "auth/email-already-in-use": "이미 사용중인 이메일 입니다.",
  "auth/invalid-email": "잘못된 이메일 형식입니다.",
  "auth/invalid-password": "잘못된 패스워드 형식입니다.",
  "auth/wrong-password": "아이디나, 비밀번호가 다릅니다.",
  "auth/too-many-requests":
    "반복된 요청으로 잠시 차단되었습니다. 잠시 후 다시 시도해 주세요."
} as const;
