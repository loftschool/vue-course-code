import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from "./pages/about";
import login from "./pages/login";

const routes = [
  {
    path: "/",
    component: about,
  },
  {
    path: "/login",
    component: login,
  },
];

export default new VueRouter({ routes });