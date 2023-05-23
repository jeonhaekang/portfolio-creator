import { ErrorCode } from "~/constants/ErrorCode";

export const getErrorCode = (key: string) => {
  return ErrorCode[key] || "알수 없는 에러입니다.";
};
