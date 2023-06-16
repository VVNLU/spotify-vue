<template>
  <div class="navbar">
    <div class="logo">
      <router-link to="/"
        ><img src="../assets/logo/logo.png" alt=""
      /></router-link>
    </div>
    <div class="connect">
      <router-link to="premium">Premium</router-link>
      <router-link to="support">支援</router-link>
      <router-link to="">下載</router-link>
      <span>｜</span>
      <router-link to="register">註冊</router-link>
      <router-link to="login">登入</router-link>
    </div>
  </div>
</template>
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
.logo {
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
a,
span {
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
