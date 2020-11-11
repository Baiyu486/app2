import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MyFooter from "@/components/MyFooter";
import MyHeader from "@/components/MyHeader";
import axios from "axios";

Vue.component("MyFooter",MyFooter);
Vue.component("MyHeader",MyHeader);

Vue.prototype.$http=axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
