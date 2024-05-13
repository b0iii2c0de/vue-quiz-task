import { createRouter, createWebHistory } from "vue-router";
import CommentPage from "@/pages/CommentPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CommentPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;