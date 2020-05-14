import HomePage from "./../containers/Home";
import MovieDetail from "./../containers/MovieDetail";
import BookingPage from "../containers/BookingPage";
import UserManagement from "../containers/UserManagement";
import PDF from "../components/PDF";
import SignIn from "./../containers/SignIn";
import SignUp from "../containers/SignUp";

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/detail/:MaPhim",
    exact: false,
    component: MovieDetail,
  },
  {
    path: "/booking-ticket/:MaLichChieu",
    exact: false,
    component: BookingPage,
  },
  {
    path: "/user-info/",
    exact: false,
    component: UserManagement,
  },
  // {
  //   path: "/duong-hoang-nha/",
  //   exact: false,
  //   component: PDF,
  // },
  {
    path: "/log-in",
    exact: false,
    component: SignIn,
  },
  {
    path: "/register",
    exact: false,
    component: SignUp,
  },
];
