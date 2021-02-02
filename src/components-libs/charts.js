// 基础柱状图
export const basicHistogram = {
  type: 'basicHistogram',
  zIndex: 0,
  boxWidth: 300,
  boxHeight: 200,
  boxLeft: 810,
  boxTop: 440,
  spacing: 0.5,
  filletRadius: 0,
  filletPosition: '顶部',
  dataOptions: {
    type: '静态数据',
    mapping: {x: 'x', y: 'y'},
    data: [{x: 80, y: '一月'}, {x: 50, y: '二月'}, {x: 160, y: '三月'}, {x: 120, y: '四月'}, {x: 40, y: '五月'}]
  }
}

// 基础条形图
export const basicBarChart = {
  type: 'basicBarChart',
  zIndex: 0,
  boxWidth: 300,
  boxHeight: 200,
  boxLeft: 810,
  boxTop: 440,
  spacing: 0.5,
  filletRadius: 0,
  filletPosition: '顶部',
  dataOptions: {
    type: '静态数据',
    mapping: {x: 'x', y: 'y'},
    data: [{x: 80, y: '一月'}, {x: 50, y: '二月'}, {x: 160, y: '三月'}, {x: 120, y: '四月'}, {x: 40, y: '五月'}]
  }
}

export default {
  basicHistogram,
  basicBarChart
}