import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  actCloseUserModal,
  actSubmitEditUser,
  actSubmitAddUser,
} from "../../modules/admin/actions";
import useStyles from "./styles";

const validate = (values) => {
  const errors = {};
  if (!values.taiKhoan) {
    errors.taiKhoan = "Not empty";
  }

  if (!values.matKhau) {
    errors.matKhau = "Not empty";
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
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    size="small"
    fullWidth
    variant="outlined"
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl size="small" fullWidth error={touched && error}>
    <Select variant="outlined" native {...input} {...custom}>
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

let UserModal = (props) => {
  const classes = useStyles();
  const { handleSubmit, pristine, reset, submitting } = props;

  const { dispatch, openUserModal, titleModal, account, pagination } = props;

  const handleClose = () => {
    dispatch(actCloseUserModal());
  };

  const submit = (values) => {
    values.maNhom = "GP01";
    if (titleModal === "Add User") {
      const firstPagination = { ...pagination };
      firstPagination.soTrang = 1;
      props.handleChangePage(1);
      dispatch(
        actSubmitAddUser({
          account: values,
          token: account.accessToken,
          pagination: firstPagination,
        })
      );
    } else {
      dispatch(
        actSubmitEditUser({
          account: values,
          token: account.accessToken,
          pagination,
        })
      );
    }
  };

  return (
    <div>
      <Dialog open={openUserModal} onClose={handleClose}>
        <DialogContent>
          <Typography variant="h5">{titleModal}</Typography>

          <form onSubmit={handleSubmit(submit)}>
            <label>Account</label>
            <Field
              disabled={titleModal === "Edit User" && true}
              size="small"
              name="taiKhoan"
              component={renderTextField}
            />

            <label>Password</label>
            <Field type="password" name="matKhau" component={renderTextField} />

            <label>Email</label>
            <Field name="email" component={renderTextField} />

            <label>Full name</label>
            <Field name="hoTen" component={renderTextField} />

            <label>Phone number</label>
            <Field name="soDt" component={renderTextField} />

            <label>Kind of user</label>
            <Field name="maLoaiNguoiDung" component={renderSelectField}>
              {/* <option value={""}>Choose one option</option> */}
              <option value={"KhachHang"}>Khách hàng</option>
              <option value={"QuanTri"}>Quản trị</option>
            </Field>
            <Box>
              <Box>
                <Button
                  className={classes.button}
                  variant="outlined"
                  color="primary"
                  type="submit"
                  disabled={pristine || submitting}
                >
                  Submit
                </Button>
                <Button
                  onClick={(e) => {
                    handleClose(e);
                    reset();
                  }}
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

UserModal = reduxForm({
  form: "userModal",
  validate,
  enableReinitialize: true,
})(UserModal);

const mapStateToProps = (state) => {
  const { editUser } = state.admin;
  return {
    account: state.auth.account,
    openUserModal: state.admin.openUserModal,
    titleModal: state.admin.titleModal,
    editUser: state.admin.editUser,
    initialValues: {
      maLoaiNguoiDung: editUser.maLoaiNguoiDung
        ? editUser.maLoaiNguoiDung
        : "KhachHang",
      taiKhoan: editUser.taiKhoan ? editUser.taiKhoan : "",
      matKhau: editUser.matKhau ? editUser.matKhau : "",
      soDt: editUser.soDt ? editUser.soDt : "",
      email: editUser.email ? editUser.email : "",
      hoTen: editUser.hoTen ? editUser.hoTen : "",
    },
  };
};
export default connect(mapStateToProps)(UserModal);
