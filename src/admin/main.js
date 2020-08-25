import Vue from 'vue';
import App from './App.vue'
import router from "./router";
import VueSimpleValidator from "simple-vue-validator";
import store from "./store";

Vue.use(VueSimpleValidator, { mode: 'manual' });

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});