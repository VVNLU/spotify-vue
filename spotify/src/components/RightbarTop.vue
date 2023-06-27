<template>
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
</template>
<style scoped>
.topbar {
  height: 100px;
  background-color: #121212;
  border-radius: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  margin: 10px;
  padding: 20px 0 0 20px;
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
</style>
