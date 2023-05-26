import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

type FormValue = string | File;

type FormValues = Record<string, FormValue>;

type FormItem = HTMLInputElement | HTMLTextAreaElement;

export const useForm = <T extends FormValues>(initValues: T) => {
  const [data, setData] = useState(initValues);
  const [isValid, setIsValid] = useState(false);

  const formItems = useRef(new Map<string, FormItem>());

  const validation = useCallback(() => {
    const result = Array.from(formItems.current.values()).every(item => {
      const { required, validity } = item;

      return !required || validity.valid;
    });

    setIsValid(result);
  }, []);

  const setValue = useCallback(
    (e: ChangeEvent<FormItem>) => {
      const { type, name, value } = e.target;

      let _value: FormValue = value;

      if (type === "file" && e.target instanceof HTMLInputElement) {
        const { files } = e.target;

        if (files && files[0]) {
          const [image] = files;
          _value = image;
        }
      }

      setData(prev => ({ ...prev, [name]: _value }));

      validation();
    },
    [validation]
  );

  const register = useCallback(
    (name: keyof T, withValue = true) => {
      const properties = {
        name,
        ref: (el: FormItem | null) => {
          el && formItems.current.set(name as string, el);
        },
        onChange: setValue,
        value: withValue ? data[name] : undefined
      };

      return properties;
    },
    [data, setValue]
  );

  const reset = useCallback(() => setData(initValues), [initValues]);

  const controller = useMemo(
    () => ({
      reset,
      register
    }),
    [register, reset]
  );

  useEffect(() => {
    validation();
  }, [validation]);

  return { data, controller, isValid } as const;
};
