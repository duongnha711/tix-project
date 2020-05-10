import React from "react";
import useStyles from "./styles";
import { Box, Typography } from "@material-ui/core";

export default function BottomFooter() {
  const classes = useStyles();

  return (
    <Box className={classes.bottomFooter}>
      <Box className={classes.imgLeft}>
        <img src="/images/zion.jpg" alt="zion" width="80px" />
      </Box>
      <Box className={classes.address}>
        <Typography className={classes.title}>
          TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
        </Typography>
        <Typography variant="subtitle1">
          Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
          Minh, Việt Nam.
        </Typography>
        <Typography variant="subtitle1">
          Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
        </Typography>
        <Typography variant="subtitle1">
          đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch
          và đầu tư Thành phố Hồ Chí Minh cấp.
        </Typography>
        <Typography variant="subtitle1">
          Số Điện Thoại (Hotline): 1900 545 436
        </Typography>
        <Typography variant="subtitle1">
          Email: <a href="/"> support@tix.vn</a>
        </Typography>
      </Box>
      <Box className={classes.imgRight}>
        <img src="/images/notify.png" alt="zion" width="130px" />
      </Box>
    </Box>
  );
}
