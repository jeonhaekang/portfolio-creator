import { Dispatch, SetStateAction } from "react";

export interface Size {
  width?: number;
  height?: number;
}

export type SetStateType<T> = Dispatch<SetStateAction<T>>;
