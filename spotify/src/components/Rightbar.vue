<template>
  <div class="rightbar">
    <div class="logo"><img src="../assets/logo/logo.png" alt="" /></div>
    <div class="navbarList">
      <router-link to="/">
        <a class="action-label icon">
          <i class="mdi mdi-home-variant-outline"></i></a
        ><span>首頁</span></router-link
      >
      <router-link to="">
        <a class="action-label icon"> <i class="mdi mdi-magnify"></i></a
        ><span>搜尋</span>
      </router-link>
      <router-link to="">
        <a class="action-label icon">
          <i class="mdi mdi-music-box-multiple-outline"></i></a
        ><span>你的音樂庫</span></router-link
      >
      <br />
      <router-link to="">
        <a class="action-label icon">
          <i class="mdi mdi-plus-box-multiple-outline"></i></a
        ><span>建立播放清單</span>
      </router-link>
      <router-link to="">
        <a class="action-label icon"> <i class="mdi mdi-heart-outline"></i></a
        ><span>已按讚的歌曲</span>
      </router-link>
    </div>
    <br />
    <div class="legalList">
      <router-link to="">法律條款</router-link>
      <router-link to="">隱私權中心</router-link><br /><br />
      <router-link to="">隱私政策</router-link>
      <router-link to="">Cookie</router-link>
      <router-link to="">關於廣告</router-link><br /><br />
      <router-link to="">無障礙</router-link><br /><br />
      <router-link to="">Cookie</router-link>
    </div>
  </div>
</template>
<style sceoped>
.rightbar {
  display: grid;
  grid-template-rows: repeat (25, 50px);
  background-color: #000;
  width: 100%;
  height: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.logo {
  grid-row: 1/1;
}
img {
  width: 130px;
  margin: 20px;
}
.navbarList {
  grid-row: 2/2;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 14px;
}
.navbarList > a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: grey;
  margin: 5px 20px;
}
.navbarList span {
  margin-left: 15px;
}
.navbarList a:hover {
  color: white;
}
.legalList {
  grid-row: 20/25;
}
.legalList > a {
  font-size: 12px;
  text-decoration: none;
  color: grey;
  margin-left: 20px;
}
</style>
