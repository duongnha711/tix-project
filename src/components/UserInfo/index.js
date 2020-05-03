import { Box, List, ListItem } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import React, { Fragment } from "react";

export default function UserInfo(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Fragment>
      <Box style={{cursor:"pointer"}} onClick={handleClick} marginRight={1}>
        Duong Nha
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          <ListItem button>Information of Name</ListItem>
          <ListItem button>Log out</ListItem>
        </List>
      </Popover>
    </Fragment>
  );
}
