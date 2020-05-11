import { Box } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

// const arrLogo = [
//   { url: "/images/vietcom.png", name: "vietcom" },
//   { url: "/images/vietin.png", name: "vietin" },
//   { url: "/images/cgv.png", name: "cgv" },
//   { url: "/images/bhd.png", name: "bhd" },
//   { url: "/images/lotte.png", name: "lotte" },
// ];

export default function TopFooter() {
  const classes = useStyles();

  // const renderLogo = () => {
  //   if (arrLogo && arrLogo.length > 0) {
  //     return arrLogo.map((logo, index) => (
  //       <Box component="span" key={index} className={classes.logo}>
  //         <img src={logo.url} alt={logo.name} width="30px" height="30px" />
  //       </Box>
  //     ));
  //   }
  // };

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
          <Box className={classes.wrapperIcon}>
            <TwitterIcon
              style={{ color: "#1DA1F2" }}
              className={classes.icon}
            />
          </Box>
        </a>
        <a
          href="https://www.facebook.com/dhn711"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Box className={classes.wrapperIcon}>
            <YouTubeIcon
              style={{ color: "#FF0000" }}
              className={classes.icon}
            />
          </Box>
        </a>
      </Box>
    </Box>
  );
}
