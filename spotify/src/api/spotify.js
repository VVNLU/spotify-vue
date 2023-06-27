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
