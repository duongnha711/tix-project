import { Box, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actGetDetailMovieOfficial } from "./../../modules/home/actions";
import ShowTimeDetail from "./ShowTimeDetail";
import useStyles from "./styles";

function MovieDetail(props) {
  const classes = useStyles();
  const { dispatch, match, movieDetail } = props;
  const { params } = match;

  const addEmptyImg = (e) => {
    e.target.src = "/images/defaultImage.png";
  };

  useEffect(() => {
    dispatch(actGetDetailMovieOfficial(params));
  }, [dispatch, params]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className={classes.movieDetail}>
      <Box className={classes.container}>
        <Box className={classes.topDetail}>
          <Box className={classes.textDetail}>
            <Box className={classes.wrapperImg}>
              <Box className={classes.contentImg}>
                <img
                  onError={addEmptyImg}
                  src={movieDetail.hinhAnh}
                  alt={movieDetail.biDanh}
                />
              </Box>
            </Box>
            <Box marginLeft={2}>
              <Typography className={classes.titleMovie} variant="h5">
                <span className={classes.ageType}>C16</span>{" "}
                {movieDetail.tenPhim}
              </Typography>
              <Typography color="textSecondary">
                120 phút - 0 IMdb - 2D/Digital
              </Typography>
            </Box>
          </Box>
          <Box className={classes.starDetail}>
            <Box className={classes.circle}>{movieDetail.danhGia}</Box>
            <Box>
              <StarIcon color="primary" />
              <StarIcon color="primary" />
              <StarIcon color="primary" />
              <img src="/images/half.png" alt="half" width="20px" />
            </Box>
            <Typography>19 người đánh giá</Typography>
          </Box>
        </Box>
        <Box className={classes.infoEvaluate}>
          <Typography className={classes.info} variant="h5">
            Lịch Chiếu
          </Typography>
          <Typography className={classes.info} variant="h5">
            Thông Tin
          </Typography>
          <Typography className={classes.evaluate} variant="h5">
            Đánh Giá
          </Typography>
        </Box>
        {/* <InfoMovie movieDetail={movieDetail}/> */}
        <ShowTimeDetail movieDetail={movieDetail} />
        {/* abc */}
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  movieDetail: state.home.movieDetail,
});
export default connect(mapStateToProps)(MovieDetail);
