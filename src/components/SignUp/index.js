import { Box, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as Actions from "./../../commons/actions";
import useStyles from "./styles";
import { actRegister } from "./../../modules/auth/actions";

const validate = (values) => {
  const errors = {};
  if (!values.taiKhoan) {
    errors.taiKhoan = "Username not empty";
  }

  if (!values.matKhau) {
    errors.matKhau = "Password not empty";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password not empty";
  } else if (values.confirmPassword !== values.matKhau) {
    errors.confirmPassword = "Password not match";
  }

  if (!values.email) {
    errors.email = "Email not empty";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.soDt) {
    errors.soDt = "Phone number not empty";
  } else if (isNaN(Number(values.soDt))) {
    errors.soDt = "Invalid phone number";
  }

  if (!values.hoTen) {
    errors.hoTen = "Full name not empty";
  }

  return errors;
};

const renderTextField = ({
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

let SignUp = (props) => {
  const classes = useStyles();
  const { dispatch, isShowRegister } = props;
  const { handleSubmit } = props;

  const handleClose = () => {
    dispatch(Actions.actCloseRegister());
  };

  const handleGoToLogin = () => {
    dispatch(Actions.actCloseRegister());
    dispatch(Actions.actOpenLogin());
  };

  const submit = (values) => {
    const account = { ...values, maNhom: "GP01", maLoaiNguoiDung: "KhachHang" };
    delete account.confirmPassword;
    dispatch(actRegister(account));
  };

  return (
    <div>
      <Dialog
        className={classes.signUp}
        open={isShowRegister}
        onClose={handleClose}
      >
        <DialogContent>
          <Box marginBottom={3} textAlign="center">
            <CloseIcon onClick={handleClose} className={classes.iconClose} />

            <Typography variant="h5">Welcome to N-Cinema</Typography>
          </Box>
          <form onSubmit={handleSubmit(submit)}>
            <label>Your Username *</label>
            <Field
              name="taiKhoan"
              variant="outlined"
              fullWidth
              component={renderTextField}
              className={classes.userName}
            />

            <Box display="flex">
              <Box width="50%" paddingRight={1}>
                <label>Password *</label>
                <Field
                  name="matKhau"
                  variant="outlined"
                  fullWidth
                  component={renderTextField}
                  className={classes.password}
                  type="password"
                />
              </Box>
              <Box width="50%" paddingLeft={1}>
                <label>Confirm *</label>
                <Field
                  name="confirmPassword"
                  variant="outlined"
                  fullWidth
                  component={renderTextField}
                  className={classes.password}
                  type="password"
                />
              </Box>
            </Box>
            <label>Email *</label>
            <Field
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              component={renderTextField}
              className={classes.email}
            />
            <Box display="flex">
              <Box width="50%" paddingRight={1}>
                <label>Full Name *</label>
                <Field
                  name="hoTen"
                  variant="outlined"
                  fullWidth
                  component={renderTextField}
                />
              </Box>
              <Box width="50%" paddingLeft={1}>
                <label>Phone Number *</label>
                <Field
                  name="soDt"
                  variant="outlined"
                  fullWidth
                  component={renderTextField}
                />
              </Box>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              size="large"
            >
              Register
            </Button>
            <Box>
              <Typography onClick={handleGoToLogin} className={classes.link}>
                {"Already have an account? Sign in"}
              </Typography>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

SignUp = reduxForm({
  form: "signUp",
  validate,
})(SignUp);

const mapStateToProps = (state) => ({
  isShowRegister: state.ui.isShowRegister,
});

export default connect(mapStateToProps)(SignUp);
