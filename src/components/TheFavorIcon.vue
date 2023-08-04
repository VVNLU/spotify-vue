<template>
  <a class="action-label icon"
    ><i
      @click="addFavor()"
      :class="isFavor ? 'mdi mdi-heart' : 'mdi mdi-heart-outline'"
    ></i
  ></a>
</template>
<script setup>
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore/lite";
import { auth, db } from "../firebase/index";
import { ref } from "vue";

const props = defineProps(["isFavor", "trackID"]);
const favorDB = collection(db, "favorite");
const user = auth.currentUser;
const uid = user.uid;
const isFavor = ref(props.isFavor);

const addFavor = async () => {
  isFavor.value = !isFavor.value;
  if (isFavor.value) {
    await addDoc(favorDB, {
      userID: uid,
      trackID: props.trackID,
    });
  } else {
    const q = query(
      favorDB,
      where("userID", "==", uid),
      where("trackID", "==", props.trackID)
    );
    const favor = await getDocs(q);
    await deleteDoc(doc(db, "favorite", favor.docs[0].id));
  }
};
</script>
<style scoped>
.mdi-heart {
  color: #1ed760;
}
</style>
