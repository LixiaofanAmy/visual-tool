import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    visualName: '测试',
    components: [],
    timeline: [[]],
    current: 0,
    limit: 1000,
    currentComponent: {}
  },
  mutations: {
    // 撤销
    revoke (state) {
      state.current = state.current - 1
      state.components = JSON.parse(JSON.stringify(state.timeline[state.current]))
    },
    // 重做
    redo (state) {
      state.current = state.current + 1
      state.components = JSON.parse(JSON.stringify(state.timeline[state.current]))
    },
    // 操作时间线
    changeTimeline (state) {
      state.timeline = state.timeline.slice(0, state.current + 1)
      state.timeline.push(JSON.parse(JSON.stringify(state.components)))
      state.timeline = state.timeline.slice(-state.limit)
      state.current = state.timeline.length - 1
    },
    // 添加组件
    addComponent (state, component) {
      state.components.push(component)
      this.commit('changeTimeline')
    },
    // 设置当前组件
    changeCurrentComponent (state, component) {
      state.currentComponent = component
    },
    // 设置组件盒子宽度
    changeBoxWidth (state, value) {
      state.currentComponent.boxWidth = value
    },
    // 设置组件盒子高度
    changeBoxHeight (state, value) {
      state.currentComponent.boxHeight = value
    },
    // 设置组件盒子距左距离
    changeBoxLeft (state, value) {
      state.currentComponent.boxLeft = value
    },
    // 设置组件盒子距上距离
    changeBoxTop (state, value) {
      state.currentComponent.boxTop = value
    }
  },
  actions: {
  },
  modules: {
  }
})
