<template>
  <div ref="echartsBar" class="echarts-bar" :style="styleoptions"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'EchartsBar',
  props: ['component'],
  computed: {
    styleoptions () {
      return {
        width: this.component.boxWidth + 'px',
        height: this.component.boxHeight + 'px'
      }
    }
  },
  watch: {
    styleoptions () {
      this.echartsBar.resize()
    }
  },
  mounted () {
    this.echartsBar = echarts.init(this.$refs.echartsBar)
    let xAxisData = []
    let seriesData = []
    for (let i = 0; i < this.component.dataOptions.data.length; i++) {
      xAxisData.push(this.component.dataOptions.data[i].x)
      seriesData.push(this.component.dataOptions.data[i].y)
    }
    var option = {
      xAxis: {
          data: xAxisData
      },
      yAxis: {},
      series: [{
          type: 'bar',
          data: seriesData
      }],
      grid: { top: '20px', left: '30px', right: '20px', bottom: '20px' }
    }
    this.echartsBar.setOption(option);
  }
}
</script>

<style scoped>
.echarts-bar {
  width: 100%;
  height: 100%;
}
</style>