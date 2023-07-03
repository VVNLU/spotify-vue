`
<template>
  <div class="searchBar">
    <div class="browseAll" @click="getSpotifyToken()">瀏覽全部</div>
    <div class="browseBox" v-for="category in categories">
      <router-link to="genre">
        <img :src="category.icons[0].url" class="categoryImg" />
        <span class="browseContent">{{ category.name }}</span></router-link
      >
    </div>
    <FooterOthers style="background-color: transparent" />
  </div>
</template>
<script setup>
import FooterOthers from "../components/FooterOthers.vue";
import { onMounted, ref } from "vue";
import { getCategories } from "../api/spotify";
import { getAccessToken } from "../api/auth";

const categories = ref([]);
onMounted(async () => {
  const response = await getCategories();
  categories.value = response.categories.items;
  // categories.value = (await getCategories()).categories.items;
});
// const data2 = ref();
// axios.get("browse/categories").then(function (response) {
//   data2.value = response;
//   console.log(response);
// });

const getSpotifyToken = async () => {
  await getAccessToken();
};
</script>
<style>
.searchBar {
  margin-right: 10px;
  padding: 0 20px;
  height: 89.3%;
  overflow: auto;
  white-space: wrap;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #121212;
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #5a5a5a;
}

.browseAll {
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0;
}
.categoryImg {
  border-radius: 5px;
  width: 80%;
  margin: 20px;
}

.browseBox {
  display: inline-flex;
  flex-direction: column;
  margin: 15px;
  width: 200px;
  height: 250px;
  background-color: #181818;
  border-radius: 10px;
}
.browseBox:hover {
  background-color: #222222;
  cursor: pointer;
}
.browseBox > a {
  text-decoration: none;
  text-align: center;
}
.browseContent {
  padding: 0 20px;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
</style>
