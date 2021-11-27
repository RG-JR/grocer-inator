import { createRouter, createWebHashHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import Details from "../views/Details.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/:pathname",
    name: "Details",
    component: Details,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
