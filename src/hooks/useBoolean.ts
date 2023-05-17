import { useMemo, useState } from "react";

export const useBoolean = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const controller = useMemo(
    () => ({
      on: () => setState(true),
      off: () => setState(false),
      toggle: () => setState(prev => !prev)
    }),
    []
  );

  return [state, controller] as const;
};
