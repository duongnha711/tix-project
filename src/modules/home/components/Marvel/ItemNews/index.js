import React from "react";
import useStyles from "./styles";
import { Box, Paper, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ModeCommentIcon from "@material-ui/icons/ModeComment";

export default function ItemNews(props) {
  const classes = useStyles();

  const { news } = props;
  return (
    <Box className={classes.containerItem}>
      <Paper className={classes.item}>
        <Box className={classes.wrapperImg}>
          <Box className={classes.contentImg}>
            <img src={news.url} alt="spider" />
          </Box>
        </Box>
      </Paper>
      <Typography className={classes.title} variant="h6">
        {news.title}
      </Typography>
      <Typography className={classes.content}>{news.content}</Typography>
      <Box className={classes.likeComment}>
        <Box className={classes.icon}>
          <ThumbUpAltIcon fontSize="small" /> {Math.floor(Math.random() * 50)}
        </Box>
        <Box className={classes.icon}>
          <ModeCommentIcon fontSize="small" /> {Math.floor(Math.random() * 50)}
        </Box>
      </Box>
    </Box>
  );
}
