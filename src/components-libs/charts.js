// 基础柱状图
export const basicHistogram = {
  type: 'basicHistogram',
  typeName: '基础柱状图',
  active: false,
  boxWidth: 300,
  boxHeight: 200,
  boxLeft: 100,
  boxTop: 150,
  spacing: 0.5,
  filletRadius: 0,
  filletPosition: '顶部',
  dataOptions: {
    type: '静态数据',
    mapping: { x: 'x', y: 'y' },
    data: [{ x: '一月', y: 80 }, { x: '二月', y: 50 }, { x: '三月', y: 160 }, { x: '四月', y: 120 }, { x: '五月', y: 40 }]
  }
}

// 基础条形图
export const basicBarChart = {
  type: 'basicBarChart',
  typeName: '基础条形图',
  active: false,
  boxWidth: 300,
  boxHeight: 200,
  boxLeft: 810,
  boxTop: 440,
  spacing: 0.5,
  filletRadius: 0,
  filletPosition: '顶部',
  dataOptions: {
    type: '静态数据',
    mapping: { x: 'x', y: 'y' },
    data: [{ x: '一月', y: 80 }, { x: '二月', y: 50 }, { x: '三月', y: 160 }, { x: '四月', y: 120 }, { x: '五月', y: 40 }]
  }
}

export default {
  basicHistogram,
  basicBarChart
}