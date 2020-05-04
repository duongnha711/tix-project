import { List, ListItem, Typography } from "@material-ui/core";
import React from "react";

export default function UserInformation() {
  return (
    <List>
      <ListItem>
        <Typography variant="h5">Thông Tin Tài Khoản</Typography>
      </ListItem>
      <ListItem>
        <Typography>Tài khoản: Luffy zoro</Typography>
      </ListItem>
      <ListItem>
        <Typography>Email: dsd@fdsfds.com</Typography>
      </ListItem>
      <ListItem>
        <Typography>Số điện thoại: 90890890 </Typography>
      </ListItem>
      <ListItem>
        <Typography>Phân loại: Khách Hàng </Typography>
      </ListItem>
    </List>
  );
}
