const rootUrl = "http://movie0706.cybersoft.edu.vn/api/";
const movie = "QuanLyPhim/";
const cinema = "QuanLyRap/";
const ticket = "QuanLyDatVe/";

//comments

const ENDPOINTS = {
  LayDanhSachPhim: `${rootUrl}${movie}LayDanhSachPhim`,
  LayThongTinPhim: `${rootUrl}${movie}LayThongTinPhim`,
  //cinema
  LayThongTinHeThongRap: `${rootUrl}${cinema}LayThongTinHeThongRap`,
  LayThongTinCumRapTheoHeThong: `${rootUrl}${cinema}LayThongTinCumRapTheoHeThong`,
  LayThongTinLichChieuHeThongRap: `${rootUrl}${cinema}LayThongTinLichChieuHeThongRap`,
  LayThongTinLichChieuPhim: `${rootUrl}${cinema}LayThongTinLichChieuPhim`,

  //ticket
  LayDanhSachPhongVe: `${rootUrl}${ticket}LayDanhSachPhongVe`,
  DatVe: `${rootUrl}${ticket}DatVe`,

  //comments
  comments: "https://5ec11bd8619753001609209e.mockapi.io/comments",
};

export const MA_NHOM = "GP14";

export default ENDPOINTS;
