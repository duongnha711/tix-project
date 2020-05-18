import { Box, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import cn from "classnames";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import CommentModal from "../../../components/CommentModal";
import { actGetCommentsList } from "../../../modules/home/actions";
import useStyles from "./styles";

function Comment(props) {
  const classes = useStyles();
  const { dispatch, allCommentsList, maPhim } = props;
  const [openCommentModal, setOpenCommentModal] = useState(false);

  useEffect(() => {
    dispatch(actGetCommentsList());
  }, [dispatch]);

  const renderComments = () => {
    if (allCommentsList[0]) {
      const { dataComments } = allCommentsList[0];
      if (Array.isArray(dataComments) && dataComments.length > 0) {
        const index = dataComments.findIndex(
          (item) => item.maPhim === parseInt(maPhim)
        );
        const arrCommentsOfOneMovie = dataComments[index].commentsList;

        if (arrCommentsOfOneMovie && arrCommentsOfOneMovie.length > 0) {
          const reverseArrCommentsOfOneMovie = [...arrCommentsOfOneMovie];
          reverseArrCommentsOfOneMovie.reverse();

          return reverseArrCommentsOfOneMovie.map((comment, index) => {
            return (
              <Box
                key={index}
                className={cn(
                  classes.itemComment,
                  index % 2 !== 0 && classes.rightComment
                )}
              >
                <Box className={classes.wrapperName}>
                  <Typography variant="h6">{comment.name}</Typography>
                  <Box component="span">{renderStar(comment.rating)}</Box>
                </Box>
                <Box className={classes.boxComment}>{comment.content}</Box>
              </Box>
            );
          });
        }
      }
    }
  };

  const renderStar = (num) => {
    const arrStar = [...Array(num).keys()];
    return arrStar.map((item) => {
      return <StarIcon key={item} color="primary" />;
    });
  };

  const handleOpenCommentModal = () => {
    setOpenCommentModal(true);
  };

  const handleCloseCommentModal = () => {
    setOpenCommentModal(false);
  };

  return (
    <Fragment>
      <Box className={classes.containerComment}>
        <Box onClick={handleOpenCommentModal} className={classes.mainComment}>
          <Typography>Để lại đánh giá của bạn!</Typography>
          {/* <Box>{renderStar(5)}</Box> */}
        </Box>
        <Box className={classes.wrapperItemComment}>{renderComments()}</Box>
      </Box>
      {openCommentModal && (
        <CommentModal
          maPhim={maPhim}
          handleCloseCommentModal={handleCloseCommentModal}
        />
      )}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  movieList: state.home.movieList,
  allCommentsList: state.home.allCommentsList,
});

export default connect(mapStateToProps)(Comment);

//create mockAPI
// const handleAddComment = () => {
//   const mockApi = {
//     dataComments: [],
//   };
//   if (movieList && movieList.length > 0) {
//     movieList.forEach((movie) => {
//       mockApi.dataComments.push({
//         maPhim: movie.maPhim,
//         commentsList: [
//           {
//             name: "Roronoa Zoro",
//             content: `${movie.tenPhim} khá hay đó.`,
//             rating: 4,
//           },
//           {
//             name: "Spider Man",
//             content: `${movie.tenPhim} tuyệt vời.`,
//             rating: 4,
//           },
// {
//             name: "Doflamingo",
//             content: `${movie.tenPhim} xem cũng ok.`,
//             rating: 3,
//           },
//           {
//             name: "NN",
//             content: `Siêu thích phim ${movie.tenPhim} nha.`,
//             rating: 5,
//           },
//         ],
//       });
//     });
//   }

//   addCommentsApi(1, mockApi);
// };
