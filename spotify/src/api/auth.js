import axios from "axios";

export const getAccessToken = async () => {
  const result = await axios.post(
    "https://accounts.spotify.com/api/token",
    {
      client_id: "167d5c42fdae4e759bd6f4cfeef7766b",
      grant_type: "client_credentials",
      client_secret: "642c570b32ea4ca6a3c503c65daf9ae9",
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
