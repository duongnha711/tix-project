import { Box, Button, Divider, Grid, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "../../commons/actions";
import MenuResponsive from "../../components/MenuResponsive";
import UserInfo from "../../components/UserInfo";
import useStyles from "./styles";

function Header(props) {
  const classes = useStyles();
  const { dispatch } = props;
  const [isShowMenuResponsive, setShowMenuResponsive] = useState(false);
  const handleOpenMenuResponsive = () => {
    setShowMenuResponsive(true);
  };
  const handleCloseMenuResponsive = () => {
    setShowMenuResponsive(false);
  };

  const handleOnClickOpenLogin = () => {
    dispatch(Actions.actOpenLogin());
  };
  const handleOnClickOpenRegister = () => {
    dispatch(Actions.actOpenRegister());
  };

  return (
    <Box boxShadow={1} className={classes.topHeader}>
      <Box className={classes.containerFluid}>
        <Grid justify="space-between" container>
          <Grid className={classes.logo} item>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" width="50" />
            </Link>
          </Grid>
          {/* button login - location <730 -> hidden */}
          <Hidden smDown>
            <Grid className={classes.navigation} item>
              <Box>
                <a href="#showTime">Lịch chiếu</a>
                <a href="#infoCinema">Cụm rạp</a>
                <a href="#news">Tin tức</a>
                <a href="#app">Ứng dụng</a>
              </Box>
            </Grid>
          </Hidden>
          <Grid className={classes.login} item>
            {/* Icon Menu responsive <730 -> show */}
            <Hidden mdUp>
              <MenuIcon
                onClick={handleOpenMenuResponsive}
                className={classes.iconMenu}
                fontSize="large"
              />
            </Hidden>
            {/* button login - location <730 -> hidden */}
            <Hidden smDown>
              <Grid
                container
                alignItems="center"
                className={classes.contentLogin}
              >
                {/*  igLogin ? Duong Nha : log in */}

                <UserInfo />

                <Button
                  onClick={handleOnClickOpenLogin}
                  className={classes.button}
                  size="large"
                  color="primary"
                  variant="contained"
                >
                  Log in
                </Button>
                <Divider orientation="vertical" flexItem />
                <Box marginLeft={1} className={classes.location}>
                  <Button
                    onClick={handleOnClickOpenRegister}
                    color="primary"
                    variant="outlined"
                    size="large"
                  >
                    Register
                  </Button>
                </Box>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        {/* //Drawer - responsive */}
        <MenuResponsive
          handleCloseMenuResponsive={handleCloseMenuResponsive}
          isShowMenuResponsive={isShowMenuResponsive}
        />
      </Box>
    </Box>
  );
}

export default connect()(Header);
