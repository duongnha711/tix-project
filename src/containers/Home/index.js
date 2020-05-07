import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import MobileApp from "../../modules/home/components/AppMobile/index.js";
import Banner from "../../modules/home/components/Banner";
import InfoCinema from "../../modules/home/components/InfoCinema/index.js";
import News from "../../modules/home/components/News/index.js";
import Showtime from "../../modules/home/components/Showtime/index.js";
import {
  actGetCinemaBranch,
  actGetCinemaList,
  actGetMovieList,
  actGetShowTimeAll,
  actGetShowTimeDetail,
} from "./../../modules/home/actions";

function HomePage(props) {
  const {
    dispatch,
    movieList,
    cinemaList,
    cinemaBrach,
    showTimeDetail,
    maHeThongRap,
    maCumRap,
  } = props;
  useEffect(() => {
    dispatch(actGetMovieList());
    dispatch(actGetCinemaList());
  }, [dispatch]);

  const handleGetCinemaBrach = (maHeThongRap) => {
    dispatch(actGetCinemaBranch({ maHeThongRap }));
    dispatch(actGetShowTimeAll({ maHeThongRap }));
    // dispatch()
  };

  //lay lich chieu theo cum rap
  const handleGetShowTimeDetail = (maCumRap) => {
    dispatch(actGetShowTimeDetail(maCumRap));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Banner />
      <Showtime movieList={movieList} />
      <InfoCinema
        maCumRap={maCumRap}
        maHeThongRap={maHeThongRap}
        cinemaList={cinemaList}
        handleGetCinemaBrach={handleGetCinemaBrach}
        cinemaBrach={cinemaBrach}
        handleGetShowTimeDetail={handleGetShowTimeDetail}
        showTimeDetail={showTimeDetail}
      />
      <News />
      <MobileApp />
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  movieList: state.home.movieList,
  cinemaList: state.home.cinemaList,
  cinemaBrach: state.home.cinemaBrach,
  showTimeDetail: state.home.showTimeDetail,
  maHeThongRap: state.home.maHeThongRap,
  maCumRap: state.home.maCumRap,
});

export default connect(mapStateToProps)(HomePage);
