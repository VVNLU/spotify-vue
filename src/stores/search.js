import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  const notes = ref();
  const searchTerm = ref("");

  const results = computed(() => {
    if (searchTerm.value === "") {
      return notes.value;
    } else {
      return notes.value.filter((note) => {
        return note.title.includes(searchTerm.value);
      });
    }
  });

  return {
    notes,
    searchTerm,
    results,
  };
});
