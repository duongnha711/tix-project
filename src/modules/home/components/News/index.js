import { Box, Button, Grid } from "@material-ui/core";
import React, { Fragment, useState, useEffect } from "react";
import marvelArrNewOfficial from "./marvelDemoData";
import dcArrNewOfficial from "./dcDemoData";

import ItemNews from "./ItemNews";
import useStyles from "./styles";
import WOW from "wowjs";
import cn from "classnames";

export default function News(props) {
  const classes = useStyles();
  const [viewMore, setViewMore] = useState(1);
  const { marvelDC } = props;

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const renderNews = (arrNews) => {
    if (Array.isArray(arrNews) && arrNews.length > 0) {
      return arrNews.map((news, index) => {
        return (
          <Grid
            key={index}
            xs={12}
            lg={6}
            item
            data-wow-duration="1.5s"
            className={cn(
              classes.mainNewsItem,
              index % 2 === 0 ? "wow slideInLeft" : "wow slideInRight"
            )}
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
            className={cn(
              classes.updateNewsItem,
              index % 2 === 0 ? "wow slideInLeft" : "wow slideInUp"
            )}
            key={index}
            xs={12}
            lg={4}
            item
            data-wow-duration="1.5s"
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
            <Box className={classes.wrapperImg}>
              <img
                src={update.url}
                alt="subUpdate1"
                width="50px"
                height="50px"
              />
            </Box>
            <Box className={classes.titleUpdate}>
              <Box className={classes.nameHero}> {update.title}</Box>
              {marvelDC === "marvel" && <Box>Character of Marvel</Box>}
              {marvelDC === "dc" && <Box>Character of DC</Box>}
            </Box>
          </Box>
        </a>
      ));
    }
  };

  useEffect(() => {
    setViewMore(1);
  }, [marvelDC]);

  const renderNewsOfficial = () => {
    let arrNews = [];
    if (marvelDC === "marvel") {
      arrNews = marvelArrNewOfficial;
    }
    if (marvelDC === "dc") {
      arrNews = dcArrNewOfficial;
    }
    if (arrNews && arrNews.length > 0) {
      return arrNews.map((item, index) => {
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
                <Grid
                  data-wow-duration="1.5s"
                  className={cn(classes.updateNewsItem, "wow slideInRight")}
                  xs={12}
                  lg={4}
                  item
                >
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
    <Box className={classes.news}>
      <Box className={classes.container}>
        <Box className={classes.news}>{renderNewsOfficial()}</Box>

        {viewMore < 3 && (
          <Box onClick={handleClickViewMore} textAlign="center">
            <Button variant="contained" size="large" color="secondary">
              View More
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
