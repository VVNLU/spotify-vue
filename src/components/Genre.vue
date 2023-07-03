<template>
  <div class="genre">
    <div class="generBigTitle">華語流行</div>
    <div class="genreBox" v-for="item in categoryPlaylists">
      <router-link to="album">
        <a class="action-label icon"><i class="mdi mdi-play-circle"></i></a>
        <img :src="item.images[0].url" class="albumImg" />
        <span class="genreTitle">{{ item.name }}</span>
        <span class="genreContent">{{ item.description }}</span></router-link
      >
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
  padding: 0 20px;
  height: 89.3%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #121212;
  color: white;
  overflow: auto;
  white-space: wrap;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: black;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #5a5a5a;
}
.generBigTitle {
  font-size: 80px;
  font-weight: bold;
  margin: 40px 0;
}
.genreBox {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  margin: 15px;
  width: 200px;
  height: 270px;
  background-color: #181818;
  border-radius: 10px;
  line-height: 25px;
}
.genreBox:hover {
  background-color: #222222;
  cursor: pointer;
}
.albumImg {
  margin: 20px 0 0 20px;
  border-radius: 5px;
  width: 80%;
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
.genreBox > a {
  text-decoration: none;
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
