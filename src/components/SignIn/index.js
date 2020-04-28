import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import useStyles from "./styles";

import { connect } from "react-redux";
import * as Actions from "./../../commons/actions";

function SignUp(props) {
  const classes = useStyles();
  const { dispatch, openLogin } = props;

  const handleClose = () => {
    dispatch(Actions.actCloseLogin);
  };

  return (
    <div>
      <Dialog className={classes.signUp} open={openLogin} onClose={handleClose}>
        <DialogContent>
          <Box marginBottom={3} textAlign="center">
            <CloseIcon onClick={handleClose} className={classes.iconClose} />
            <Box>
              <img src="./images/logo.png" alt="logo" width="100px" />
            </Box>

            <Typography variant="h6">
              Thế Giới Phim Trên Đầu Ngón Tay
            </Typography>
          </Box>
          <form>
            <label>Email Address *</label>
            <TextField
              className={classes.email}
              variant="outlined"
              fullWidth
              name="email"
              autoFocus
              placeholder="Enter your email"
            />

            <label>Password *</label>
            <TextField
              variant="outlined"
              fullWidth
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
  openLogin: state.ui.openLogin,
});

export default connect(mapStateToProps)(SignUp);
