import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  //đã set cứng witdh và height của iphone 195 415 bên index
  containerMobile: {
    position: "relative",
    width: 195,
    height: 415,
  },
  contentCarousel: {
    width: 184,
    height: 399,
    position: "absolute",
    top: 9,
    left: 5,
    zIndex: 99,
    borderRadius: 20,
    overflow: "hidden",
  },
  itemCarousel: {
    "& img": {
      width: "100%",
      display: "block",
    },
  },
}));

export default useStyles;
