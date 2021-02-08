// 基础柱状图
export const basicHistogram = {
  type: 'basicHistogram',
  typeName: '基础柱状图',
  active: false,
  boxWidth: 300,
  boxHeight: 200,
  boxLeft: 0,
  boxTop: 0,
  seriesType: 'bar',
  spacing: 0.5,
  dataOptions: {
    type: '静态数据',
    mapping: { x: 'x', y: 'y' },
    data: [{ x: '一月', y: 80 }, { x: '二月', y: 50 }, { x: '三月', y: 160 }, { x: '四月', y: 120 }, { x: '五月', y: 40 }]
  }
}

// 基础折线图
export const basicLineChart = {
  type: 'basicLineChart',
  typeName: '基础折线图',
  active: false,
  boxWidth: 300,
  boxHeight: 200,
  boxLeft: 300,
  boxTop: 0,
  seriesType: 'line',
  spacing: 0.5,
  dataOptions: {
    type: '静态数据',
    mapping: { x: 'x', y: 'y' },
    data: [{ x: '二月', y: 50 }, { x: '三月', y: 160 }, { x: '四月', y: 120 }, { x: '五月', y: 40 }]
  }
}

// 基础饼状图
export const basicPieChart = {
  type: 'basicPieChart',
  typeName: '基础饼状图',
  active: false,
  boxWidth: 300,
  boxHeight: 200,
  boxLeft: 600,
  boxTop: 0,
  seriesType: 'pie',
  spacing: 0.5,
  dataOptions: {
    type: '静态数据',
    mapping: { x: 'x', y: 'y' },
    data: [{ x: '二月', y: 50 }, { x: '三月', y: 160 }, { x: '四月', y: 120 }, { x: '五月', y: 40 }]
  }
}

export default {
  basicHistogram,
  basicLineChart,
  basicPieChart
}