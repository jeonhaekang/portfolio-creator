import { useMutation } from "@tanstack/react-query";
import { PickMutationOptions } from "../server.types";
import { createUser, loginUser, logoutUser } from "./apis";

export const useCreateUser = (
  options: PickMutationOptions<typeof createUser, "onSuccess" | "onError">
) => {
  return useMutation({
    mutationFn: createUser,
    ...options
  });
};

export const useLoginUser = (
  options: PickMutationOptions<typeof loginUser, "onSuccess" | "onError">
) => {
  return useMutation({
    mutationFn: loginUser,
    ...options
  });
};

export const useLogoutUser = () => {
  return useMutation({
    mutationFn: logoutUser
  });
};
