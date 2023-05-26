import {
  ChangeEvent,
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { AdjustTextareaProps } from "./AdjustTextArea.types";

export const useAdjustTextarea = ({
  onChange,
  value
}: TextareaHTMLAttributes<HTMLTextAreaElement> & AdjustTextareaProps) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [mirrorValue, setMirrorValue] = useState(value);

  const mirrorRef = useRef<HTMLSpanElement>(null);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target;
      setMirrorValue(value);

      onChange && onChange(event);
    },
    [onChange]
  );

  const adjustSize = useCallback(() => {
    if (mirrorRef.current) {
      const { clientWidth: width, clientHeight: height } = mirrorRef.current;

      setSize({ width, height });
    }
  }, []);

  useEffect(() => {
    adjustSize();
  }, [adjustSize, mirrorValue]);

  useEffect(() => {
    window.addEventListener("resize", adjustSize);

    return () => {
      window.removeEventListener("resize", adjustSize);
    };
  }, [adjustSize]);

  return {
    size,
    onChangeHandler,
    mirrorRef,
    mirrorValue
  };
};
