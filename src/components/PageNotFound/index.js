import React, { Fragment } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Box, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

export default function PageNotFound() {
  const classes = useStyles();
  const history = useHistory();

  const handleComebackHome = () => {
    history.push("/");
  };

  return (
    <Fragment>
      <Header />
      <Box className={classes.container}>
        <Button
          onClick={handleComebackHome}
          size="large"
          className={classes.button}
          color="secondary"
          variant="contained"
        >
         Home page
        </Button>
      </Box>
      <Footer />
    </Fragment>
  );
}
