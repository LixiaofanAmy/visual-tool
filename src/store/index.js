import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

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
    limit: 1000,
    // 节流定时器
    timer: null,
    // echarts组件对应的echarts对象
    echarts: {}
  },
  mutations: mutations
})
