import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    visualName: '测试',
    components: [],
    actions: [],
    revokeActions: []
  },
  mutations: {
    saveAction (state, params) {
      state.actions.push(params)
      state.revokeActions.length ? state.revokeActions = [] : null
    },
    revokeAction (state) {
      const action = state.actions.pop()
      state.revokeActions.push(action)
      this.commit(`${action.name}Revoke`, action.params)
    },
    redoAction (state) {
      const action = state.revokeActions.pop()
      state.actions.push(action)
      this.commit(action.name, action.params)
    },
    addComponent (state, component) {
      state.components.push(component)
    },
    addComponentRevoke (state) {
      state.components.pop()
    }
  },
  actions: {
  },
  modules: {
  }
})
