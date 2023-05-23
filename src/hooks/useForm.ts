import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";

export const useForm = <T extends { [key: string]: string }>(init: T) => {
  const [data, setData] = useState(init);
  const [isValid, setIsValid] = useState(false);

  const inputs = useRef(new Map<string, HTMLInputElement>());

  const validation = useCallback(() => {
    const result = Array.from(inputs.current.values()).every(input => {
      const { required, validity } = input;

      return !required || validity.valid;
    });

    setIsValid(result);
  }, []);

  const setValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setData(prev => ({ ...prev, [name]: value }));

      validation();
    },
    [validation]
  );

  const register = useCallback(
    (name: keyof T) => ({
      name,
      ref: (el: HTMLInputElement) => inputs.current.set(name as string, el),
      onChange: setValue,
      value: data[name]
    }),
    [data, setValue]
  );

  const reset = useCallback(() => setData(init), [init]);

  const controller = useMemo(
    () => ({
      reset,
      register
    }),
    [register, reset]
  );

  return [data, controller, isValid] as const;
};
