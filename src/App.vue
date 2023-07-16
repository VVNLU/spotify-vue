<template>
  <template v-if="contentPages()">
    <RouterView />
  </template>
  <template v-else>
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
  ];
  const result = pageArray.includes(route.name);
  return result;
};
</script>
<style scoped>
.aside {
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 18.5%;
  height: 100%;
  padding: 0.5%;
}
.theLayout {
  background-color: #000;
  position: fixed;
  right: 0;
  width: 80%;
  height: 100%;
  padding: 0.5%;
}
</style>
