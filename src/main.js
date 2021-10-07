import {createApp} from 'vue';

import { createStore } from 'vuex'
 
const store = createStore({
  state () {},
  mutations: {}
})

import App from './App.vue';
import './index.css'

const app = createApp(App);
app.use(store);
app.mount('#app');

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.unmount();
  });
}