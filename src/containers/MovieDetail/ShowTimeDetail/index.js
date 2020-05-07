import { Box, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import cn from "classnames";
import {
  changeFormateDate,
  removeDuplicateInArr,
  convertFrom24To12Format,
} from "../../../functions/helper";
import { useHistory } from "react-router-dom";

export default function ShowTimeDetail(props) {
  const classes = useStyles();
  const { movieDetail } = props;
  const history = useHistory();

  //state
  const [maHeThongRap, setMaHeThongRap] = useState("");
  const [maCumRap, setMaCumRap] = useState("");
  const [activeDate, setActiveDate] = useState("");

  //active logo dau tien
  useEffect(() => {
    if (movieDetail.heThongRapChieu && movieDetail.heThongRapChieu.length > 0) {
      setMaHeThongRap(movieDetail.heThongRapChieu[0].maHeThongRap);
    }
  }, [movieDetail]);

  //active cinema dau tien
  useEffect(() => {
    if (movieDetail.heThongRapChieu && movieDetail.heThongRapChieu.length > 0) {
      movieDetail.heThongRapChieu.forEach((item) => {
        if (item.maHeThongRap === maHeThongRap) {
          setMaCumRap(item.cumRapChieu[0].maCumRap);
        }
      });
    }
  }, [movieDetail, maHeThongRap]);
  //active date dau tien
  useEffect(() => {
    if (movieDetail.heThongRapChieu && movieDetail.heThongRapChieu.length > 0) {
      movieDetail.heThongRapChieu.forEach((item) => {
        if (item.maHeThongRap === maHeThongRap) {
          if (item.cumRapChieu && item.cumRapChieu.length > 0) {
            item.cumRapChieu.forEach((cinema) => {
              if (cinema.maCumRap === maCumRap) {
                setActiveDate(
                  cinema.lichChieuPhim[0].ngayChieuGioChieu.substring(0, 10)
                );
              }
            });
          }
        }
      });
    }
  }, [movieDetail, maHeThongRap, maCumRap]);

  const renderLogo = () => {
    if (movieDetail.heThongRapChieu && movieDetail.heThongRapChieu.length > 0) {
      return movieDetail.heThongRapChieu.map((item) => {
        return (
          <Box
            onClick={() => {
              handleClickLogo(item.maHeThongRap);
            }}
            key={item.maHeThongRap}
            className={cn(
              classes.logo,
              maHeThongRap === item.maHeThongRap && classes.activeLogo
            )}
          >
            <img src={item.logo} alt={item.maHeThongRap} />
          </Box>
        );
      });
    }
  };

  const renderBranch = () => {
    if (movieDetail.heThongRapChieu && movieDetail.heThongRapChieu.length > 0) {
      let arrBranch = [];
      movieDetail.heThongRapChieu.forEach((item) => {
        if (item.maHeThongRap === maHeThongRap) {
          item.cumRapChieu.forEach((cinema) => {
            arrBranch.push({
              maCumRap: cinema.maCumRap,
              tenCumRap: cinema.tenCumRap,
            });
          });
        }
      });
      if (arrBranch && arrBranch.length > 0) {
        return arrBranch.map((item) => {
          return (
            <Box
              className={cn(
                maCumRap === item.maCumRap && classes.activeBranch,
                classes.itemBranch
              )}
              onClick={() => {
                handleClickBranch(item.maCumRap);
              }}
              key={item.maCumRap}
            >
              {item.tenCumRap}
            </Box>
          );
        });
      }
    }
  };

  const renderDate = () => {
    if (movieDetail.heThongRapChieu && movieDetail.heThongRapChieu.length > 0) {
      let arrLichChieu = [];
      movieDetail.heThongRapChieu.forEach((item) => {
        if (item.maHeThongRap === maHeThongRap) {
          item.cumRapChieu.forEach((cinema) => {
            if (cinema.maCumRap === maCumRap) {
              arrLichChieu = cinema.lichChieuPhim;
            }
          });
        }
      });

      if (arrLichChieu && arrLichChieu.length > 0) {
        let arrDate = [];
        arrLichChieu.forEach((item) => {
          arrDate.push(item.ngayChieuGioChieu.substring(0, 10));
        });

        if (arrDate && arrDate.length > 0) {
          return removeDuplicateInArr(arrDate).map((item, index) => {
            return (
              <Box
                onClick={() => {
                  handleClickDate(item);
                }}
                className={cn(
                  activeDate === item && classes.activeDate,
                  classes.itemDate
                )}
                key={index}
              >
                {changeFormateDate(item)}
              </Box>
            );
          });
        }
      }
    }
  };

  const renderHour = () => {
    if (movieDetail.heThongRapChieu && movieDetail.heThongRapChieu.length > 0) {
      let arrLichChieu = [];
      movieDetail.heThongRapChieu.forEach((item) => {
        if (item.maHeThongRap === maHeThongRap) {
          item.cumRapChieu.forEach((cinema) => {
            if (cinema.maCumRap === maCumRap) {
              arrLichChieu = cinema.lichChieuPhim;
            }
          });
        }
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
                <Box
                  onClick={() => {
                    handleClickHour(item.maLichChieu);
                  }}
                  key={item.maLichChieu}
                  className={classes.itemHour}
                >
                  {convertFrom24To12Format(
                    item.ngayChieuGioChieu.substring(
                      11,
                      item.ngayChieuGioChieu.length
                    )
                  )}
                </Box>
              );
            });
          }
        }
      }
    }
  };

  const handleClickLogo = (maHeThongRap) => {
    setMaHeThongRap(maHeThongRap);
  };

  const handleClickBranch = (maCumRap) => {
    setMaCumRap(maCumRap);
  };

  const handleClickDate = (date) => {
    setActiveDate(date);
  };

  const handleClickHour = (maLichChieu) => {
    history.push(`/booking-ticket/${maLichChieu}`);
  };

  return (
    <Box>
      <Box className={classes.listLogo}>
        <Typography>Logo</Typography>
        {renderLogo()}
      </Box>
      <Box>
        <Typography>Branch</Typography>
        {renderBranch()}
      </Box>
      <Box>
        <Typography>Ngay</Typography>
        {renderDate()}
      </Box>
      <Box>
        <Typography>Time</Typography>
        {renderHour()}
      </Box>
    </Box>
  );
}
