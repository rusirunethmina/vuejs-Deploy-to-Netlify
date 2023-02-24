import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faLeaf,
  faCartShopping,
  faRightFromBracket,
  faHeart,
  faMagnifyingGlass,
  faPlus,
  faMinus,
  faTrash,
  faUser,
  faKey,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import "leaflet/dist/leaflet.css";

library.add(
  faBars,
  faLeaf,
  faCartShopping,
  faRightFromBracket,
  faHeart,
  faHeartOutline,
  faMagnifyingGlass,
  faPlus,
  faMinus,
  faTrash,
  faUser,
  faKey,
  faAt
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
