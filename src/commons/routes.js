import BookingPage from "../containers/BookingPage";
import SignUp from "../containers/SignUp";
import UserManagement from "../containers/UserManagement";
import HomePage from "./../containers/Home";
import MovieDetail from "./../containers/MovieDetail";
import SignIn from "./../containers/SignIn";
import User from "../modules/admin/components/User";
import Movie from "../modules/admin/components/Movie";

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

export const adminRoutes = [
  {
    path: "/admin",
    exact: true,
    component: User,
  },
  {
    path: "/admin/movie",
    exact: false,
    component: Movie,
  },
];

