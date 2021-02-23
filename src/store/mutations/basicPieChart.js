const basicPieChart = {
  // 设置基础饼图
  setbasicPieChart (state) {
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
    const echartsBars = state.echarts[component.id]
    if (echartsBars) {
      state.echarts[component.id].setOption(option)
    }
  }
}
export default basicPieChart