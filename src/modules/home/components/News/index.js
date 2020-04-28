import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import ItemNews from "./ItemNews";
import useStyles from "./styles";

const arrNews = [
  {
    url: "./images/news-spider.png",
    title:
      "Scary Stories In The Dark Scary Stories In The Dark đi vào sản xuất phần tiếp theo.",
    content:
      "Mùa hè năm ngoái, đạo diễn André Vredal đã mang Scary Stories To Tell In The Dark ra rạp. Bộ phim không tạo được tiếng vang vào năm 2019 so với những bộ phim ",
  },
  {
    url: "./images/news-thor.png",
    title: "Stormbreaker và Mjolnir: Loại vũ khí nào của Thor mạnh hơn?",
    content:
      "Xuyên suốt vũ trụ điện ảnh Marvel, Thor đã sử dụng nhiều loại vũ khí khác nhau, nhưng mạnh nhất là Mjolnir. Như chúng ta đều biết, sau khi Hela tiêu diệt Mjolnir trong Thor Ragnarok, người ta bắt đầu tò mò liệu rằng Thor có tiềm năng như thế nào nếu không còn sự trợ giúp của cây búa đáng tin cậy. Nhưng sau khi Thần Sấm có được chiếc rìu Stormbreaker trong Avengers: Infinity War, câu hỏi này đã thay đổi: Mjolnir hay Stormbreaker mạnh hơn?",
  },
];

const arrNewsUpdate = [
  {
    url: "./images/update2.jpg",
    title: "[Cập nhật] Rạp phim vẫn tạm ngưng hoạt động.",
    content:
      "Mùa hè năm ngoái, đạo diễn André Vredal đã mang Scary Stories To Tell In The Dark ra rạp. Bộ phim không tạo được tiếng vang vào năm 2019 so với những bộ phim ",
  },
  {
    url: "./images/update1.jpg",
    title: "22 thuật ngữ 'bỏ túi' cho fan điện ảnh.",
    content:
      "Xuyên suốt vũ trụ điện ảnh Marvel, Thor đã sử dụng nhiều loại vũ khí khác nhau, nhưng mạnh nhất là Mjolnir. Như chúng ta đều biết, sau khi Hela tiêu diệt Mjolnir trong Thor Ragnarok, người ta bắt đầu tò mò liệu rằng Thor có tiềm năng như thế nào nếu không còn sự trợ giúp của cây búa đáng tin cậy. Nhưng sau khi Thần Sấm có được chiếc rìu Stormbreaker trong Avengers: Infinity War, câu hỏi này đã thay đổi: Mjolnir hay Stormbreaker mạnh hơn?",
  },
];

const arrTitleUpdate = [
  {
    url: "./images/subUpdate1.jpg",
    title: "[Cập nhật] Tình hình tạm ngưng hoạt động của các Rạp Phim.",
  },
  {
    url: "./images/subUpdate2.jpg",
    title: "Đâu là những nhân vật đáng nhớ xuất thân từ Studio Ghibli?",
  },
  {
    url: "./images/subUpdate1.jpg",
    title: "[Cập nhật] Tình hình tạm ngưng hoạt động của các Rạp Phim.",
  },
  {
    url: "./images/subUpdate2.jpg",
    title: "[Cập nhật] Tình hình tạm ngưng hoạt động của các Rạp Phim.",
  },
];

export default function News() {
  const classes = useStyles();

  const renderNews = () => {
    if (Array.isArray(arrNews) && arrNews.length > 0) {
      return arrNews.map((news, index) => {
        return (
          <Grid
            key={index}
            xs={12}
            lg={6}
            item
            className={classes.mainNewsItem}
          >
            <ItemNews news={news} />
          </Grid>
        );
      });
    }
  };

  const renderNewsUpdate = () => {
    if (Array.isArray(arrNewsUpdate) && arrNewsUpdate.length > 0) {
      return arrNewsUpdate.map((news, index) => {
        return (
          <Grid
            className={classes.updateNewsItem}
            key={index}
            xs={12}
            lg={4}
            item
          >
            <ItemNews news={news} />
          </Grid>
        );
      });
    }
  };

  const renderTitleUpdate = () => {
    if (Array.isArray(arrTitleUpdate) && arrTitleUpdate.length > 0) {
      return arrTitleUpdate.map((update, index) => (
        <Box key={index} className={classes.itemUpdate}>
          <Box>
            <img src={update.url} alt="subUpdate1" width="50px" height="50px" />
          </Box>
          <Box className={classes.titleUpdate}>{update.title}</Box>
        </Box>
      ));
    }
  };

  return (
    <Box id="news" className={classes.news}>
      <Box className={classes.container}>
        <Box className={classes.news}>
          <Box className={classes.title}>
            <Typography variant="h5">Điện Ảnh</Typography>
            <Typography variant="h5">Review</Typography>
            <Typography variant="h5">Khuyến Mãi</Typography>
          </Box>
          <Grid container className={classes.mainNewsList} spacing={1}>
            {renderNews()}
          </Grid>
          <Grid container spacing={1} className={classes.updateNewsList}>
            {renderNewsUpdate()}
            <Grid className={classes.updateNewsItem} xs={12} lg={4} item>
              <Box className={classes.updateNewsItemEnd}>
                {renderTitleUpdate()}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="center">
          <Button variant="outlined" size="large" color="primary">
            View More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

//TODO: margion bottom -> tinh' toan de hop ly ca khi responsive
