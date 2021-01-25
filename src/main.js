import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import VueRouter from "vue-router";
import Dashboard from "./pages/Dashboard.vue";
import SortLists from "./pages/sortLists.vue";
import AddList from "./components/AddList.vue";
import CompletedItems from "./pages/CompletedItems.vue";
import "bulma/css/bulma.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faListUl as fasListUl } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck as fasCheck } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as farCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faPlus as fasPlus } from "@fortawesome/free-solid-svg-icons";
import { faFilter as fasFilter } from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrash as fasTrash } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown as fasAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VCalendar from "v-calendar";

require("@/assets/main.scss");

library.add(
  farCircle,
  farCheckCircle,
  fasFilter,
  fasPlus,
  fasCheck,
  fasBookmark,
  fasListUl,
  fasTrash,
  fasAngleDown
);

Vue.use(VueRouter);
Vue.use(VCalendar, {
  componentPrefix: "vc" // Use <vc-calendar /> instead of <v-calendar />
  // ...other defaults
});

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Dashboard },
  { path: "/sort", name: "sort", component: SortLists },
  { path: "/add", name: "add", component: AddList },
  { path: "/completed", name: "completed", component: CompletedItems }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
