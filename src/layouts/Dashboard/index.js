import { Box, List, ListItem, TextField } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PersonIcon from "@material-ui/icons/Person";
import clsx from "clsx";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Route, useHistory } from "react-router-dom";
import {
  actCloseGlobalLoading,
  actOpenGlobalLoading,
} from "../../commons/actions";
import Alert from "../../components/Alert";
import UserInfo from "../../components/UserInfo";
import { actLogOut } from "../../modules/auth/actions";
import useStyles from "./styles";

function Dashboard({ account, isLogged, dispatch, component, ...rest }) {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    history.push("/");
    dispatch(actLogOut());
    dispatch(actOpenGlobalLoading());
    setTimeout(() => {
      dispatch(actCloseGlobalLoading());
    }, 1000);
  };

  useEffect(() => {
    if (!isLogged) {
      history.push("/log-in");
    }
    if (isLogged && account.maLoaiNguoiDung !== "QuanTri") {
      Alert({ icon: "warning", text: "Bạn không có quyền Admin" });
      history.push("/");
    }
  }, [account, isLogged, history]);

  const handleSearchUser = (e) => {
    // const { value } = e.target;
    // dispatch(actSearchUser({ tuKhoa: value }));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <TextField
            onChange={handleSearchUser}
            className={classes.searchBar}
            color="secondary"
            placeholder="API trả sai result => ko làm"
            variant="outlined"
            size="small"
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          {isLogged && <UserInfo />}
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.listIcon}>
          <Link to="/admin">
            <ListItem className={classes.linkIcon}>
              <PersonIcon className={classes.iconStyle} fontSize="large" />
              <Box> Quản lý tài khoản</Box>
            </ListItem>
          </Link>

          <Link to="/admin/movie">
            <ListItem className={classes.linkIcon}>
              <OndemandVideoIcon
                className={classes.iconStyle}
                fontSize="large"
              />
              <Box> Quản lý danh sách phim</Box>
            </ListItem>
          </Link>

          <Link to="/">
            <ListItem className={classes.linkIcon}>
              <HomeIcon className={classes.iconStyle} fontSize="large" />
              <Box> Home page</Box>
            </ListItem>
          </Link>

          <ListItem onClick={handleLogOut} button className={classes.linkIcon}>
            <ExitToAppIcon className={classes.iconStyle} fontSize="large" />
            <Box> Log out</Box>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Box className={classes.contentContainer}>
          <Route {...rest} component={component} />
        </Box>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  account: state.auth.account,
});

export default connect(mapStateToProps)(Dashboard);
