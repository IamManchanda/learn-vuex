import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js';
import value from './modules/value.js';

Vue.use(Vuex);

export const store = new Vuex.Store({ 
  modules: { counter, value } 
});
