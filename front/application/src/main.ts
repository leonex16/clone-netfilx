import { createApp } from "vue";

import { router } from "./router/routes";
import App from "./App.vue";

import "./main.scss";

const app = createApp(App).use(router);

app.mount("#app");
