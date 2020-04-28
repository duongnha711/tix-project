import React, { Fragment } from "react";
import Header from "../../layouts/Header.js";
import Banner from "../../modules/home/components/Banner";
import Showtime from "../../modules/home/components/Showtime/index.js";
import InfoCinema from "../../modules/home/components/InfoCinema/index.js";
import News from "../../modules/home/components/News/index.js";
import MobileApp from "../../modules/home/components/AppMobile/index.js";
import Footer from "../../layouts/Footer/index.js";

export default function HomePage(props) {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Showtime />
      <InfoCinema />
      <News />
      <MobileApp />
      <Footer />
    </Fragment>
  );
}
