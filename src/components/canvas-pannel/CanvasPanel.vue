<template>
  <div class="canvas-panel">
    <component-box v-for="(component, index) in components" :key="component.id" :component="component" :index="index">
      <echarts-bar :component="component"></echarts-bar>
    </component-box>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ComponentBox from './ComponentBox'
import EchartsBar from './EchartsBar'
export default {
  name: 'CanvasPanel',
  components: {
    ComponentBox,
    EchartsBar
  },
  computed: {
    ...mapState(['components'])
  }
}
</script>

<style scoped>
.canvas-panel {
  position: relative;
  width: 1920px;
  height: 1080px;
}
</style>