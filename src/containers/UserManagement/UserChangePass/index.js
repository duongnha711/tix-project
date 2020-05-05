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
import Alert from "../../../components/Alert";

const validate = (values) => {
  const errors = {};
  if (!values.currentPass) {
    errors.currentPass = "Not empty";
  }
  if (!values.matKhau) {
    errors.matKhau = "Not empty";
  }
  if (!values.confirmMatKhau) {
    errors.confirmMatKhau = "Not empty";
  } else if (values.confirmMatKhau !== values.matKhau) {
    errors.confirmMatKhau = "Password not match";
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

let UserChangePass = (props) => {
  const classes = useStyles();

  const { handleSubmit, reset, currentPass } = props;
  console.log("UserChangePass -> currentPass", currentPass);

  const submit = (value) => {
    if (value.currentPass !== currentPass) {
      console.log("true");
      Alert({ icon: "error", text: "Mật khẩu hiện tại không đúng" });
    } else {
      reset();
    }
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
};

UserChangePass = reduxForm({
  form: "changePass",
  validate,
})(UserChangePass);

export default connect()(UserChangePass);
