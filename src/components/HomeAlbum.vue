<template>
  <HomeNavbar />
  <div class="albums">
    <div class="musicalbum">
      <img :src="nameStore.image" />
      <div class="albumInfo">
        <p class="albumList">播放清單</p>
        <p class="albumTitle">{{ nameStore.title }}</p>
        <p class="albumContent">
          {{ nameStore.describe }}
        </p>
        <div class="albumMessage">
          <img src="../assets/logo/logo_green.png" alt="" />Spotify
          <span>．156人按讚．50首歌曲,大約25分鐘</span>
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
      <!-- <Player :currentPlay="url" /> -->
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
import HomeNavbar from "../components/HomeNavbar.vue";
import { getPlaylistItems } from "../api/spotify";
import { onMounted, ref } from "vue";
import { dateToRelative } from "../utils/date";
import { useRoute } from "vue-router";
import { useNameStore } from "../stores/name";
// import { usePlayStore } from "../stores/play";
import router from "../router";
// import Player from "./Player.vue";

const nameStore = useNameStore();
// const playStore = usePlayStore();
const route = useRoute();
const playlistItems = ref([]);
const url = ref();

const currentMusic = ref();

const setCurrentMusic = (url) => {
  currentMusic.value = url;
};

onMounted(async () => {
  const response = await getPlaylistItems(route.params.id);
  console.log(response.items);
  playlistItems.value = response.items;
});

// const getPlayer = (item) => {
//   playStore.isPlayingName = item.track.artists[0].name;
//   playStore.isPlayingSong = item.track.name;
//   playStore.isPlayingImg = item.track.album.images[2].url;
//   playStore.previewUrl = item.track.preview_url;
//   url.value = item.track.preview_url;
//   console.log(playStore.previewUrl);
//   // router.replace({ name: "player", params: { id: item.track.id } });
// };
</script>
<style scoped>
.albums {
  height: 88%;
  overflow: auto;
  white-space: wrap;
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
  max-width: 100%;
  width: 25%;
  height: 25%;
  margin: 30px 0 0 20px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
}
.albumInfo {
  margin: 100px 0 0 30px;
  line-height: 0px;
}
.albumInfo img {
  width: 30px;
}
.albumList {
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
}
.albumTitle {
  font-size: 60px;
  font-weight: bold;
  margin: 55px 0;
}
.albumContent {
  color: #cfd4d9;
  font-size: 14px;
  width: 90%;
  word-wrap: break-word;
  line-height: 20px;
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
