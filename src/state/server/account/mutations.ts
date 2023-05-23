import { useMutation } from "@tanstack/react-query";
import { PickMutationOptions } from "../server.types";
import { createUser } from "./apis";

export const useCreateUser = (
  options: PickMutationOptions<typeof createUser, "onSuccess" | "onError">
) => {
  return useMutation({
    mutationFn: createUser,
    ...options
  });
};
