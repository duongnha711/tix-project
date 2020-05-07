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
  );
}
