import axios from 'axios'
import { createStore } from 'vuex'


export default createStore({
  state: {
    user:[]
  },
  getters: {
    getUser:(state) => state.user
  },
  mutations: {
    SET_USER(state, payload){
      state.user = payload
    }
  },
  actions: {
    async user({commit}, searchTerm){
      try {
        const response = await axios.get(`https://api.github.com/users/${searchTerm}`);
        commit('SET_USER', response.data)
        return response
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
