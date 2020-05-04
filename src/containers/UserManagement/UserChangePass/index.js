import { Button, List, ListItem, TextField, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
export default function UserChangePass() {
  const classes = useStyles();

  return (
    <List>
      <ListItem>
        <Typography variant="h5">Thay đổi mật khẩu</Typography>
      </ListItem>
      <ListItem className={classes.input}>
        <label>Current password</label>
        <TextField fullWidth variant="outlined" />
      </ListItem>
      <ListItem className={classes.input}>
        <label>New password</label>
        <TextField fullWidth variant="outlined" />
      </ListItem>
      <ListItem className={classes.input}>
        <label>Confirm new password</label>
        <TextField fullWidth variant="outlined" />
      </ListItem>
      <ListItem className={classes.input}>
        <Button className={classes.button} variant="contained" size="large" color="primary" fullWidth>
          confirm
        </Button>
      </ListItem>
    </List>
  );
}
