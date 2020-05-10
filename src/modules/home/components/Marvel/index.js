import { Box, Button, Grid } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import arrNewOfficial from "./demoData";
import ItemNews from "./ItemNews";
import useStyles from "./styles";

export default function Marvel() {
  const classes = useStyles();
  const [viewMore, setViewMore] = useState(1);

  const renderNews = (arrNews) => {
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
            <a target="_blank" rel="noopener noreferrer" href={news.link}>
              <ItemNews news={news} />
            </a>
          </Grid>
        );
      });
    }
  };

  const renderNewsUpdate = (arrNewsUpdate) => {
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
            <a target="_blank" rel="noopener noreferrer" href={news.link}>
              <ItemNews news={news} />
            </a>
          </Grid>
        );
      });
    }
  };

  const renderTitleUpdate = (arrTitleUpdate) => {
    if (Array.isArray(arrTitleUpdate) && arrTitleUpdate.length > 0) {
      return arrTitleUpdate.map((update, index) => (
        <a
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          href={update.link}
        >
          <Box className={classes.itemUpdate}>
            <Box>
              <img
                src={update.url}
                alt="subUpdate1"
                width="50px"
                height="50px"
              />
            </Box>
            <Box className={classes.titleUpdate}>{update.title}</Box>
          </Box>
        </a>
      ));
    }
  };

  const renderNewsOfficial = () => {
    if (arrNewOfficial && arrNewOfficial.length > 0) {
      return arrNewOfficial.map((item, index) => {
        if (index < viewMore) {
          return (
            <Fragment key={index}>
              <Grid container className={classes.mainNewsList} spacing={1}>
                {renderNews(item.arrNews)}
              </Grid>

              {/* udpate */}
              <Grid container spacing={1} className={classes.updateNewsList}>
                {renderNewsUpdate(item.arrNewsUpdate)}

                {/* 3*/}
                <Grid className={classes.updateNewsItem} xs={12} lg={4} item>
                  <Box className={classes.updateNewsItemEnd}>
                    {renderTitleUpdate(item.arrTitleUpdate)}

                    {/* sub */}
                  </Box>
                </Grid>
              </Grid>
            </Fragment>
          );
        } else {
          return null;
        }
      });
    }
  };

  const handleClickViewMore = () => {
    setViewMore(viewMore + 1);
  };

  return (
    <Box  className={classes.news}>
      <Box className={classes.container}>
        <Box className={classes.news}>{renderNewsOfficial()}</Box>

        {viewMore < 3 && (
          <Box onClick={handleClickViewMore} textAlign="center">
            <Button variant="outlined" size="large" color="primary">
              View More
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
