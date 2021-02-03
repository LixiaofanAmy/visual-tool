import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    visualName: '测试',
    components: [],
    timeline: [[]],
    current: 0,
    limit: 1000
  },
  mutations: {
    revoke (state) {
      state.current = state.current - 1
      state.components = JSON.parse(JSON.stringify(state.timeline[state.current]))
    },
    redo (state) {
      state.current = state.current + 1
      state.components = JSON.parse(JSON.stringify(state.timeline[state.current]))
    },
    changeTimeline (state) {
      state.timeline = state.timeline.slice(0, state.current + 1)
      state.timeline.push(JSON.parse(JSON.stringify(state.components)))
      state.timeline = state.timeline.slice(-state.limit)
      state.current = state.timeline.length - 1
    },
    addComponent (state, component) {
      state.components.push(component)
      this.commit('changeTimeline')
    }
  },
  actions: {
  },
  modules: {
  }
})
