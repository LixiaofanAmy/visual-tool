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
    },
    echarts () {
      return this.$store.state.echarts
    }
  },
  watch: {
    styleoptions () {
      this.$nextTick(() => {
        this.echartsBar.resize()
      })
    }
  },
  mounted () {
    this.echartsBar = echarts.init(this.$refs.echartsBar)
    this.$store.commit('setEcharts', { id: [this.component.id], echartsBar: this.echartsBar })
    switch (this.component.seriesType) {
      case 'bar':
        this.$store.commit('setbasicHistogram')
        break
      case 'line':
        this.$store.commit('setbasicLineChart')
        break
      case 'pie':
        this.$store.commit('setbasicPieChart')
        break
      default:
        break
    }
  },
  beforeDestroy () {
    this.$store.commit('delEcharts', this.component.id)
  }
}
</script>

<style scoped>
.echarts-bar {
  width: 100%;
  height: 100%;
}
</style>