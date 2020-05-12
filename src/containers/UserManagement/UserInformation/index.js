import { List, ListItem, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { connect } from "react-redux";
function UserInformation(props) {
  const classes = useStyles();
  const { account } = props;
  return (
    <List>
      <ListItem>
        <Typography className={classes.title} variant="h5">
          Thông Tin Tài Khoản
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>Account: {account.taiKhoan}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Name: {account.hoTen}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Email: {account.email}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Phone number: {account.soDT} </Typography>
      </ListItem>
    </List>
  );
}

const mapStateToProps = (state) => ({
  account: state.auth.account,
});

export default connect(mapStateToProps)(UserInformation);
