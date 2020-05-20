import React, { useEffect } from "react";
import useStyles from "./styles";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import Mobile from "../../../../components/Mobile.js";
import Alert from "./../../../../components/Alert";
import WOW from "wowjs";
import cn from "classnames";

export default function MobileApp() {
  const classes = useStyles();

  const handleOnclick = () => {
    Alert({ icon: "info", text: "Coming soon...!" });
  };

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Box id="app" className={classes.mobileApp}>
      <Box className={classes.container}>
        <Grid alignItems="center" container>
          <Grid
            data-wow-duration="2s"
            className="wow bounceInLeft"
            item
            xs={12}
            lg={6}
          >
            <Box className={classes.contentApp}>
              <Typography className={classes.title} variant="h3">
                Ứng dụng tiện lợi cho người yêu điện ảnh!
              </Typography>
              <Typography className={classes.text} variant="h6">
                Không chỉ đặt vé, bạn còn có thể đổi quà hấp dẫn.
              </Typography>
              <Button
                onClick={handleOnclick}
                className={classes.button}
                variant="contained"
                size="large"
                color="primary"
              >
                App miễn phí - Tải về!
              </Button>
              <Typography>Download 2 phiên bản iOS & Android</Typography>
            </Box>
          </Grid>
          {/* Left right */}
          <Grid
            data-wow-duration="2s"
            className={cn(classes.mobileContent, "wow bounceInRight")}
            item
            xs={12}
            lg={6}
          >
            <Mobile />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
