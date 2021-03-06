import HomePage from "./../containers/Home";
import MovieDetail from "./../containers/MovieDetail";
import BookingPage from "../containers/BookingPage";
import UserManagement from "../containers/UserManagement";

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
];
