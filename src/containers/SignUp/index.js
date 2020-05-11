import { Box, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { actRegister } from "./../../modules/auth/actions";
import useStyles from "./styles";
import {
  actOpenGlobalLoading,
  actCloseGlobalLoading,
} from "../../commons/actions";

const validate = (values) => {
  const errors = {};
  if (!values.taiKhoan) {
    errors.taiKhoan = "Not empty";
  } else if (values.taiKhoan.length < 4) {
    errors.taiKhoan = "At least 4 characters";
  } else if (values.taiKhoan.length > 20) {
    errors.taiKhoan = "Maximum 20 characters";
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
    errors.email = "Not empty";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid";
  }

  if (!values.soDt) {
    errors.soDt = "Not empty";
  } else if (isNaN(Number(values.soDt))) {
    errors.soDt = "Invalid";
  }

  if (!values.hoTen) {
    errors.hoTen = "Not empty";
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
  const { dispatch } = props;
  const { handleSubmit } = props;
  const history = useHistory();

  const handleGoToLogin = () => {
    history.push("/log-in");
  };

  const submit = (values) => {
    const account = { ...values, maNhom: "GP01", maLoaiNguoiDung: "KhachHang" };
    delete account.confirmPassword;
    dispatch(actRegister(account));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actOpenGlobalLoading());
    setTimeout(() => {
      dispatch(actCloseGlobalLoading());
    }, 700);
  }, [dispatch]);

  return (
    <Box className={classes.container}>
      <Box className={classes.signUp}>
        <DialogContent>
          <Box marginBottom={3} textAlign="center">
            <Typography variant="h5">Welcome to N-Cinema</Typography>
          </Box>
          <form onSubmit={handleSubmit(submit)}>
            <label>Account *</label>
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
              color="secondary"
              className={classes.submit}
              size="large"
            >
              Register
            </Button>
            <Box>
              <Typography onClick={handleGoToLogin} className={classes.link}>
                {"Already have an account? Sign In"}
              </Typography>
            </Box>
          </form>
        </DialogContent>
      </Box>
    </Box>
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
