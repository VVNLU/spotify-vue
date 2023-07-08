<template>
  <template v-if="contentPages()">
    <RouterView />
  </template>
  <template v-else>
    <header class="header">
      <HomeNavbar />
    </header>
    <aside class="aside">
      <Rightbar />
    </aside>
    <TheLayout class="theLayout">
      <RouterView />
    </TheLayout>
  </template>
</template>
<script setup>
import TheLayout from "./components/TheLayout.vue";
import HomeNavbar from "./components/HomeNavbar.vue";
import Rightbar from "./components/Rightbar.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const contentPages = () => {
  const pageArray = [
    "premium",
    "login",
    "register",
    "forgetpassword",
    "support",
    "profileEdit",
    "player",
  ];
  const result = pageArray.includes(route.name);
  return result;
};
</script>
<style scoped>
* {
  position: relative;
  background-color: #000;
}
.header {
  position: fixed;
  top: 0;
  right: 0;
  width: 77%;
  z-index: 1;
}
.aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 23%;
  height: 100%;
}
.theLayout {
  position: fixed;
  right: 0;
  top: 9.7%;
  width: 77%;
  height: 100%;
}
@media (max-width: 1400px) {
  .theLayout {
    top: 15.8%;
  }
}
</style>
