<template>
  <div class="genre">
    <div class="genreBox" v-for="item in categoryPlaylists">
      <a class="action-label icon"><i class="mdi mdi-play-circle"></i></a>
      <img :src="item.images[0].url" />
      <span class="genreTitle">{{ item.name }}</span>
      <span class="genreContent">{{ item.description }}</span>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getCategoryPlaylists } from "../api/spotify";

const categoryPlaylists = ref([]);
onMounted(async () => {
  const response = await getCategoryPlaylists();
  console.log(response);
  categoryPlaylists.value = response.playlists.items;
});
</script>
<style scoped>
.genre {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #121212;
  color: white;
}
.genreBox > img {
  border-radius: 5px;
  width: 80%;
}
.genreBox {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  margin: 20px;
  width: 200px;
  height: 270px;
  background-color: #181818;
  border-radius: 10px;
}
.genreBox:hover {
  background-color: #222222;
  cursor: pointer;
}
.genreBox i {
  position: absolute;
  top: 120px;
  right: 20px;
  font-size: 50px;
  display: none;
  color: #1ed760;
}
.genreBox:hover i {
  display: block;
}

.genreTitle {
  padding: 0 20px;
  color: white;
  font-weight: bold;
}
.genreContent {
  font-size: 14px;
  color: grey;
  padding: 0 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
