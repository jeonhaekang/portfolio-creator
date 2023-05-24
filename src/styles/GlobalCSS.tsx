import { Global, css } from "@emotion/react";

export const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        /* languages font */
        div,
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        button,
        a,
        input,
        textarea,
        span {
          font-family: "Noto Sans KR";
        }

        /* responsive font */
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
