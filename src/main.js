import Vue from 'vue'
import App from './App.vue'
import "../src/assets/css/styles.css";
import VueNumberFormat from 'vue-number-format';

Vue.use(VueNumberFormat, {prefix: '$ ', suffix: ' COP', decimal: ',', thousand: '.', acceptNegative: false, isInteger: false })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
