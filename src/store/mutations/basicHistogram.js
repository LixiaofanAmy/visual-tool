const basicHistogram = {
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
    const echartsBars = state.echarts[component.id]
    if (echartsBars) {
      state.echarts[component.id].setOption(option)
    }
  },
  // 设置柱间距
  setSpacing (state, spacing) {
    state.components[state.currentIndex].spacing = spacing
    this.commit('setbasicHistogram')
  }
}
export default basicHistogram
