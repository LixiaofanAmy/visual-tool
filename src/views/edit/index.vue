<template>
  <div class="edit">
    <func-button></func-button>
    <box-attributes></box-attributes>
    <layer-tool></layer-tool>
    <canvas-body></canvas-body>
  </div>
</template>

<script>
import FuncButton from './components/FuncButton'
import BoxAttributes from './components/BoxAttributes'
import LayerTool from './components/LayerTool'
import CanvasBody from './components/CanvasBody'
export default {
  name: 'edit',
  components: {
    FuncButton,
    BoxAttributes,
    LayerTool,
    CanvasBody
  }
}
</script>

<style scoped>
.ruler-tool {
  width: 550px;
  height: 550px;
}
</style>