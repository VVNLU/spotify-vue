<template>
  <div class="navbar">
    <div class="pagingBtn">
      <a class="action-label icon"> <i class="mdi mdi-chevron-left"></i></a>
      <a class="action-label icon"> <i class="mdi mdi-chevron-right"></i></a>
    </div>
    <div class="connect">
      <router-link to="premium">Premium</router-link>
      <router-link to="support">支援</router-link>
      <router-link to="">下載</router-link>
      <span>｜</span>
      <div class="unlogin" v-if="isLogin">
        <router-link to="register">註冊</router-link>
        <button @click="btn">登入</button>
      </div>
      <div class="login" v-else>
        <button>登出</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const isLogin = ref(true);

const btn = () => {
  router.replace("/login");
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
  background-color: rgba(0, 0, 0, 0.9);
}
.pagingBtn {
  display: inline-flex;
  place-items: center;
  grid-column: 1/2;
  margin-left: 20px;
}
.pagingBtn i {
  display: inline-flex;
  color: #a0a0a0;
  background-color: #0a0a0a;
  border-radius: 50px;
  padding: 2px;
}
.connect {
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 8/8;
  color: white;
}
a,
.router-link-active {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: gray;
  margin: 5px;
}
a:hover,
.router-link-active:hover {
  color: white;
  transform: scale(1.05);
}
button {
  width: 95px;
  height: 50px;
  margin: 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  border: none;
  background: white;
}
button:hover {
  transform: scale(1.05);
}
</style>
