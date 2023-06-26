import axios from "axios";

const token = "0JQ5DAqbMKFQ00XGBls6ym";

const request = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default request;
