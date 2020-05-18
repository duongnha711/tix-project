const rootUrl = "http://movie0706.cybersoft.edu.vn/api/";
const admin = "QuanLyNguoiDung/";

const ENDPOINTS = {
  LayDanhSachNguoiDung: `${rootUrl}${admin}LayDanhSachNguoiDung`,
  LayDanhSachNguoiDungPhanTrang: `${rootUrl}${admin}LayDanhSachNguoiDungPhanTrang`,
  XoaNguoiDung: `${rootUrl}${admin}XoaNguoiDung`,
  CapNhatThongTinNguoiDung: `${rootUrl}${admin}CapNhatThongTinNguoiDung`,
  ThemNguoiDung: `${rootUrl}${admin}ThemNguoiDung`,
  TimKiemNguoiDung: `${rootUrl}${admin}TimKiemNguoiDung`,
  TimKiemNguoiDungPhanTrang: `${rootUrl}${admin}TimKiemNguoiDungPhanTrang`,
};

export default ENDPOINTS;
