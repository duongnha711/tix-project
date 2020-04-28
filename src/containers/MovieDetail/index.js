import React, { Fragment } from "react";
import useStyles from "./styles";
import Header from "../../layouts/Header.js";
import Footer from "../../layouts/Footer";
import { Box, Typography, Grid } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

export default function MovieDetail() {
  const classes = useStyles();

  return (
    <Fragment>
      <Header />
      <Box className={classes.movieDetail}>
        <Box className={classes.container}>
          <Box className={classes.topDetail}>
            <Box className={classes.textDetail}>
              <img src="./images/movie-widow.jpg" alt="widow" width="217px" />
              <Box marginLeft={2}>
                <Typography color="textSecondary">17.07.2020</Typography>
                <Typography className={classes.titleMovie} variant="h5">
                  <span className={classes.ageType}>C16</span> Góa phụ đen -
                  Black Widow
                </Typography>
                <Typography color="textSecondary">
                  115 phút - 0 IMdb - 2D/Digital
                </Typography>
              </Box>
            </Box>
            <Box className={classes.starDetail}>
              <Box className={classes.circle}>7.7</Box>
              <Box>
                <StarIcon color="primary" fontSize="medium" />
                <StarIcon color="primary" fontSize="medium" />
                <StarIcon color="primary" fontSize="medium" />
                <img src="./images/half.png" alt="half" width="20px" />
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
                  <Box
                    className={classes.text}
                    marginRight={2}
                    marginBottom={1}
                  >
                    Jade Bunyoprakarn 
                  </Box>
                  <Box
                    className={classes.text}
                    marginRight={2}
                    marginBottom={1}
                  >
                    n/a 
                  </Box>
                  <Box
                    className={classes.text}
                    marginRight={2}
                    marginBottom={1}
                  >
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
                Điển trai, độc thân và kỹ lưỡng trong lối sống, Chai là hình
                tượng “sugar daddy” điển hình bên ngoài ấm áp bên trong trưởng
                thành. Cuộc gặp gỡ vô cùng bất ngờ và định mệnh với cô gái 9x -
                Whan đã khiến ông chú thập niên 90s thoát ra khỏi cuộc sống đơn
                sắc trước đây khi cả hai chợt nhận ra rằng, trái tim họ đang
                ngày càng loạn nhịp vì nhau.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Fragment>
  );
}
