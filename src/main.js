import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "@mdi/font/css/materialdesignicons.css";
import axios from "axios";
import VueAxios from "vue-axios";
import { store } from "./stores";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.use(createPinia());
app.mount("#app");
