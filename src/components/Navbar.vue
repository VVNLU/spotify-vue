<template>
  <div class="navbar">
    <div class="navbarLogo">
      <router-link to="/"
        ><img src="../assets/logo/logo.png" alt=""
      /></router-link>
    </div>
    <div class="connect">
      <router-link to="premium">Premium</router-link>
      <router-link to="support">支援</router-link>
      <router-link to="">下載</router-link>
      <span>｜</span>
      <div class="premiunLongin" v-if="isLogin()">
        <span class="loginUserName" v-if="isName" :name="userName">
          {{ userName() }}</span
        >
        <router-link to="/" @click="isLogout">登出</router-link>
      </div>
      <div class="premiunUnlogin" v-else>
        <router-link to="register">註冊</router-link>
        <router-link to="login">登入</router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
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
</script>
<style scoped>
.navbar {
  display: grid;
  height: 80px;
  align-content: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  grid-template-columns: repeat (7, 1fr);
  background-color: #000;
}
.navbarLogo {
  grid-column: 1/1;
  margin-left: 30px;
}
img {
  width: 140px;
}
.connect {
  display: flex;
  grid-column: 8/8;
  color: white;
}
.connect a,
.connect span {
  display: inline-flex;
  text-decoration: none;
  color: white;
  margin: 15px;
  align-items: center;
}
a:hover {
  color: #1ed760;
}
/* @media screen and (max-width: 700px) {
  a,
  .router-link-active {
    font-family: "Material Icons";
    content: "mdi-menu";
  }
} */
</style>
