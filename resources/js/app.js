require('./bootstrap');
import { App, plugin } from '@inertiajs/inertia-vue'
import {Main} from 'salam-js'
import Vue from 'vue'
Vue.prototype.$route = route

require('./bootstrap');
Vue.use(plugin)
Vue.component('main-layout', Main.default)

const el = document.getElementById('app')

new Vue({
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: name => require(`./Pages/${name}`).default,
    },
  }),
}).$mount(el)