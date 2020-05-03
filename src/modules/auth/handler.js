import ENDPOINTS from "./model";
import queryString from "querystring";

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
