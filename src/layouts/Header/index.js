import { Box, Button, Divider, Grid, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MenuResponsive from "../../components/MenuResponsive";
import UserInfo from "../../components/UserInfo";
import useStyles from "./styles";

function Header(props) {
  const classes = useStyles();
  const { isLogged } = props;
  const history = useHistory();
  const [isShowMenuResponsive, setShowMenuResponsive] = useState(false);
  const handleOpenMenuResponsive = () => {
    setShowMenuResponsive(true);
  };
  const handleCloseMenuResponsive = () => {
    setShowMenuResponsive(false);
  };

  const handleOnClickOpenLogin = () => {
    history.push("/log-in");
  };
  const handleOnClickOpenRegister = () => {
    history.push("/register");
  };

  return (
    <Box id="top" className={classes.topHeader}>
      <Box className={classes.containerFluid}>
        <Grid alignItems="center" justify="space-between" container>
          <Grid className={classes.wrarperLogo} item>
            <Box className={classes.logo}>
              <Link to="/">N-cinema</Link>
            </Box>
            {/* <Box className={classes.myCV}>
              <Link to="/duong-hoang-nha">My CV</Link>
            </Box> */}
          </Grid>

          {/* button login - location <730 -> hidden */}
          <Hidden smDown>
            <Grid className={classes.navigation} item>
              <Box>
                <HashLink to="/#showTime">Lịch chiếu</HashLink>
                <HashLink to="/#infoCinema">Cụm rạp</HashLink>
                <HashLink to="/#news">Tin tức</HashLink>
                <HashLink to="/#app">Ứng dụng</HashLink>
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
                {isLogged ? (
                  <UserInfo />
                ) : (
                  <Fragment>
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
                        variant="contained"
                        size="large"
                      >
                        Register
                      </Button>
                    </Box>
                  </Fragment>
                )}
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

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

export default connect(mapStateToProps)(Header);
