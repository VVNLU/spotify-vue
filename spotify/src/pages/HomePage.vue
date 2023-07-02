<template>
  <HomeContent v-if="$route.name === 'home'" />
  <RouterView v-else />
</template>
<script setup>
import HomeContent from "../components/HomeContent.vue";
</script>
<style scoped></style>
