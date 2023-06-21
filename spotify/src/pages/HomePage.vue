<template>
  <HomeContent v-if="$route.name === 'home'" />
  <HomeAlbum v-else />
</template>
<script setup>
import HomeContent from "../components/HomeContent.vue";
import HomeAlbum from "../components/HomeAlbum.vue";
</script>
<style scoped></style>
