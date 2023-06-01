import { Masonry, useBreakPoint } from "@sun-river/components";
import { ComponentProps } from "react";

export const ResponsiveMasonry = ({
  children
}: ComponentProps<typeof Masonry>) => {
  const columnCount = useBreakPoint({ 1: 600, 2: 1000, 3: 1400, 4: 1800 }, 3);

  return <Masonry column={columnCount}>{children}</Masonry>;
};
