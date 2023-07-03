import axios from "axios";

export const getAccessToken = async () => {
  const result = await axios.post(
    "https://accounts.spotify.com/api/token",
    {
      client_id: import.meta.env.VITE_CLIENT_ID,
      grant_type: "client_credentials",
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  const { access_token } = result.data;
  localStorage.setItem("token", access_token);
};
