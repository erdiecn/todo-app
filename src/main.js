import Vue from "vue";
import App from "./App.vue";
// import "bulma/css/bulma.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquare as farSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquare as fasSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

require("@/assets/main.scss");

library.add(fasSquare, farSquare);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
