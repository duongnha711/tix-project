import { Box } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

import Tooltip from "@material-ui/core/Tooltip";

export default function TopFooter() {
  const classes = useStyles();
  return (
    <Box className={classes.topFooter}>
      <Box className={classes.logo}>
        <Link to="/">N-cinema</Link>
      </Box>{" "}
      <Box display="flex" justifyContent="center">
        <a
          href="https://www.facebook.com/dhn711"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Box className={classes.wrapperIcon}>
            <FacebookIcon
              style={{ color: "#4267B2" }}
              className={classes.icon}
            />
          </Box>
        </a>
        <a
          href="https://www.facebook.com/dhn711"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Tooltip title="Facebook">
            <Box className={classes.wrapperIcon}>
              <TwitterIcon
                style={{ color: "#1DA1F2" }}
                className={classes.icon}
              />
            </Box>
          </Tooltip>
        </a>
        <a
          href="https://www.facebook.com/dhn711"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Tooltip title="Facebook">
            <Box className={classes.wrapperIcon}>
              <YouTubeIcon
                style={{ color: "#FF0000" }}
                className={classes.icon}
              />
            </Box>
          </Tooltip>
        </a>
      </Box>
    </Box>
  );
}
