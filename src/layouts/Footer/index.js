import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import TopFooter from "./TopFooter";
import Divider from "@material-ui/core/Divider";
import BottomFooter from "./BottomFooter";

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Box className={classes.container}>
        <TopFooter />
        <Divider />
        <BottomFooter />
      </Box>
    </Box>
  );
}
