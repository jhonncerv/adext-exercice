import Vue from 'vue';
import App from './App.vue';
import VueTinySlider from 'vue-tiny-slider';

Vue.config.productionTip = false;
Vue.use(VueTinySlider);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
