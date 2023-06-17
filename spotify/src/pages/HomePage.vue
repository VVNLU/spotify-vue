<template>
  <div class="home">
    <HomeNavbar style="grid-column: 2/4; grid-row: 1/1" />
    <Rightbar style="grid-column: 1/1; grid-row: 1/5" />
    <HomeContent style="grid-column: 2/4; grid-row: 2/5" />
  </div>
</template>
<script setup>
import HomeNavbar from "../components/HomeNavbar.vue";
import Rightbar from "../components/Rightbar.vue";
import HomeContent from "../components/HomeContent.vue";
</script>
<style scoped>
* {
  display: grid;
  grid-template-columns: repeat (auto, 100px);
  grid-template-rows: repeat (auto, 100px);
}
</style>
