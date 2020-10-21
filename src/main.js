import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
// import "bulma/css/bulma.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

require("@/assets/main.scss");

library.add(faSquare, faCheckSquare);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
