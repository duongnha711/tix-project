import { Box, Divider, Paper, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import useStyles from "./styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

export default function InfoCinema() {
  const classes = useStyles();

  //demo data
  const arrLogo = [
    { url: "./images/cgv.png" },
    { url: "./images/lotte.png" },
    { url: "./images/bhd.png" },
    { url: "./images/starLight.png" },
  ];
  const arrCinema = [
    { name: "CGV Vincom Gò Vấp" },
    { name: "CGV Vincom Đồng Khởi" },
  ];
  const arrMovie = [
    { name: "BloodShoot", url: "./images/movie-blood.jpg" },
    {
      name: "Vì anh vẫn tin - I sill believe",
      url: "./images/movie-believe.jpg",
    },
    {
      name: "Góa phụ đen - Black Widow",
      url: "./images/movie-widow.jpg",
    },
  ];

  const renderLogo = () => {
    if (Array.isArray(arrLogo) && arrLogo.length > 0) {
      return arrLogo.map((logo, index) => (
        <Fragment key={index}>
          <Box className={classes.itemLogo} key={index}>
            <img src={logo.url} alt="cgv" />
          </Box>
          <Divider variant="middle" />
        </Fragment>
      ));
    }
  };

  const renderCinema = () => {
    if (Array.isArray(arrCinema) && arrCinema.length > 0) {
      return arrCinema.map((cinema, index) => (
        <Fragment key={index}>
          <Box className={classes.itemCinema}>
            <Box className={classes.imgCinema}>
              <img
                src="./images/vincom.jpg"
                alt="vincom"
                width="50px"
                height="50px"
              />
            </Box>
            <Box className={classes.contentCinema}>
              <Typography>{cinema.name}</Typography>
              <Typography variant="subtitle1">
                255-257 Phan Văn Trị Gò Gấp
              </Typography>
              <Typography variant="subtitle1">
                <span>[Chi tiết]</span>
              </Typography>
            </Box>
          </Box>
          <Divider variant="middle" />
        </Fragment>
      ));
    }
  };

  const renderMovie = () => {
    if (Array.isArray(arrMovie) && arrMovie.length > 0) {
      return arrMovie.map((movie, index) => (
        <Box key={index} className={classes.itemMovie}>
          <Paper className={classes.imgMovie}>
            <img src={movie.url} alt="believe" />
          </Paper>
          <Box className={classes.contentMovie}>
            <Box>
              <Box className={classes.tag} component="span">
                Love Story
              </Box>
              <Box className={classes.tag} component="span">
                Drama
              </Box>
            </Box>
            <Typography className={classes.titleMovie} variant="h5">
              {movie.name}
            </Typography>
            <Typography className={classes.textMovie}>
              Được dịch từ tiếng Anh-Bloodshot là một bộ phim siêu anh hùng của
              Mỹ năm 2020 dựa trên nhân vật Valiant Comics cùng tên. Nó được dự
              định là phần đầu tiên trong một loạt các bộ phim lấy bối cảnh
              trong một vũ trụ điện ảnh được chia sẻ của Valiant Comics. Đạo
              diễn David S. F. Wikipedia (tiếng Anh)
            </Typography>
            <Typography color="primary">
              <em>
                <b>View More</b>
              </em>
            </Typography>

            <Box className={classes.time}>
              <Box className={classes.timeView}>
                <AccessTimeIcon fontSize="small" />
                View Time
              </Box>
              <Box className={classes.timeDetail}>8:20:00 PM</Box>
            </Box>
          </Box>
        </Box>
      ));
    }
  };

  return (
    <Box id="infoCinema" className={classes.infoCinema}>
      <Paper elevation={1} className={classes.container}>
        <Box className={classes.cinemaWrapper}>
          <Box display="flex">
            <Box className={classes.listLogo}>{renderLogo()}</Box>
            <Box className={classes.listCinema}>{renderCinema()}</Box>
          </Box>
          <Box className={classes.listMovie}>{renderMovie()}</Box>
        </Box>
      </Paper>
    </Box>
  );
}
