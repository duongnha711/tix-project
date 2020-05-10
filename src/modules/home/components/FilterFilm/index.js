import { Box, Select, Button, Paper, FormControl } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  changeFormateDate,
  convertFrom24To12Format,
  removeDuplicateInArr,
} from "../../../../functions/helper";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { actFilterByNameOfficial } from "../../actions";

function FilterFilm(props) {
  const classes = useStyles();
  const { dispatch, arrFilterByName, movieList } = props;
  const history = useHistory();

  const [maCumRap, setMaCumRap] = useState("");
  const [activeDate, setActiveDate] = useState("");
  const [maLichChieu, setMaLichChieu] = useState("");
  //backend tra time ko dung nen lay them thang nay pass qua booking
  const [hourToShow, setHourToShow] = useState("");

  //active cinema dau tien
  useEffect(() => {
    if (
      arrFilterByName.heThongRapChieu &&
      arrFilterByName.heThongRapChieu.length > 0
    ) {
      setMaCumRap(arrFilterByName.heThongRapChieu[0].cumRapChieu[0].maCumRap);
    }
  }, [arrFilterByName]);
  //active hour dau tien
  useEffect(() => {
    let arrHour = [];
    if (
      arrFilterByName.heThongRapChieu &&
      arrFilterByName.heThongRapChieu.length > 0
    ) {
      arrFilterByName.heThongRapChieu.forEach((item) => {
        // if (item.maHeThongRap === maHeThongRap) {
        if (item.cumRapChieu && item.cumRapChieu.length > 0) {
          item.cumRapChieu.forEach((cinema) => {
            if (cinema.maCumRap === maCumRap) {
              if (cinema.lichChieuPhim && cinema.lichChieuPhim.length > 0) {
                cinema.lichChieuPhim.forEach((hour) => {
                  if (activeDate === hour.ngayChieuGioChieu.substring(0, 10)) {
                    arrHour.push(hour);
                  }
                });
              }
            }
          });
          // }
        }
      });
    }
    if (arrHour && arrHour.length > 0) {
      setMaLichChieu(arrHour[0].maLichChieu);
      setHourToShow(
        convertFrom24To12Format(
          arrHour[0].ngayChieuGioChieu.substring(
            11,
            arrHour[0].ngayChieuGioChieu.length
          )
        )
      );
    } else {
      setMaLichChieu("");
      setHourToShow("");
    }
  }, [arrFilterByName, maCumRap, activeDate]);

  //active date dau tien
  useEffect(() => {
    if (
      arrFilterByName.heThongRapChieu &&
      arrFilterByName.heThongRapChieu.length > 0
    ) {
      arrFilterByName.heThongRapChieu.forEach((item) => {
        // if (item.maHeThongRap === maHeThongRap) {
        if (item.cumRapChieu && item.cumRapChieu.length > 0) {
          item.cumRapChieu.forEach((cinema) => {
            if (cinema.maCumRap === maCumRap) {
              setActiveDate(
                cinema.lichChieuPhim[0].ngayChieuGioChieu.substring(0, 10)
              );
            }
          });
        }
        // }
      });
    }
  }, [arrFilterByName, maCumRap]);

  const renderNameList = () => {
    if (movieList && movieList.length > 0) {
      return movieList.map((item) => {
        return (
          <option key={item.maPhim} value={item.maPhim}>
            {item.tenPhim}
          </option>
        );
      });
    } else {
      return <option>Không có suất chiếu</option>;
    }
  };

  const renderBranch = () => {
    if (
      arrFilterByName.heThongRapChieu &&
      arrFilterByName.heThongRapChieu.length > 0
    ) {
      let arrBranch = [];
      arrFilterByName.heThongRapChieu.forEach((item) => {
        // if (item.maHeThongRap === maHeThongRap) {
        item.cumRapChieu.forEach((cinema) => {
          arrBranch.push({
            maCumRap: cinema.maCumRap,
            tenCumRap: cinema.tenCumRap,
          });
        });
        // }
      });
      if (arrBranch && arrBranch.length > 0) {
        return arrBranch.map((item) => {
          return (
            <option value={item.maCumRap} key={item.maCumRap}>
              {item.tenCumRap}
            </option>
          );
        });
      }
    } else {
      return <option>Không có suất chiếu</option>;
    }
  };

  const renderDate = () => {
    if (
      arrFilterByName.heThongRapChieu &&
      arrFilterByName.heThongRapChieu.length > 0
    ) {
      let arrLichChieu = [];
      arrFilterByName.heThongRapChieu.forEach((item) => {
        // if (item.maHeThongRap === maHeThongRap) {
        item.cumRapChieu.forEach((cinema) => {
          if (cinema.maCumRap === maCumRap) {
            arrLichChieu = cinema.lichChieuPhim;
          }
        });
        // }
      });

      if (arrLichChieu && arrLichChieu.length > 0) {
        let arrDate = [];
        arrLichChieu.forEach((item) => {
          arrDate.push(item.ngayChieuGioChieu.substring(0, 10));
        });

        if (arrDate && arrDate.length > 0) {
          return removeDuplicateInArr(arrDate).map((item, index) => {
            return (
              <option value={item} key={index}>
                {changeFormateDate(item)}
              </option>
            );
          });
        }
      }
    } else {
      return <option>Không có suất chiếu</option>;
    }
  };

  const renderHour = () => {
    if (
      arrFilterByName.heThongRapChieu &&
      arrFilterByName.heThongRapChieu.length > 0
    ) {
      let arrLichChieu = [];
      arrFilterByName.heThongRapChieu.forEach((item) => {
        // if (item.maHeThongRap === maHeThongRap) {
        item.cumRapChieu.forEach((cinema) => {
          if (cinema.maCumRap === maCumRap) {
            arrLichChieu = cinema.lichChieuPhim;
          }
        });
        // }
      });

      if (arrLichChieu && arrLichChieu.length > 0) {
        let arrHour = [];
        arrLichChieu.forEach((item) => {
          arrHour.push({
            ngayChieuGioChieu: item.ngayChieuGioChieu,
            maLichChieu: item.maLichChieu,
          });
        });

        if (arrHour && arrHour.length > 0) {
          const arrHourToShow = [];
          arrHour.forEach((item) => {
            if (item.ngayChieuGioChieu.substring(0, 10) === activeDate) {
              arrHourToShow.push(item);
            }
          });

          if (arrHourToShow && arrHourToShow.length > 0) {
            return arrHourToShow.map((item) => {
              return (
                <option key={item.maLichChieu} value={item.maLichChieu}>
                  {convertFrom24To12Format(
                    item.ngayChieuGioChieu.substring(
                      11,
                      item.ngayChieuGioChieu.length
                    )
                  )}
                </option>
              );
            });
          }
        }
      }
    } else {
      return <option>Không có suất chiếu</option>;
    }
  };

  const handleChooseName = (e) => {
    const { value } = e.target;
    const maPhim = { MaPhim: value };
    dispatch(actFilterByNameOfficial(maPhim));
  };

  const handleChooseCinema = (e) => {
    const { value } = e.target;
    setMaCumRap(value);
  };

  const handleChooseDate = (e) => {
    const { value } = e.target;
    setActiveDate(value);
  };

  const handleChooseHour = (e) => {
    const { value, selectedIndex } = e.target;
    setMaLichChieu(value);
    setHourToShow(e.target.options[selectedIndex].text);
  };

  const handleOnclick = () => {
    if (maLichChieu) {
      history.push(`/booking-ticket/${maLichChieu}`,{hourToShow});
    } else {
      alert("ma lich chieu rong~");
    }
  };

  return (
    <Paper className={classes.container}>
      <Box className={classes.wrapperSelect}>
        <FormControl className={classes.nameSelect} size="small">
          <Select
            onChange={handleChooseName}
            defaultValue={maCumRap}
            native
            variant="outlined"
          >
            {renderNameList()}
          </Select>
        </FormControl>

        <FormControl className={classes.branchSelect} size="small">
          <Select
            onChange={handleChooseCinema}
            defaultValue={maCumRap}
            native
            variant="outlined"
          >
            {renderBranch()}
          </Select>
        </FormControl>
      </Box>

      <Box className={classes.wrapperSelect}>
        <FormControl className={classes.dateSelect} size="small">
          <Select
            onChange={handleChooseDate}
            defaultValue={activeDate}
            native
            variant="outlined"
          >
            {renderDate()}
          </Select>
        </FormControl>

        <FormControl className={classes.hourSelect} size="small">
          <Select
            onChange={handleChooseHour}
            defaultValue={maLichChieu}
            native
            variant="outlined"
          >
            {renderHour()}
          </Select>
        </FormControl>
      </Box>

      <Box className={classes.button}>
        <Button onClick={handleOnclick} variant="contained" color="primary">
          Mua vé ngay
        </Button>
      </Box>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  arrFilterByName: state.home.arrFilterByName,
  movieList: state.home.movieList,
});

export default connect(mapStateToProps)(FilterFilm);
