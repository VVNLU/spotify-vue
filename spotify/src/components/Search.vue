<template>
  <div class="searchBar">
    <div class="browseAll">瀏覽全部</div>
    <div class="browseBox" v-for="item in data">
      <img :src="item.image" />
      <span class="browseContent">Artist．{{ item.genre }}</span>
    </div>
  </div>
</template>
<script setup>
import { faker } from "@faker-js/faker";

const generateFakerAlbums = () => {
  const groups = [];
  for (let i = 1; i <= 70; i++) {
    const image = faker.image.url({
      height: 200,
      width: 200,
    });
    const genre = faker.music.genre();
    groups.push({
      image: image,
      genre: genre,
    });
  }
  return groups;
};

const data = generateFakerAlbums();
</script>
<style>
.searchBar {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #121212;
  color: white;
}
.browseAll {
  font-size: 24px;
  font-weight: bold;
}
.browseBox > img {
  border-radius: 5px;
  width: 80%;
}

.browseBox {
  display: inline-flex;
  flex-direction: column;
  margin: 20px;
  width: 200px;
  height: 250px;
  background-color: #181818;
  border-radius: 10px;
}
.browseBox:hover {
  background-color: #222222;
  cursor: pointer;
}
.browseContent {
  text-align: center;
  padding: 0 20px;
  color: white;
  font-weight: bold;
}
</style>
