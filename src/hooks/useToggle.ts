import { useCallback, useState } from "react";

export const useToggle = (initState?: boolean) => {
  const [isOpen, setIsOpen] = useState(initState || false);

  const onToggle = useCallback(() => setIsOpen(prev => !prev), []);

  return [isOpen, onToggle] as const;
};
