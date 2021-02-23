const basicLineChart = {
  // 设置基础折线图样式
  setbasicLineChart (state) {
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
    const echartsBars = state.echarts[component.id]
    if (echartsBars) {
      state.echarts[component.id].setOption(option)
    }
  }
}
export default basicLineChart