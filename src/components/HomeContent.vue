<template>
  <div class="content">
    <div class="focus">
      <div class="playlistTitle">熱門清單</div>
      <div class="musicBox" v-for="item in homeCategoryPlaylists">
        <div class="getAlbum" @click="getAlbum(item)">
          <a class="action-label icon"><i class="mdi mdi-play-circle"></i></a>
          <img :src="item.images[0].url" />
          <span class="musicTitle">{{ item.name }}</span>
          <span class="musicContent">{{ item.description }}</span>
        </div>
      </div>
    </div>
    <FooterOthers class="FooterOthers" />
  </div>
</template>
<script setup>
import FooterOthers from "../components/FooterOthers.vue";
import { getHomeCategoryPlaylists } from "../api/spotify";
import { ref, onMounted } from "vue";
import router from "../router";
import { useNameStore } from "../stores/name";
// import { faker } from "@faker-js/faker";
// import { getUserTopItems } from "../api/spotify";

// const userTopItems = ref([]);
const homeCategoryPlaylists = ref([]);
const nameStore = useNameStore();

// onMounted(async () => {
//   const response = await getUserTopItems();
//   console.log(response);
//   // userTopItems.value = response;
// });

const getAlbum = (item) => {
  nameStore.title = item.name;
  nameStore.describe = item.description;
  nameStore.image = item.images[0].url;
  router.replace({ name: "album", params: { id: item.id } });
};
onMounted(async () => {
  const response = await getHomeCategoryPlaylists();
  console.log(response);
  homeCategoryPlaylists.value = response.playlists.items;
});

// const generateFakerAlbums = () => {
//   const albums = [];
//   for (let i = 1; i <= 6; i++) {
//     const image = faker.image.url({
//       height: 200,
//       width: 200,
//     });
//     const fullName = faker.person.fullName();
//     const genre = faker.music.genre();
//     albums.push({
//       image: image,
//       fullName: fullName,
//       genre: genre,
//     });
//   }
//   return albums;
// };

// const generateFakerAlbumGroups = () => {
//   const groups = [];
//   for (let x = 1; x <= 3; x++) {
//     const data = generateFakerAlbums();
//     groups.push(data);
//   }
//   return groups;
// };
// const groups = generateFakerAlbumGroups();
</script>
<style scoped>
.content {
  height: 89.3%;
  overflow: auto;
  white-space: wrap;
  color: white;
  margin: 0 10px 10px 0;
  background-image: linear-gradient(to bottom, #1d1d1d 10%, #121212);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
.focus {
  margin: 10px 0 0 25px;
}
.playlistTitle {
  font-size: 24px;
}
.musicBox {
  position: relative;
  display: inline-flex;
  margin: 15px;
  width: 200px;
  height: 280px;
  background-color: #181818;
  border-radius: 10px;
}
.musicBox img {
  border-radius: 5px;
  width: 80%;
  margin: 20px;
}
.musicBox i {
  position: absolute;
  top: 120px;
  right: 20px;
  font-size: 50px;
  display: none;
  color: #1ed760;
}
.musicBox:hover {
  background-color: #222222;
  cursor: pointer;
}
.musicBox:hover i {
  display: block;
}
.musicBox a {
  text-decoration: none;
}
.musicTitle {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  padding: 0 20px;
  color: white;
  font-weight: bold;
}
.musicContent {
  display: flex;
  padding-left: 20px;
  margin-top: 10px;
  width: 170px;
  color: grey;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.FooterOthers {
  background-color: transparent;
}
</style>
