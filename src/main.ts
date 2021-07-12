import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
//import store from "./store";

import "@/assets/css/tailwind.css";

//.use(store)
createApp(App).use(router)
  .use(router)
  .mount("#app");
