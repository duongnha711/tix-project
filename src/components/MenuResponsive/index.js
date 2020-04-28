import { Drawer, List, ListItem, Box, Hidden } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Avatar } from "@material-ui/core";

export default function MenuResponsive(props) {
  const { isShowMenuResponsive } = props;
  const classes = useStyles();

  const handleCloseMenuResponsive = () => {
    props.handleCloseMenuResponsive();
  };

  //data demo
  const arrMenuList = [
    { menuItem: "Lịch chiếu" },
    { menuItem: "Cụm rạp" },
    { menuItem: "Tin tức" },
    { menuItem: "Ứng dụng" },
  ];

  const renderMenuList = () => {
    if (Array.isArray(arrMenuList) && arrMenuList.length > 0) {
      return arrMenuList.map((item) => {
        return (
          <ListItem key={item.menuItem} button>
            {item.menuItem}
          </ListItem>
        );
      });
    }
  };

  return (
    // {/* Icon Menu responsive <730 -> show */}
    <Hidden mdUp>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={isShowMenuResponsive}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem className={classes.wrapperAccount}>
            <Box className={classes.account}>
              <Avatar className={classes.small} sizes="10" alt="Nha" />
              Dương Nhã
            </Box>{" "}
            <ChevronRightIcon
              onClick={handleCloseMenuResponsive}
              className={classes.iconClose}
            />
          </ListItem>
          {renderMenuList()}
        </List>
      </Drawer>
    </Hidden>
  );
}
