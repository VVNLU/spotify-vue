<template>
  <div class="sidebar">
    <div class="topbar">
      <div class="routerBtn homeRouter">
        <router-link to="/">
          <a class="action-label icon">
            <i class="mdi mdi-home-variant-outline"></i
          ></a>
          <span class="searchTitle">首頁</span></router-link
        >
      </div>
      <div class="routerBtn searchRouter">
        <router-link to="search">
          <a class="action-label icon"><i class="mdi mdi-magnify"></i></a>
          <span class="searchTitle">搜尋</span>
        </router-link>
      </div>
    </div>
    <div class="bottombar">
      <div class="favorMusic">
        <a class="action-label icon">
          <i class="mdi mdi-music-box-multiple-outline"></i></a
        ><span>你的音樂庫</span
        ><a class="action-label icon"> <i class="mdi mdi-plus"></i></a>
      </div>
      <div class="musicboxLists">
        <div class="createlists">
          <p class="createTitle">建立你的第一個播放清單</p>
          <p class="createContent">這很簡單,我們會幫你</p>
          <button class="createBtn" @click="getSpotifyToken()">
            建立播放清單
          </button>
        </div>
        <div class="createlists">
          <p class="createTitle">不妨專注一些Podcast</p>
          <p class="createContent">我們會在新單即推出時通知你</p>
          <button class="createBtn">瀏覽Podcast</button>
        </div>
      </div>
      <div class="legalList">
        <a href="https://www.spotify.com/tw/legal/end-user-agreement/"
          >法律條款</a
        >
        <a href="https://www.spotify.com/tw/privacy">隱私權中心</a>
        <a href="https://www.spotify.com/tw/legal/privacy-policy/">隱私政策</a
        ><br />
        <a href="https://www.spotify.com/tw/legal/privacy-policy/">Cookie</a>
        <a href="https://www.spotify.com/tw/legal/privacy-policy/">關於廣告</a>
        <a href="https://www.spotify.com/tw/accessibility">無障礙</a><br />
        <a href="https://www.spotify.com/tw/accessibility" class="cookie"
          >Cookie</a
        >
      </div>
      <div class="translateBtn">
        <button>
          <a class="action-label icon"> <i class="mdi mdi-web"></i></a>中文
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { getAccessToken } from "../api/auth";

const getSpotifyToken = async () => {
  await getAccessToken();
};
</script>

<style scoped>
.sidebar {
  height: 98%;
  margin: 2.5%;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
a {
  text-decoration: none;
  color: grey;
}
.topbar {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #121212;
  border-radius: 10px;
  height: 15%;
  width: 22%;
}
.routerBtn > a {
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.searchTitle {
  margin-left: 15px;
}
.bottombar {
  position: fixed;
  display: grid;
  grid-template-rows: repeat (5 1fr);
  background-color: #121212;
  border-radius: 10px;
  top: 18%;
  width: 22%;
  height: 81.5%;
}
.favorMusic {
  color: grey;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.createlists {
  background-color: #242424;
  border-radius: 10px;
  padding: 10px 0 20px 20px;
  margin: 0 10px 25px 10px;
}
.createContent {
  font-size: 14px;
}
.createBtn {
  height: 35px;
  width: 120px;
  border-radius: 50px;
  border: none;
  font-weight: bold;
}
.legalList {
  grid-row: 3/4;
}
.legalList > a {
  font-weight: normal;
  font-size: 12px;
  padding: 10px;
  line-height: 30px;
}
.cookie:hover {
  text-decoration: underline;
}
.translateBtn {
  grid-row: 5/5;
  padding-left: 10px;
}
.translateBtn > button {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: white;
  border-radius: 50px;
  border: white 1px solid;
  background-color: transparent;
  padding: 5px 15px;
}
.translateBtn i {
  color: white;
  font-size: 25px;
}
@media (max-width: 1280px) {
  .musicboxLists {
    height: 150px;
    overflow: auto;
    white-space: nowrap;
  }
}
::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #5a5a5a;
}
</style>
