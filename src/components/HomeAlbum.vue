<template>
  <div class="albums">
    {{ showAlbumImage }}
    <div class="musicalbum">
      <img src="../assets/album/peacefulPiano.png" />
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
    <div class="playlistIcon">
      <a class="action-label icon listplayer"
        ><i class="mdi mdi-play-circle listplayer"></i
      ></a>
      <a class="action-label icon"
        ><i class="mdi mdi-heart-outline favorPlaylist"></i
      ></a>
      <audio :src="currentMusic" controls autoplay></audio>
    </div>
    <div class="musicGroups">
      <table>
        <thead>
          <tr>
            <th class="barIndex">#</th>
            <th class="barTitle">標題</th>
            <th class="barAlbim">專輯</th>
            <th class="barDate">新增日期</th>
            <th class="barFavor"></th>
            <th class="barTime">
              <a class="action-label icon"
                ><i class="mdi mdi-clock-time-three-outline time"></i
              ></a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="musicList"
            v-for="(item, index) in playlistItems"
            :key="index"
            @click="setCurrentMusic(item.track.preview_url)"
          >
            <td>
              <a class="action-label icon"
                ><i class="mdi mdi-play showPlayer"></i
              ></a>
              <p class="musicListIndex">{{ index + 1 }}</p>
            </td>
            <td class="musicInfo">
              <img :src="item.track?.album?.images[2]?.url" />
              <div class="musicName">
                {{ item.track?.name }}<br />
                <span class="singerName">{{
                  item.track?.artists[0].name
                }}</span>
              </div>
            </td>
            <td>{{ item.track?.album.name }}</td>
            <td>{{ dateToRelative(item.added_at) }}</td>
            <td>
              <a class="action-label icon"
                ><i class="mdi mdi-heart-outline favor"></i
              ></a>
            </td>
            <td>0:30</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { getPlaylistItems } from "../api/spotify";
import { computed, onMounted, ref } from "vue";
import { dateToRelative } from "../utils/date";
import { useRoute } from "vue-router";

const route = useRoute();
const playlistItems = ref([]);
const currentMusic = ref();

const setCurrentMusic = (url) => {
  currentMusic.value = url;
};
onMounted(async () => {
  const response = await getPlaylistItems(route.params.id);
  console.log(response.items);
  playlistItems.value = response.items;
});
</script>
<style scoped>
.albums {
  height: 89.3%;
  overflow: auto;
  white-space: wrap;
  margin-right: 10px;
  background: #121212;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #5a5a5a;
}

.musicalbum {
  display: flex;
}
.musicalbum > img {
  width: 25%;
  margin: 30px 0 0 20px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
}
.albumInfo {
  margin: 100px 0 0 30px;
  line-height: 0px;
}
.albumInfo img {
  width: 40px;
}
.albumList {
  font-size: 14px;
  font-weight: bold;
}
.albumTitle {
  font-size: 80px;
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
.musicListIndex {
  text-align: center;
}
.musicList:hover .musicListIndex {
  display: none;
}
.playlistIcon {
  margin-left: 10px;
  display: inline-flex;
  align-items: center;
  column-gap: 20px;
}
.listplayer {
  color: #1ed760;
  font-size: 65px;
}
.listplayer:hover {
  transform: scale(1.05);
}
.favorPlaylist {
  font-size: 40px;
  color: #cab6b8;
}
.favorPlaylist:hover {
  color: white;
}
.time {
  font-size: 18px;
}
table {
  font-size: 14px;
  width: 100%;
  text-align: left;
  color: #fff;
  border-collapse: collapse;
}
th {
  position: sticky;
  top: 0px;
  height: 40px;
  border-bottom: 1px solid #393b3f;
  background-color: #121212;
  background-attachment: scroll;
}
td {
  height: 60px;
}
.barIndex {
  width: 50px;
  text-align: center;
}
.barDate,
.barFavor {
  width: 100px;
}
.musicList img {
  margin-right: 20px;
  width: 40px;
}
.showPlayer,
.favor {
  display: none;
}
.musicList:hover .showPlayer,
.musicList:hover .favor {
  display: block;
  font-size: 20px;
  text-align: center;
}
.showPlayer {
  color: white;
}
.favor:hover {
  color: white;
}
.musicInfo {
  display: inline-flex;
  align-items: center;
}
.singerName {
  color: #b3b3b3;
  font-size: 14px;
}
.musicName {
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 18em;
}
</style>
