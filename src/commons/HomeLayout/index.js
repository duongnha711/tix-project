import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

export default function HomeLayout({ component, ...rest }) {
  return (
    <Fragment>
      <Header />
      <Route {...rest} component={component} />
      <Footer />
    </Fragment>
  );
}
