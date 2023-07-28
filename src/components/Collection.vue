<template>
  <HomeNavbar />
  <div class="favorSong">
    <div class="likedSong">
      <img src="../assets/album/favorIcon.png" class="favorImg" />
      <div class="likedBox">
        <p class="likedSongList">播放清單</p>
        <p class="likedSongTitle">已按讚的歌曲</p>
        <div class="likedSongInfo">
          <img src="../assets/logo/logo_green.png" alt="" />
          <span>{{ userName() }}．50首歌曲</span>
        </div>
      </div>
    </div>
    <div class="collectionList">
      <a class="action-label icon likeplayer"
        ><i class="mdi mdi-play-circle"></i
      ></a>
      <table>
        <thead>
          <tr>
            <th class="collectionIndex">#</th>
            <th class="collectionTitle">標題</th>
            <th class="collectionAlbim">專輯</th>
            <th class="collectionDate">新增日期</th>
            <th class="collectionFavor"></th>
            <th class="collectionTime">
              <a class="action-label icon"
                ><i class="mdi mdi-clock-time-three-outline collecionTime"></i
              ></a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="likedList">
            <td>
              <a class="action-label icon"
                ><i class="mdi mdi-play likedPlayerIcon"></i
              ></a>
              <p class="likeIndex">1</p>
            </td>
            <td class="likedInfo">
              <img src="" />
              <div class="likedSongName">
                修驗愛情
                <br />
                <span class="likedSingerName">林俊傑</span>
              </div>
            </td>
            <td>感爵這一刻</td>
            <td></td>
            <td>
              <a class="action-label icon"
                ><i class="mdi mdi-heart likedIcon"></i
              ></a>
            </td>
            <td>0:30</td>
          </tr>
        </tbody>
      </table>
    </div>
    <FooterOthers style="background-color: transparent" />
  </div>
</template>
<script setup>
import HomeNavbar from "./HomeNavbar.vue";
import FooterOthers from "./FooterOthers.vue";

const userName = () => {
  const result = localStorage.getItem("username");
  return result;
};
</script>
<style scoped>
.favorSong {
  height: 88%;
  overflow: auto;
  white-space: wrap;
  background: #121212;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: white;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #5a5a5a;
}
.likedBox {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 20px;
  line-height: 0;
}
.likedSongList {
  font-weight: bold;
  color: #b2b2b2;
}
.likedSong {
  background: linear-gradient(to bottom, #513b9f, #281d4d);
  display: flex;
  padding: 25px;
}
.favorImg {
  width: 25%;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
}
.likedSongTitle {
  font-size: 60px;
  font-weight: bolde;
}
.likedSongInfo {
  display: flex;
  align-items: center;
  font-weight: bold;
}
.likedSongInfo img {
  width: 30px;
}
.likeplayer {
  font-size: 65px;
  color: #1ed760;
}
.likeIndex {
  text-align: center;
}
.likedList:hover .likeIndex {
  display: none;
}
.likedPlayerIcon {
  display: none;
}
.likedIcon {
  color: #1ed760;
}
.likedList:hover .likedPlayerIcon {
  display: block;
  font-size: 20px;
  text-align: center;
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
.collectionIndex {
  width: 50px;
  text-align: center;
}

.likedList img {
  margin-right: 20px;
  width: 40px;
}

.collecionTime {
  font-size: 18px;
}

.likeIndex {
  width: 50px;
  text-align: center;
}
.collectionDate,
.collectionFavor {
  width: 100px;
}
.likedInfo {
  display: inline-flex;
  align-items: center;
}
.likedSongName {
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 18em;
}
.likedSingerName {
  color: #b3b3b3;
  font-size: 14px;
}
</style>
