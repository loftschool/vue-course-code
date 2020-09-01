import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import axios from "axios";

Vue.use(VueRouter);

import header from "./components/header";
import about from "./pages/about";
import works from "./pages/works";
import login from "./pages/login";

const routes = [
  {
    path: "/",
    components: {
      default: about,
      header: header
    },
  },
  {
    path: "/works",
    components: {
      default: works,
      header: header
    },
  },
  {
    path: "/login",
    component: login,
    meta: {
      public: true
    }
  },
];

const router = new VueRouter({ routes });

const guard = axios.create({
  baseURL: "http://localhost:8000"
});

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(route => route.meta.public);
  const isUserLoggedIn = store.getters["user/userIsLoggedIn"];

  if (isPublicRoute === false && isUserLoggedIn === false) {
    const token = localStorage.getItem("token");

    guard.defaults.headers["Authorization"] = `Bearer ${token}`;

    try {
      const response = await guard.get("/user"); 
      store.dispatch("user/login", await response.data.user)
      next();
    } catch (error) {
      router.replace("/login");
      localStorage.removeItem("token"); 
    }
  } else {
    next();
  }
});

export default router;