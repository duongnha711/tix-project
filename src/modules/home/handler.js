import ENDPOINTS, { MA_NHOM } from "./model";
import queryString from "querystring";

import { sendRequest } from "./../../functions/effect";

export const getMovieListApi = () => {
  return sendRequest({
    url: ENDPOINTS.LayDanhSachPhim,
    params: {
      maNhom: MA_NHOM,
    },
  });
};

export const getMovieDetailApi = (MaPhim) => {
  const params = queryString.stringify(MaPhim);
  return sendRequest({
    url: `${ENDPOINTS.LayThongTinPhim}?${params}`,
  });
};

export const getMovieDetailOfficialApi = (MaPhim) => {
  const params = queryString.stringify(MaPhim);
  return sendRequest({
    url: `${ENDPOINTS.LayThongTinLichChieuPhim}?${params}`,
  });
};

export const filterByNameOfficialApi = (MaPhim) => {
  const params = queryString.stringify(MaPhim);
  return sendRequest({
    url: `${ENDPOINTS.LayThongTinLichChieuPhim}?${params}`,
  });
};

export const getCinemaListApi = () => {
  return sendRequest({
    url: ENDPOINTS.LayThongTinHeThongRap,
  });
};

export const getCinemaBranchesApi = (maRap) => {
  const params = queryString.stringify(maRap);
  return sendRequest({
    url: `${ENDPOINTS.LayThongTinCumRapTheoHeThong}?${params}`,
  });
};

export const getShowTimeAllApi = (maRap) => {
  const params = queryString.stringify(maRap);
  return sendRequest({
    url: `${ENDPOINTS.LayThongTinLichChieuHeThongRap}?${params}&maNhom=${MA_NHOM}`,
  });
};

export const getShowTimeOfOneMovieApi = (MaPhim) => {
  const params = queryString.stringify(MaPhim);
  return sendRequest({
    url: `${ENDPOINTS.LayThongTinLichChieuHeThongRap}?${params}&maNhom=${MA_NHOM}`,
  });
};

export const getSeatListApi = (MaLichChieu) => {
  const params = queryString.stringify(MaLichChieu);
  return sendRequest({
    url: `${ENDPOINTS.LayDanhSachPhongVe}?${params}`,
  });
};

export const bookTicketApi = (payload) => {
  const { data, token } = payload;

  return sendRequest({
    url: `${ENDPOINTS.DatVe}`,
    method: "POST",
    data,
    headers: { Authorization: `Bearer ${token}` },
  });
};
