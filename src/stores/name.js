import { defineStore } from "pinia";
import { ref } from "vue";

export const useNameStore = defineStore("names", () => {
  const names = ref("");
  const title = ref("");
  const describe = ref("");
  const image = ref("");

  return {
    names,
    title,
    describe,
    image,
  };
});
