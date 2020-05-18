import { Box, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { connect } from "react-redux";
import useStyles from "./styles";
import { actEditUser, actDeleteUser } from "../../../actions";
import AlertConfirm from "../../../../../components/AlertConfirm";

function UserTable(props) {
  const classes = useStyles();
  const { dispatch, usersList, account } = props;

  const handleEditUser = (user) => {
    dispatch(actEditUser(user));
  };

  const handleDeleteUser = (TaiKhoan) => {
    const callbackFunc = () => {
      dispatch(
        actDeleteUser({ TaiKhoan: { TaiKhoan }, token: account.accessToken })
      );
    };
    AlertConfirm(
      { icon: "warning", html: `Make sure you wanna delete ${TaiKhoan}?` },
      callbackFunc
    );
  };

  const renderUsers = () => {
    if (usersList && usersList.length > 0) {
      return usersList.map((user, index) => {
        return (
          <TableRow key={user.taiKhoan}>
            <TableCell align="center">{index + 1}</TableCell>
            <TableCell align="center">{user.taiKhoan}</TableCell>
            <TableCell align="center">{user.email}</TableCell>
            <TableCell align="center">{user.soDt}</TableCell>
            <TableCell align="center">{user.hoTen}</TableCell>
            <TableCell align="center">{user.maLoaiNguoiDung}</TableCell>
            <TableCell align="center">
              <Box className={classes.wrapperButton}>
                <Button
                  className={classes.button}
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    handleEditUser(user);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    handleDeleteUser(user.taiKhoan);
                  }}
                  variant="outlined"
                  color="secondary"
                >
                  Delete
                </Button>
              </Box>
            </TableCell>
          </TableRow>
        );
      });
    }
  };

  return (
    <TableContainer className={classes.wrapperTable} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" component="th">
              <b>No.</b>
            </TableCell>
            <TableCell align="center" component="th">
              <b>Account</b>
            </TableCell>
            <TableCell align="center" component="th">
              <b>Email</b>
            </TableCell>
            <TableCell align="center" component="th">
              <b>Phone number</b>
            </TableCell>
            <TableCell align="center" component="th">
              <b>Full name</b>
            </TableCell>
            <TableCell align="center" component="th">
              <b>Kind</b>
            </TableCell>
            <TableCell align="center" component="th">
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderUsers()}</TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => ({
  usersList: state.admin.usersList,
  account: state.auth.account,
});

export default connect(mapStateToProps)(UserTable);
