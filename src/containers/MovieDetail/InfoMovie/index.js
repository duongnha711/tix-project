import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

export default function InfoMovie(props) {
  const classes = useStyles();
  const { movieDetail } = props;

  return (
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
              Quốc Gia
            </Box>
          </Box>
          <Box>
            <Box marginRight={2} marginBottom={1}>
              Someday
            </Box>
            <Box className={classes.text} marginRight={2} marginBottom={1}>
              Someone in the world
            </Box>
            <Box className={classes.text} marginRight={2} marginBottom={1}>
              Someone in the world
            </Box>
            <Box className={classes.text} marginRight={2} marginBottom={1}>
              Some kind of wonderful
            </Box>
            <Box marginRight={2} marginBottom={1}>
              2D/Digital
            </Box>
            <Box marginRight={2} marginBottom={1}>
              In the world
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid md={5} item className={classes.content}>
        <Typography>Nội dung</Typography>
        <Typography className={classes.textContent}>
          {movieDetail.tenPhim} is a super movie...API don't have description
          ... The best way to learn code is to write code!
        </Typography>
      </Grid>
    </Grid>
  );
}
