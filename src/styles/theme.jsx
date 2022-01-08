const colors = {
  primary: {
    500: "hsla(243, 58%, 57%, 1)",
    400: "hsla(243, 100%, 69%, 1)",
    300: "hsla(243, 100%, 80%, 1)",
    200: "hsla(243, 100%, 88%, 1)",
    100: "hsla(243, 100%, 96%, 1)",
  },
  secondary: {
    500: "hsla(348, 97%, 64%, 1)",
    400: "hsla(348, 97%, 69%, 1)",
    300: "hsla(348, 96%, 80%, 1)",
    200: "hsla(348, 95%, 92%, 1)",
    100: "hsla(347, 90%, 96%, 1)",
  },
  neutral: {
    500: "hsla(243, 17%, 22%, 1)",
    400: "hsla(243, 7%, 47%, 1)",
    300: "hsla(259, 8%, 61%, 1)",
    200: "hsla(240, 19%, 84%, 1)",
    100: "hsla(0, 0%, 100%, 1)",
  },
};

const fontSizes = {
  body_lg: "1.25em",
  body_md: "1.125rem",
  body_sm: "1rem",
  xs: "1.75rem",
  sm: "2.125rem",
  md: "2.5rem",
  lg: "3.125rem",
  xl: "3.75rem",
  xxl: "5.375rem",
};

const theme = {
  colors,
  fontSizes,
  button: {
    contained: {
      color: "#FFF",
      backgroundColor: colors.primary[400],
      borderColor: colors.primary[400],
    },
    outlined: {
      color: colors.primary[400],
      backgroundColor: "#FFF",
      borderColor: colors.primary[400],
    },
  },
};

export default theme;
