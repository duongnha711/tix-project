import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const greyColor = "#9b9b9b";
const whiteColor = "#fff";
const tagColor = "#ffe0b2";
const tagBorderColor = "#fb8c00";
const footerColor = "#222";
// const signUpColor = "linear-gradient(to top,#614385 , #516395)";
const signUpColor = "linear-gradient(to right,#000428 , #004e92)";
const hoverActiveTitleColor = "#50ffe7";

const labelForm = "#04ffc5";

//summary
const primaryColor = "#2791fa";
const themeGradientPrimary = "linear-gradient(to right, #4facfe,#00f2fe)";
const themeGradientSecond =
  "linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)";
const textDefaultColor = "white";
const blackColor = "#000000";

const borderColorSecondary = "#ed6ea0"; //my CV
const activeTitleColor = "#ed6ea0";
const backGroundHeader = "linear-gradient(to right, #09203f,#537895)";
const backGroundGlobal = "linear-gradient(to right, #071324 0%, #0f2434 100%)";

const backgroundInfoCinema =
  "linear-gradient(to right, #071324c2 0%, #0f2434d1 100%)";
const newsFilterBackground =
  "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";

const signUpInBackground =
  "linear-gradient(to top, #fff1ebd6 0%, #ace0f9c7 100%)";

//color booking
const bookingBackground =
  "linear-gradient(to right, #071324c2 0%, #0f2434d1 100%)";
const textBooking = "white";
const titleBooking = "#2791fa";
const highlightBooking = "#ed6ea0";

export {
  bookingBackground,
  highlightBooking,
  textBooking,
  titleBooking,
  newsFilterBackground,
  signUpInBackground,
  backgroundInfoCinema,
  backGroundGlobal,
  activeTitleColor,
  backGroundHeader,
  // borderColorPrimary,
  borderColorSecondary,
  themeGradientSecond,
  themeGradientPrimary,
  textDefaultColor,
  signUpColor,
  whiteColor,
  primaryColor,
  blackColor,
  greyColor,
  tagColor,
  tagBorderColor,
  footerColor,
  labelForm,
  hoverActiveTitleColor,
};

let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 867,
      lg: 960,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      main: "#2791fa",
      // dark: "#0064c6",
      // light: "#72c1ff",
    },
    secondary: {
      main: "#9b9b9b",
      dark: "#6d6d6d",
      light: "#cccccc",
    },
    text: {
      secondary: "#e9e9e9",
    },
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
