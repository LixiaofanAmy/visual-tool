<template>
  <div class="canvas-body">
    <vue-ruler-tool v-model="presetLine" :parent="true">
      <canvas-panel></canvas-panel>
    </vue-ruler-tool>
  </div>
</template>

<script>
import VueRulerTool from 'vue-ruler-tool'
import CanvasPanel from './CanvasPanel'
export default {
  name: 'CanvasBody',
  components: {
    VueRulerTool,
    CanvasPanel
  },
  data () {
    return {
      presetLine: [{ type: 'h', site: 200 }, { type: 'v', site: 100 }]
    }
  }
}
</script>

<style scoped>
.canvas-body {
  width: 1938px;
  height: 1098px
}
</style>