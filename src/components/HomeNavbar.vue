<template>
  <div class="navbar">
    <div class="pagingBtn">
      <a class="action-label icon">
        <i class="mdi mdi-chevron-left" @click="goBack()"></i
      ></a>
      <a class="action-label icon">
        <i class="mdi mdi-chevron-right" @click="goAhead()"></i
      ></a>
    </div>
    <div class="searchBar" v-if="$route.name === 'search'">
      <a class="action-label icon"> <i class="mdi mdi-magnify"></i></a>
      <input
        type="text"
        class="searchInput"
        id="searchInput"
        placeholder="想聽什麼？"
        v-model="searchStore.searchTerm"
      />
    </div>
    <div class="connect">
      <router-link to="premium" class="routerBar">Premium</router-link>
      <router-link to="support" class="routerBar">支援</router-link>
      <router-link to="" class="routerBar">下載</router-link>
      <span>｜</span>
      <div class="loggedIn" v-if="isLogin()">
        <span class="loginUserName" v-if="isName" :name="userName">
          {{ userName() }}</span
        >
        <button class="routerBtn" @click="isLogout">登出</button>
      </div>
      <div class="unlogin" v-else>
        <router-link to="register">註冊</router-link>
        <button class="routerBtn" @click="btn">登入</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useSearchStore } from "../stores/search";

const searchStore = useSearchStore();
const router = useRouter();

const isLogin = () => {
  return localStorage.getItem("firebaseToken") !== null;
};
const isLogout = () => {
  localStorage.clear("firebaseToken");
  localStorage.clear("token");
  localStorage.clear("username");
  router.replace("login");
};

const userName = () => {
  const result = localStorage.getItem("username");
  return result;
};

const isName = () => {
  return localStorage.getItem("username") !== null;
};

const btn = () => {
  router.replace("/login");
};

const goBack = () => {
  return router.go(-1);
};
const goAhead = () => {
  return router.go(+1);
};
</script>
<style scoped>
.navbar {
  display: grid;
  height: 10%;
  width: 100%;
  align-content: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  grid-template-columns: repeat (7, 1fr);
  background-color: #121212;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.pagingBtn {
  display: inline-flex;
  place-items: center;
  grid-column: 1/1;
  margin-left: 10px;
}
.pagingBtn i {
  display: inline-flex;
  color: #a0a0a0;
  background-color: #0a0a0a;
  border-radius: 50px;
  padding: 2px;
  font-size: 30px;
}
.searchBar {
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  height: 100%;
}
.searchBar i {
  position: absolute;
  color: white;
  left: 40px;
  font-size: 25px;
}
.searchInput {
  width: 100%;
  height: 80%;
  border: #242424 1px solid;
  border-radius: 50px;
  text-indent: 40px;
  font-size: 16px;
  background-color: #242424;
  caret-color: white;
}
.searchInput:hover {
  border: #414141 1px solid;
}
.connect {
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 8/8;
  color: white;
}
a,
.routerBar {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: gray;
  margin: 0 5px;
}
.pagingBtn a:hover,
.routerBar:hover {
  color: white;
  transform: scale(1.05);
}
.routerBtn {
  width: 90px;
  height: 40px;
  margin: 0 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  border: none;
  background: white;
}
.routerBtn:hover {
  transform: scale(1.05);
}
</style>
