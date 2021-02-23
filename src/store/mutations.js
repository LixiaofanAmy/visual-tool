import basicHistogram from './mutations/basicHistogram'
import basicLineChart from './mutations/basicLineChart'
import basicPieChart from './mutations/basicPieChart'
const mutations = {
  // 撤销
  revoke(state) {
    state.current = state.current - 1
    state.components = JSON.parse(JSON.stringify(state.timeline[state.current]))
    state.currentIndex = state.components.length - 1
    this.commit('renderEcharts')
  },
  // 重做
  redo(state) {
    state.current = state.current + 1
    state.components = JSON.parse(JSON.stringify(state.timeline[state.current]))
    state.currentIndex = 0
    this.commit('renderEcharts')
  },
  // 操作时间线
  changeTimeline(state) {
    if (state.timer) clearTimeout(state.timer)
    state.timer = setTimeout(() => {
      state.timeline = state.timeline.slice(0, state.current + 1)
      let components = JSON.parse(JSON.stringify(state.components))
      state.timeline.push(components)
      state.timeline = state.timeline.slice(-state.limit)
      state.current = state.timeline.length - 1
    }, 100)
  },
  // 添加组件
  addComponent(state, component) {
    state.components.unshift(component)
    this.commit('changeBoxActivated', 0)
    this.commit('changeTimeline')
  },
  // 设置组件层级
  changeComponents(state, components) {
    state.components = components
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
  },
  // 设置ehcarts对象
  setEcharts (state, echarts) {
    state.echarts[echarts.id] = echarts.echartsBar
  },
  // 删除echarts中对象
  delEcharts (state, id) {
    delete state.echarts[id]
  },
  // echarts重新渲染
  renderEcharts (state) {
    if (state.currentIndex < 0) return
    const curComponent = state.components[state.currentIndex]
    if (curComponent.type) {
      this.commit(`set${curComponent.type}`)
    }
  },
  ...basicHistogram,
  ...basicLineChart,
  ...basicPieChart,
  
}

export default mutations