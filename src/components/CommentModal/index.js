import { Box, Button, TextField, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Rating from "@material-ui/lab/Rating";
import React, { useState } from "react";
import { connect } from "react-redux";
import Alert from "../Alert";
import useStyles from "./styles";
import { actAddCommentForOneMovie } from "../../modules/home/actions";

function CommentModal(props) {
  const { dispatch, account, allCommentsList, maPhim } = props;
  const classes = useStyles();

  const [infoComment, setInfoComment] = useState({
    name: account.hoTen,
    content: "",
    rating: 3,
  });

  const handleClose = () => {
    props.handleCloseCommentModal();
  };

  const handleRating = (e, newValue) => {
    setInfoComment({
      ...infoComment,
      rating: newValue,
    });
    if (newValue === null) {
      setInfoComment({
        ...infoComment,
        rating: 0,
      });
    }
  };

  const handleContent = (e) => {
    const { value } = e.target;
    setInfoComment({
      ...infoComment,
      content: value,
    });
  };

  const handleSubmitComment = () => {
    if (infoComment.rating === 0) {
      Alert({ icon: "warning", text: "Vui lòng đánh giá!" });
    }
    if (infoComment.content === "") {
      Alert({ icon: "warning", text: "Vui lòng bình luận!" });
    }
    if (infoComment.rating !== 0 && infoComment.content !== "") {
      props.handleCloseCommentModal();
      if (allCommentsList && allCommentsList[0]) {
        if (allCommentsList[0].dataComments) {
          const { dataComments } = allCommentsList[0];
          const index = dataComments.findIndex(
            (item) => item.maPhim === parseInt(maPhim)
          );

          const newCommentsList = [...dataComments[index].commentsList];
          newCommentsList.push(infoComment);

          const newObjComment = { ...dataComments[index] };
          newObjComment.commentsList = newCommentsList;

          const newDataComments = [...allCommentsList[0].dataComments];
          newDataComments[index] = newObjComment; // co data comment roi

          const newAllCommentsList = { ...allCommentsList[0] };
          newAllCommentsList.dataComments = newDataComments;

          dispatch(actAddCommentForOneMovie(newAllCommentsList));
        }
      }
    }
  };

  return (
    <Dialog className={classes.container} open={true} onClose={handleClose}>
      <DialogContent>
        <Box textAlign="center">
          <Typography variant="h3">{`${infoComment.rating}.0`}</Typography>
          <Rating
            onChange={handleRating}
            name="size-small"
            defaultValue={3}
            size="large"
            precision={1}
            className={classes.wrapperRating}
          />
        </Box>
        <TextField
          placeholder="Bạn nghĩ gì về phim này?"
          onChange={handleContent}
          multiline
          rows="3"
          fullWidth
          variant="outlined"
        />
        <Box textAlign="center">
          <Button
            className={classes.button}
            onClick={handleSubmitComment}
            variant="outlined"
            color="primary"
          >
            Confirm
          </Button>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

const mapStateToProps = (state) => ({
  account: state.auth.account,
  allCommentsList: state.home.allCommentsList,
});

export default connect(mapStateToProps)(CommentModal);
