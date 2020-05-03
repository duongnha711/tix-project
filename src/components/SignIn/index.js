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
import { actLogIn } from "../../modules/auth/actions";

const validate = (values) => {
  const errors = {};
  if (!values.taiKhoan) {
    errors.taiKhoan = "Uername not empty";
  }

  if (!values.matKhau) {
    errors.matKhau = "Password not empty";
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

let SignIn = (props) => {
  const classes = useStyles();
  const { dispatch, isShowLogin } = props;
  const { handleSubmit } = props;

  const handleClose = () => {
    dispatch(Actions.actCloseLogin());
  };

  const handleGoToRegister = () => {
    dispatch(Actions.actCloseLogin());
    dispatch(Actions.actOpenRegister());
  };

  const submit = (values) => {
    dispatch(actLogIn(values))
  };

  return (
    <div>
      <Dialog
        className={classes.signIn}
        open={isShowLogin}
        onClose={handleClose}
      >
        <DialogContent>
          <Box marginBottom={3} textAlign="center">
            <CloseIcon onClick={handleClose} className={classes.iconClose} />
            <Box>
              <img src="/images/logo.png" alt="logo" width="100px" />
            </Box>

            <Typography variant="h5">Welcome to N-Cinema</Typography>
          </Box>
          <form onSubmit={handleSubmit(submit)}>
            <label>Account *</label>
            <Field
              name="taiKhoan"
              placeholder="Enter your account"
              variant="outlined"
              fullWidth
              component={renderTextField}
              className={classes.userName}
            />

            <label>Password *</label>
            <Field
              name="matKhau"
              type="password"
              placeholder="Enter your password"
              variant="outlined"
              fullWidth
              component={renderTextField}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              size="large"
            >
              Sign In
            </Button>
            <Box>
              <Typography onClick={handleGoToRegister} className={classes.link}>
                {"Don't have an account? Sign Up"}
              </Typography>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

SignIn = reduxForm({
  form: "signIn",
  validate,
})(SignIn);

const mapStateToProps = (state) => ({
  isShowLogin: state.ui.isShowLogin,
});

export default connect(mapStateToProps)(SignIn);
