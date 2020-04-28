import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const primaryColor = "#fb4226";
const blackColor = "#000000";
const greyColor = "#9b9b9b";
const whiteColor = "#fff";
const tagColor = "#ffe0b2";
const tagBorderColor = "#fb8c00";
const footerColor = "#222";
const signUpColor = "#173055";

export {
  signUpColor,
  whiteColor,
  primaryColor,
  blackColor,
  greyColor,
  tagColor,
  tagBorderColor,
  footerColor,
};

let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 730,
      lg: 960,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      main: "#fb4226",
      dark: "#c00000",
      light: "#ff7852",
    },
    secondary: {
      main: "#9b9b9b",
      dark: "#6d6d6d",
      light: "#cccccc",
    },
    text: {
      secondary: "#e9e9e9"
    }
  },
  //h6 16 body 14 h4 24 h5 20
  typography: {
    body1: {
      fontSize: 14,
    },
    h3: {
      fontSize: 30,
    },
    h4: {
      fontSize: 24,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 16,
      fontWeight: 550,
    },
    subtitle1: {
      fontSize: 12,
      lineHeight: 1.4,
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
