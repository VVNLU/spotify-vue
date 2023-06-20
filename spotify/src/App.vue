<template>
  <template v-if="$route.name === 'home'">
    <header class="header">
      <HomeNavbar />
    </header>
    <aside class="rightBar">
      <Rightbar />
    </aside>
    <TheLayout>
      <RouterView />
    </TheLayout>
  </template>
  <template v-else>
    <router-view></router-view>
  </template>
</template>
<script setup>
import TheLayout from "./components/TheLayout.vue";
import HomeNavbar from "./components/HomeNavbar.vue";
import Rightbar from "./components/Rightbar.vue";
</script>
<style scoped>
* {
  position: relative;
}
.header {
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  z-index: 1;
}
.rightBar {
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  width: 20%;
  height: 100vh;
  z-index: 2;
}
</style>
