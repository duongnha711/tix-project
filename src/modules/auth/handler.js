import ENDPOINTS from "./model";
// import queryString from "querystring";

import { sendRequest } from "./../../functions/effect";

export const registerApi = (account) => {
  return sendRequest({
    url: ENDPOINTS.DangKy,
    method: "POST",
    data: account,
  });
};

export const logInApi = (account) => {
  return sendRequest({
    url: ENDPOINTS.DangNhap,
    method: "POST",
    data: account,
  });
};

export const getInfoAccountApi = (taiKhoan) => {
  return sendRequest({
    url: ENDPOINTS.ThongTinTaiKhoan,
    method: "POST",
    data: taiKhoan,
  });
};

export const changePasswordAPI = (taiKhoan, token) => {
  return sendRequest({
    url: ENDPOINTS.CapNhatThongTinNguoiDung,
    method: "PUT",
    data: taiKhoan,
    headers: { Authorization: `Bearer ${token}` },
  });
};
