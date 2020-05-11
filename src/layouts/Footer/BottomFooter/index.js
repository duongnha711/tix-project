import React from "react";
import useStyles from "./styles";
import { Box, Typography } from "@material-ui/core";

export default function BottomFooter() {
  const classes = useStyles();

  return (
    <Box className={classes.bottomFooter}>
      <Box className={classes.imgLeft}>
        <img src="/images/zion.jpg" alt="zion" width="80px" />
      </Box>
      <Box className={classes.address}>
        <Typography className={classes.title}>Dương Hoàng Nhã </Typography>
        <Typography variant="subtitle1">
          Truong Sa street, Binh Thanh District, Ho Chi Minh City
        </Typography>

        <Typography variant="subtitle1">Phone number: 083.466.5959</Typography>
        <Typography variant="subtitle1">
          Email: duonghoangnha711@gmail.com
        </Typography>
      </Box>
      <Box className={classes.imgRight}>
        <img src="/images/notify.png" alt="zion" width="130px" />
      </Box>
    </Box>
  );
}
