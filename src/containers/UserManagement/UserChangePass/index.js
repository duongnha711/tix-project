import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

function UserChangePass(props) {
  const classes = useStyles();

  const { handleSubmit, pristine, reset, submitting } = props;

  const submit = (value) => {
    console.log("submit -> value", value);
  };

  return (
    <List>
      <form onSubmit={handleSubmit(submit)}>
        <ListItem>
          <Typography variant="h5">Thay đổi mật khẩu</Typography>
        </ListItem>
        <ListItem className={classes.input}>
          <label>Current password</label>
          <Field
            variant="outlined"
            fullWidth
            name="currentPass"
            component={renderTextField}
            type="password"
          />
        </ListItem>
        <ListItem className={classes.input}>
          <label>New password</label>
          <Field
            variant="outlined"
            fullWidth
            name="matKhau"
            component={renderTextField}
            type="password"
          />
        </ListItem>
        <ListItem className={classes.input}>
          <label>Confirm new password</label>
          <Field
            variant="outlined"
            fullWidth
            name="confirmMatKhau"
            component={renderTextField}
            type="password"
          />
        </ListItem>
        <ListItem className={classes.input}>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
            fullWidth
            type="submit"
          >
            confirm
          </Button>
        </ListItem>
      </form>
    </List>
  );
}

UserChangePass = reduxForm({
  form: "changePass",
  validate,
})(UserChangePass);

export default connect()(UserChangePass);
