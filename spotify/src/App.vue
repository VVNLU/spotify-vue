<template>
  <!-- <template v-if="$route.name === 'home'"> -->
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
<script setup>
import TheLayout from "./components/TheLayout.vue";
import HomeNavbar from "./components/HomeNavbar.vue";
import Rightbar from "./components/Rightbar.vue";
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
  margin: 0;
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
</style>
