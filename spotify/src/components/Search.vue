<template>
  <div class="searchBar">
    <div class="browseAll">瀏覽全部</div>
    <div class="browseBox" v-for="category in categories">
      <img :src="category.icons[0].url" />
      <span class="browseContent">{{ category.name }}</span>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getCategories } from "../api/spotify";

const categories = ref([]);
onMounted(async () => {
  const response = await getCategories();
  categories.value = response.categories.items;
  //categories.value = (await getCategories()).categories.items;
});
// const data2 = ref();
// axios.get("browse/categories").then(function (response) {
//   data2.value = response;
//   console.log(response);
// });
</script>
<style>
.searchBar {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #121212;
  color: white;
}
.browseAll {
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
}
.browseBox > img {
  border-radius: 5px;
  width: 80%;
}

.browseBox {
  display: inline-flex;
  flex-direction: column;
  margin: 20px;
  width: 200px;
  height: 250px;
  background-color: #181818;
  border-radius: 10px;
}
.browseBox:hover {
  background-color: #222222;
  cursor: pointer;
}
.browseContent {
  text-align: center;
  padding: 0 20px;
  color: white;
  font-weight: bold;
}
</style>
