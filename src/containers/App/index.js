import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomePage from "../Home/index.js";
import theme from "./../../commons/theme";
import { Provider } from "react-redux";
import configureStore from "./../../commons/store";
import MovieDetail from "../MovieDetail/index.js";
import SignIn from "../../components/SignIn/index.js";

const store = configureStore();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <HomePage />
        {/* <MovieDetail /> */}
        <SignIn />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
