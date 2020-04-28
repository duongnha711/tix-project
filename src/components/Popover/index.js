import { List, ListItem } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import React from "react";

export default function SimplePopover(props) {
  const { anchorEl } = props;

  const handleClose = () => {
    props.handleCloseContentFilter();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <List>
        <ListItem button>Vì anh vẫn tin</ListItem>
        <ListItem button>Fast & Furious</ListItem>
      </List>
    </Popover>
  );
}
