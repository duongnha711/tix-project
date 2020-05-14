import { Box, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import GlobalLoading from "../../components/GlobalLoading/index.js";
import HomeLayout from "./../../commons/HomeLayout";
import { routes } from "./../../commons/routes";
import configureStore from "./../../commons/store";
import theme from "./../../commons/theme";
import PageNotFound from "./../../components/PageNotFound";
import VideoModal from "./../../components/VideoModal";
import useStyles from "./styles";

const store = configureStore();

function App() {
  const classes = useStyles();
  const renderHomeRoutes = () => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => (
        <HomeLayout
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ));
    }
  };

  return (
    <Box className={classes.global}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Router>
            <Switch>
              {renderHomeRoutes()}
              <Route path="" component={PageNotFound} />
            </Switch>
          </Router>

          <GlobalLoading />
          <VideoModal />
        </Provider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
