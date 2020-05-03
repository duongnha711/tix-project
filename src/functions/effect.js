import Axios from "axios";

export const sendRequest = ({ url, ...options }) => {
  return Axios({
    url,
    method: "GET",
    ...options,
  });
};
