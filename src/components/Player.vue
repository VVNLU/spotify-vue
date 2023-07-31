<template>
  <div class="musicPlayer">
    <div class="playerLeft">
      <img :src="playStore.isPlayingImg" class="currentPic" />
      <div class="currentInfo"></div>
      <div class="currentInfo">
        <span class="currentSong">{{ playStore.isPlayingSong }}</span>
        <span class="currentSinger">{{ playStore.isPlayingName }}</span>
      </div>
      <div class="currentFavor">
        <a class="action-label icon"><i class="mdi mdi-heart-outline"></i></a>
      </div>
    </div>
    <div class="controlPanel">
      <div class="controlBtn">
        <a class="action-label icon"
          ><i class="mdi mdi-shuffle-variant shuffle"></i
        ></a>
        <a class="action-label icon"
          ><i class="mdi mdi-skip-previous skip"></i
        ></a>
        <a class="action-label icon"
          ><i
            @click="toggleIsPlaying()"
            :class="
              isPlaying
                ? 'mdi mdi-pause-circle pause'
                : 'mdi mdi-play-circle play'
            "
          ></i
        ></a>
        <a class="action-label icon"><i class="mdi mdi-skip-next skip"></i></a>
        <a class="action-label icon swap"
          ><i class="mdi mdi-swap-horizontal-variant swap"></i
        ></a>
      </div>
      <div class="controTrack">
        <a class="action-label icon"><i class="mdi mdi-minus minus"></i></a>
      </div>
    </div>
    <div class="playerRight">
      <a class="action-label icon"
        ><i class="mdi mdi-music-box-multiple-outline"></i
      ></a>
      <a class="action-label icon"
        ><i class="mdi mdi-microphone-outline"></i
      ></a>
      <a class="action-label icon"
        ><i class="mdi mdi-vector-arrange-below"></i
      ></a>
      <a class="action-label icon"><i class="mdi mdi-tablet-cellphone"></i></a>
      <a class="action-label icon"><i class="mdi mdi-volume-high"></i></a>
      <a class="action-label icon"><i class="mdi mdi-minus"></i></a>
      <a class="action-label icon"><i class="mdi mdi-arrow-expand"></i></a>
    </div>
  </div>
</template>
<script setup>
import { watch, ref } from "vue";
import { usePlayStore } from "../stores/play";

const props = defineProps(["currentPlay"]);
const playStore = usePlayStore();
const isPlaying = ref(false);
const audio = new Audio();

const getPreviewUrl = () => {
  return playStore.previewUrl;
};

const playAudio = () => {
  if (!playStore.previewUrl) {
    alert("可惜...此歌曲沒有試聽！");
    audio.src = "";
    playStore.previewUrl = "default";
    isPlaying.value = false;
    return;
  }

  if (playStore.previewUrl !== "default") {
    audio.src = playStore.previewUrl;
    isPlaying.value = true;
    audio.play();
  }
};

const toggleIsPlaying = () => {
  if (!playStore.previewUrl || playStore.previewUrl === "default") {
    alert("可惜...此歌曲沒有試聽！");
    return;
  }

  if (playStore.previewUrl && playStore.previewUrl !== "default") {
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value) {
      audio.play();
    } else {
      audio.pause();
    }
  }
};

watch(getPreviewUrl, playAudio, { immediate: true });
</script>

<style scoped>
.musicPlayer {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #000;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.playerLeft {
  display: flex;
  align-items: center;
}
.currentPic {
  height: 62px;
  border-radius: 5px;
}
.currentInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5px;
}
.currentSong {
  color: white;
  font-weight: bold;
}
.currentSinger {
  color: grey;
  font-size: 12px;
}
.currentFavor {
  display: flex;
  align-items: center;
  padding-left: 30px;
}
.currentFavor i:hover {
  color: white;
}
.controlBtn {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shuffle,
.swap {
  font-size: 20px;
  color: #4d4d4d;
}
.skip {
  color: #b3b3b3;
}
.play,
.pause {
  color: white;
  font-size: 40px;
}
.play i:hover,
.pause i:hover {
  transform: scale(1.05);
}
.playerRight {
  display: flex;
  align-items: center;
  width: 250px;
  justify-content: space-between;
}
.playerRight i {
  font-size: 20px;
  color: #a7a7a7;
}
.playerRight i:hover {
  color: white;
}
</style>
