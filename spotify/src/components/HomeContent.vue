<template>
  <div class="content">
    <div class="focus" v-for="n in 3">
      <div class="title">專注</div>
      <div class="musicBox" v-for="n in 4">
        <a class="action-label icon"><i class="mdi mdi-play-circle"></i></a>
        <img src="../assets/album/peacefulPiano.png" alt="peaceful piano" />
        <span class="musicTitle">Peaceful Piano</span>
        <span class="musicContent">
          Peaceful piano to help you slow down, breathe, and relax.
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  color: white;
  background-image: linear-gradient(to bottom, #1f1f1f, #000000);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.focus {
  margin: 10px 0 0 25px;
}
.title {
  font-size: 24px;
}
img {
  border-radius: 5px;
  width: 85%;
}
.musicBox {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 200px;
  height: 300px;
  background-color: #181818;
  border-radius: 10px;
}
i {
  position: absolute;
  top: 130px;
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
.musicTitle {
  font-weight: bold;
  /* text-indent: 20px; */
}
.musicContent {
  margin-top: 10px;
  width: 170px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: grey;
  font-size: 14px;
}
</style>
