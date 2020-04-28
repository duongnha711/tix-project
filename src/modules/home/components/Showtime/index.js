import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import useStyles from "./styles";
import StarIcon from "@material-ui/icons/Star";

const settings = {
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesPerRow: 3,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesPerRow: 2,
        arrows: false,
      },
    },
  ],
};

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="./images/next-arrow.png" alt="next" />
    </div>
  );
}
function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="./images/back-arrow.png" alt="back" />
    </div>
  );
}

//demo data
const arrMovie = [
  { name: "Truy tìm phép thuật - Onward", url: "./images/movie-magic.jpg" },
  {
    name: "Góa phụ đen - Black Widow",
    url: "./images/movie-widow.jpg",
  },
  {
    name: "Vì anh vẫn tin - I still believe I still believe  ",
    url: "./images/movie-believe.jpg",
  },
  { name: "BloodShoot", url: "./images/movie-blood.jpg" },
  {
    name: "Vì anh vẫn tin - I still believe I still believe ",
    url: "./images/movie-believe.jpg",
  },
  { name: "BloodShoot", url: "./images/movie-blood.jpg" },
  {
    name: "Góa phụ đen - Black Widow",
    url: "./images/movie-widow.jpg",
  },
  { name: "Truy tìm phép thuật - Onward", url: "./images/movie-magic.jpg" },
  { name: "BloodShoot", url: "./images/movie-blood.jpg" },
  {
    name: "Góa phụ đen - Black Widow",
    url: "./images/movie-widow.jpg",
  },
  { name: "Truy tìm phép thuật - Onward", url: "./images/movie-magic.jpg" },
];

export default function Showtime() {
  const classes = useStyles();

  const renderMovie = () => {
    if (Array.isArray(arrMovie) && arrMovie.length > 0) {
      return arrMovie.map((movie, index) => (
        <Box key={index} className={classes.itemWrapper} padding={1}>
          <Paper className={classes.itemCarousel} elevation={1}>
            <img src={movie.url} alt={movie.name} />
            <Box component="span" className={classes.iconPlay}>
              <img src="./images/play-video.png" alt="play-video" />
            </Box>
            <Box className={classes.ageType}>C16</Box>
            <Box className={classes.avgPoint}>
              <Box>6.6</Box>
              <Box>
                <StarIcon color="primary" className={classes.star} />
                <StarIcon color="primary" className={classes.star} />
                <StarIcon color="primary" className={classes.star} />
              </Box>
            </Box>
            <Box component="span" className={classes.overLay}></Box>
          </Paper>
          <Typography className={classes.nameMovie} variant="h6">
            {movie.name}
          </Typography>
          <Typography className={classes.duration}>110 phút</Typography>
        </Box>
      ));
    }
  };

  return (
    <Box id="showTime" className={classes.showtime}>
      <Box className={classes.container}>
        <Box className={classes.titleWrapper}>
          <Typography className={classes.title} variant="h5">
            Đang chiếu
          </Typography>
          <Typography className={classes.title} variant="h5">
            Sắp chiếu
          </Typography>
        </Box>
        <Box className={classes.contentCarousel}>
          <Slider {...settings}>{renderMovie()}</Slider>
        </Box>
      </Box>
    </Box>
  );
}
