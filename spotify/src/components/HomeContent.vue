<template>
  <div class="content">
    <div class="focus" v-for="group in groups">
      <div class="title">播放清單</div>
      <div class="musicBox" v-for="item in group">
        <router-link to="album">
          <a class="action-label icon"><i class="mdi mdi-play-circle"></i></a>
          <img :src="item.image" />
          <span class="musicTitle">{{ item.fullName }}</span>
          <span class="musicContent"
            >Artist．{{ item.genre }}</span
          ></router-link
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { faker } from "@faker-js/faker";

const generateFakerAlbums = () => {
  const albums = [];
  for (let i = 1; i <= 4; i++) {
    const image = faker.image.url({
      height: 200,
      width: 200,
    });
    const fullName = faker.person.fullName();
    const genre = faker.music.genre();
    albums.push({
      image: image,
      fullName: fullName,
      genre: genre,
    });
  }
  return albums;
};

const generateFakerAlbumGroups = () => {
  const groups = [];
  for (let x = 1; x <= 3; x++) {
    const data = generateFakerAlbums();
    groups.push(data);
  }
  return groups;
};
const groups = generateFakerAlbumGroups();
</script>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  color: white;
  background-image: linear-gradient(to bottom, #1f1f1f, #000000);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.focus {
  margin: 10px 0 0 25px;
}
.title {
  font-size: 24px;
}
img {
  border-radius: 5px;
  width: 85%;
}
.musicBox {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 200px;
  height: 300px;
  background-color: #181818;
  border-radius: 10px;
}
i {
  position: absolute;
  top: 130px;
  right: 20px;
  font-size: 50px;
  display: none;
  color: #1ed760;
}
.musicBox:hover {
  background-color: #222222;
  cursor: pointer;
}
.musicBox:hover i {
  display: block;
}
.musicTitle {
  font-weight: bold;
}
.musicContent {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 170px;
  color: grey;
  font-size: 14px;
}
</style>
