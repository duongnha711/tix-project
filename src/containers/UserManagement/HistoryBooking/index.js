import { Box, List, ListItem, Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { formatCurrencyVND } from "../../../functions/helper";

export default function HistoryBooking(props) {
  const classes = useStyles();

  const { userBookingInfo } = props;

  const renderItemBooked = () => {
    if (userBookingInfo && userBookingInfo.length > 0) {
      const userBookingInfoAfterSort = userBookingInfo.sort(
        (a, b) => new Date(b.ngayDat) - new Date(a.ngayDat)
      );

      return userBookingInfoAfterSort.map((item, index) => {
        let total = 0;
        let idTicket = "";
        let quantityTikect = item.danhSachGhe.length;
        if (item.danhSachGhe && item.danhSachGhe.length > 0) {
          item.danhSachGhe.forEach((ticket) => {
            idTicket += `${ticket.maGhe.toString()} `;
            total += item.giaVe;
          });
        }

        return (
          <Box key={index} className={classes.itemBooked}>
            <Typography className={classes.nameMovie}>
              {item.tenPhim}
            </Typography>
            <Typography>{item.danhSachGhe[0].tenHeThongRap}</Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography>Screen: {item.danhSachGhe[0].tenRap}</Typography>
                <Typography>Số lượng vé: {quantityTikect}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Total: {formatCurrencyVND(total)}</Typography>
                <Typography>Ticket ID: {idTicket}</Typography>
              </Grid>
            </Grid>
          </Box>
        );
      });
    } else {
      return <Box>Empty history</Box>;
    }
  };

  return (
    <List>
      <ListItem>
        <Typography className={classes.title} variant="h5">
          Lịch sử đặt vé
        </Typography>
      </ListItem>
      <ListItem className={classes.wrapperItem}>{renderItemBooked()}</ListItem>
    </List>
  );
}
