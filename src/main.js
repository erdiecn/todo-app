import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import VueRouter from "vue-router";
import Dashboard from "./pages/Dashboard.vue";
import SortLists from "./pages/sortLists.vue";
import "bulma/css/bulma.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquare as farSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquare as fasSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

require("@/assets/main.scss");

library.add(fasSquare, farSquare);

Vue.use(VueRouter);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Dashboard },
  { path: "/sort", name: "sort", component: SortLists }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
