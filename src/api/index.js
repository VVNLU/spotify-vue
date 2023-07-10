import axios from "axios";
import router from "../router";

const request = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
request.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          alert("超過API限制時間，請重新登入！");
          localStorage.removeItem("username");
          localStorage.removeItem("firebaseToken");
          localStorage.removeItem("token");
          setTimeout(() => {
            router.replace({
              path: "/login",
            });
          }, 5000);
      }
    }
    return Promise.reject(error.response);
  }
);

export default request;
