import { useMutation } from "@tanstack/react-query";
import { PickMutationOptions } from "../server.types";
import { createPortfolio } from "./apis";

export const useCreatePortfolio = (
  options: PickMutationOptions<typeof createPortfolio, "onSuccess" | "onError">
) => {
  return useMutation({
    mutationFn: createPortfolio,
    ...options
  });
};
