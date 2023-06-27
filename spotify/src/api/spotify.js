import api from "../api";

export const getCategories = async () => {
  const response = await api.get("browse/categories");
  console.log(response.data.categories.items);
  return response.data;
};

export const getCategoryPlaylists = async () => {
  const response = await api.get("browse/categories/toplists/playlists");
  return response.data;
};

export const getPlaylistItems = async () => {
  const response = await api.get("playlists/37i9dQZF1DWWqC43bGTcPc/tracks");
  return response.data;
};
