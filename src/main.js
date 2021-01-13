import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import VueRouter from "vue-router";
import Dashboard from "./pages/Dashboard.vue";
import SortLists from "./pages/sortLists.vue";
import AddList from "./components/AddList.vue";
import "bulma/css/bulma.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faListUl as fasListUl } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck as fasCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlus as fasPlus } from "@fortawesome/free-solid-svg-icons";
import { faFilter as fasFilter } from "@fortawesome/free-solid-svg-icons";
import { faSquare as farSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquare as fasSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash as fasTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

require("@/assets/main.scss");

library.add(
  fasSquare,
  farSquare,
  fasFilter,
  fasPlus,
  fasCheck,
  fasBookmark,
  fasListUl,
  fasTrash
);

Vue.use(VueRouter);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Dashboard },
  { path: "/sort", name: "sort", component: SortLists },
  { path: "/add", name: "add", component: AddList }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
