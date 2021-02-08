import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 数据可视化云图名称
    visualName: '测试',
    // 活动组件数组
    components: [],
    // 活动组件索引
    currentIndex: -1,
    // 快照数组
    timeline: [[]],
    // 快照索引
    current: 0,
    // 撤销、重做保存快照最大数量
    limit: 1000
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
      let components = {...state.components}
      for (let i = 0; i < components.length; i++) {
        components[i].dataOptions = JSON.parse(JSON.stringify(components[i].dataOptions))
      }
      state.timeline.push(components)
      state.timeline = state.timeline.slice(-state.limit)
      state.current = state.timeline.length - 1
    },
    // 设置组件层级
    changeComponents(state, components) {
      state.components = components
    },
    // 添加组件
    addComponent(state, component) {
      state.components.unshift(component)
      state.currentIndex = 0
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
    },
    setEchartsObject (state, echartsObject) {
      state.components[state.currentIndex].echartsObject = echartsObject
    },
    // 设置基础柱状图样式
    setbasicHistogram (state) {
      let xAxisData = []
      let seriesData = []
      const component = state.components[state.currentIndex]
      for (let i = 0; i < component.dataOptions.data.length; i++) {
        xAxisData.push(component.dataOptions.data[i].x)
        seriesData.push(component.dataOptions.data[i].y)
      }
      let spacing = `${component.spacing*100}%`
      var option = {
        xAxis: {
            data: xAxisData
        },
        yAxis: {},
        series: [{
            type: component.seriesType,
            data: seriesData,
            barCategoryGap: spacing
        }],
        grid: { top: '20px', left: '30px', right: '20px', bottom: '20px' }
      }
      component.echartsObject.setOption(option)
    },
    // 设置基础折线图样式
    basicLineChart (state) {
      let xAxisData = []
      let seriesData = []
      const component = state.components[state.currentIndex]
      for (let i = 0; i < component.dataOptions.data.length; i++) {
        xAxisData.push(component.dataOptions.data[i].x)
        seriesData.push(component.dataOptions.data[i].y)
      }
      var option = {
        xAxis: {
            data: xAxisData
        },
        yAxis: {},
        series: [{
            type: component.seriesType,
            data: seriesData
        }],
        grid: { top: '20px', left: '30px', right: '20px', bottom: '20px' }
      }
      component.echartsObject.setOption(option)
    },
    // 设置基础饼图
    basicPieChart (state) {
      let seriesData = []
      const component = state.components[state.currentIndex]
      for (let i = 0; i < component.dataOptions.data.length; i++) {
        seriesData.push({
          name: component.dataOptions.data[i].x,
          value: component.dataOptions.data[i].y
        })
      }
      var option = {
        series: [{
            type: component.seriesType,
            data: seriesData
        }],
        grid: { top: '20px', left: '30px', right: '20px', bottom: '20px' }
      }
      component.echartsObject.setOption(option);
    },
    // 设置柱间距
    setSpacing (state, spacing) {
      state.components[state.currentIndex].spacing = spacing
      this.commit('setbasicHistogram')
    }
  },
  actions: {
  },
  modules: {
  }
})
