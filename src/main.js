import {createApp} from 'vue';

import { createStore } from 'vuex'

import App from './App.vue';
import './index.css'

import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.61/dist/');

const store = createStore({
  state () {},
  mutations: {}
})

const app = createApp(App);

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('sl-');

app.use(store);
app.mount('#app');