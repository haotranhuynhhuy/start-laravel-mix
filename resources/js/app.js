import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "../css/app.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "../views/router/index.js";
import "ant-design-vue/dist/antd.css";
import { Menu, List, Drawer, Button, message } from "ant-design-vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.mount("#app");
app.config.globalProperties.$message = message;
