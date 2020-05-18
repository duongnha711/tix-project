import ENDPOINTS from "./model";
import queryString from "querystring";

import { sendRequest } from "./../../functions/effect";

export const getUsersListApi = () => {
  return sendRequest({
    url: ENDPOINTS.LayDanhSachNguoiDung,
  });
};

export const getUsersListPaginationApi = (pagination) => {
  const params = queryString.stringify(pagination);
  return sendRequest({
    url: `${ENDPOINTS.LayDanhSachNguoiDungPhanTrang}?${params}`,
  });
};

export const deleteUserApi = ({ TaiKhoan, token }) => {
  const params = queryString.stringify(TaiKhoan);
  return sendRequest({
    url: `${ENDPOINTS.XoaNguoiDung}?${params}`,
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const editUserApi = (payload) => {
  const { account, token } = payload;
  return sendRequest({
    url: ENDPOINTS.CapNhatThongTinNguoiDung,
    method: "PUT",
    data: account,
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const addUserApi = (payload) => {
  const { account, token } = payload;
  return sendRequest({
    url: ENDPOINTS.ThemNguoiDung,
    method: "POST",
    data: account,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const searchUserApi = (keyWord) => {
  const params = queryString.stringify(keyWord);
  console.log("searchUserApi -> params", params);
  return sendRequest({
    url: `${ENDPOINTS.TimKiemNguoiDungPhanTrang}?${params}`,
  });
};
