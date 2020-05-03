import ENDPOINTS from "./model";
import queryString from "querystring";

import { sendRequest } from "./../../functions/effect";

export const getMovieListApi = () => {
  return sendRequest({
    url: ENDPOINTS.LayDanhSachPhim,
    params: {
      maNhom: "GP07",
    },
  });
};

export const getMovieDetailApi = (MaPhim) => {
  const params = queryString.stringify(MaPhim);
  return sendRequest({
    url: `${ENDPOINTS.LayThongTinPhim}?${params}`,
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
    url: `${ENDPOINTS.LayThongTinLichChieuHeThongRap}?${params}`,
  });
};


export const getShowTimeOfOneMovieApi = (MaPhim) => {
  const params = queryString.stringify(MaPhim);
  return sendRequest({
    url: `${ENDPOINTS.LayThongTinLichChieuHeThongRap}?${params}`,
  });
};

export const getSeatListApi = (MaLichChieu) => {
  const params = queryString.stringify(MaLichChieu);
  return sendRequest({
    url: `${ENDPOINTS.LayDanhSachPhongVe}?${params}`,
  });
};
