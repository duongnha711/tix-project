import { makeStyles } from "@material-ui/core/styles";
import {
  bookingBackground,
  textBooking,
  titleBooking,
  highlightBooking,
} from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  booking: {
    backgroundImage: "url('/images/bg-login.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  container: {
    width: "80%",
    margin: "0 auto",

    display: "flex",
    padding: "80px 0",
  },
  wrapperSeat: {
    flexGrow: 1,
    minWidth: 500,
    marginRight: 20,
    "& button": {
      padding: 0,
    },
  },

  seatList: {
    width: "400px",
    margin: "0 auto",
  },
  seatItem: {
    display: "block",
    width: 30,
    height: 30,
    border: "1px solid #ffffff47",
    borderRadius: 3,
    margin: 5,
    position: "relative",
    color: "white",
    lineHeight: "30px",
    fontSize: 12,
    background: "#58738fc4",
    cursor: "pointer",
    textAlign: "center",
  },
  setInfo: {
    display: "inline-block",
    width: 30,
    height: 30,
    border: "1px solid #ffffff47",
    borderRadius: 3,
    margin: 20,
    position: "relative",
    color: "white",
    lineHeight: "30px",
    fontSize: 12,
    // background: "#58738fc4",
    cursor: "pointer",
  },

  nor: {
    background: "#58738fc4",
  },
  vip: {
    background: "#f45a43c7",
  },
  selecting: {
    background: "#00ffe8e6",
  },
  booked: {
    background: "#8080807d",
    cursor: "no-drop",
  },
  text: {
    color: "white",
    position: "absolute",
    bottom: -25,
    left: "50%",
    transform: "translateX(-50%)",
  },
  iconBooked: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 35,
  },

  screen: {
    background: "#fafafa94",
    width: "100%",
    borderRadius: 2,
    color: "white",
  },

  wrapperInfo: {
    width: "300px",
    color: textBooking,
  },
  infoMovie: {
    display: "flex",

    padding: 10,
    borderRadius: 4,

    background: bookingBackground,
  },
  wrapperImg: {
    minWidth: 50,
    borderRadius: 4,
  },
  contentImg: {
    paddingTop: "120%",
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  },
  textMovie: {
    marginLeft: 10,
  },
  nameMovie: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
    color: titleBooking,
    fontSize: 16,
    fontWeight: "bold",
  },
  highLight: {
    color: highlightBooking,
    fontSize: 14,
    fontWeight: "bold",
  },
  addressMovie: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  infoCinema: {
    marginTop: 10,
    padding: 10,
    borderRadius: 4,

    background: bookingBackground,
  },
  infoTicket: {
    minHeight: 150,
  },
  iconCancel: {
    position: "absolute",
    top: "0%",
    right: "-52%",
    transform: "translate(-50%, -50%)",
    fontSize: 15,
    color: "#d8d8d8",
    cursor: "pointer",
  },
  seatItemInfo: {
    display: "block",
    width: 30,
    height: 30,
    border: "1px solid #ffffff47",
    borderRadius: 3,
    margin: "5px 12px",
    position: "relative",
    color: "white",
    lineHeight: "30px",
    fontSize: 12,
    background: "#00ffe8e6",
    textAlign: "center",
  },
  wrapperInfoSeat: {
    display: "flex",
    flexWrap: "wrap",
  },
  total: {
    color: titleBooking,
    fontSize: 20,
  },
  button: {
    marginTop: 20,
  },

  [theme.breakpoints.down("1024")]: {
    container: {
      width: "90%",
    },
  },

  [theme.breakpoints.down("900")]: {
    container: {
      display: "block",
    },
    wrapperSeat: {
      marginRight: 0,
    },
    wrapperInfo: {
      width: "70%",
      margin: "20px auto 0 auto",
    },
  },
  [theme.breakpoints.down("770")]: {
    wrapperInfo: {
      width: 310,
      margin: "20px auto 0 auto",
    },
  },
  [theme.breakpoints.down("570")]: {
    wrapperSeat: {
      minWidth: "unset",
    },
    seatItem: {
      width: 22,
      height: 22,
      lineHeight: "22px",
      fontSize: 10,
    },
    iconBooked: {
      fontSize: 25,
    },
    seatList: {
      width: 340,
    },
  },
}));

export default useStyles;
