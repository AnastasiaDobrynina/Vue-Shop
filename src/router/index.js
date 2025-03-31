import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Project from "@/views/Project.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/blog", component: Blog },
  { path: "/project", component: Project },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
