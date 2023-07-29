import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayStore = defineStore("play", () => {
  const isPlayingName = ref("");
  const isPlayingSong = ref("");
  const isPlayingImg = ref("");
  const tracks = ref("");
  const previewUrl = ref("");

  return {
    isPlayingName,
    isPlayingSong,
    isPlayingImg,
    tracks,
    previewUrl,
  };
});
