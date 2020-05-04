import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const arrLogo = [
  { url: "/images/vietcom.png", name: "vietcom" },
  { url: "/images/vietin.png", name: "vietin" },
  { url: "/images/cgv.png", name: "cgv" },
  { url: "/images/bhd.png", name: "bhd" },
  { url: "/images/lotte.png", name: "lotte" },


];

export default function TopFooter() {
  const classes = useStyles();

  const renderLogo = () => {
    if (arrLogo && arrLogo.length > 0) {
      return arrLogo.map((logo, index) => (
        <Box component="span" key={index} className={classes.logo}>
          <img src={logo.url} alt={logo.name} width="30px" height="30px" />
        </Box>
      ));
    }
  };

  return (
    <Grid
      justify="space-between"
      container
      spacing={1}
      className={classes.information}
    >
      <Grid item>
        <Typography className={classes.title}>TIX</Typography>
        <Box marginRight={2} className={classes.tix}>
          <Box className={classes.tixText}>
            <Typography variant="subtitle1">FAQ</Typography>
            <Typography variant="subtitle1">Brand Guidelines</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Thỏa thuận sử dụng</Typography>
            <Typography variant="subtitle1">Chính sách bảo mật</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid className={classes.partner} item>
        <Typography className={classes.title}>ĐỐI TÁC</Typography>

        {renderLogo()}
      </Grid>
      <Grid item>
        <Box className={classes.app}>
          <Box className={classes.mobile}>
            <Typography className={classes.title}>MOBILE APP</Typography>
            <Box>
              <img
                src="/images/apple.png"
                alt="apple"
                width="30px"
                height="30px"
              />
              <img
                src="/images/android.png"
                alt="android"
                width="30px"
                height="30px"
              />
            </Box>
          </Box>
          <Box className={classes.social}>
            <Typography className={classes.title}>SOCIAL</Typography>
            <Box>
              <img
                src="/images/facebook.png"
                alt="facebook"
                width="30px"
                height="30px"
              />
              <img
                src="/images/zalo.png"
                alt="zalo"
                width="30px"
                height="30px"
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
