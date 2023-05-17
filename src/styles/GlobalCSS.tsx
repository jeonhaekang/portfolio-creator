import { Global, css } from "@emotion/react";

export const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        html {
          font-size: 12px;
        }

        @media (min-width: 600px) {
          html {
            font-size: 14px;
          }
        }
        @media (min-width: 1100px) {
          html {
            font-size: 16px;
          }
        }
      `}
    />
  );
};
