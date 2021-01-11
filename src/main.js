import Vue from 'vue';
import vueNumeralFilterInstaller from 'vue-numeral-filter';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(vueNumeralFilterInstaller, { locale: 'pl' });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

Vue.filter('validateCalc', (value, modifier) => {
  value = parseInt(value, 10);
  if (value < 1 || Number.isNaN(value)) {
    value = 1;
    return value;
  }
  switch (modifier) {
    case 'number':
      if (value > 1000000) {
        value = 1000000;
      }
      break;
    case 'percentage':
      if (value > 100) {
        value = 100;
      }
      break;
    default:
      console.error(`Cannot validate value: ${value}`);
  }
  return value;
})
