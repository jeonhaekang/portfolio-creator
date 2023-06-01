import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { AdjustInputProps } from "./AdjustInput.types";

export const useAdjustInput = ({
  value
}: InputHTMLAttributes<HTMLInputElement> & AdjustInputProps) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [mirrorValue, setMirrorValue] = useState(value);

  const mirrorRef = useRef<HTMLSpanElement>(null);

  const adjustWidth = useCallback(() => {
    if (mirrorRef.current) {
      const { clientWidth: width, clientHeight: height } = mirrorRef.current;

      setSize({ width, height });
    }
  }, []);

  useEffect(() => {
    setMirrorValue(value);
  }, [value]);

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
    mirrorRef,
    mirrorValue
  };
};
