import { createRouter, createWebHistory } from "vue-router";
import admin from "../router/admin";

const routes = [...admin];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
