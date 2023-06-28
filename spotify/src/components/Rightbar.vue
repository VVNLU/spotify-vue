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
          <button class="createBtn">建立播放清單</button>
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
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  height: 85%;
  position: relative;
}
.topbar {
  border-radius: 10px;
  background-color: #121212;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  margin: 10px;
  padding: 15px;
}
.homeRouter,
.routerBtn > a {
  text-decoration: none;
  color: #b3b3b3;
  display: flex;
  align-items: center;
}
.searchTitle {
  margin: 0 0 0 15px;
}
.bottombar {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #121212;
  border-radius: 10px;
  margin: 10px;
  height: 100%;
}
.favorMusic {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #b3b3b3;
  font-weight: bold;
}
@media (min-height: 500px) {
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

.createlists {
  margin: 10px;
  border-radius: 10px;
  color: white;
  background-color: #242424;
  padding: 5px 0 20px 20px;
}
.createTitle {
  font-weight: bold;
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
.createBtn:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.legalList {
  position: absolute;
  margin: 10px;
  line-height: 2em;
  bottom: 30px;
}
.legalList > a {
  font-size: 12px;
  text-decoration: none;
  color: grey;
  margin-left: 20px;
}
.cookie:hover {
  text-decoration: underline 1px;
}
</style>
