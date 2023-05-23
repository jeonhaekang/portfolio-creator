import type { UseMutationOptions } from "@tanstack/react-query";
import { FirebaseError } from "firebase/app";

export type MutationOptions<
  T extends (args: Parameters<T>[0]) => Promise<unknown>
> = UseMutationOptions<Awaited<ReturnType<T>>, FirebaseError, Parameters<T>[0]>;

export type PickMutationOptions<
  T extends (args: Parameters<T>[0]) => Promise<unknown>,
  O extends keyof MutationOptions<T>
> = Pick<MutationOptions<T>, O>;
