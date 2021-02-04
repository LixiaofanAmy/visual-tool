<template>
  <div class="edit">
    <func-button></func-button>
    <box-attributes></box-attributes>
    <layer-tool></layer-tool>
    <canvas-panel></canvas-panel>
  </div>
</template>

<script>
import FuncButton from './components/FuncButton'
import BoxAttributes from './components/BoxAttributes'
import LayerTool from './components/LayerTool'
import CanvasPanel from './components/CanvasPanel'
export default {
  name: 'edit',
  components: {
    FuncButton,
    BoxAttributes,
    LayerTool,
    CanvasPanel
  }
}
</script>

<style scoped>
</style>