import { Box, Button, Paper } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import {
  changeFormateDate,
  convertFrom24To12Format,
  getUniqueListByCinema,
  getUniqueListByDate,
} from "../../../../functions/helper";
import SelectInput from "./../../../../components/SelectInput";
import {
  actChangeShowTimeCode,
  actFilterByCinema,
  actFilterByDay,
  actFilterByName,
} from "./../../actions";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import Alert from "../../../../components/Alert";
import InternalLoading from "../../../../components/InternalLoading";

function FilterFilm(props) {
  const classes = useStyles();
  const {
    dispatch,
    movieList,
    arrShowTimeOfOneMovie,
    arrDateOfOneMovie,
    arrHourOfOneMovie,
    maLichChieu,
    activeName,
  } = props;
  let history = useHistory();

  const renderMovieList = () => {
    if (movieList && movieList.length > 0) {
      return movieList.map((movie) => (
        <option key={movie.maPhim} value={movie.maPhim}>
          {movie.tenPhim}
        </option>
      ));
    }
  };

  const renderCinemaList = () => {
    const arrUniqueShowTimeOfOneMovie = getUniqueListByCinema(
      arrShowTimeOfOneMovie,
      "thongTinRap",
      "tenCumRap"
    );
    if (arrUniqueShowTimeOfOneMovie && arrUniqueShowTimeOfOneMovie.length > 0) {
      return arrUniqueShowTimeOfOneMovie.map((cinema, index) => {
        const { thongTinRap } = cinema;
        return (
          <option key={index} value={thongTinRap.maCumRap}>
            {thongTinRap.tenCumRap}
          </option>
        );
      });
    }
  };

  const renderDateList = () => {
    const arrUniqueDateOfOneMovie = getUniqueListByDate(
      arrDateOfOneMovie,
      "ngayChieuGioChieu"
    );
    if (arrUniqueDateOfOneMovie && arrUniqueDateOfOneMovie.length > 0) {
      return arrUniqueDateOfOneMovie.map((cinema, index) => {
        const valueDay = cinema.ngayChieuGioChieu.substring(0, 10);
        const showDay = changeFormateDate(valueDay);
        return (
          <option key={index} value={valueDay}>
            {showDay}
          </option>
        );
      });
    }
  };

  const renderHourList = () => {
    if (
      arrHourOfOneMovie &&
      arrHourOfOneMovie.length > 0 &&
      arrDateOfOneMovie.length > 0
    ) {
      return arrHourOfOneMovie.map((cinema, index) => {
        const subHour = cinema.ngayChieuGioChieu.substring(
          11,
          cinema.ngayChieuGioChieu.length
        );
        const showHour = convertFrom24To12Format(subHour);

        return (
          <option key={index} value={cinema.maLichChieu}>
            {showHour}
          </option>
        );
      });
    }
  };

  const handleChooseName = (e) => {
    const { value } = e.target;
    dispatch(actFilterByName({ MaPhim: value }));
  };

  const handleChooseCinema = (e) => {
    const { value } = e.target;
    dispatch(actFilterByCinema(value));
  };

  const handleChooseDate = (e) => {
    const { value } = e.target;
    dispatch(actFilterByDay(value));
  };

  const handleChooseHour = (e) => {
    const { value } = e.target;
    dispatch(actChangeShowTimeCode(value));
  };

  const handleBuySticket = () => {
    if (!maLichChieu) {
      Alert({ text: "Vui lòng chọn đủ thông tin", icon: "warning" });
    } else {
      history.push(`/booking-ticket/${maLichChieu}`);
    }
  };

  return (
    <Paper elevation={3} className={classes.container}>
      <Box
        className={classes.wrapperItem}
        justifyContent="space-between"
        display="flex"
      >
        <SelectInput
          defaultValue=""
          onChange={handleChooseName}
          className={classes.name}
        >
          {renderMovieList()}
        </SelectInput>

        <SelectInput
          value={activeName}
          onChange={handleChooseCinema}
          className={classes.cinema}
        >
          <option value="">Chọn rạp</option>
          {renderCinemaList()}
          <InternalLoading className={classes.loading} />
        </SelectInput>
      </Box>
      <Box
        className={classes.wrapperItem}
        justifyContent="space-between"
        display="flex"
      >
        <SelectInput onChange={handleChooseDate} className={classes.date}>
          <option value="">Chọn ngày</option>

          {renderDateList()}
        </SelectInput>
        <SelectInput
          value={maLichChieu}
          name="lichChieu"
          onChange={handleChooseHour}
          className={classes.time}
        >
          <option value="">Chọn giờ</option>

          {renderHourList()}
        </SelectInput>
      </Box>
      <Button
        onClick={handleBuySticket}
        variant="contained"
        color="primary"
        size="large"
      >
        Mua Vé Ngay
      </Button>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  movieList: state.home.movieList,
  arrShowTimeOfOneMovie: state.home.arrShowTimeOfOneMovie,
  arrDateOfOneMovie: state.home.arrDateOfOneMovie,
  arrHourOfOneMovie: state.home.arrHourOfOneMovie,
  maLichChieu: state.home.maLichChieu,
  activeName: state.home.activeName,
});

export default connect(mapStateToProps)(FilterFilm);
