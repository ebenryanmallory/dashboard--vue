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