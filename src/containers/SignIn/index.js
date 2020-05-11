import { Box, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { actLogIn } from "../../modules/auth/actions";
import useStyles from "./styles";
import { actOpenGlobalLoading, actCloseGlobalLoading } from "../../commons/actions";

const validate = (values) => {
  const errors = {};
  if (!values.taiKhoan) {
    errors.taiKhoan = "Not empty";
  }

  if (!values.matKhau) {
    errors.matKhau = "Not empty";
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
  const { dispatch, isLogged } = props;
  const { handleSubmit } = props;
  const history = useHistory();

  const handleGoToRegister = () => {
    history.push("/register");
  };

  const submit = (values) => {
    dispatch(actLogIn(values));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actOpenGlobalLoading());
    setTimeout(() => {
      dispatch(actCloseGlobalLoading());
    }, 700);
  }, [dispatch]);

  return (
    <Fragment>
      {isLogged && <Redirect to="/" />}

      <Box className={classes.container}>
        <Box className={classes.signIn}>
          <DialogContent>
            <Box marginBottom={3} textAlign="center">
              <Typography variant="h5">Welcome to N-Cinema</Typography>
            </Box>
            <form onSubmit={handleSubmit(submit)}>
              <label>Account *</label>
              <Field
                name="taiKhoan"
                placeholder="Nhập tài khoản"
                variant="outlined"
                fullWidth
                component={renderTextField}
                className={classes.userName}
              />

              <label>Password *</label>
              <Field
                name="matKhau"
                type="password"
                placeholder="Nhập password"
                variant="outlined"
                fullWidth
                component={renderTextField}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                size="large"
              >
                Sign In
              </Button>
              <Box>
                <Typography
                  onClick={handleGoToRegister}
                  className={classes.link}
                >
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Box>
            </form>
          </DialogContent>
        </Box>
      </Box>
    </Fragment>
  );
};

SignIn = reduxForm({
  form: "signIn",
  validate,
})(SignIn);

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

export default connect(mapStateToProps)(SignIn);
