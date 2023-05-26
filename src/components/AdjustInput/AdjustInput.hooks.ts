import {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { AdjustInputProps } from "./AdjustInput.types";

export const useAdjustInput = ({
  defaultValue,
  onChange
}: InputHTMLAttributes<HTMLInputElement> & AdjustInputProps) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [mirrorValue, setMirrorValue] = useState(defaultValue);

  const mirrorRef = useRef<HTMLSpanElement>(null);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setMirrorValue(value);

      onChange && onChange(event);
    },
    [onChange]
  );

  const adjustWidth = useCallback(() => {
    if (mirrorRef.current) {
      const { clientWidth: width, clientHeight: height } = mirrorRef.current;

      setSize({ width, height });
    }
  }, []);

  useEffect(() => {
    adjustWidth();
  }, [adjustWidth, mirrorValue]);

  useEffect(() => {
    window.addEventListener("resize", adjustWidth);

    return () => {
      window.removeEventListener("resize", adjustWidth);
    };
  }, [adjustWidth]);

  return {
    size,
    onChangeHandler,
    mirrorRef,
    mirrorValue
  };
};
