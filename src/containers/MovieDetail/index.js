import { Box, Grid, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import React, { useEffect } from "react";
import useStyles from "./styles";

import { connect } from "react-redux";
import { actGetMovieDetail } from "./../../modules/home/actions";

function MovieDetail(props) {
  const classes = useStyles();
  const { dispatch, match, movieDetail } = props;
  const { params } = match;

  const handleAddDefaultImage = (e) => {
    e.target.src = "/images/emptyIMG.png";
  };

  useEffect(() => {
    dispatch(actGetMovieDetail(params));
  }, [dispatch, params]);

  
  return (
    <Box className={classes.movieDetail}>
      <Box className={classes.container}>
        <Box className={classes.topDetail}>
          <Box className={classes.textDetail}>
            <img
              onError={handleAddDefaultImage}
              src={movieDetail.hinhAnh}
              alt={movieDetail.biDanh}
              width="217px"
            />
            <Box marginLeft={2}>
              <Typography color="textSecondary">
                {movieDetail.ngayKhoiChieu}
              </Typography>
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
            Thông Tin
          </Typography>
          <Typography className={classes.evaluate} variant="h5">
            Đánh Giá
          </Typography>
        </Box>
        <Grid container className={classes.bottomDetail}>
          <Grid md={7} item className={classes.issueDate}>
            <Box display="flex">
              <Box minWidth={120}>
                <Box marginRight={2} marginBottom={1}>
                  Ngày phát hành
                </Box>
                <Box marginRight={2} marginBottom={1}>
                  Đạo diễn
                </Box>
                <Box marginRight={2} marginBottom={1}>
                  Diễn viên
                </Box>
                <Box marginRight={2} marginBottom={1}>
                  Thể Loại
                </Box>
                <Box marginRight={2} marginBottom={1}>
                  Định dạng
                </Box>
                <Box marginRight={2} marginBottom={1}>
                  Quốc Gia SX
                </Box>
              </Box>
              <Box>
                <Box marginRight={2} marginBottom={1}>
                  13.03.2020
                </Box>
                <Box className={classes.text} marginRight={2} marginBottom={1}>
                  Jade Bunyoprakarn
                </Box>
                <Box className={classes.text} marginRight={2} marginBottom={1}>
                  n/a
                </Box>
                <Box className={classes.text} marginRight={2} marginBottom={1}>
                  tình cảm, hài hước
                </Box>
                <Box marginRight={2} marginBottom={1}>
                  2D/Digital
                </Box>
                <Box marginRight={2} marginBottom={1}>
                  Thái Lan
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid md={5} item className={classes.content}>
            <Typography>Nội dung</Typography>
            <Typography className={classes.textContent}>
              {movieDetail.moTa}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  movieDetail: state.home.movieDetail,
});
export default connect(mapStateToProps)(MovieDetail);
