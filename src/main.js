import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import App from "./App.vue";
import vuetify from './plugins/vuetify';

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBfqU2WVY1eKq2lBUGCPamoV2qw8gxhQZU",
    libraries: "places",
    installComponents: false,
  },
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
