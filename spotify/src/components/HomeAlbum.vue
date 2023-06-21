<template>
  <div class="albums">
    <div class="musicalbum">
      <img src="../assets/album/peacefulPiano.png" alt="" />
      <div class="albumInfo">
        <p class="albumList">播放清單</p>
        <p class="albumTitle">Peaceful Piano</p>
        <p class="albumContent">
          Peaceful piano to help you slow down, breathe, and relax.
        </p>
        <div class="albumMessage">
          <img src="../assets/logo/logo_green.png" alt="" />Spotify
          <span>．123人按讚．100首歌曲,大約3小時</span>
        </div>
      </div>
    </div>

    <a class="action-label icon"><i class="mdi mdi-play-circle"></i></a>

    <div class="musicGroups">
      <table>
        <tr class="musicBar">
          <th class="barIndex">#</th>
          <th class="barTitle" colspan="5">標題</th>
          <th class="barAlbim" colspan="4">專輯</th>
          <th class="barDate" colspan="3">新增日期</th>
          <th class="barTime">時間</th>
        </tr>
        <tr class="musicList" v-for="item in data">
          <td>{{ item.index }}</td>
          <td>
            <img :src="item.image" />
          </td>
          <td colspan="4" class="musicName">
            {{ item.songName }}<br /><span class="singerName">{{
              item.fullName
            }}</span>
          </td>
          <td colspan="4">{{ item.genre }}</td>
          <td colspan="3">{{ item.date }}</td>
          <td>2:10</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup>
import { faker } from "@faker-js/faker";
const generateFakerMusic = () => {
  const music = [];
  for (let i = 1; i <= 10; i++) {
    const index = i;
    const image = faker.image.url({
      height: 100,
      width: 100,
    });
    const songName = faker.music.songName();
    const fullName = faker.person.fullName();
    const genre = faker.music.genre();
    const date = faker.date.past();
    music.push({
      index: index,
      image: image,
      songName: songName,
      fullName: fullName,
      genre: genre,
      date: date,
    });
  }
  return music;
};

const data = generateFakerMusic();
</script>
<style scoped>
.albums {
  background: linear-gradient(to top, #000, #393b3f);
  padding: 20px;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.musicalbum {
  display: flex;
}
.musicalbum > img {
  width: 20%;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
}
.albumInfo img {
  margin: 0;
  width: 40px;
}
.albumList {
  font-size: 14px;
  font-weight: bold;
}
.albumTitle {
  font-size: 32px;
  font-weight: bold;
}
.albumContent {
  color: #cfd4d9;
  font-size: 14px;
}
.albumMessage {
  display: flex;
  align-items: center;
}
.mdi {
  color: #1ed760;
  font-size: 65px;
}
table {
  text-align: left;
  color: #b3b3b3;
  border-collapse: collapse;
  width: 100%;
}
th {
  width: 50px;
  height: 50px;
  border-bottom: 1px solid #393b3f;
}
td {
  width: 50px;
  height: 50px;
}
.musicList img {
  margin-left: 0;
  width: 40px;
}
.singerName {
  color: #b3b3b3;
  font-size: 14px;
}
.musicName {
  color: white;
}
</style>
