import {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { DashedInputProps } from "./DashedInput.types";

export const useDashedInput = ({
  value,
  onChange
}: InputHTMLAttributes<HTMLInputElement> & DashedInputProps) => {
  const [width, setWidth] = useState(0);
  const [mirrorValue, setMirrorValue] = useState(value);

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
    mirrorRef.current && setWidth(mirrorRef.current.clientWidth);
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
    width,
    onChangeHandler,
    mirrorRef,
    mirrorValue
  };
};
