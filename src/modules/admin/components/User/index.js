import { Box, Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PaginationComp from "../../../../components/Pagination";
import UserModal from "../../../../components/UserModal";
import { actAddUser, actGetUsersListPagination } from "../../actions";
import useStyles from "./styles";
import UserTable from "./UserTable/index";

function User(props) {
  const classes = useStyles();
  const { dispatch, infoPagination } = props;
  const [pagination, setPagination] = useState({
    soTrang: 1,
    soPhanTuTrenTrang: 20,
  });

  useEffect(() => {
    dispatch(actGetUsersListPagination(pagination));
  }, [dispatch, pagination]);

  const handleChangePage = (value) => {
    setPagination({ ...pagination, soTrang: value });
  };

  const handleAddUser = () => {
    dispatch(actAddUser());
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h4">Quản lý tài khoản</Typography>
      <Box marginTop={1} marginBottom={1}>
        <Button onClick={handleAddUser} color="primary" variant="contained">
          Add User
        </Button>
      </Box>

      <PaginationComp
        handleChangePage={handleChangePage}
        infoPagination={infoPagination}
      />
      <UserTable />
      <PaginationComp
        handleChangePage={handleChangePage}
        infoPagination={infoPagination}
      />
      <UserModal handleChangePage={handleChangePage} pagination={pagination} />
    </Box>
  );
}

const mapStateToProps = (state) => ({
  usersList: state.admin.usersList,
  infoPagination: state.admin.infoPagination,
});

export default connect(mapStateToProps)(User);
