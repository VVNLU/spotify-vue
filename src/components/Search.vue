<template>
  <HomeNavbar />
  <div class="searchBar">
    <div class="browseAll">瀏覽全部</div>
    <div class="browseBox" v-for="category in categories">
      <div class="getGenre" @click="getGenre(category)">
        <img :src="category.icons[0].url" class="categoryImg" />
        <span class="browseContent">{{ category.name }}</span>
      </div>
    </div>
    <FooterOthers style="background-color: transparent" />
  </div>
</template>
<script setup>
import HomeNavbar from "../components/HomeNavbar.vue";
import FooterOthers from "../components/FooterOthers.vue";
import { onMounted, ref } from "vue";
import { getCategories } from "../api/spotify";
import router from "../router";
import { useNameStore } from "../stores/name";

const nameStore = useNameStore();
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

const getGenre = (category) => {
  nameStore.names = category.name;
  router.replace({ name: "genre", params: { id: category.id } });
};
</script>
<style>
.searchBar {
  padding: 0 20px;
  height: 88%;
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
  font-size: 26px;
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
