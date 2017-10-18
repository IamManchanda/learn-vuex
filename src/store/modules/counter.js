const state = {
  counter: 0
};

const getters = {
  calculationCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + ' clicks.';
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  increment: ({ commit }, payload) => { // Context
    commit('increment', payload);
  },
  decrement: ({ commit }, payload) => { // Context
    commit('decrement', payload);
  },
  asyncIncrement: ({ commit }, payload) => { // Context
    setTimeout(() => {
      commit('increment', payload.by);
    }, payload.duration);
  },
  asyncDecrement: ({ commit }, payload) => { // Context
    setTimeout(() => {
      commit('decrement', payload.by);
    }, payload.duration);
  }
};

export default {
  state, getters, mutations, actions
};
