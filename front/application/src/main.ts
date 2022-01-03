import { createApp } from "vue";

import { router } from "./router/routes";
import App from "./App.vue";

import "./main.scss";

createApp(App)
.use(router)
.mount("#app");
