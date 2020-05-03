import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import GlobalLoading from "../../components/GlobalLoading/index.js";
import SignIn from "../../components/SignIn/index.js";
import HomeLayout from "./../../commons/HomeLayout";
import { routes } from "./../../commons/routes";
import configureStore from "./../../commons/store";
import theme from "./../../commons/theme";
import PageNotFound from "./../../components/PageNotFound";
import SignUp from "../../components/SignUp/index.js";

const store = configureStore();

function App() {
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
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Router>
          <Switch>
            {renderHomeRoutes()}
            <Route path="" component={PageNotFound} />
          </Switch>
        </Router>

        <SignIn />
        <SignUp />
        <GlobalLoading />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
