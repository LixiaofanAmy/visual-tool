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
    currentIndex: -1
  },
  mutations: {
    // 撤销
    revoke(state) {
      state.current = state.current - 1
      state.components = JSON.parse(JSON.stringify(state.timeline[state.current]))
    },
    // 重做
    redo(state) {
      state.current = state.current + 1
      state.components = JSON.parse(JSON.stringify(state.timeline[state.current]))
    },
    // 操作时间线
    changeTimeline(state) {
      state.timeline = state.timeline.slice(0, state.current + 1)
      state.timeline.push(JSON.parse(JSON.stringify(state.components)))
      state.timeline = state.timeline.slice(-state.limit)
      state.current = state.timeline.length - 1
    },
    // 添加组件
    addComponent(state, component) {
      component.zIndex = state.components.length
      state.components.push(component)
      state.currentIndex = state.components.length - 1
      this.commit('changeBoxState')
      this.commit('changeTimeline')
    },
    // 改变当前组件盒子状态
    changeBoxState(state) {
      for (let i = 0; i < state.components.length; i++) {
        if (i === state.currentIndex) {
          state.components[i].active = true
        } else {
          state.components[i].active = false
        }
      }
    },
    // 组件盒子被激活
    changeBoxActivated(state, index) {
      state.currentIndex = index
      this.commit('changeBoxState')
    },
    // 组件盒子被抑制
    changeBoxDeactivated(state, index) {
      state.components[index].active = false
    },
    // 设置组件盒子宽度
    changeBoxWidth(state, boxWidth) {
      state.components[state.currentIndex].boxWidth = boxWidth
    },
    // 设置组件盒子高度
    changeBoxHeight(state, boxHeight) {
      state.components[state.currentIndex].boxHeight = boxHeight
    },
    // 设置组件盒子距左距离
    changeBoxLeft(state, boxLeft) {
      state.components[state.currentIndex].boxLeft = boxLeft
    },
    // 设置组件盒子距上距离
    changeBoxTop(state, boxTop) {
      state.components[state.currentIndex].boxTop = boxTop
    }
  },
  actions: {
  },
  modules: {
  }
})
