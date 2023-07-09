import api from "../api";

export const getCategories = async () => {
  const response = await api.get("browse/categories");
  console.log(response.data.categories.items);
  return response.data;
};

export const getCategoryPlaylists = async (id) => {
  const response = await api.get(`browse/categories/${id}/playlists`);
  return response.data;
};
export const getHomeCategoryPlaylists = async () => {
  const response = await api.get(
    "browse/categories/0JQ5DAqbMKFEC4WFtoNRpw/playlists"
  );
  return response.data;
};

export const getPlaylistItems = async (id) => {
  const response = await api.get(`playlists/${id}/tracks`);
  return response.data;
};

// export const getUserTopItems = async () => {
//   const response = await api.get("me/top/artists");
//   return response;
// };
// Authorization需要scopes
