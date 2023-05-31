import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexPersist = new VuexPersistence({
  key: 'narabuq',
  storage: sessionStorage, 
  reducer: (state) => ({ language: state.language }),
});

export default createStore({
  state: {
    language: "en",
  },
  getters: {
  },
  mutations: {
    Language(state,data){
      state.language = data
    },
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('Language', language);
    },
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
