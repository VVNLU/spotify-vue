import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "@mdi/font/css/materialdesignicons.css";
import { faker } from "@faker-js/faker";

const app = createApp(App);

app.use(faker);
app.use(router);
app.mount("#app");
