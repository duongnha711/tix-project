import { Box, Button, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import cn from "classnames";
import React, { useEffect, useState, useRef, Fragment } from "react";
import { connect } from "react-redux";
import {
  actGetDetailMovieOfficial,
  actGetDetailMovieOfficialSuccess,
  actOpenTrailer,
} from "./../../modules/home/actions";
import Comment from "./Comment";
import InfoMovie from "./InfoMovie";
import ShowTimeDetail from "./ShowTimeDetail";
import useStyles from "./styles";
import { Redirect } from "react-router-dom";
import {
  actOpenGlobalLoading,
  actCloseGlobalLoading,
} from "../../commons/actions";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function MovieDetail(props) {
  const classes = useStyles();
  const { dispatch, match, movieDetail, history } = props;
  const { params } = match;

  let myRef = useRef();

  const [activeInfoState, setActiveInfoState] = useState("info");

  const addEmptyImg = (e) => {
    e.target.src = "/images/defaultImage.png";
  };

  useEffect(() => {
    if (history.location.state && history.location.state.kind === "showTime") {
      dispatch(actGetDetailMovieOfficial(params));
    }
    if (
      history.location.state &&
      history.location.state.kind === "comingSoon"
    ) {
      dispatch(actOpenGlobalLoading());
      dispatch(actGetDetailMovieOfficialSuccess(history.location.state.info));
      setTimeout(() => {
        dispatch(actCloseGlobalLoading());
      }, 500);
    }
  }, [dispatch, params, history]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickTitle = (value) => {
    setActiveInfoState(value);
  };

  const handleBuyTicket = () => {
    setActiveInfoState("showTime");
    window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
  };

  const handleOpenTrailer = (trailer) => {
    dispatch(actOpenTrailer(trailer));
  };

  return (
    <Fragment>
      {!history.location.state && <Redirect to="/" />}
      <Box className={classes.movieDetail}>
        <Box className={classes.container}>
          <Box className={classes.topDetail}>
            <Box className={classes.textDetail}>
              <Box className={classes.wrapperImg}>
                <Box component="span" className={classes.overLay}></Box>

                <Box className={classes.contentImg}>
                  <img
                    onError={addEmptyImg}
                    src={movieDetail.hinhAnh}
                    alt={movieDetail.biDanh}
                  />
                </Box>
                <Box
                  onClick={() => {
                    handleOpenTrailer(movieDetail.trailer);
                  }}
                  component="span"
                  className={classes.iconPlay}
                >
                  <PlayArrowIcon color="primary" />
                </Box>
              </Box>
              <Box marginLeft={2}>
                <Typography className={classes.titleMovie} variant="h5">
                  <span className={classes.ageType}>C16</span>{" "}
                  {movieDetail.tenPhim}
                </Typography>
                <Typography color="textSecondary">
                  {movieDetail.heThongRapChieu &&
                    movieDetail.heThongRapChieu.length > 0 &&
                    movieDetail.heThongRapChieu[0].cumRapChieu[0]
                      .lichChieuPhim[0].thoiLuong}{" "}
                  phút - 0 IMdb - 2D/Digital
                </Typography>
                {/* if la showTime thi moi co thang nay */}
                {history.location.state &&
                  history.location.state.kind === "showTime" && (
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleBuyTicket}
                    >
                      Mua vé
                    </Button>
                  )}
              </Box>
            </Box>
            <Box className={classes.starDetail}>
              <Box className={classes.circle}>{movieDetail.danhGia}</Box>
              <Box>
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
              </Box>
              <Typography>17 người đánh giá</Typography>
            </Box>
          </Box>
          <Box className={classes.infoEvaluate}>
            {history.location.state &&
              history.location.state.kind === "showTime" && (
                <Typography
                  ref={myRef}
                  onClick={() => handleClickTitle("showTime")}
                  className={cn(
                    classes.info,
                    activeInfoState === "showTime" && classes.activeTitle
                  )}
                  variant="h5"
                >
                  Lịch Chiếu
                </Typography>
              )}

            <Typography
              onClick={() => handleClickTitle("info")}
              className={cn(
                classes.info,
                activeInfoState === "info" && classes.activeTitle
              )}
              variant="h5"
            >
              Thông Tin
            </Typography>
            <Typography
              onClick={() => handleClickTitle("comment")}
              className={cn(
                classes.evaluate,
                activeInfoState === "comment" && classes.activeTitle
              )}
              variant="h5"
            >
              Đánh Giá
            </Typography>
          </Box>

          {activeInfoState === "info" && (
            <InfoMovie movieDetail={movieDetail} />
          )}
          {activeInfoState === "showTime" && (
            <ShowTimeDetail movieDetail={movieDetail} />
          )}
          {activeInfoState === "comment" && <Comment />}

          {/* abc */}
        </Box>
      </Box>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  movieDetail: state.home.movieDetail,
});
export default connect(mapStateToProps)(MovieDetail);
